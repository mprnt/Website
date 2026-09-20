import React from 'react';

interface PriceTagProps {
  amount: number;
  currency?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function PriceTag({ amount, currency = '₹', label = 'Total', size = 'md' }: PriceTagProps) {
  const sizeStyles = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <div className="flex items-baseline gap-2">
      <span className="text-text-muted text-sm font-medium">{label}:</span>
      <span className={`font-bold text-primary ${sizeStyles[size]}`}>
        {currency}{amount.toFixed(2)}
      </span>
    </div>
  );
}
