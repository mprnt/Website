# MPRNT-QR Flow Website - Complete Build Instructions

**Date:** 2026-09-20  
**Source Project:** MPrnt (main site at ~/MPrnt/main)  
**Target:** New mprnt-qr customer flow application

## Context

This is a **separate** Next.js application from the main MPrnt marketing site. It will be the actual customer-facing application accessed via QR code scanning at kiosks. Users will go through a complete flow: Landing → Upload → Preview → Settings → Review → Payment → Processing → Completion.

**Design Requirements:**
- Keep the **exact same theme** as the main MPrnt site
- Use the same color system (dark green primary #226d45, sage green secondary)
- Same animation system from globals.css
- Mobile-first, touch-optimized
- Must feel cohesive with main brand
- **NOT too simple** - polished, professional, engaging

---

## Phase 1: Project Setup

### 1.1 Initialize Project
```bash
# Ensure you're in the mprnt-qr folder
npx create-next-app@14.2.5 . --typescript --tailwind --app --no-src
```

If prompted about existing files, confirm to proceed.

### 1.2 Install Dependencies
```bash
npm install
```

### 1.3 Copy Theme System
Copy these files from `../main/src/`:
- `app/globals.css` → `app/globals.css`
- `../main/tailwind.config.ts` → `tailwind.config.ts`

---

## Phase 2: Core Structure

### 2.1 Create Context for Print Job State

**File: `context/PrintJobContext.tsx`**

```typescript
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Document {
  file: File | null;
  name: string;
  pages: number;
  preview: string[];
  size: number;
}

interface Settings {
  colorMode: 'bw' | 'color';
  pageRange: 'all' | 'custom' | 'current';
  customRange?: string;
  copies: number;
  orientation: 'portrait' | 'landscape';
  paperSize: 'a4' | 'letter';
  pagesPerSheet: 1 | 2 | 4;
}

interface Pricing {
  basePrice: number;
  totalPages: number;
  total: number;
}

interface Payment {
  method?: 'upi' | 'card' | 'wallet';
  transactionId?: string;
  status: 'pending' | 'processing' | 'success' | 'failed';
}

interface PrintJob {
  sessionId: string;
  kioskId: string;
  document: Document;
  settings: Settings;
  pricing: Pricing;
  payment: Payment;
  status: 'draft' | 'pending' | 'processing' | 'complete' | 'error';
  createdAt: number;
}

interface PrintJobContextType {
  printJob: PrintJob;
  updateDocument: (doc: Partial<Document>) => void;
  updateSettings: (settings: Partial<Settings>) => void;
  updatePricing: (pricing: Partial<Pricing>) => void;
  updatePayment: (payment: Partial<Payment>) => void;
  updateStatus: (status: PrintJob['status']) => void;
  calculatePrice: () => void;
  resetJob: () => void;
}

const defaultPrintJob: PrintJob = {
  sessionId: '',
  kioskId: 'M001',
  document: {
    file: null,
    name: '',
    pages: 0,
    preview: [],
    size: 0,
  },
  settings: {
    colorMode: 'bw',
    pageRange: 'all',
    copies: 1,
    orientation: 'portrait',
    paperSize: 'a4',
    pagesPerSheet: 1,
  },
  pricing: {
    basePrice: 2,
    totalPages: 0,
    total: 0,
  },
  payment: {
    status: 'pending',
  },
  status: 'draft',
  createdAt: Date.now(),
};

const PrintJobContext = createContext<PrintJobContextType | undefined>(undefined);

export function PrintJobProvider({ children }: { children: ReactNode }) {
  const [printJob, setPrintJob] = useState<PrintJob>(() => ({
    ...defaultPrintJob,
    sessionId: `S${Date.now()}`,
  }));

  const updateDocument = (doc: Partial<Document>) => {
    setPrintJob(prev => ({
      ...prev,
      document: { ...prev.document, ...doc },
    }));
  };

  const updateSettings = (settings: Partial<Settings>) => {
    setPrintJob(prev => ({
      ...prev,
      settings: { ...prev.settings, ...settings },
    }));
  };

  const updatePricing = (pricing: Partial<Pricing>) => {
    setPrintJob(prev => ({
      ...prev,
      pricing: { ...prev.pricing, ...pricing },
    }));
  };

  const updatePayment = (payment: Partial<Payment>) => {
    setPrintJob(prev => ({
      ...prev,
      payment: { ...prev.payment, ...payment },
    }));
  };

  const updateStatus = (status: PrintJob['status']) => {
    setPrintJob(prev => ({ ...prev, status }));
  };

  const calculatePrice = () => {
    const { settings, document } = printJob;
    const pricePerPage = settings.colorMode === 'bw' ? 2 : 10;
    
    let totalPages = document.pages;
    if (settings.pageRange === 'custom' && settings.customRange) {
      // Simplified page counting - you'll need proper parsing
      totalPages = settings.customRange.split(',').length;
    } else if (settings.pageRange === 'current') {
      totalPages = 1;
    }

    totalPages = Math.ceil(totalPages / settings.pagesPerSheet);
    const total = totalPages * pricePerPage * settings.copies;

    updatePricing({
      basePrice: pricePerPage,
      totalPages: totalPages * settings.copies,
      total,
    });
  };

  const resetJob = () => {
    setPrintJob({
      ...defaultPrintJob,
      sessionId: `S${Date.now()}`,
    });
  };

  return (
    <PrintJobContext.Provider
      value={{
        printJob,
        updateDocument,
        updateSettings,
        updatePricing,
        updatePayment,
        updateStatus,
        calculatePrice,
        resetJob,
      }}
    >
      {children}
    </PrintJobContext.Provider>
  );
}

export function usePrintJob() {
  const context = useContext(PrintJobContext);
  if (!context) {
    throw new Error('usePrintJob must be used within PrintJobProvider');
  }
  return context;
}
```

### 2.2 Create Theme Context (if not copied)

**File: `context/ThemeContext.tsx`**
(Copy from main site or create minimal version)

### 2.3 Update Root Layout

**File: `app/layout.tsx`**

```typescript
import type { Metadata } from "next";
import { PrintJobProvider } from "@/context/PrintJobContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "MPrnt - Print Now",
  description: "Quick self-service printing from your phone",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PrintJobProvider>
          {children}
        </PrintJobProvider>
      </body>
    </html>
  );
}
```

---

## Phase 3: Reusable Components

### 3.1 Progress Bar Component

**File: `components/ProgressBar.tsx`**

```typescript
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-surface-secondary h-2 rounded-full overflow-hidden">
      <div
        className="h-full bg-primary transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
```

### 3.2 Session Timer Component

**File: `components/SessionTimer.tsx`**

```typescript
'use client';

import { useState, useEffect } from 'react';

export function SessionTimer({ startTime = Date.now(), duration = 10 * 60 * 1000 }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, duration - elapsed);
      setTimeLeft(remaining);

      if (remaining === 0) {
        // Handle timeout
        window.location.href = '/error?reason=timeout';
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, duration]);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const isWarning = timeLeft < 2 * 60 * 1000; // Last 2 minutes

  return (
    <div
      className={`text-sm font-medium ${
        isWarning ? 'text-error' : 'text-text-muted'
      }`}
    >
      Time left: {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  );
}
```

### 3.3 Counter Component

**File: `components/Counter.tsx`**

```typescript
interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function Counter({ value, onChange, min = 1, max = 99 }: CounterProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="w-12 h-12 rounded-lg bg-surface-secondary border border-border hover:border-primary disabled:opacity-30 flex items-center justify-center text-2xl font-bold"
      >
        −
      </button>
      <div className="text-3xl font-bold text-text w-16 text-center">{value}</div>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="w-12 h-12 rounded-lg bg-surface-secondary border border-border hover:border-primary disabled:opacity-30 flex items-center justify-center text-2xl font-bold"
      >
        +
      </button>
    </div>
  );
}
```

### 3.4 Option Card Component

**File: `components/OptionCard.tsx`**

```typescript
import React from 'react';

interface OptionCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  price?: string;
  selected: boolean;
  onClick: () => void;
}

export function OptionCard({
  icon,
  title,
  description,
  price,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full p-6 rounded-xl border-2 transition-all text-left ${
        selected
          ? 'border-primary bg-primary/5'
          : 'border-border bg-surface hover:border-primary/40'
      }`}
    >
      {selected && (
        <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-text mb-1">{title}</h3>
          {description && <p className="text-sm text-text-muted">{description}</p>}
          {price && <p className="text-lg font-bold text-primary mt-2">{price}</p>}
        </div>
      </div>
    </button>
  );
}
```

### 3.5 Price Display Component

**File: `components/PriceDisplay.tsx`**

```typescript
'use client';

