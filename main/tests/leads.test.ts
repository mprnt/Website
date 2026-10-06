import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LIMITS, buildLeadPayload, submitLead, validateLead } from '../src/lib/leads.ts';

const valid = { name: 'Asha Rao', email: 'asha@example.com', subject: 'Station enquiry', message: 'We would like a station on campus.' };

function fakeFetch(status: number, body?: unknown, calls: unknown[][] = []) {
  return (async (...args: unknown[]) => {
    calls.push(args);
    return new Response(body === undefined ? null : JSON.stringify(body), { status });
  }) as typeof fetch;
}

test('validateLead accepts a complete form and flags missing fields', () => {
  assert.deepEqual(validateLead(valid), {});
  const errors = validateLead({ name: 'A', email: 'nope', subject: '', message: 'short' });
  assert.deepEqual(Object.keys(errors).sort(), ['email', 'message', 'name', 'subject']);
});

test('validateLead enforces the backend length limits', () => {
  const errors = validateLead({ ...valid, name: 'x'.repeat(LIMITS.name + 1), phone: '1'.repeat(LIMITS.phone + 1), message: 'm'.repeat(LIMITS.message) });
  assert.ok(errors.name && errors.phone && errors.message);
});

test('buildLeadPayload matches the POST /public/leads contract', () => {
  const general = buildLeadPayload({ ...valid, phone: '  ', company: '' });
  assert.equal(general.source, 'web-contact');
  assert.equal('phone' in general, false);
  assert.equal('company' in general, false);
  assert.match(general.message, /^Subject: Station enquiry\n\nWe would like/);

  const business = buildLeadPayload({ ...valid, interest: 'model-2a', interestLabel: 'Model 2A · Station', company: ' Campus Copy ', phone: '+91 98765 43210' });
  assert.equal(business.source, 'web-business:model-2a');
  assert.equal(business.company, 'Campus Copy');
  assert.match(business.message, /Interested in: Model 2A · Station/);
  assert.ok(business.message.length <= LIMITS.message);
  assert.ok(business.source.length <= LIMITS.source);
});

test('buildLeadPayload passes the honeypot through only when filled', () => {
  assert.equal('website' in buildLeadPayload(valid), false);
  assert.equal(buildLeadPayload({ ...valid, website: 'spam.example' }).website, 'spam.example');
});

test('submitLead POSTs JSON to {apiUrl}/public/leads and succeeds on 201', async () => {
  const calls: unknown[][] = [];
  const payload = buildLeadPayload(valid);
  const result = await submitLead(payload, 'https://api.test/api/v1/', fakeFetch(201, { status: 'success' }, calls));
  assert.deepEqual(result, { ok: true });
  const [url, init] = calls[0] as [string, RequestInit];
  assert.equal(url, 'https://api.test/api/v1/public/leads');
  assert.equal(init.method, 'POST');
  assert.deepEqual(JSON.parse(init.body as string), payload);
});

test('submitLead surfaces the backend 400 message', async () => {
  const result = await submitLead(buildLeadPayload(valid), 'https://api.test', fakeFetch(400, { status: 'error', message: 'Validation error: "email" must be a valid email' }));
  assert.deepEqual(result, { ok: false, error: 'Validation error: "email" must be a valid email' });
});

test('submitLead handles rate limit, server error, network error and missing config', async () => {
  const p = buildLeadPayload(valid);
  const limited = await submitLead(p, 'https://api.test', fakeFetch(429, { message: 'Too many' }));
  assert.equal(limited.ok, false);
  assert.match((limited as { error: string }).error, /Too many messages/);

  const server = await submitLead(p, 'https://api.test', fakeFetch(500, { message: 'stack trace' }));
  assert.equal(server.ok, false);
  assert.doesNotMatch((server as { error: string }).error, /stack trace/);

  const offline = await submitLead(p, 'https://api.test', (async () => { throw new TypeError('fetch failed'); }) as typeof fetch);
  assert.match((offline as { error: string }).error, /Network error/);

  const unconfigured = await submitLead(p, undefined, fakeFetch(201));
  assert.match((unconfigured as { error: string }).error, /not configured/);
});
