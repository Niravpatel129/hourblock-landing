'use client';

import Carousel from './components/Carousel';
import Features from './components/Features';
import HeroText from './components/HeroText';
import ImageWithSlider from './components/ImageWithSlider';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className={`flex flex-col h-screen bg-white`}>
      <Navbar />
      <div className='flex-1 mt-12'>
        <Carousel
          items={[
            {
              type: 'image',
              src: 'https://assets.ora.pm/landing/header-videos/timeline.jpg',
            },
            {
              type: 'video',
              src: 'https://assets.ora.pm/landing/header-videos/time-tracking-drag.mp4',
            },
            {
              type: 'image',
              src: 'https://ora.pm/_next/image?url=https%3A%2F%2Fassets.ora.pm%2Flanding%2Fheader-videos%2Fchat.jpg&w=828&q=75',
            },
            {
              type: 'video',
              src: 'https://assets.ora.pm/landing/header-videos/time-tracking-drag.mp4',
            },
            {
              type: 'video',
              src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            },
            {
              type: 'video',
              src: 'https://assets.ora.pm/landing/header-videos/time-tracking-drag.mp4',
            },
            {
              type: 'video',
              src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            },
            {
              type: 'image',
              src: 'https://assets.ora.pm/landing/header-videos/timeline.jpg',
            },
          ]}
        />
        <div className=' relative z-10 -mt-64'>
          <HeroText />
        </div>
        <div className='mt-20'>
          <ImageWithSlider />
        </div>
        <div className='mt-20'>
          <Features />
        </div>
      </div>
    </main>
  );
}
