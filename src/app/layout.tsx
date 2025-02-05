import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NextJS ChatGPT App',
  description: 'ChatGPT brought to you by NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased px-2 md:px-5`}>
        <header className="text-white font-bold bg-green-900 text-2xl">
          <div className="flex flex-grow">
            <Link href="/">GPT Chat</Link>
            <Link href="/about" className="ml-5 font-light">
              About
            </Link>
          </div>
        </header>

        <div className="flex flex-col md:flex-row">
          <div className="flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
