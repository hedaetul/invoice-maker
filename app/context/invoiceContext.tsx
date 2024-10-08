'use client';

import React, { createContext, useContext, useState } from 'react';
import { dataType } from '../types/dataTypes';

interface InvoiceContextProps {
  invoiceData: dataType | null;
  setInvoiceData: (data: dataType) => void;
}

const InvoiceContext = createContext<InvoiceContextProps | undefined>(
  undefined
);

export const useInvoiceContext = () => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error('useInvoiceContext must be used within an InvoiceProvider');
  }
  return context;
};

export const InvoiceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [invoiceData, setInvoiceData] = useState<dataType | null>(null);

  return (
    <InvoiceContext.Provider value={{ invoiceData, setInvoiceData }}>
      {children}
    </InvoiceContext.Provider>
  );
};
