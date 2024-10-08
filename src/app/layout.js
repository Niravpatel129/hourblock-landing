import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hour Block: Time Tracking and Blocking',
  description:
    'An over-optimized todo list app with integrated Pomodoro tracking, created by an optimization wizard.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
