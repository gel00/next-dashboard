import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices | Acme Dashboard',
  description: 'Create, view, and manage your invoices. Track payment status and maintain detailed records of all transactions.',
};

export default function Page() {
  return <p>Invoices Page</p>;
}