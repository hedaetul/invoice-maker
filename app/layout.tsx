import '@/app/globals.css';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { InvoiceProvider } from './context/invoiceContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Invoice Maker - Create invoices effortlessly',
    template: '%s | Invoice Maker',
  },
  description: 'Transforming bills into brilliance...',
  keywords: [
    'invoice',
    'billing',
    'finance',
    'invoice maker',
    'invoice generator',
    'invoice creator',
    'invoice creator',
  ],
  authors: [{ name: 'Hedaetul Islam', url: 'https://github.com/hedaetul' }],
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <InvoiceProvider>
        <body>
          <main className={cn(inter.className)}>{children}</main>
        </body>
      </InvoiceProvider>
    </html>
  );
}
