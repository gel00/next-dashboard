import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
  description: 'View and manage customer information and details.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function Page() {
  return <p>Customers Page</p>;
}