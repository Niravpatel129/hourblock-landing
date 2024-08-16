'use client';

import Carousel from './components/Carousel';
import HeroText from './components/HeroText';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className={`flex flex-col h-screen bg-white`}>
      <Navbar />
      <div className='flex-1 mt-16'>
        <Carousel
          items={[
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
              type: 'video',
              src: 'https://assets.ora.pm/landing/header-videos/time-tracking-drag.mp4',
            },
          ]}
        />
        <div className='-mt-72 relative z-10'>
          <HeroText />
        </div>
      </div>
    </main>
  );
}
