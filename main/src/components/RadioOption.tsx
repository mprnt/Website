import React from 'react';

interface RadioOptionProps {
  value: string;
  label: string;
  description?: string;
  selected: boolean;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}

export function RadioOption({ value, label, description, selected, onChange, icon }: RadioOptionProps) {
  return (
    <button
      onClick={() => onChange(value)}
      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
        selected
          ? 'border-primary bg-primary/5'
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${
            selected ? 'border-primary' : 'border-gray-300'
          }`}
        >
          {selected && <div className="w-full h-full rounded-full bg-primary scale-50" />}
        </div>
        {icon && <div className="text-2xl flex-shrink-0">{icon}</div>}
        <div className="flex-1">
          <div className="font-semibold text-text">{label}</div>
          {description && <div className="text-sm text-text-muted mt-1">{description}</div>}
        </div>
      </div>
    </button>
  );
}
