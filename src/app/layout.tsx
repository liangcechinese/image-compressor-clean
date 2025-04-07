import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Image Compressor - Optimize your images easily',
  description: 'A free online tool to compress and optimize your images without losing quality',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <div className="container py-4">
              <h1 className="text-2xl font-bold gradient-text">Image Compressor</h1>
            </div>
          </header>
          {children}
          <footer className="mt-auto py-6 bg-white border-t">
            <div className="container text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Image Compressor. All rights reserved.
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}