'use client';

import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className={`flex flex-col h-screen bg-white`}>
      <Navbar />
      <div className='flex-1  p-4'>
        <Hero />
      </div>
    </main>
  );
}
