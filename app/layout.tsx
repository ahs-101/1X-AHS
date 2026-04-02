import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '1X | Home Robots',
  description:
    'Building a world where we do more of what we love, while our humanoid companions handle the rest.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
