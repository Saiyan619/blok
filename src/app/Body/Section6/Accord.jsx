"use client"
import React, { useState } from 'react';

const Accord = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='md:w-1/2 p-4 m-auto mt-10' id="accordion-open" data-accordion="open">
      <h2 id="accordion-open-heading-1 w-1/2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-800 rounded-t-xl gap-3"
          onClick={() => toggleAccordion(1)}
          aria-expanded={openIndex === 1}
          aria-controls="accordion-open-body-1"
        >
          <span className="flex items-center">
            <svg
              className="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            How does Blok work?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform ${openIndex === 1 ? 'rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-1"
        className={`transition-all duration-300 ${openIndex === 1 ? '' : 'hidden'}`}
        aria-labelledby="accordion-open-heading-1"
      >
        <div className="w-full p-5 text-gray-500 border border-b-0 border-gray-800">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          You select the apps you want to block on the Blok app and then tap the physical Blok to activate the restriction of those apps on your phone.           </p>
          <p className="text-gray-500 dark:text-gray-400">
            If you want to re-enable access to those apps, you&apos;ll have to physically go to where the Blok is and tap it again to unblock.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            This physical friction is what differentiates Blok from other software app blocking solutions.
          </p>
        </div>
      </div>

      <h2 id="accordion-open-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-800 rounded-t-xl gap-3"
          onClick={() => toggleAccordion(2)}
          aria-expanded={openIndex === 2}
          aria-controls="accordion-open-body-2"
        >
          <span className="flex items-center text-left">
            <svg
              className="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            Why can&apos;t I just use an app to block apps?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform ${openIndex === 2 ? 'rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-2"
        className={`transition-all duration-300 ${openIndex === 2 ? '' : 'hidden'}`}
        aria-labelledby="accordion-open-heading-2"
      >
        <div className="w-full p-5 text-gray-500 border border-b-0 border-gray-800">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            You can always choose to extend the time limit or just unblock apps if it&apos;s a solution on your phone. With Blok, it&apos;s a physical device that provides more friction for you to keep distractions on your phone blocked. Imagine you&apos;re blok&apos;d at work but left your Blok at home…
          </p>
        </div>
      </div>

      <h2 id="accordion-open-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-800 rounded-t-xl gap-3"
          onClick={() => toggleAccordion(3)}
          aria-expanded={openIndex === 3}
          aria-controls="accordion-open-body-3"
        >
          <span className="flex items-center">
            <svg
              className="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            Where can I download the Blok app?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform ${openIndex === 3 ? 'rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-3"
        className={`transition-all duration-300 ${openIndex === 3 ? '' : 'hidden'}`}
        aria-labelledby="accordion-open-heading-3"
      >
        <div className="w-full p-5 text-gray-500 border border-b-0 border-gray-800">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            You can download the Blok iOS app here. Android app coming soon.
          </p>
        </div>
      </div>
      
      <h2 id="accordion-open-heading-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-800 rounded-t-xl gap-3"
          onClick={() => toggleAccordion(3)}
          aria-expanded={openIndex === 3}
          aria-controls="accordion-open-body-3"
        >
          <span className="flex items-center text-left">
            <svg
              className="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            What if I really need to use the apps I blocked but can&apos;t access my Blok?
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform ${openIndex === 3 ? 'rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-3"
        className={`transition-all duration-300 ${openIndex === 3 ? '' : 'hidden'}`}
        aria-labelledby="accordion-open-heading-3"
      >
        <div className="w-full p-5 text-gray-500 border border-b-0 border-gray-800">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Don&apos;t worry, you can buy an Emergency Unblok for $5— and the proceeds will be donated to charity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accord;
