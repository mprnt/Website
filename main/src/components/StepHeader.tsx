import React from 'react';

interface StepHeaderProps {
  step: number;
  title: string;
  subtitle?: string;
}

export function StepHeader({ step, title, subtitle }: StepHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
          {step}
        </div>
        <h1 className="text-2xl font-bold text-text">{title}</h1>
      </div>
      {subtitle && <p className="text-text-muted ml-11">{subtitle}</p>}
    </div>
  );
}

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

export function Stepper({ currentStep, totalSteps }: StepperProps) {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-colors ${
            i < currentStep ? 'bg-primary' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
}
