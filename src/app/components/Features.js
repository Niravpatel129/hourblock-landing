import { motion } from 'framer-motion';
import {
  FaBrain,
  FaChartLine,
  FaCloudUploadAlt,
  FaCrown,
  FaRocket,
  FaShieldAlt,
} from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaCrown />,
      title: 'Opulent Interface',
      description:
        'Indulge in a meticulously crafted design that epitomizes luxury in productivity.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: <FaRocket />,
      title: 'Supreme Time Mastery',
      description:
        'Dominate your schedule with our cutting-edge time optimization and task orchestration suite.',
      gradient: 'from-blue-400 to-teal-500',
    },
    {
      icon: <FaChartLine />,
      title: 'Elite Performance Analytics',
      description:
        'Harness the power of our proprietary algorithms for unparalleled productivity insights.',
      gradient: 'from-green-400 to-cyan-500',
    },
    {
      icon: <FaCloudUploadAlt />,
      title: 'Seamless Ecosystem Integration',
      description:
        'Experience unrivaled workflow continuity with our state-of-the-art cloud synchronization technology.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <FaBrain />,
      title: 'AI-Powered Personal Assistant',
      description:
        'Elevate your efficiency with our bespoke AI-driven recommendations and automation.',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Fort Knox-Grade Security',
      description:
        'Protect your data with military-grade encryption and advanced privacy protocols.',
      gradient: 'from-indigo-400 to-purple-500',
    },
  ];

  return (
    <section className='py-32 bg-gradient-to-b from-gray-900 to-black text-white'>
      <div className='container mx-auto px-6'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-7xl font-extrabold text-center mb-20 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
        >
          Unrivaled Premium Features
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-br ${feature.gradient} p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-lg bg-opacity-20`}
            >
              <motion.div
                className='flex items-center mb-8'
                initial={{ x: -20 }}
                whileHover={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className='text-6xl text-white mr-6'
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className='text-3xl font-bold text-white'>{feature.title}</h3>
              </motion.div>
              <motion.p
                className='text-gray-100 leading-relaxed text-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
