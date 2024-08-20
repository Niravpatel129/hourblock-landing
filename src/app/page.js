'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import Carousel from './components/Carousel';
import Features from './components/Features';
import HeroText from './components/HeroText';
import ImageWithSlider from './components/ImageWithSlider';
import Navbar from './components/Navbar';
import TwitterFeedback from './components/TwitterFeedback';

// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCGL__U8Jyoc2Tx464hqpebdqxP67-RxZU',
  authDomain: 'hour-block.firebaseapp.com',
  projectId: 'hour-block',
  storageBucket: 'hour-block.appspot.com',
  messagingSenderId: '268186241424',
  appId: '1:268186241424:web:c594017a41d0bf644f0b15',
  measurementId: 'G-D2PL9QPL1F',
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ipAddress, setIpAddress] = useState('');
  const [ipError, setIpError] = useState('');

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Fetch IP address
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.error('Error fetching IP:', error));

    // Facebook Conversions API
    const sendFacebookEvent = async (eventName) => {
      const API_VERSION = 'v17.0'; // Update this to the latest version
      const PIXEL_ID = '8018464834939308';
      const TOKEN = process.env.NEXT_PUBLIC_FACEBOOK_TOKEN;

      const validateIpAddress = (ip) => {
        const ipRegex =
          /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipRegex.test(ip);
      };

      if (!validateIpAddress(ipAddress)) {
        console.log('Invalid IP address:', ipAddress);
        setIpError('The IP address you entered is invalid. Enter a valid IP address.');
        return;
      }

      const eventData = {
        data: [
          {
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            action_source: 'website',
            user_data: {
              client_ip_address: ipAddress,
              client_user_agent: '{{client_user_agent}}',
            },
          },
        ],
      };

      try {
        const response = await fetch(
          `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${TOKEN}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
          },
        );
        const result = await response.json();
        console.log('Facebook event sent:', result);
      } catch (error) {
        console.error('Error sending Facebook event:', error);
      }
    };

    sendFacebookEvent('PageView');

    // Track download event
    const trackDownload = () => {
      sendFacebookEvent('Download');
    };

    // Add event listener to download button
    const downloadButton = document.querySelector('#download-button');
    const downloadHeroButton = document.querySelector('#download-hero-button');

    if (downloadButton) {
      downloadButton.addEventListener('click', trackDownload);
    }
    if (downloadHeroButton) {
      downloadHeroButton.addEventListener('click', trackDownload);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (downloadButton) {
        downloadButton.removeEventListener('click', trackDownload);
      }

      if (downloadHeroButton) {
        downloadHeroButton.removeEventListener('click', trackDownload);
      }
    };
  }, [ipAddress]);

  return (
    <>
      <Script strategy='afterInteractive' id='facebook-pixel'>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '8018464834939308');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=8018464834939308&ev=PageView&noscript=1'
        />
      </noscript>
      <motion.main
        className={`flex flex-col min-h-screen bg-white overflow-y-auto`}
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
                  type: 'image',
                  src: 'https://firebasestorage.googleapis.com/v0/b/boloprint.appspot.com/o/1111111.png?alt=media&token=cc4cadf9-5cb2-4547-9a98-3119c16dff95',
                },
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
          <motion.div className='' variants={fadeInVariants}>
            <ImageWithSlider />
          </motion.div>

          <motion.div className='mt-20' variants={fadeInVariants}>
            <Features />
          </motion.div>

          <motion.div className='mt-0' variants={fadeInVariants}>
            <FAQ />
          </motion.div>
          <Footer />
        </div>

        <motion.div
          className='fixed top-0 left-0 w-full h-full pointer-events-none z-50'
          animate={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        />
      </motion.main>
    </>
  );
}
