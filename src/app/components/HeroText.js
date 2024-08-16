import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaApple } from 'react-icons/fa';

const HeroText = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateImagePosition = () => {
    const moveX = (mousePosition.x - window.innerWidth / 2) / 50;
    const moveY = (mousePosition.y - window.innerHeight / 2) / 50;
    return `translate(${moveX}px, ${moveY}px)`;
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
      <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-black leading-tight'>
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
        A <span className='bg-yellow-200 px-1 rounded'>task manager</span> that works wonders.{' '}
        <span className='bg-yellow-200 px-1 rounded'>Chat, plan, and execute</span> with your team.
        Make every task count.{' '}
        <span className='bg-yellow-200 px-1 rounded'>Sign up for Ora for free today!</span> Get your
        team to be <span className='bg-yellow-200 px-1 rounded'>25% more organized</span> and save
        up to <span className='bg-yellow-200 px-1 rounded'>2 hours each week</span>. Get your{' '}
        <span className='bg-yellow-200 px-1 rounded'>free teamwork boost</span> with Ora today!
      </div>
      <div className='flex justify-center mt-8'>
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href='https://github.com/Niravpatel129/timebank/releases/download/v1.0.31/HourBlock-1.0.31-arm64.dmg'
          className='inline-flex px-6 py-3 bg-[#facd00] text-[#222222] rounded-full text-sm md:text-lg items-center space-x-2 font-sans font-semibold'
        >
          <span>Download</span>
          <FaApple color='black' size={24} />
        </motion.a>
      </div>
    </div>
  );
};

export default HeroText;
