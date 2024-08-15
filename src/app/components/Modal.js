import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-hidden'
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className='bg-white p-4 rounded-lg max-w-full w-full h-full flex flex-col items-center justify-center overflow-hidden'
        >
          <div className='flex flex-col items-center w-full h-full overflow-hidden'>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-2xl font-bold mb-2'
            >
              App Preview
            </motion.h2>
            <div className='flex items-center justify-center space-x-2 w-full h-full overflow-hidden'>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='p-2 bg-gray-200 rounded-full'
              >
                <FaChevronLeft size={24} />
              </motion.button>
              <div className='flex flex-col items-center w-full h-full overflow-hidden'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className='w-full h-full flex items-center justify-center overflow-hidden'
                >
                  <div className='relative w-full h-full'>
                    <Image
                      src='https://cdn.dribbble.com/userupload/11353994/file/original-a9c8a327f628354c23a282a2b852c9f9.png?resize=2048x1536'
                      alt='Preview 1'
                      fill
                      objectFit='contain'
                    />
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className='mt-2 text-center text-sm max-w-sm'
                >
                  This is a preview of the app&apos;s main dashboard, showcasing the user interface
                  and key features.
                </motion.p>
              </div>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='p-2 bg-gray-200 rounded-full'
              >
                <FaChevronRight size={24} />
              </motion.button>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className='mt-2 px-4 py-2 bg-[#facd00] text-[#222222] rounded-full text-lg font-bold'
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
