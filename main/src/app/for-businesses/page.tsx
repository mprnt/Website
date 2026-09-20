'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function ForBusinessesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-16 sm:pt-18">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/20 text-primary rounded-full mb-4 sm:mb-6 text-xs sm:text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                For venue owners and operators
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text mb-4 sm:mb-6 tracking-tight">
                Turn your space into a revenue stream
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-text-muted mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
                Install an Mprnt kiosk and earn passive income while providing a valuable service to your customers. Complete hardware, software, and support included.
              </p>
              <button
                onClick={() => router.push('/contact')}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary/20"
              >
                <span>Get started</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-text mb-4">Why partner with Mprnt?</h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                A complete printing infrastructure that pays for itself
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Passive revenue</h3>
                <p className="text-text-muted">Earn money 24/7 from every print job. You set the pricing, we handle everything else.</p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Zero maintenance</h3>
                <p className="text-text-muted">We provide installation, technical support, and remote troubleshooting. No IT team needed.</p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Better customer service</h3>
                <p className="text-text-muted">Offer a valuable amenity that keeps customers coming back to your location.</p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Real-time analytics</h3>
                <p className="text-text-muted">Track usage, revenue, and trends through your comprehensive admin dashboard.</p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Flexible pricing control</h3>
                <p className="text-text-muted">Set your own rates for B&W and color printing. Adjust anytime from your dashboard.</p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">24/7 support</h3>
                <p className="text-text-muted">Technical support and remote diagnostics available whenever you need help.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Management Dashboard */}
        <section className="px-6 lg:px-8 py-20 lg:py-32 bg-surface-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-text mb-4">Complete management dashboard</h2>
                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                  Monitor your kiosks, track revenue, and manage settings from one powerful web-based admin panel. No software to install.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Revenue analytics</h3>
                      <p className="text-text-muted">Daily, weekly, and monthly earnings with detailed transaction history.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Device health monitoring</h3>
                      <p className="text-text-muted">Real-time status, error alerts, and maintenance notifications.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Pricing management</h3>
                      <p className="text-text-muted">Set and adjust rates instantly. Changes apply immediately.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Usage reports</h3>
                      <p className="text-text-muted">Detailed insights on print volumes, peak hours, and customer behavior.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden">
                  {/* Dashboard mockup */}
                  <div className="bg-surface-secondary border-b border-border p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
                      </svg>
                      <div>
                        <div className="text-sm font-bold text-text">Mprnt Admin</div>
                        <div className="text-xs text-text-muted">Dashboard</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-border"></div>
                      <div className="w-3 h-3 rounded-full bg-border"></div>
                      <div className="w-3 h-3 rounded-full bg-border"></div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Revenue cards */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <div className="text-xs text-text-muted mb-1">Today</div>
                        <div className="text-2xl font-bold text-text">₹2,450</div>
                        <div className="text-xs text-success">+12%</div>
                      </div>
                      <div className="p-4 bg-surface-secondary rounded-lg border border-border">
                        <div className="text-xs text-text-muted mb-1">This Week</div>
                        <div className="text-2xl font-bold text-text">₹14,230</div>
                        <div className="text-xs text-success">+8%</div>
                      </div>
                      <div className="p-4 bg-surface-secondary rounded-lg border border-border">
                        <div className="text-xs text-text-muted mb-1">This Month</div>
                        <div className="text-2xl font-bold text-text">₹58,920</div>
                        <div className="text-xs text-success">+15%</div>
                      </div>
                    </div>

                    {/* Chart placeholder */}
                    <div className="h-48 bg-surface-secondary rounded-lg border border-border p-4">
                      <div className="flex items-end justify-between h-full gap-2">
                        {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                          <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${height}%` }}></div>
                        ))}
                      </div>
                    </div>

                    {/* Device status */}
                    <div>
                      <div className="text-sm font-semibold text-text mb-3">Kiosk Status</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-sm font-medium text-text">Kiosk #4721</span>
                          </div>
                          <span className="text-xs text-success">Online</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg border border-border">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-text-muted rounded-full"></div>
                            <span className="text-sm font-medium text-text">Kiosk #4722</span>
                          </div>
                          <span className="text-xs text-text-muted">Idle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal Locations */}
        <section className="px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-text mb-4">Perfect for</h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                High-traffic locations where people need quick access to printing
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-surface-secondary border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-text mb-2">Libraries</h3>
                <p className="text-sm text-text-muted">Students and researchers need quick document printing</p>
              </div>

              <div className="p-6 rounded-xl bg-surface-secondary border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-text mb-2">Co-working spaces</h3>
                <p className="text-sm text-text-muted">Remote workers need on-demand printing services</p>
              </div>

              <div className="p-6 rounded-xl bg-surface-secondary border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-text mb-2">Retail stores</h3>
                <p className="text-sm text-text-muted">Additional revenue stream with minimal effort</p>
              </div>

              <div className="p-6 rounded-xl bg-surface-secondary border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-text mb-2">Hotels</h3>
                <p className="text-sm text-text-muted">Business travelers appreciate convenient printing</p>
              </div>

              <div className="p-6 rounded-xl bg-surface-secondary border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-text mb-2">Cafes</h3>
                <p className="text-sm text-text-muted">Students and freelancers working on-site</p>
              </div>

              <div className="p-6 rounded-xl bg-surface-secondary border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-text mb-2">Universities</h3>
                <p className="text-sm text-text-muted">High-volume printing needs across campus</p>
              </div>

              <div className="p-6 rounded-xl bg-surface-secondary border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-text mb-2">Community centers</h3>
                <p className="text-sm text-text-muted">Essential service for local residents</p>
              </div>

              <div className="p-6 rounded-xl bg-surface-secondary border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-text mb-2">Airports</h3>
                <p className="text-sm text-text-muted">Travelers need last-minute document printing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Model */}
        <section className="px-6 lg:px-8 py-20 lg:py-32 bg-surface-secondary">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-text mb-4">Simple business model</h2>
              <p className="text-xl text-text-muted">
                You keep the majority of revenue from every print job
              </p>
            </div>

            <div className="bg-surface rounded-2xl border border-border p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="text-5xl font-bold text-text mb-2">80%</div>
                  <div className="text-lg text-text-muted mb-4">You keep</div>
                  <p className="text-text-muted">From every transaction at your kiosk. Set your own pricing and maximize your earnings.</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-text mb-2">20%</div>
                  <div className="text-lg text-text-muted mb-4">Platform fee</div>
                  <p className="text-text-muted">Covers software, cloud infrastructure, payment processing, and 24/7 technical support.</p>
                </div>
              </div>

              <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-text mb-3">Example calculation</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Customer prints 10 color pages at ₹8/page</span>
                    <span className="font-medium text-text">₹80.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Platform fee (20%)</span>
                    <span className="font-medium text-text">- ₹16.00</span>
                  </div>
                  <div className="h-px bg-border my-3"></div>
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold text-text">You earn</span>
                    <span className="font-bold text-primary">₹64.00</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 p-4 bg-surface-secondary rounded-lg border border-border">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-text mb-1">Payouts every week</div>
                  <div className="text-sm text-text-muted">Automatic bank transfers every Monday for the previous week's earnings.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-text mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
              Fill out our contact form and we'll reach out to discuss installation, pricing, and next steps.
            </p>
            <button
              onClick={() => router.push('/contact')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary/20"
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
