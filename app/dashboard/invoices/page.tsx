import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices',
  description: 'View and manage your invoice records.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <p>Invoices Page</p>;
}