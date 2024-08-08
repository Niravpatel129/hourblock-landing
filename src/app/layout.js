import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Todo List with Pomodoro Tracking',
  description:
    'An over-optimized todo list app with integrated Pomodoro tracking, created by an optimization wizard.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
