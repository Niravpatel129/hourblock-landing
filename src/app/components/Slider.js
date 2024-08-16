import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

const Slider = ({ labels, sliderPosition, onSliderChange }) => {
  const [activeIndex, setActiveIndex] = useState(sliderPosition);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setActiveIndex(sliderPosition);
  }, [sliderPosition]);

  const handleInteraction = useCallback(
    (event) => {
      if (sliderRef.current) {
        const sliderRect = sliderRef.current.getBoundingClientRect();
        const interactionPosition = (event.clientX - sliderRect.left) / sliderRect.width;
        const newIndex = Math.round(interactionPosition * (labels.length - 1));

        if (newIndex >= 0 && newIndex < labels.length) {
          setActiveIndex(newIndex);
          onSliderChange(newIndex);
        }
      }
    },
    [labels.length, onSliderChange],
  );

  const handleDrag = useCallback(
    (event, info) => {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const position = (info.point.x - sliderRect.left) / sliderRect.width;
      const newIndex = Math.round(position * (labels.length - 1));

      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < labels.length) {
        setActiveIndex(newIndex);
        onSliderChange(newIndex);
      }
    },
    [activeIndex, labels.length, onSliderChange],
  );

  return (
    <div className='flex flex-col items-center'>
      <motion.div
        ref={sliderRef}
        className='w-full h-4 bg-gray-200 rounded-full relative cursor-pointer'
        whileHover={{ height: '16px', transition: { duration: 0.2 } }}
        onClick={handleInteraction}
        onMouseMove={handleInteraction}
      >
        <motion.div
          className='h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full'
          style={{
            width: `${(activeIndex / (labels.length - 1)) * 100}%`,
          }}
          fill
        />
      </motion.div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className='mt-4 text-center text-sm text-gray-600'
        >
          Current selection:{' '}
          <span className='font-semibold text-indigo-600'>{labels[activeIndex]}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
