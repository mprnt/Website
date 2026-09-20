'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HomePage() {
  const router = useRouter();
  const { ref: howItWorksRef, isVisible: howItWorksVisible } = useScrollAnimation();
  const { ref: capabilitiesRef, isVisible: capabilitiesVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: ecosystemRef, isVisible: ecosystemVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/20 text-primary rounded-full mb-4 sm:mb-6 text-xs sm:text-sm font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  Self-service printing kiosks
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-text mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.05] tracking-tight">
                  Print from your phone in seconds
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-text-muted leading-relaxed mb-6 sm:mb-8">
                  Scan a QR code, upload your document, configure print settings, pay instantly, and collect your prints. No apps, no sign-ups.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                  <Link
                    href="/how-it-works"
                    className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-base sm:text-lg transition-all shadow-lg shadow-primary/20 sm:flex-1"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="/for-businesses"
                    className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-surface-secondary border border-border hover:border-primary/40 text-text rounded-lg font-semibold text-base sm:text-lg transition-all sm:flex-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    For Businesses
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-border/30">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-text mb-1">30s</div>
                    <div className="text-xs sm:text-sm text-text-muted">Average print time</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-text mb-1">24/7</div>
                    <div className="text-xs sm:text-sm text-text-muted">Always available</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-text mb-1">₹2</div>
                    <div className="text-xs sm:text-sm text-text-muted">Per B&W page</div>
                  </div>
                </div>
              </div>

              {/* Right: Product Visual */}
              <div className="relative mt-8 lg:mt-0 hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl"></div>
                <div className="relative bg-surface-secondary border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
                  {/* Kiosk Mockup */}
                  <div className="bg-gradient-to-b from-border/50 to-border/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
                    <div className="bg-surface rounded-lg p-4 sm:p-6 md:p-8 text-center">
                      <div className="inline-block p-2 sm:p-4 md:p-6 lg:p-8 bg-white rounded-lg mb-3 sm:mb-4">
                        {/* QR Code placeholder */}
                        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 grid grid-cols-8 gap-0.5 sm:gap-1">
                          {[...Array(64)].map((_, i) => (
                            <div key={i} className={`${(i * 17 + 3) % 7 < 3 ? 'bg-gray-900' : 'bg-white'}`}></div>
                          ))}
                        </div>
                      </div>
                      <div className="text-text text-sm sm:text-base font-semibold mb-1 sm:mb-2">Scan to print</div>
                      <div className="text-xs sm:text-sm text-text-muted">Point your camera here</div>
                    </div>
                  </div>

                  {/* Phone mockup */}
                  <div className="flex justify-center">
                    <div className="w-48 sm:w-56 md:w-64 bg-gradient-to-b from-border to-border/50 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-xl">
                      <div className="bg-surface rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                        <div className="h-2 w-16 bg-border/50 rounded-full mx-auto"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                          <div className="h-4 bg-border/30 rounded w-1/2"></div>
                          <div className="h-32 bg-primary/10 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
                            <svg className="w-8 h-8 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-8 bg-border/30 rounded"></div>
                            <div className="h-8 bg-primary/20 rounded"></div>
                          </div>
                          <div className="h-12 bg-primary rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Overview */}
        <section ref={howItWorksRef} className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 bg-surface-secondary">
          <div className={`max-w-7xl mx-auto transition-all duration-500 ${howItWorksVisible ? 'animate-on-scroll' : 'opacity-0'}`}>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-3 sm:mb-4">How it works</h2>
              <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-2xl mx-auto px-4">
                Five simple steps from your phone to printed documents
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 shadow-lg shadow-primary/30">
                  1
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-full h-20 sm:h-28 md:h-32 bg-white rounded-lg flex items-center justify-center border border-border overflow-hidden">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 grid grid-cols-4 gap-0.5">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'}`}></div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-base font-semibold text-text break-words">Scan QR code</h3>
                  <p className="text-xs sm:text-sm text-text-muted hidden sm:block">On the kiosk screen</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 shadow-lg shadow-primary/30">
                  2
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-full h-24 sm:h-28 md:h-32 bg-primary/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-text">Upload document</h3>
                  <p className="text-xs sm:text-sm text-text-muted hidden sm:block">PDF, PNG, or JPEG</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center sm:col-span-1">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 shadow-lg shadow-primary/30">
                  3
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-full h-24 sm:h-28 md:h-32 bg-surface rounded-lg p-2 sm:p-3 md:p-4 border border-border space-y-1 sm:space-y-2">
                    <div className="grid grid-cols-2 gap-1 sm:gap-2">
                      <div className="h-6 sm:h-8 bg-border/30 rounded"></div>
                      <div className="h-6 sm:h-8 bg-primary/20 border-2 border-primary rounded"></div>
                    </div>
                    <div className="h-3 sm:h-4 bg-border/30 rounded w-3/4"></div>
                    <div className="h-3 sm:h-4 bg-border/30 rounded w-1/2"></div>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-text">Configure</h3>
                  <p className="text-xs sm:text-sm text-text-muted hidden sm:block">Color, pages, copies</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 shadow-lg shadow-primary/30">
                  4
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-full h-24 sm:h-28 md:h-32 bg-success/10 rounded-lg flex items-center justify-center border border-success/30">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-success/20 mb-1 sm:mb-2">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-xs font-semibold text-success">₹12.00</div>
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-text">Pay securely</h3>
                  <p className="text-xs sm:text-sm text-text-muted hidden sm:block">UPI, card, or wallet</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="text-center sm:col-span-1">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 shadow-lg shadow-primary/30">
                  5
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-full h-24 sm:h-28 md:h-32 bg-surface rounded-lg flex items-center justify-center border border-border">
                    <div className="space-y-2">
                      <div className="flex gap-0.5 sm:gap-1">
                        <div className="w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20 bg-white border-2 border-border rounded shadow-sm"></div>
                        <div className="w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20 bg-white border-2 border-border rounded shadow-sm -ml-6 sm:-ml-8 mt-1"></div>
                        <div className="w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20 bg-white border-2 border-border rounded shadow-sm -ml-6 sm:-ml-8 mt-2"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-text">Collect prints</h3>
                  <p className="text-xs sm:text-sm text-text-muted hidden sm:block">Ready in 30 seconds</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-primary text-sm sm:text-base font-semibold hover:gap-3 transition-all"
              >
                See detailed walkthrough
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Product Capabilities */}
        <section ref={capabilitiesRef} className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className={`max-w-7xl mx-auto transition-all duration-500 ${capabilitiesVisible ? 'animate-on-scroll' : 'opacity-0'}`}>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-3 sm:mb-4">Built for reliability</h2>
              <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-2xl mx-auto px-4">
                Enterprise-grade hardware and software working together
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-text mb-2">High-speed printing</h3>
                <p className="text-sm sm:text-base text-text-muted">Professional laser printers deliver crisp output in under 30 seconds</p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Secure sessions</h3>
                <p className="text-text-muted">Time-limited QR codes and encrypted connections protect your documents</p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Mobile-first</h3>
                <p className="text-text-muted">Optimized web interface works on any smartphone, no app required</p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Multiple payments</h3>
                <p className="text-text-muted">Accept UPI, credit/debit cards, and digital wallets</p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Format support</h3>
                <p className="text-text-muted">Handle PDF, PNG, and JPEG files up to 10MB</p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-secondary border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Real-time monitoring</h3>
                <p className="text-text-muted">Cloud-connected kiosks with live status and error reporting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Split: Customer + Business */}
        <section ref={benefitsRef} className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 bg-surface-secondary">
          <div className={`max-w-7xl mx-auto transition-all duration-500 ${benefitsVisible ? 'animate-on-scroll' : 'opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* For Customers */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-6 sm:mb-8">For everyone</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">No installation needed</h3>
                      <p className="text-text-muted">Works instantly on any phone browser. No apps to download.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Transparent pricing</h3>
                      <p className="text-text-muted">See exact costs before you pay. No hidden fees.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Always available</h3>
                      <p className="text-text-muted">24/7 access at strategically located kiosks.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Privacy first</h3>
                      <p className="text-text-muted">Documents are deleted immediately after printing.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Businesses */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-text mb-8">For venue owners</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Revenue dashboard</h3>
                      <p className="text-text-muted">Track earnings, transaction history, and usage patterns.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Flexible pricing control</h3>
                      <p className="text-text-muted">Set your own rates for B&W and color printing.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">Device health monitoring</h3>
                      <p className="text-text-muted">Get alerts for paper jams, low toner, and maintenance needs.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">24/7 support</h3>
                      <p className="text-text-muted">Technical support and remote troubleshooting included.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/for-businesses"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Learn more about business features
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware + Software Ecosystem */}
        <section ref={ecosystemRef} className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className={`max-w-7xl mx-auto transition-all duration-500 ${ecosystemVisible ? 'animate-on-scroll' : 'opacity-0'}`}>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-3 sm:mb-4">Complete ecosystem</h2>
              <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-2xl mx-auto px-4">
                Hardware, software, and cloud infrastructure working in harmony
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Hardware */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                  HARDWARE
                </div>
                <div className="mt-8 mb-6">
                  <div className="w-full h-48 bg-gradient-to-b from-border/50 to-border/20 rounded-xl flex items-center justify-center">
                    <svg className="w-24 h-24 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text mb-3">Kiosk hardware</h3>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Professional laser printer
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Touch display with QR
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Secure payment terminal
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Industrial enclosure
                  </li>
                </ul>
              </div>

              {/* Software */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                  SOFTWARE
                </div>
                <div className="mt-8 mb-6">
                  <div className="w-full h-48 bg-surface-secondary rounded-xl p-4 border border-border space-y-2">
                    <div className="h-6 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-4 bg-border/50 rounded w-full"></div>
                    <div className="h-4 bg-border/50 rounded w-5/6"></div>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="h-16 bg-border/30 rounded"></div>
                      <div className="h-16 bg-primary/10 border-2 border-primary/30 rounded"></div>
                    </div>
                    <div className="h-10 bg-primary/20 rounded"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text mb-3">Mobile web app</h3>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Responsive mobile UI
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Real-time preview
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Secure file upload
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Payment integration
                  </li>
                </ul>
              </div>

              {/* Cloud */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                  CLOUD
                </div>
                <div className="mt-8 mb-6">
                  <div className="w-full h-48 bg-surface-secondary rounded-xl flex items-center justify-center border border-border">
                    <div className="text-center">
                      <svg className="w-20 h-20 text-primary/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                      <div className="flex gap-1 justify-center">
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text mb-3">Cloud platform</h3>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Admin dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Revenue analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Device monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Remote diagnostics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4 sm:mb-6">
              Ready to start printing?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-muted mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              Find an Mprnt kiosk near you or learn how to bring one to your venue
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/how-it-works"
                className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-base sm:text-lg transition-all shadow-lg shadow-primary/20"
              >
                <span>How it works</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/for-businesses"
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-surface border border-border hover:border-primary/40 text-text rounded-lg font-semibold text-base sm:text-lg transition-all"
              >
                For venue owners
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
