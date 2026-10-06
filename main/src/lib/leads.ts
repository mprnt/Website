// Contact form -> mprnt-backend POST {NEXT_PUBLIC_API_URL}/public/leads
// (contract from worker-be, card "[BE] Public lead endpoint for Web contact form").
// Kept free of React and Next imports so it can be unit tested with node --test.

// Server-side limits; checked here too so users see the error before submitting.
export const LIMITS = { name: 100, email: 254, message: 2000, phone: 20, company: 150, source: 50 } as const;

export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  /** Where the lead came from: 'web-contact', or 'web-business:<model id>'. */
  source: string;
  /** Honeypot. Real users never see it; bots that fill it get a fake 201. */
  website?: string;
}

export interface LeadFormInput {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  /** Model id from the "I'm interested in" select, 'unsure', or '' for general. */
  interest?: string;
  /** Human label for the chosen interest, included in the message for the sales team. */
  interestLabel?: string;
  /** Value of the hidden honeypot input. */
  website?: string;
}

export type LeadResult = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Subject and interest are folded into the message, so leave room for them.
const SUBJECT_MAX = 150;
const MESSAGE_BODY_MAX = LIMITS.message - 300;

export function validateLead(input: LeadFormInput): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!input.name || input.name.trim().length < 2) errors.name = 'Please enter your full name';
  else if (input.name.trim().length > LIMITS.name) errors.name = `Name must be ${LIMITS.name} characters or fewer`;
  if (!input.email || input.email.trim().length > LIMITS.email || !EMAIL_RE.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }
  if (!input.subject || input.subject.trim().length < 3) errors.subject = 'Please enter a subject';
  if (!input.message || input.message.trim().length < 10) {
    errors.message = 'Please enter a message (at least 10 characters)';
  } else if (input.message.trim().length > MESSAGE_BODY_MAX) {
    errors.message = `Message must be ${MESSAGE_BODY_MAX} characters or fewer`;
  }
  if (input.phone && input.phone.trim().length > LIMITS.phone) errors.phone = `Phone must be ${LIMITS.phone} characters or fewer`;
  if (input.company && input.company.trim().length > LIMITS.company) {
    errors.company = `Company must be ${LIMITS.company} characters or fewer`;
  }
  if (input.subject && input.subject.trim().length > SUBJECT_MAX) errors.subject = `Subject must be ${SUBJECT_MAX} characters or fewer`;
  return errors;
}

export function buildLeadPayload(input: LeadFormInput): LeadPayload {
  const interest = (input.interest || '').trim();
  const lines = [`Subject: ${(input.subject || '').trim()}`];
  if (interest) lines.push(`Interested in: ${input.interestLabel || interest}`);
  const payload: LeadPayload = {
    name: (input.name || '').trim(),
    email: (input.email || '').trim(),
    message: `${lines.join('\n')}\n\n${(input.message || '').trim()}`,
    source: (interest ? `web-business:${interest}` : 'web-contact').slice(0, LIMITS.source),
  };
  const phone = input.phone?.trim();
  const company = input.company?.trim();
  if (phone) payload.phone = phone;
  if (company) payload.company = company;
  if (input.website) payload.website = input.website;
  return payload;
}

const GENERIC_ERROR = 'We could not send your message. Please try again, or email us directly.';

export async function submitLead(
  payload: LeadPayload,
  apiUrl: string | undefined,
  fetchImpl: typeof fetch = fetch,
): Promise<LeadResult> {
  if (!apiUrl) return { ok: false, error: 'The contact form is not configured yet. Please email us directly.' };
  let res: Response;
  try {
    res = await fetchImpl(`${apiUrl.replace(/\/+$/, '')}/public/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    return { ok: false, error: 'Network error. Check your connection and try again.' };
  }
  if (res.ok) return { ok: true };
  if (res.status === 429) return { ok: false, error: 'Too many messages sent. Please wait a few minutes and try again.' };
  if (res.status >= 400 && res.status < 500) {
    try {
      const body = await res.json();
      const msg = body?.message ?? body?.error?.message ?? (typeof body?.error === 'string' ? body.error : undefined);
      if (typeof msg === 'string' && msg) return { ok: false, error: msg };
    } catch {
      // fall through to the generic message
    }
  }
  return { ok: false, error: GENERIC_ERROR };
}
