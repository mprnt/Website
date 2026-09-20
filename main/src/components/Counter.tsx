import React from 'react';

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
}

export function Counter({ value, onChange, min = 1, max = 99, label }: CounterProps) {
  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  const increment = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="flex items-center gap-4">
      {label && <span className="text-text font-medium">{label}</span>}
      <div className="flex items-center gap-3">
        <button
          onClick={decrement}
          disabled={value <= min}
          className="w-10 h-10 rounded-lg border-2 border-primary text-primary font-bold text-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
        >
          −
        </button>
        <span className="text-2xl font-bold text-text w-12 text-center">{value}</span>
        <button
          onClick={increment}
          disabled={value >= max}
          className="w-10 h-10 rounded-lg border-2 border-primary text-primary font-bold text-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}
