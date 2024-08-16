import { useEffect, useRef } from 'react';

const Carousel = ({ items, containerHeight = '400px', autoPlayInterval = 5000, gap = '20px' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationId;

    const animate = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className='relative w-full' style={{ height: containerHeight }}>
      <div
        ref={containerRef}
        className='w-full overflow-x-hidden whitespace-nowrap rounded-lg'
        style={{ height: '100%' }}
      >
        {items.concat(items).map((item, index) => (
          <div key={index} className='inline-block h-full' style={{ marginRight: gap }}>
            {item.type === 'video' ? (
              <video
                src={item.src}
                className='h-full w-auto object-cover rounded-lg'
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={item.src}
                alt={`Carousel item ${index}`}
                className='h-full w-auto object-cover rounded-lg'
              />
            )}
          </div>
        ))}
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black to-transparent pointer-events-none'></div>
    </div>
  );
};

export default Carousel;
