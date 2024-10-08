export type dataType = {
  invoiceNo: string;
  billTo: string;
  date: string;
  paymentTerms?: string | undefined;
  subtotal: string;
  poNumber?: string;
  discount?: string;
  shipping?: string;
  amountPaid?: string;
  logo?: string;
  balanceDue?: string;
  currency?: string;
  items: {
    description: string;
    quantity: number;
    rate: number;
  }[];
  notes?: string;
  termsAndConditions?: string;
};
