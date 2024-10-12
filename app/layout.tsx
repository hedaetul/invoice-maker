import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { InvoiceProvider } from './context/invoiceContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'invoice-make',
  description: 'Transforming bills into brilliance...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <InvoiceProvider>
        <body className={cn(inter.className)}>
          {children}
        </body>
      </InvoiceProvider>
    </html>
  );
}
