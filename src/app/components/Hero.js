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
    <section className='flex flex-col items-center justify-center text-center h-full pb-20'>
      <div className='flex space-x-4 mb-4 w-full items-center justify-evenly'>
        <Image src='/Webinar-amico.png' alt='Sun' width={500} height={500} />
        <div className='flex items-center justify-center flex-col'>
          <button className='py-2 bg-[#f1f5fb] text-black rounded-full flex items-center space-x-2 pl-2 pr-1'>
            <span>Show your support on</span> <strong>Product Hunt</strong>
            <div className='flex items-center justify-center bg-[#ffffff] rounded-full  p-2'>
              <FaChevronRight size={19} />
            </div>
          </button>
          <div className='max-w-2xl mx-auto mt-8 flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-bold mb-4'>Manage your project. Anywhere. Anytime.</h1>
            <p className='text-md mb-8 text-[#444444] mt-12'>
              <span className='text-[#000000] bg-[#facd00]'>Hour Block</span> is a simple app for
              managing your personal project. It&apos;s free, it&apos;s fully offline, it&apos;s
              simple!
            </p>
            <div>
              <button className='mt-8 px-6 py-3 bg-[#facd00] text-[#222222] rounded-full text-lg flex items-center space-x-2 font-sans font-semibold'>
                <span>Download</span>
                <FaApple color='black' size={24} />
              </button>
              <button onClick={openModal} className=' text-sm hover:underline'>
                <span>Preview</span>
              </button>
            </div>
          </div>
        </div>
        <Image
          src='https://cdn.prod.website-files.com/6307868789eb60b1fb712ff1/63271e24c2acfcbba2082e7a_Financial%20Stress.png'
          alt='Sun'
          width={500}
          height={500}
        />
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
                <h2 className='text-2xl font-bold mb-2'>App Preview</h2>
                <div className='flex items-center justify-center space-x-2'>
                  <button className='p-2 bg-gray-200 rounded-full'>
                    <FaChevronLeft size={24} />
                  </button>
                  <div className='flex flex-col items-center'>
                    <Image
                      src='https://cdn.dribbble.com/userupload/11353994/file/original-a9c8a327f628354c23a282a2b852c9f9.png?resize=2048x1536'
                      alt='Preview 1'
                      width={500}
                      height={500}
                    />
                    <p className='mt-2 text-center text-sm max-w-sm'>
                      This is a preview of the app&apos;s main dashboard, showcasing the user
                      interface and key features.
                    </p>
                  </div>
                  <button className='p-2 bg-gray-200 rounded-full'>
                    <FaChevronRight size={24} />
                  </button>
                </div>
                <button
                  onClick={closeModal}
                  className='mt-2 px-4 py-2 bg-[#facd00] text-[#222222] rounded-full text-lg font-bold'
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
