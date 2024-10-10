export type dataType = {
  invoiceNo: string;
  billTo: string;
  date: string;
  paymentTerms?: string | undefined;
  subtotal: number;
  poNumber?: string;
  discount?: number;
  shipping?: number;
  amountPaid?: number;
  logo?: string;
  balanceDue: number;
  currency?: string;
  items: {
    description: string;
    quantity: number;
    rate: number;
  }[];
  notes?: string;
  termsAndConditions?: string;
};
