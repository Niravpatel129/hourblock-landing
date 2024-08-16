import Image from 'next/image';
import { useState } from 'react';
import Slider from './Slider.js';

export default function ImageWithSlider() {
  const [sliderPosition, setSliderPosition] = useState(2); // Default to middle position

  const labels = ['Simplicity', 'Todo List', 'Tasks & Subtasks', 'Basic Tracking', 'Raw Power'];

  const handleSliderChange = (index) => {
    setSliderPosition(index);
  };

  return (
    <div className='-mt-5 relative w-full h-full bg-gradient-to-r from-white via-gray-100 to-white min-h-screen flex flex-col justify-center items-center'>
      <div className='absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent'></div>
      <div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent'></div>
      <h2 className='text-6xl font-bold mb-8 text-gray-800'>Choose Your Productivity Level</h2>
      <div className='relative z-10 w-3/4 h-3/4 max-w-4xl max-h-4xl'>
        <div className='rounded-3xl overflow-hidden border-8 border-white shadow-lg'>
          <Image
            src='https://nethunt.com/blog/content/images/2024/01/1.png'
            alt='Big image in the middle'
            width={800}
            height={600}
            layout='responsive'
            priority
            className='rounded-2xl'
          />
        </div>
      </div>
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 max-w-md'>
        <Slider
          labels={labels}
          sliderPosition={sliderPosition}
          onSliderChange={handleSliderChange}
        />
      </div>
    </div>
  );
}
