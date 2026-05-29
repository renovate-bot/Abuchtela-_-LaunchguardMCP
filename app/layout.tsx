import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LaunchGuard MCP',
  description: 'Safer agentic token discovery on Base using Base MCP.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
