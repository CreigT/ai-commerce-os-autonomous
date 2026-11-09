import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AutoCommerce AI — Autonomous AI Commerce SaaS',
  description: 'Fully autonomous AI-powered commerce company. Agents run everything. You only own it.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
