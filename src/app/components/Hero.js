import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaApple, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Hero() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className='flex flex-col items-center justify-center text-center h-full pb-16'>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 w-full items-center justify-evenly'>
        <motion.div
          className='hidden md:block'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src='/Webinar-amico.png' alt='Sun' width={400} height={400} />
        </motion.div>
        <div className='flex items-center justify-center flex-col'>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='py-2 bg-[#f1f5fb] text-black rounded-full flex items-center pl-4 pr-2 text-sm gap-1'
          >
            <span>Show your support on</span> <strong>Product Hunt</strong>
            <div className='flex items-center justify-center bg-[#ffffff] rounded-full  p-2 ml-2'>
              <FaChevronRight size={19} />
            </div>
          </motion.button>
          <div className='max-w-2xl mx-auto mt-8 flex flex-col items-center justify-center'>
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='text-4xl md:text-6xl font-bold mb-4'
            >
              Manage your project. Anywhere. Anytime.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='text-sm md:text-md mb-8 text-[#444444] mt-4 font-medium'
            >
              <span className='text-[#444444] bg-[#facd00]'>Hour Block</span> is not just a simple
              app for managing your to-do list. It&apos;s a training app to get things done.
              It&apos;s free, it&apos;s simple!
            </motion.p>
            <div>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href='https://github.com/Niravpatel129/timebank/releases/download/v1.0.27/Timebank-1.0.27-arm64.dmg'
                className='mt-8 px-6 py-3 bg-[#facd00] text-[#222222] rounded-full text-sm md:text-lg flex items-center space-x-2 font-sans font-semibold'
              >
                <span>Download</span>
                <FaApple color='black' size={24} />
              </motion.a>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={openModal}
                className='text-xs md:text-sm hover:underline'
              >
                <span>Preview</span>
              </motion.button>
            </div>
          </div>
        </div>
        <motion.div
          className='hidden md:block'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src='https://cdn.prod.website-files.com/6307868789eb60b1fb712ff1/63271e24c2acfcbba2082e7a_Financial%20Stress.png'
            alt='Sun'
            width={400}
            height={400}
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {modalIsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className='bg-white p-4 rounded-lg max-w-4xl w-full'
            >
              <div className='flex flex-col items-center'>
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className='text-2xl font-bold mb-2'
                >
                  App Preview
                </motion.h2>
                <div className='flex items-center justify-center space-x-2'>
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
                  <div className='flex flex-col items-center'>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src='https://cdn.dribbble.com/userupload/11353994/file/original-a9c8a327f628354c23a282a2b852c9f9.png?resize=2048x1536'
                        alt='Preview 1'
                        width={400}
                        height={400}
                      />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className='mt-2 text-center text-sm max-w-sm'
                    >
                      This is a preview of the app&apos;s main dashboard, showcasing the user
                      interface and key features.
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
                  onClick={closeModal}
                  className='mt-2 px-4 py-2 bg-[#facd00] text-[#222222] rounded-full text-lg font-bold'
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
