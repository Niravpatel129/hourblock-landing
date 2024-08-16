'use client';

import { motion } from 'framer-motion';
import Carousel from './components/Carousel';
import Features from './components/Features';
import HeroText from './components/HeroText';
import ImageWithSlider from './components/ImageWithSlider';
import Navbar from './components/Navbar';
import TwitterFeedback from './components/TwitterFeedback';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

export default function Home() {
  return (
    <motion.main
      className={`flex flex-col h-screen bg-white`}
      initial='hidden'
      animate='visible'
      variants={fadeInVariants}
    >
      <Navbar />
      <div className='flex-1 mt-12'>
        <motion.div variants={fadeInVariants}>
          <Carousel
            items={[
              {
                type: 'video',
                src: 'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/1.mov?alt=media&token=c38c8d98-4d18-42c8-b781-0443169c3add',
              },
              {
                type: 'video',
                src: 'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/2.mov?alt=media&token=45bb5968-925e-4d24-9968-7169084f2dcb',
              },
              {
                type: 'image',
                src: 'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/21a.png?alt=media&token=e32a7e48-02cb-418b-83f8-860750be2a7f',
              },
              {
                type: 'video',
                src: 'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/3.mov?alt=media&token=b63b6d78-2027-4b21-9103-3bd38a3b29a9',
              },
              {
                type: 'image',
                src: 'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/Pasted%20Graphic.png?alt=media&token=60bf0b1d-d618-4344-aa67-7d8ea169e956',
              },
              {
                type: 'video',
                src: 'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/5.mov?alt=media&token=7ea120a3-88aa-41f1-a5b0-67e8e5a15eeb',
              },
              {
                type: 'video',
                src: 'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/6.mov?alt=media&token=301f55f1-d0ea-4d56-a0d6-e0f76b2c2481',
              },
              {
                type: 'video',
                src: 'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/7.mov?alt=media&token=33f07f08-9d0a-4a0a-a685-7700e2ff5575',
              },
              {
                type: 'image',
                src: 'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/Pasted%20Graphic%202.png?alt=media&token=54b32f0e-ff58-4889-9467-07c12fdc204f',
              },
            ]}
          />
        </motion.div>

        <motion.div
          className='relative z-10 -mt-72 flex flex-col items-center'
          variants={fadeInVariants}
        >
          <HeroText />
        </motion.div>

        <motion.div className='mt-32' variants={fadeInVariants}>
          <TwitterFeedback />
        </motion.div>
        <motion.div className='-mt-8' variants={fadeInVariants}>
          <ImageWithSlider />
        </motion.div>

        <motion.div className='mt-20' variants={fadeInVariants}>
          <Features />
        </motion.div>
      </div>
    </motion.main>
  );
}
