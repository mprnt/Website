'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function ContactPage() {
  const router = useRouter();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    // Validation
    const newErrors: Record<string, string> = {};
    if (!data.name || data.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name';
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!data.subject || data.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a subject';
    }
    if (!data.message || data.message.trim().length < 10) {
      newErrors.message = 'Please enter a message (at least 10 characters)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormState('error');
      return;
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real app, you would send this to your backend
      console.log('Form submitted:', data);

      setFormState('success');

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setFormState('error');
      setErrors({ submit: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4 mt-16 sm:mb-6 tracking-tight">
              Get in touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-2xl mx-auto px-4">
              Have questions about Mprnt? Want to install a kiosk at your location? We're here to help.
            </p>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="text-xl sm:text-2xl font-bold text-text mb-6 sm:mb-8">Contact information</h2>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-text mb-1">Email</div>
                      <a href="mailto:support@mprint.co" className="text-text-muted hover:text-primary transition-colors">
                        support@mprint.co
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-text mb-1">Phone</div>
                      <a href="tel:+911234567890" className="text-text-muted hover:text-primary transition-colors">
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-text mb-1">Support hours</div>
                      <div className="text-text-muted">24/7 for technical issues</div>
                      <div className="text-text-muted text-sm">Mon-Fri 9AM-6PM for sales</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-surface-secondary rounded-xl border border-border">
                  <h3 className="font-semibold text-text mb-3">Quick questions?</h3>
                  <p className="text-sm text-text-muted mb-4">
                    Check our FAQ page for instant answers to common questions.
                  </p>
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Visit FAQ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-surface-secondary rounded-xl sm:rounded-2xl border border-border p-6 sm:p-8 lg:p-10">
                  <h2 className="text-xl sm:text-2xl font-bold text-text mb-4 sm:mb-6">Send us a message</h2>

                  {formState === 'success' && (
                    <div className="mb-6 p-4 bg-success/10 border border-success/30 rounded-lg">
                      <div className="flex gap-3">
                        <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="font-semibold text-text mb-1">Message sent!</div>
                          <div className="text-sm text-text-muted">We'll get back to you within 24 hours.</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                          Full name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          disabled={formState === 'submitting'}
                          className={`w-full px-4 py-3 bg-surface border rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                            errors.name ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                          Email address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          disabled={formState === 'submitting'}
                          className={`w-full px-4 py-3 bg-surface border rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                            errors.email ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                        Phone number (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        disabled={formState === 'submitting'}
                        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        disabled={formState === 'submitting'}
                        className={`w-full px-4 py-3 bg-surface border rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                          errors.subject ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="Business partnership inquiry"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        disabled={formState === 'submitting'}
                        className={`w-full px-4 py-3 bg-surface border rounded-lg text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>

                    {errors.submit && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-sm text-red-500">{errors.submit}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-sm text-text-muted text-center">
                      By submitting this form, you agree to our{' '}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
