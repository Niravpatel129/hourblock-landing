import Image from 'next/image';
import { FaApple, FaChevronRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className='flex flex-col items-center justify-center text-center pt-5'>
      <div className='flex space-x-4 mb-4 w-full items-center justify-evenly'>
        <Image src='/Webinar-amico.png' alt='Sun' width={400} height={400} />
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
            <button className='mt-8 px-6 py-3 bg-[#facd00] text-[#222222] rounded-full text-lg flex items-center space-x-2 font-sans font-semibold'>
              <span>Download</span>
              <FaApple color='black' size={24} />
            </button>
          </div>
        </div>
        <Image
          src='https://cdn.prod.website-files.com/6307868789eb60b1fb712ff1/63271e24c2acfcbba2082e7a_Financial%20Stress.png'
          alt='Sun'
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
