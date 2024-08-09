import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaApple, FaChevronRight } from 'react-icons/fa';
import Modal from './Modal';

export default function Hero() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className='flex flex-col items-center justify-center text-center h-full pb-10'>
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

      <Modal isOpen={modalIsOpen} onClose={closeModal} />
    </section>
  );
}
