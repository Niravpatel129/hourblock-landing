import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider from './Slider.js';

export default function ImageWithSlider() {
  const [sliderPosition, setSliderPosition] = useState(2); // Default to middle position
  const [currentImage, setCurrentImage] = useState(2);

  const labels = ['Simplicity', 'Todo List', 'Tasks & Subtasks', 'Basic Tracking', 'Raw Power'];

  const images = [
    'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/Group%201.png?alt=media&token=14ded289-dae7-407b-abe1-feae53194934',
    'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/Group%201.png?alt=media&token=14ded289-dae7-407b-abe1-feae53194934',
    'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/Group%201%20(1).png?alt=media&token=a40fa9fb-7616-4ae8-8ff2-be62a4381600',
    'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/Group%201%20(2).png?alt=media&token=56aef328-4565-49b3-a2ef-fa732c84af52',
    'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/Group%201%20(3).png?alt=media&token=3613ff28-f2aa-40ef-bc0d-19306070d231',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage(sliderPosition);
    }, 300); // Delay image change to allow for fade effect

    return () => clearTimeout(timer);
  }, [sliderPosition]);

  const handleSliderChange = (index) => {
    setSliderPosition(index);
  };

  return (
    <div className='relative w-full min-h-screen flex flex-col justify-center items-center pb-[100px] bg-gradient-to-r from-white via-gray-100 to-white'>
      <div className='absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent'></div>
      <div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent'></div>
      <h2 className='text-6xl font-bold mb-8 text-blue-800'>Choose Your Productivity Level</h2>
      <div className='relative z-10 w-3/4 h-[70vh] max-w-5xl border-4 border-black rounded-3xl overflow-hidden'>
        {' '}
        {/* Increased height from 60vh to 70vh */}
        <div className='rounded-3xl overflow-hidden  shadow-lg h-full'>
          {' '}
          {/* Increased border width from 8 to 12 */}
          <AnimatePresence mode='wait'>
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentImage ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              >
                <Image
                  src={src}
                  alt={`Productivity level: ${labels[index]}`}
                  layout='fill'
                  objectFit='cover'
                  priority={index === currentImage}
                  className='rounded-2xl'
                />
              </motion.div>
            ))}
          </AnimatePresence>
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
