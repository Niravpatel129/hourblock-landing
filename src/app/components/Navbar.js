import { DOWNLOAD_LINK } from '@/utils/config';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaApple, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  const [toastMessage, setToastMessage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <nav className='flex justify-between items-center px-2 md:px-4 bg-white font-sans mt-4 '>
      <motion.div
        className='flex items-center space-x-4'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex space-x-4'>
          <button
            onClick={() => showToast('Twitter coming soon!')}
            className='flex items-center space-x-1'
          >
            <FaTwitter size={24} />
            <span className='text-sm font-bold md:block hidden'>Twitter</span>
          </button>
          <button
            onClick={() => showToast('Instagram coming soon!')}
            className='flex items-center space-x-1'
          >
            <FaInstagram size={24} />
            <span className='text-sm font-bold md:block hidden'>Instagram</span>
          </button>
        </div>
      </motion.div>
      <motion.div
        className='flex items-center'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <h2 className='text-2xl md:text-4xl font-bold tracking-[px] m-0 mt-0'>Hour Block</h2>
        <Image
          src='https://www.svgheart.com/wp-content/uploads/2020/09/sun-free-svg-file.png'
          alt='Sun'
          width={50}
          height={50}
          className='md:w-[76px] md:h-[76px] object-contain'
        />
      </motion.div>
      <motion.div
        className=''
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href={DOWNLOAD_LINK}
          className='flex items-center px-4 py-2 bg-black text-white rounded-full gap-2'
        >
          <span className='hidden md:block'>Download</span>
          <FaApple size={24} />
        </a>
      </motion.div>
      {toastMessage && (
        <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded'>
          {toastMessage}
        </div>
      )}
    </nav>
  );
}
