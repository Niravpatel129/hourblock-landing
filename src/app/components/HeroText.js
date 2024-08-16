import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaApple } from 'react-icons/fa';

const HeroText = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Initialize window size
    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const calculateImagePosition = () => {
    if (typeof window !== 'undefined') {
      const moveX = (mousePosition.x - windowSize.width / 2) / 50;
      const moveY = (mousePosition.y - windowSize.height / 2) / 50;
      return `translate(${moveX}px, ${moveY}px)`;
    }
    return 'translate(0px, 0px)';
  };

  return (
    <div className='text-center max-w-4xl mx-auto relative px-4'>
      <Image
        src='https://ora.pm/_next/image?url=%2Ffeatures-overview%2Flightning.png&w=256&q=75'
        alt='Lightning'
        width={120}
        height={120}
        className='absolute hidden md:block'
        style={{
          top: '-60px',
          left: '-60px',
          transform: calculateImagePosition(),
          transition: 'transform 0.1s ease-out',
        }}
      />
      <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text font-sans'>
        Get more done with your team
      </h1>
      <Image
        src='https://ora.pm/_next/image?url=%2Ffeatures-overview%2Flightning.png&w=256&q=75'
        alt='Lightning'
        width={120}
        height={120}
        className='absolute hidden md:block'
        style={{
          bottom: '-60px',
          right: '-60px',
          transform: calculateImagePosition(),
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div className='text-lg md:text-xl text-gray-700 leading-relaxed'>
        A task manager enhancing productivity. Collaborate and implement with your team. Maximize
        task impact. Join us for streamlined workflow. Improve organization and efficiency. Discover
        productivity potential. Elevate teamwork with our innovative platform.
      </div>
      <div className='flex justify-center mt-8'>
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href='https://github.com/Niravpatel129/timebank/releases/download/v1.0.31/HourBlock-1.0.31-arm64.dmg'
          className='inline-flex px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white rounded-full text-sm md:text-lg items-center space-x-2 font-sans font-semibold'
        >
          <span>Download</span>
          <FaApple color='white' size={24} />
        </motion.a>
      </div>
    </div>
  );
};

export default HeroText;
