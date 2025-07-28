
import React, { useState } from 'react';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const faqData = [
  {
    question: "What is your PC building process?",
    answer: "Simple! First, you acquire all your PC components. Then, you fill out our contact form to schedule your build. After you ship or drop off your parts, we assemble, test, and prepare your new PC for pickup or return shipping."
  },
  {
    question: "How long does the assembly and testing take?",
    answer: "Once we have received all of your components, the professional assembly and rigorous stress testing process typically takes 3-5 business days."
  },
  {
    question: "What kind of warranty do you offer?",
    answer: "We provide a 1-year warranty on our assembly labor. Since you purchase the components, all parts are covered by their direct manufacturer warranties."
  },
  {
    question: "What if I need help choosing parts before I buy them?",
    answer: "We're happy to help you choose the perfect parts for your build, and we do it for free! We'll work with you to create a PCPartPicker list that matches your budget and performance goals, ensuring compatibility and value."
  },
  {
    question: "Do you only assemble gaming PCs?",
    answer: "Yes, our focus is exclusively on high-performance gaming PCs. We have a particular expertise and passion for challenging Small Form Factor (ITX) builds, ensuring maximum performance in a compact footprint."
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-400">
            Have questions about our build service? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-medium text-white">{item.question}</span>
                  <ChevronDownIcon className={`w-6 h-6 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                  style={{ transitionProperty: 'max-height, padding' }}
                >
                  <div className={`p-6 pt-0 text-gray-400 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
