import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Carousel = ({
  items,
  containerHeight = '400px',
  autoPlayInterval = 5000,
  gap = '20px',
  playbackRate = 1,
}) => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setVisibleItems(items.concat(items));
    }
  }, [inView, items]);

  useEffect(() => {
    const container = containerRef.current;
    let animationId;

    const animate = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 0.5;
      }
      animationId = requestAnimationFrame(animate);
    };

    if (inView) {
      animationId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationId);
  }, [inView]);

  return (
    <div ref={ref} className='relative w-full' style={{ height: containerHeight }}>
      <div
        ref={containerRef}
        className='w-full overflow-x-hidden whitespace-nowrap rounded-lg'
        style={{ height: '100%' }}
      >
        {visibleItems.map((item, index) => (
          <div key={index} className='inline-block h-full' style={{ marginRight: gap }}>
            {item.type === 'video' ? (
              <video
                src={item.src}
                className='h-full w-auto object-cover rounded-lg'
                autoPlay
                loop
                muted
                playsInline
                playbackrate={playbackRate}
                loading='lazy'
              />
            ) : (
              <Image
                src={item.src}
                alt={`Carousel item ${index}`}
                className='h-full w-auto object-cover rounded-lg'
                width={500}
                height={500}
                loading='lazy'
              />
            )}
          </div>
        ))}
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-[900px] bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none'></div>
    </div>
  );
};

export default Carousel;
