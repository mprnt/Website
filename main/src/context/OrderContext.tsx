// Client-side order state (persisted to sessionStorage)
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface OrderState {
  sessionToken: string | null;
  kioskId: string | null;
  document: {
    id: string;
    fileName: string;
    fileSize: number;
    pageCount: number;
  } | null;
  config: {
    color: boolean;
    copies: number;
    duplex: boolean;
  };
  quote: {
    amount: number;
    currency: string;
  } | null;
  paymentId: string | null;
  jobId: string | null;
}

const defaultState: OrderState = {
  sessionToken: null,
  kioskId: null,
  document: null,
  config: {
    color: false,
    copies: 1,
    duplex: false,
  },
  quote: null,
  paymentId: null,
  jobId: null,
};

interface OrderContextType {
  order: OrderState;
  updateOrder: (updates: Partial<OrderState>) => void;
  resetOrder: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<OrderState>(defaultState);

  // Persist to sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem('MPrnt_order');
    if (saved) {
      try {
        setOrder(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved order', e);
      }
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('MPrnt_order', JSON.stringify(order));
  }, [order]);

  const updateOrder = (updates: Partial<OrderState>) => {
    setOrder(prev => ({ ...prev, ...updates }));
  };

  const resetOrder = () => {
    setOrder(defaultState);
    sessionStorage.removeItem('MPrnt_order');
  };

  return (
    <OrderContext.Provider value={{ order, updateOrder, resetOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within OrderProvider');
  }
  return context;
}
