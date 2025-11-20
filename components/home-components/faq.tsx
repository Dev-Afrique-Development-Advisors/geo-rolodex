'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Is Geo-Rolodex open access?',
    answer:
      'Access to Geo-Rolodex is invitation-based, ensuring secure and managed entry for participating organizations.'
  },
  {
    question: 'Who can use Geo-Rolodex?',
    answer:
      ' Geo-Rolodex is accessible to a wide range of organizations, including development partners, private companies, government agencies, and other geospatial-based entities operating in low- and middle-income countries (LMICs).'
  },
  {
    question: 'Is Geo-Rolodex a paid service?',
    answer:
      'Geo-Rolodex is currently offered as a free service for invited organizations.'
  },
  {
    question:
      'Who is responsible for identifying and updating stakeholders on the platform?',
    answer:
      'Administrators oversee the addition and identification of new stakeholders, with users also able to recommend potential contacts within their networks.'
  },
  {
    question: 'How secure is Geo-Rolodex?',
    answer:
      'Geo-Rolodex prioritizes data security with robust measures in place to protect user information and ensure compliance with privacy regulations.'
  }
];

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
  index
}: {
  faq: any;
  isOpen: boolean;
  onToggle: (index: number) => void;
  index: number;
}) => (
  <div className='relative mb-4 w-full rounded-lg border bg-white px-4 md:w-full'>
    <div className='flex cursor-pointer items-center justify-between py-4'>
      <h4 className='font-medium'>{faq.question}</h4>
      <span onClick={() => onToggle(index)} className='absolute right-2'>
        {isOpen ? '-' : '+'}
      </span>
    </div>
    {isOpen && <p className='pb-4 text-gray-600'>{faq.answer}</p>}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='mx-auto max-w-2xl scroll-m-10' id='faq'>
      <div className='grid items-center justify-center'>
        <h2 className='font-Inter mb-4 text-xl font-bold md:text-3xl lg:text-4xl'>
          Frequently Asked Questions
        </h2>
      </div>
      <div className='font-Inter grid items-center justify-center'>
        <p className='mb-8 text-sm text-gray-600 md:text-base lg:text-xl'>
          Everything you need to know about Geo-Rolodex.
        </p>
      </div>

      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={handleToggle}
          index={index}
        />
      ))}
    </div>
  );
};

export default FAQ;

