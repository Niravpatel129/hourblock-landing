import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className='border-b border-gray-200 py-6'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className='flex justify-between items-center w-full text-left'>
        <span className='text-xl font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'>
          {question}
        </span>
        <span className='text-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'>
          {isOpen ? '−' : '+'}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='mt-4 text-gray-600 text-lg overflow-hidden'
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'What is HourBlock?',
      answer:
        'HourBlock is a productivity app designed to help you manage your tasks and time more effectively. It combines the simplicity of a to-do list with powerful task management features.',
    },
    {
      question: 'How is HourBlock different from other task managers?',
      answer:
        'HourBlock focuses on getting things done rather than just listing tasks. It offers a unique blend of simplicity and power, allowing you to scale your productivity from basic task listing to complex project management.',
    },
    {
      question: 'Is HourBlock available for Windows or mobile devices?',
      answer:
        "Currently, HourBlock is available for Mac. We're working on expanding to other platforms in the future.",
    },
    {
      question: 'How much does HourBlock cost?',
      answer:
        'HourBlock is completely free to use. We believe in providing powerful productivity tools without any cost barriers. Enjoy all features without any limitations!',
    },
    {
      question: 'Can I sync HourBlock across multiple devices?',
      answer:
        "Yes, HourBlock supports cloud syncing, allowing you to access your tasks and projects from any device where you've installed the app.",
    },
  ];

  return (
    <div className='max-w-5xl mx-auto py-24 px-6 sm:py-32 sm:px-8 lg:px-12'>
      <h2 className='text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text'>
        Frequently Asked Questions
      </h2>
      <div className='mt-12 border-t border-gray-200 pt-12 bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-xl p-10'>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
