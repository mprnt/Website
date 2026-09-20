'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function HowItWorksPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-16 sm:pt-18">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4 sm:mb-6 tracking-tight">
              How Mprnt works
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-2xl mx-auto px-4">
              From scanning a QR code to holding your printed documents - the complete journey in five simple steps
            </p>
          </div>
        </section>

        {/* Step 1: Scan QR Code */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 shadow-lg shadow-primary/30">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-3 sm:mb-4 break-words">Scan the QR code</h2>
                <p className="text-base sm:text-lg text-text-muted mb-4 sm:mb-6 leading-relaxed">
                  Every Mprnt kiosk displays a unique QR code on its screen. Simply open your phone's camera app and point it at the code. A notification will appear - tap it to open the printing interface.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-surface-secondary rounded-lg border border-border">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold text-text mb-1">Time-limited codes</div>
                      <div className="text-sm text-text-muted">QR codes refresh every 5 minutes for security. Each code creates a unique, encrypted session.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-surface-secondary rounded-lg border border-border">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold text-text mb-1">Works with any phone</div>
                      <div className="text-sm text-text-muted">iOS, Android, or any phone with a camera. No app installation required.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-border/50 to-border/20 rounded-2xl p-4 sm:p-8 overflow-hidden">
                  <div className="bg-surface rounded-xl p-6 sm:p-12 text-center border border-border shadow-xl">
                    <div className="inline-block p-4 sm:p-8 bg-white rounded-xl mb-4 sm:mb-6 shadow-lg overflow-hidden">
                      {/* QR Code */}
                      <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 grid grid-cols-8 gap-0.5 sm:gap-1">
                        {[...Array(64)].map((_, i) => (
                          <div key={i} className={`${Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'} rounded-sm`}></div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg sm:text-xl font-bold text-text break-words">Scan to start printing</div>
                      <div className="text-sm sm:text-base text-text-muted">Point your camera at this code</div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full mt-4">
                        <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></div>
                        Active • Refreshes in 4:32
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Upload Document */}
        <section className="px-6 lg:px-8 py-20 lg:py-32 bg-surface-secondary">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative max-w-sm mx-auto">
                  {/* Phone Mockup */}
                  <div className="bg-gradient-to-b from-border to-border/50 rounded-[3rem] p-3 shadow-2xl">
                    <div className="bg-surface rounded-[2.5rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="h-12 bg-surface flex items-center justify-between px-6">
                        <div className="text-xs font-semibold text-text">9:41</div>
                        <div className="flex gap-1">
                          <div className="w-4 h-4 rounded-full bg-border"></div>
                          <div className="w-4 h-4 rounded-full bg-border"></div>
                          <div className="w-4 h-4 rounded-full bg-border"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4 pb-32">
                        <div className="flex items-center gap-3 mb-6">
                          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
                          </svg>
                          <div>
                            <div className="text-lg font-bold text-text">Mprnt</div>
                            <div className="text-xs text-text-muted">Kiosk #4721</div>
                          </div>
                        </div>

                        <div className="p-8 border-2 border-dashed border-primary/30 rounded-xl bg-primary/5 text-center">
                          <svg className="w-16 h-16 text-primary/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <div className="font-semibold text-text mb-1">Upload document</div>
                          <div className="text-sm text-text-muted mb-4">PDF, PNG, or JPEG • Max 10MB</div>
                          <div className="h-10 bg-primary rounded-lg flex items-center justify-center text-white font-medium">
                            Choose file
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-text-muted">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                          <span>Secure encrypted connection</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white font-bold text-2xl mb-6 shadow-lg shadow-primary/30">
                  2
                </div>
                <h2 className="text-4xl font-bold text-text mb-4">Upload your document</h2>
                <p className="text-lg text-text-muted mb-6 leading-relaxed">
                  After scanning, you'll see the upload screen on your phone. Tap to select a document from your files, photos, or cloud storage.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-text">PDF documents up to 10MB</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-text">Images in PNG or JPEG format</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-text">From device or cloud storage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-text">Automatic file validation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Configure Print Settings */}
        <section className="px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white font-bold text-2xl mb-6 shadow-lg shadow-primary/30">
                  3
                </div>
                <h2 className="text-4xl font-bold text-text mb-4">Configure your print</h2>
                <p className="text-lg text-text-muted mb-6 leading-relaxed">
                  Choose exactly how you want your document printed. All options are clearly labeled with real-time price updates.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-surface-secondary rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-text mb-1">Color or Black & White</div>
                        <div className="text-sm text-text-muted">Choose color for presentations, B&W for documents. Price shown for each option.</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-surface-secondary rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-text mb-1">Page range</div>
                        <div className="text-sm text-text-muted">Print all pages or select specific pages (e.g., 1-5, 10, 15-20).</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-surface-secondary rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-text mb-1">Number of copies</div>
                        <div className="text-sm text-text-muted">Print multiple copies in a single job. Bulk pricing automatically applied.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative max-w-sm mx-auto₹">
                <div className="bg-gradient-to-b from-border to-border/50 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-surface rounded-[2.5rem] overflow-hidden">
                    <div className="h-12 bg-surface flex items-center justify-between px-6">
                      <div className="text-xs font-semibold text-text">9:41</div>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 rounded-full bg-border"></div>
                        <div className="w-4 h-4 rounded-full bg-border"></div>
                        <div className="w-4 h-4 rounded-full bg-border"></div>
                      </div>
                    </div>

                    <div className="p-6 space-y-4 pb-32">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <div className="h-2 flex-1 rounded-full bg-border/30"></div>
                        <div className="h-2 flex-1 rounded-full bg-border/30"></div>
                      </div>

                      <div>
                        <div className="text-xs text-text-muted mb-2">DOCUMENT</div>
                        <div className="flex items-center gap-3 p-3 bg-surface-secondary rounded-lg border border-border">
                          <div className="w-10 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-text truncate">presentation.pdf</div>
                            <div className="text-xs text-text-muted">12 pages • 2.4 MB</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-text-muted mb-2">PRINT MODE</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-3 border-2 border-border rounded-lg bg-surface-secondary">
                            <div className="text-sm font-medium text-text mb-1">B&W</div>
                            <div className="text-xs text-text-muted">₹2/page</div>
                          </div>
                          <div className="p-3 border-2 border-primary rounded-lg bg-primary/5">
                            <div className="text-sm font-medium text-text mb-1">Color</div>
                            <div className="text-xs text-primary">₹8/page</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-text-muted mb-2">PAGES</div>
                        <div className="p-3 bg-surface-secondary rounded-lg border border-border">
                          <input type="text" value="1-12" className="w-full bg-transparent text-sm text-text outline-none" readOnly />
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-text-muted mb-2">COPIES</div>
                        <div className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg border border-border">
                          <button className="w-8 h-8 rounded bg-border/50 flex items-center justify-center">
                            <span className="text-lg">−</span>
                          </button>
                          <span className="text-lg font-semibold text-text">1</span>
                          <button className="w-8 h-8 rounded bg-border/50 flex items-center justify-center">
                            <span className="text-lg">+</span>
                          </button>
                        </div>
                      </div>

                      <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-text-muted">Total</span>
                          <span className="text-2xl font-bold text-text">₹96.00</span>
                        </div>
                        <div className="text-xs text-text-muted">12 pages × 1 copy × ₹8</div>
                      </div>

                      <button className="w-full h-12 bg-primary rounded-lg text-white font-semibold">
                        Continue to payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Pay Securely */}
        <section className="px-6 lg:px-8 py-20 lg:py-32 bg-surface-secondary">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative max-w-sm mx-auto">
                  <div className="bg-gradient-to-b from-border to-border/50 rounded-[3rem] p-3 shadow-2xl">
                    <div className="bg-surface rounded-[2.5rem] overflow-hidden">
                      <div className="h-12 bg-surface flex items-center justify-between px-6">
                        <div className="text-xs font-semibold text-text">9:41</div>
                        <div className="flex gap-1">
                          <div className="w-4 h-4 rounded-full bg-border"></div>
                          <div className="w-4 h-4 rounded-full bg-border"></div>
                          <div className="w-4 h-4 rounded-full bg-border"></div>
                        </div>
                      </div>

                      <div className="p-6 space-y-4 pb-32">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="h-2 w-2 rounded-full bg-success"></div>
                          <div className="h-2 w-2 rounded-full bg-success"></div>
                          <div className="h-2 w-2 rounded-full bg-success"></div>
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <div className="h-2 flex-1 rounded-full bg-border/30"></div>
                        </div>

                        <div className="text-center py-6">
                          <div className="text-xs text-text-muted mb-2">AMOUNT TO PAY</div>
                          <div className="text-5xl font-bold text-text mb-1">₹96</div>
                          <div className="text-sm text-text-muted">12 color pages</div>
                        </div>

                        <div className="space-y-2">
                          <div className="p-4 border-2 border-primary rounded-lg bg-primary/5 flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-text">UPI</div>
                              <div className="text-xs text-text-muted">GPay, PhonePe, Paytm</div>
                            </div>
                            <div className="w-5 h-5 rounded-full border-2 border-primary bg-primary flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>
                          </div>

                          <div className="p-4 border-2 border-border rounded-lg bg-surface-secondary flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-border/30 flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-text">Card</div>
                              <div className="text-xs text-text-muted">Credit or Debit</div>
                            </div>
                            <div className="w-5 h-5 rounded-full border-2 border-border"></div>
                          </div>

                          <div className="p-4 border-2 border-border rounded-lg bg-surface-secondary flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-border/30 flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-text">Wallet</div>
                              <div className="text-xs text-text-muted">Amazon Pay, Mobikwik</div>
                            </div>
                            <div className="w-5 h-5 rounded-full border-2 border-border"></div>
                          </div>
                        </div>

                        <button className="w-full h-12 bg-primary rounded-lg text-white font-semibold mt-4">
                          Pay ₹96.00
                        </button>

                        <div className="flex items-center justify-center gap-2 text-xs text-text-muted pt-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                          <span>Secured by Razorpay</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white font-bold text-2xl mb-6 shadow-lg shadow-primary/30">
                  4
                </div>
                <h2 className="text-4xl font-bold text-text mb-4">Pay securely</h2>
                <p className="text-lg text-text-muted mb-6 leading-relaxed">
                  Choose your preferred payment method and complete the transaction. All payments are processed through industry-standard secure gateways.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-surface-secondary rounded-lg border border-border">
                    <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <div className="text-sm font-semibold text-text mb-1">UPI</div>
                    <div className="text-xs text-text-muted">Instant</div>
                  </div>
                  <div className="text-center p-4 bg-surface-secondary rounded-lg border border-border">
                    <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <div className="text-sm font-semibold text-text mb-1">Cards</div>
                    <div className="text-xs text-text-muted">All major</div>
                  </div>
                  <div className="text-center p-4 bg-surface-secondary rounded-lg border border-border">
                    <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div className="text-sm font-semibold text-text mb-1">Wallets</div>
                    <div className="text-xs text-text-muted">Digital</div>
                  </div>
                </div>
                <div className="p-4 bg-success/10 rounded-lg border border-success/30">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold text-text mb-1">Bank-grade security</div>
                      <div className="text-sm text-text-muted">256-bit SSL encryption and PCI DSS compliant payment processing. Your card details are never stored.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 5: Collect Prints */}
        <section className="px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white font-bold text-2xl mb-6 shadow-lg shadow-primary/30">
                  5
                </div>
                <h2 className="text-4xl font-bold text-text mb-4">Collect your prints</h2>
                <p className="text-lg text-text-muted mb-6 leading-relaxed">
                  Once payment is confirmed, the kiosk immediately starts printing. Your documents will be ready in the output tray in under 30 seconds.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-surface-secondary rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-semibold text-text">Payment confirmed</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      </div>
                      <span className="font-semibold text-text">Printing in progress...</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-border/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-border"></div>
                      </div>
                      <span className="font-semibold text-text-muted">Ready to collect</span>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-semibold text-text mb-1">Your phone will notify you</div>
                        <div className="text-sm text-text-muted">You'll receive a notification when printing is complete. Your session automatically closes after you collect.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-success/20 to-success/5 rounded-2xl p-8">
                  <div className="bg-surface rounded-xl p-8 border border-border shadow-xl">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 mb-4">
                        <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-text mb-2">Print job complete!</div>
                      <div className="text-text-muted">Collect your documents from the output tray</div>
                    </div>

                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        {/* Stack of papers */}
                        <div className="absolute inset-0 flex justify-center">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="absolute w-32 h-44 bg-white border-2 border-border rounded shadow-lg"
                              style={{
                                transform: `translateX(${i * 2}px) translateY(${i * 2}px)`,
                                zIndex: 5 - i
                              }}
                            >
                              {i === 0 && (
                                <div className="p-3 space-y-2">
                                  <div className="h-2 bg-text/80 rounded"></div>
                                  <div className="h-2 bg-text/60 rounded w-3/4"></div>
                                  <div className="h-2 bg-text/40 rounded w-5/6"></div>
                                  <div className="h-16 bg-primary/20 rounded mt-3"></div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="w-32 h-44"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="p-3 bg-surface-secondary rounded-lg text-center">
                        <div className="font-semibold text-text">12 pages</div>
                        <div className="text-xs text-text-muted">Color print</div>
                      </div>
                      <div className="p-3 bg-surface-secondary rounded-lg text-center">
                        <div className="font-semibold text-text">30 sec</div>
                        <div className="text-xs text-text-muted">Print time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-text mb-6">
              Experience it yourself
            </h2>
            <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
              Find an Mprnt kiosk near you and try the fastest way to print from your phone
            </p>
            <button
              onClick={() => router.push('/scan')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary/20"
            >
              <span>Start printing now</span>
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
