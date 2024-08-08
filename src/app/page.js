'use client';

import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className={`flex flex-col h-screen`}>
      <Navbar />
      <div className='flex-1 bg-white p-4'>Main Content</div>
    </main>
  );
}