import { usePrintJob } from '@/context/PrintJobContext';

export function PriceDisplay() {
  const { printJob } = usePrintJob();
  const { pricing } = printJob;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border p-4 shadow-lg">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm text-text-muted">Total Cost</div>
            <div className="text-3xl font-bold text-text">₹{pricing.total}</div>
          </div>
          <div className="text-right text-sm text-text-muted">
            <div>{pricing.totalPages} pages</div>
            <div>₹{pricing.basePrice}/page</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Phase 4: Core Pages

### 4.1 Landing Page

**File: `app/page.tsx`**

```typescript
'use client';

import { useRouter } from 'next/navigation';
import { usePrintJob } from '@/context/PrintJobContext';
import { useEffect } from 'react';

export default function LandingPage() {
  const router = useRouter();
  const { printJob } = usePrintJob();

  useEffect(() => {
    // Auto-generate session on mount
  }, []);

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="max-w-2xl w-full animate-on-scroll">
        {/* Kiosk Info */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full mb-6 text-sm font-medium">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Kiosk {printJob.kioskId}
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-black text-text mb-4">
            Welcome to MPrnt
          </h1>
          
          <p className="text-xl text-text-muted mb-8">
            Print your documents in 5 simple steps
          </p>
        </div>

        {/* Steps Preview */}
        <div className="grid grid-cols-5 gap-2 mb-8 px-4">
          {[
            { icon: '📤', label: 'Upload' },
            { icon: '👁️', label: 'Preview' },
            { icon: '⚙️', label: 'Settings' },
            { icon: '💳', label: 'Pay' },
            { icon: '✅', label: 'Collect' },
          ].map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl mb-1">{step.icon}</div>
              <div className="text-xs text-text-muted">{step.label}</div>
            </div>
          ))}
        </div>

        {/* Time estimate */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-text-muted">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ready in ~60 seconds
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => router.push('/upload')}
          className="w-full py-6 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
        >
          Start Printing
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Trust indicators */}
        <div className="grid grid-cols-3 gap-4 mt-8 text-center text-sm">
          <div>
            <div className="text-2xl mb-1">🔒</div>
            <div className="text-text-muted">Secure</div>
          </div>
          <div>
            <div className="text-2xl mb-1">⚡</div>
            <div className="text-text-muted">Fast</div>
          </div>
          <div>
            <div className="text-2xl mb-1">🔐</div>
            <div className="text-text-muted">Private</div>
          </div>
        </div>

        {/* Session ID */}
        <div className="text-center mt-8 text-xs text-text-muted">
          Session: {printJob.sessionId}
        </div>
      </div>
    </div>
  );
}
```

### 4.2 Upload Page

**File: `app/upload/page.tsx`**

```typescript
'use client';

import { useRouter } from 'next/navigation';
import { usePrintJob } from '@/context/PrintJobContext';
import { ProgressBar } from '@/components/ProgressBar';
import { SessionTimer } from '@/components/SessionTimer';
import { useState, useRef } from 'react';

export default function UploadPage() {
  const router = useRouter();
  const { updateDocument, printJob } = usePrintJob();
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    // Validate file
    const validTypes = ['application/pdf', 'image/png', 'image/jpeg'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload PDF, PNG, or JPEG files only');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setUploading(true);

    // TODO: Upload to server and get preview
    // For now, just store file info
    setTimeout(() => {
      updateDocument({
        file,
        name: file.name,
        pages: 5, // TODO: Get actual page count from server
        size: file.size,
      });
      setUploading(false);
      router.push('/preview');
    }, 1500);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-text-muted hover:text-text"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <SessionTimer startTime={printJob.createdAt} />
          </div>
          <ProgressBar currentStep={1} totalSteps={5} />
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold text-text">Upload Document</h1>
            <p className="text-text-muted mt-1">Step 1 of 5</p>
          </div>
        </div>
      </div>

      {/* Upload Zone */}
      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="max-w-2xl w-full animate-on-scroll-scale">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`border-4 border-dashed rounded-2xl p-12 text-center transition-all ${
              isDragging
                ? 'border-primary bg-primary/5'
                : 'border-border bg-surface-secondary'
            }`}
          >
            {uploading ? (
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full animate-pulse">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-xl font-semibold text-text">Uploading...</p>
              </div>
            ) : (
              <>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-text mb-2">
                  Drop your file here
                </h2>
                <p className="text-text-muted mb-6">
                  or click to browse
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleFileInput}
                  className="hidden"
                />

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-lg transition-all"
                >
                  Browse Files
                </button>

                <div className="mt-8 space-y-2 text-sm text-text-muted">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    PDF, PNG, or JPEG
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Maximum 10MB
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Implementation Instructions for Claude

**When you receive this document:**

1. **Start with Phase 1**: Set up the project structure
2. **Then Phase 2**: Copy theme files and create contexts
3. **Then Phase 3**: Build all reusable components
4. **Then Phase 4**: Implement pages one by one:
   - Landing (shown above)
   - Upload (shown above)
   - Preview (you need to create)
   - Settings (you need to create)
   - Review (you need to create)
   - Payment (you need to create)
   - Processing (you need to create)
   - Complete (you need to create)
   - Error (you need to create)

5. **For each page**, follow these patterns:
   - Use the same animation classes from globals.css
   - Include ProgressBar and SessionTimer
   - Use the PrintJobContext for state
   - Mobile-first responsive design
   - Large touch targets (min 44px)
   - Clear visual hierarchy
   - Smooth transitions

6. **After pages are complete**:
   - Test the full flow
   - Add error handling
   - Optimize performance
   - Add loading states
   - Test on mobile devices

**Key Design Principles:**
- Professional, not toy-like
- Smooth animations, not jarring
- Clear CTAs at every step
- Confidence-building (show progress, time remaining, security indicators)
- Forgiving (easy to go back, clear errors)
- Fast (minimal loading states, optimistic updates)

**DO NOT:**
- Make it look like a simple form
- Use basic HTML styling
- Skip animations
- Use generic colors (stick to the theme)
- Make tiny buttons
- Forget mobile optimization

**Reference the main site** at `../main/src/app/page.tsx` for animation and design patterns.

Let me know when you're ready to start, and I'll guide you through each phase!
