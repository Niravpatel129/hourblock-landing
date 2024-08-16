import Image from 'next/image';
import { useEffect, useState } from 'react';

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
    <div className='text-center max-w-4xl mx-auto relative'>
      <Image
        src='https://ora.pm/_next/image?url=%2Ffeatures-overview%2Flightning.png&w=256&q=75'
        alt='Lightning'
        width={100}
        height={100}
        className='absolute'
        style={{
          top: '-50px',
          left: '-50px',
          transform: calculateImagePosition(),
          transition: 'transform 0.1s ease-out',
        }}
      />
      <h1 className='text-4xl md:text-8xl font-bold mb-4 text-white'>
        Get more done with your team
      </h1>
      <Image
        src='https://ora.pm/_next/image?url=%2Ffeatures-overview%2Flightning.png&w=256&q=75'
        alt='Lightning'
        width={100}
        height={100}
        className='absolute'
        style={{
          bottom: '-50px',
          right: '-50px',
          transform: calculateImagePosition(),
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
};

export default HeroText;
