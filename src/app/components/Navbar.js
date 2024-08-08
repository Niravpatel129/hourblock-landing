import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaApple, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <nav className='flex justify-center items-center px-4 bg-white font-sans border-b border-gray-200'>
      <motion.div
        className='flex items-center space-x-4 absolute left-4'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => showToast('Twitter coming soon!')}
          className='flex items-center space-x-1'
        >
          <FaTwitter size={24} />
          <span className='text-sm font-bold'>Twitter</span>
        </button>
        <button
          onClick={() => showToast('Instagram coming soon!')}
          className='flex items-center space-x-1'
        >
          <FaInstagram size={24} />
          <span className='text-sm font-bold'>Instagram</span>
        </button>
      </motion.div>
      <motion.div
        className='flex items-center space-x-2'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-4xl font-bold tracking-[px] m-0 mt-0'>Hour Block</h2>
        <Image
          src='https://www.svgheart.com/wp-content/uploads/2020/09/sun-free-svg-file.png'
          alt='Sun'
          width={76}
          height={76}
        />
      </motion.div>
      <motion.div
        className='absolute right-4'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button className='flex items-center px-4 py-2 bg-black text-white rounded-full space-x-2'>
          <span>Download</span>
          <FaApple size={24} />
        </button>
      </motion.div>
      {toastMessage && (
        <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded'>
          {toastMessage}
        </div>
      )}
    </nav>
  );
}
