'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon, type IconName } from '@/components/site/Icons';
import { Reveal } from '@/components/site/Reveal';
import { PRICING, formatRupees } from '@/lib/pricing';
import { SITE } from '@/lib/site';

const BW = formatRupees(PRICING.bwPerPage);
const COLOR = formatRupees(PRICING.colorPerPage);

interface Faq {
  q: string;
  a: string;
  link?: { href: string; label: string };
}

interface Category {
  id: string;
  title: string;
  icon: IconName;
  blurb: string;
  faqs: Faq[];
}

// Answers follow what the product actually does today (the six-step flow and the
// print settings in the QR app) and what the MPRNT Terms & Privacy Policy say.
// Nothing here should promise more than those two sources.
export const CATEGORIES: Category[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    icon: 'qr',
    blurb: 'What MPRNT is and what you need before you print.',
    faqs: [
      {
        q: 'What is MPRNT?',
        a: 'MPRNT is a QR-based smart printing platform operated by Mlock Innovations LLP. Instead of queuing at a counter or handing over a USB stick, you scan an MPRNT QR code at a partner shop or an MPRNT Station, upload your file from your phone, pay online, and collect your prints.',
      },
      {
        q: 'Do I need to install an app or create an account?',
        a: 'No. MPRNT runs in your phone’s browser, and basic QR-based printing does not ask for your name, mobile number or email address.',
      },
      {
        q: 'How does printing work, step by step?',
        a: 'Six steps, all on your phone: scan the QR code, upload your document, choose your print settings, review the order, pay, and collect your pages. Printing starts as soon as your payment is confirmed, and your phone shows the job status while it runs.',
        link: { href: '/how-it-works', label: 'See the full walkthrough' },
      },
      {
        q: 'Where can I find MPRNT?',
        a: 'At partner locations that display an MPRNT QR code — stationery shops, cyber cafés, photocopy shops, colleges, libraries and offices — and at dedicated MPRNT Stations. The steps on your phone are the same for both.',
      },
      {
        q: 'Which files can I print, and how large can they be?',
        a: 'PDF, PNG and JPEG files up to 10 MB. It is worth opening the file on your phone first to check it looks right, because what you upload is what gets printed.',
      },
    ],
  },
  {
    id: 'printing',
    title: 'Printing & settings',
    icon: 'sliders',
    blurb: 'Colour, copies, page range, paper size and sides.',
    faqs: [
      {
        q: 'What print settings can I choose?',
        a: 'Colour or black & white, the number of copies, the page range, paper size (A4 or Letter), orientation, and single- or double-sided printing. Available options can differ between locations, because they depend on the printer at that shop or station.',
      },
      {
        q: 'Can I print double-sided?',
        a: 'Yes, where the printer supports it. Double-sided printing puts two pages on each sheet, so a 12-page document uses 6 sheets. You are charged per sheet, so it also costs less.',
      },
      {
        q: 'Can I print only some pages of a document?',
        a: 'Yes. Choose Custom under Page range and enter the pages you need, for example 1-3, 5. The estimated cost updates as soon as you change it.',
      },
      {
        q: 'How long will my prints take?',
        a: 'Printing usually begins the moment your payment is confirmed. The actual time depends on the number of pages and copies, the printer at that location, and any jobs already queued ahead of yours, so we do not promise a fixed time unless the location tells you one.',
      },
      {
        q: 'Can I change my order after paying?',
        a: 'No. Once an order has been sent for printing it cannot be edited or cancelled — that is why there is a review step before payment. Check the document, the settings and the total there.',
      },
      {
        q: 'Where do I collect my prints?',
        a: 'From the printer at the location you scanned: the output tray at an MPRNT Station, or the counter at a partner shop. You may be asked for your order reference. Check the pages and the number of copies before you leave.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & payment',
    icon: 'wallet',
    blurb: 'What it costs and how you pay.',
    faqs: [
      {
        q: 'How much does printing cost?',
        a: `The standard rate is ${BW} per page for black & white and ${COLOR} per page for colour. Partner locations can set their own rates, so treat those as a guide — the exact total for your order is always shown on your phone before you pay.`,
      },
      {
        q: 'How is my total calculated?',
        a: 'Sheets × copies × the per-page rate for the colour mode you picked. Double-sided printing halves the number of sheets, rounded up. The total updates live as you change your settings.',
      },
      {
        q: 'How can I pay?',
        a: 'UPI, debit and credit cards, net banking and wallets. Payment happens in the payment provider’s own secure window — MPRNT does not see or store your card number, UPI PIN or banking passwords.',
      },
      {
        q: 'Do I have to pay before printing?',
        a: 'Yes. Your order is only sent to the printer once payment has been successfully confirmed.',
      },
      {
        q: 'Do I get a receipt?',
        a: 'Your phone shows the order summary and a transaction reference once payment succeeds. Keep that reference — it is the quickest way for us to find your order if you need support or a refund.',
      },
    ],
  },
  {
    id: 'problems',
    title: 'If something goes wrong',
    icon: 'wrench',
    blurb: 'Failed prints, refunds and upload problems.',
    faqs: [
      {
        q: 'I paid but nothing printed. What should I do?',
        a: `Check the output tray or ask at the counter first. If your prints are not there, contact us at ${SITE.email.support} or ${SITE.phone.display} with your order or transaction reference and we will look into it.`,
      },
      {
        q: 'When can I get a refund?',
        a: 'Refunds are considered where payment was deducted but no order was created, where you were charged twice for the same order, where printing failed because of a technical problem with the MPRNT system or the partner shop, and where an order was cancelled before printing began. Eligibility depends on the circumstances and on whether printing has already been completed.',
        link: { href: '/terms#section-15', label: 'Read the refund terms' },
      },
      {
        q: 'My prints are wrong, or pages are missing.',
        a: 'Report it to the partner shop or to MPRNT support as soon as you can — missing pages, the wrong number of copies, blank pages, the wrong colour mode or paper size, or a clear printing defect. We review the order details before deciding on a reprint, a partial refund or another resolution. Small differences in colour or paper appearance that come from normal printing variation are not treated as defects.',
      },
      {
        q: 'Can I cancel an order?',
        a: 'Only if printing has not started yet, and only where cancelling is technically possible. Once the job reaches the printer it cannot be cancelled. If an order is cancelled before printing, a refund may apply.',
      },
      {
        q: 'My file will not upload.',
        a: 'Check that the file is under 10 MB and is a PDF, PNG or JPEG, and that your phone still has a working connection. Each scan opens a time-limited session, so if yours has expired, scan the QR code again and start over.',
      },
      {
        q: 'The QR code will not scan, or the printer looks offline.',
        a: 'Try your phone’s camera app rather than a scanner app, and make sure the whole code is in frame. If the page still does not open, or the location shows the printer as unavailable, ask the staff at that location or contact MPRNT support.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy & security',
    icon: 'shield',
    blurb: 'What happens to your document and your data.',
    faqs: [
      {
        q: 'Who can see my document?',
        a: 'Your file is processed to fulfil your print order. Where the printing is done by a partner shop, that shop receives the document and the order details it needs to print it. Partner shops are independent businesses, and MPRNT does not authorise them to use uploaded documents for anything unrelated to your order.',
      },
      {
        q: 'Is my document deleted after printing?',
        a: 'Yes. Uploaded files and temporary session data are deleted once printing is complete and they are no longer needed to provide the service. Limited records such as payment and transaction references are kept where they are needed for accounting, security, disputes or the law.',
        link: { href: '/privacy#section-6', label: 'How deletion works' },
      },
      {
        q: 'Do you need my personal details?',
        a: 'Not for basic QR-based printing. We only ask for details such as your name, email or phone number where a specific feature, a support request, a transaction or the law requires it.',
      },
      {
        q: 'Is my payment information safe?',
        a: 'Payments are handled by third-party payment providers in their own secure window. MPRNT does not request or store complete card details, UPI PINs, banking passwords or similar credentials.',
      },
      {
        q: 'Is there anything I should not upload?',
        a: 'Please avoid uploading highly sensitive or confidential documents unless printing them is genuinely necessary. You also need the right to print what you upload: copyrighted, confidential or otherwise protected material without permission, and anything unlawful, is not allowed.',
        link: { href: '/terms#section-18', label: 'Prohibited content' },
      },
    ],
  },
  {
    id: 'business',
    title: 'For businesses',
    icon: 'store',
    blurb: 'Bringing MPRNT to your shop, campus or office.',
    faqs: [
      {
        q: 'How do I bring MPRNT to my location?',
        a: `Send us a message through the contact form, or email ${SITE.email.business}. Tell us about your space and whether you already have a printer, and we will recommend a model, explain the setup and share the commercial terms.`,
        link: { href: '/contact', label: 'Contact us' },
      },
      {
        q: 'Do I have to buy an MPRNT Station?',
        a: 'No. Model 1 (Printer Integration) connects the printer you already own to the MPRNT platform — no station, kiosk or physical structure required. Models 2 and 3 are for locations that want a dedicated MPRNT Station.',
        link: { href: '/for-businesses', label: 'Compare the models' },
      },
      {
        q: 'Who keeps the printing revenue?',
        a: 'In Model 1, Model 2 Option B and Model 3 you keep the printing revenue and pay a monthly MPRNT software subscription. In Model 2 Option A (Revenue Share) MPRNT provides and runs the station, and revenue is shared at a mutually agreed percentage.',
      },
      {
        q: 'What do I need to provide?',
        a: 'At minimum: suitable space, electricity and a Wi-Fi or internet connection. With Model 1 you also provide the printer, paper and other consumables, and handle day-to-day printing operations.',
      },
      {
        q: 'How are pricing and support terms decided?',
        a: 'Pricing, subscription, maintenance, the revenue-sharing percentage, hardware specifications and support terms vary by model and are set out in the applicable commercial agreement.',
      },
    ],
  },
];

function Item({ faq, open, onToggle }: { faq: Faq; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={open}
          className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        >
          <span className={`font-semibold transition-colors ${open ? 'text-primary' : 'text-text group-hover:text-primary'}`}>
            {faq.q}
          </span>
          <span
            className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
              open ? 'bg-primary text-white rotate-180' : 'bg-surface-secondary text-text-muted group-hover:text-primary'
            }`}
          >
            <Icon name="chevron" className="w-3.5 h-3.5" />
          </span>
        </button>
      </h3>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pb-5 pr-10">
            <p className="text-text-muted leading-relaxed">{faq.a}</p>
            {faq.link && (
              <Link
                href={faq.link.href}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                {faq.link.label}
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqSections() {
  // One question open at a time, keyed by "<category>-<index>".
  const [openKey, setOpenKey] = useState<string | null>('getting-started-0');

  return (
    <>
      {/* Jump links */}
      <Reveal className="mb-12 sm:mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon name={c.icon} className="w-5 h-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-text leading-tight">{c.title}</span>
                <span className="block text-sm text-text-muted leading-snug mt-0.5">{c.blurb}</span>
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      <div className="space-y-12 sm:space-y-16">
        {CATEGORIES.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <Reveal>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon name={category.icon} className="w-5 h-5" />
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">{category.title}</h2>
              </div>
              <div className="rounded-2xl border border-border bg-surface px-5 sm:px-6 mt-5">
                {category.faqs.map((faq, i) => {
                  const key = `${category.id}-${i}`;
                  return (
                    <Item
                      key={faq.q}
                      faq={faq}
                      open={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? null : key)}
                    />
                  );
                })}
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </>
  );
}
