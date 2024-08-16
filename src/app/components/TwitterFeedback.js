import { tweets } from '@/utils/tweets';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaTwitter } from 'react-icons/fa';

const TwitterFeedback = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const [randomizedTweets, setRandomizedTweets] = useState([]);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    // Randomize tweets and repeat them
    const shuffledTweets = shuffleArray([...tweets]);
    setRandomizedTweets(
      shuffledTweets.concat(shuffledTweets).concat(shuffledTweets).concat(shuffledTweets),
    );
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollInterval = setInterval(() => {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
        setScrollPosition(container.scrollLeft);
      }, 30);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  //   useEffect(() => {
  //     const container = containerRef.current;
  //     if (container) {
  //       const preventScroll = (e) => {
  //         e.preventDefault();
  //       };

  //       container.addEventListener('wheel', preventScroll, { passive: false });
  //       container.addEventListener('touchmove', preventScroll, { passive: false });

  //       return () => {
  //         container.removeEventListener('wheel', preventScroll);
  //         container.removeEventListener('touchmove', preventScroll);
  //       };
  //     }
  //   }, []);

  return (
    <div className='w-full overflow-hidden bg-white'>
      <h2 className='text-3xl font-bold mb-6 text-center text-[#14171A]'>Why we work so hard</h2>
      <div
        ref={containerRef}
        className='flex overflow-x-scroll'
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {randomizedTweets.map((tweet, index) => (
          <div
            key={`${tweet.id}-${index}`}
            className='flex-shrink-0 w-80 mx-2 cursor-pointer select-none'
          >
            <div className='tweet-card bg-white rounded-lg shadow-md p-6 border border-[#E1E8ED] text-[#14171A] flex flex-col'>
              <div className='flex justify-between items-start mb-4'>
                <Image
                  src={tweet.avatar}
                  alt={tweet.author}
                  width={48}
                  height={48}
                  className='rounded-full'
                />
                <FaTwitter className='text-[#1DA1F2] text-xl' />
              </div>
              <div className='mb-3'>
                <p className='font-bold flex items-center'>
                  {tweet.author}
                  {index % 3 === 0 && (
                    <span className='ml-1 text-[#1DA1F2]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  )}
                </p>
                <p className='text-[#657786] text-sm'>{tweet.handle}</p>
              </div>
              <p className='text-[#14171A] mb-3 flex-grow'>{tweet.content}</p>
              <p className='text-[#657786] text-sm mt-auto'>{tweet.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterFeedback;
