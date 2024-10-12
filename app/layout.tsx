import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { InvoiceProvider } from './context/invoiceContext';
import { link } from 'fs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'invoice-make',
  description: 'Transforming bills into brilliance...',
  keywords: 'invoice, billing, finance, invoice maker, invoice generator',
  authors: [{ name: 'Hedaetul Islam', url: 'https://github.com/hedaetul' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
         <link rel="icon" href="/favicon.ico" sizes="xl" />
      </head>
      <InvoiceProvider>
        <body className={cn(inter.className)}>
          {children}
        </body>
      </InvoiceProvider>
    </html>
  );
}
