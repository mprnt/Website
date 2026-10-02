'use client';

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  variant?: 'up' | 'left' | 'right' | 'scale';
}

// Fades/slides children in once they scroll into view. Pure CSS transition,
// so it degrades to "visible" under prefers-reduced-motion (see globals.css).
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0, variant = 'up' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-shown={shown}
      data-variant={variant}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <Reveal className={`max-w-3xl mb-10 sm:mb-14 ${alignment}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
          <span className="w-6 h-px bg-primary" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight leading-[1.08]">{title}</h2>
      {description && <p className="mt-4 text-base sm:text-lg text-text-muted leading-relaxed">{description}</p>}
    </Reveal>
  );
}
