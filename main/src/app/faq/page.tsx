'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { useState } from 'react';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I use an Mprnt kiosk?',
        a: 'Simply scan the QR code displayed on the kiosk screen with your phone camera. You\'ll be directed to a web page where you can upload your document, configure print settings, and pay securely. Your prints will be ready in about 30 seconds.',
      },
      {
        q: 'Do I need to install an app?',
        a: 'No app installation required! Mprnt works through your phone\'s web browser. Just scan the QR code and you\'re ready to print.',
      },
      {
        q: 'What file formats are supported?',
        a: 'We support PDF documents and image files (PNG, JPEG). Maximum file size is 10MB per document.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        q: 'How much does printing cost?',
        a: 'Black & white printing starts at ₹2 per page, and color printing starts at ₹8 per page. Exact pricing may vary by location and is displayed before you confirm your order.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept UPI (GPay, PhonePe, Paytm), credit/debit cards (Visa, Mastercard, RuPay), and digital wallets (Amazon Pay, Mobikwik).',
      },
      {
        q: 'Can I get a refund?',
        a: 'Refunds are provided only if payment was processed but printing failed due to a technical error. Refunds for user errors or document formatting issues are not available.',
      },
    ],
  },
  {
    category: 'Security & Privacy',
    questions: [
      {
        q: 'Is my document secure?',
        a: 'Yes. All uploads are encrypted during transmission and storage. Your document is automatically deleted immediately after printing or within 15 minutes, whichever comes first.',
      },
      {
        q: 'Do you store my documents?',
        a: 'No. Documents are temporarily stored only for the duration needed to print them, then immediately deleted. We do not access, read, or permanently store any document content.',
      },
      {
        q: 'Is payment information safe?',
        a: 'Absolutely. All payment processing is handled by PCI DSS compliant gateways with bank-grade encryption. We never store your complete card details or banking passwords.',
      },
    ],
  },
  {
    category: 'Technical Issues',
    questions: [
      {
        q: 'What if the kiosk is not working?',
        a: 'Kiosks have real-time monitoring. If a kiosk is offline, it will display an error message. Try another nearby kiosk or contact support at support@mprint.co.',
      },
      {
        q: 'My payment went through but nothing printed. What do I do?',
        a: 'Check the output tray first. If your prints are not there, contact support@mprint.co with your transaction ID within 48 hours for a refund.',
      },
      {
        q: 'Can I print double-sided?',
        a: 'Currently, all prints are single-sided. Double-sided printing will be available in a future update.',
      },
      {
        q: 'Why is my document not uploading?',
        a: 'Ensure your file is under 10MB and in a supported format (PDF, PNG, JPEG). Check your internet connection. If issues persist, try a different browser.',
      },
    ],
  },
  {
    category: 'For Businesses',
    questions: [
      {
        q: 'How do I install an Mprnt kiosk at my location?',
        a: 'Fill out our contact form or email us at business@mprint.co. We\'ll discuss location requirements, installation, pricing, and next steps.',
      },
      {
        q: 'What revenue share do venue owners receive?',
        a: 'Venue owners keep 80% of all transaction revenue. The 20% platform fee covers software, cloud infrastructure, payment processing, and 24/7 support.',
      },
      {
        q: 'What kind of support do you provide?',
        a: 'We provide complete installation, technical support, remote diagnostics, and an admin dashboard for monitoring revenue and device health. Support is available 24/7 for technical issues.',
      },
    ],
  },
];

export default function FAQPage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-16 sm:pt-18">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4 sm:mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-2xl mx-auto px-4">
              Quick answers to common questions about Mprnt
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-bold text-text mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const key = `${category.category}-${index}`;
                    const isOpen = openIndex === key;

                    return (
                      <div
                        key={index}
                        className="bg-surface-secondary border border-border rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(category.category, index)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-border/20 transition-colors"
                        >
                          <span className="font-semibold text-text pr-4">{faq.q}</span>
                          <svg
                            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5">
                            <p className="text-text-muted leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4 sm:mb-6">Still have questions?</h2>
            <p className="text-base sm:text-lg md:text-xl text-text-muted mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <button
              onClick={() => router.push('/contact')}
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-base sm:text-lg transition-all shadow-lg shadow-primary/20"
            >
              <span>Contact us</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
