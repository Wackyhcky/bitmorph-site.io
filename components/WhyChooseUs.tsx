import React from 'react';

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Optimized Cooling Installation',
      description: 'We specialize in installing air and AIO liquid cooling, ensuring your components stay cool for maximum FPS and peak stability during intense gaming.',
    },
    {
      title: 'Decent Cable Management',
      description: 'We offer decent cable management, ensuring every build has tidy routing for good airflow and a clean internal appearance.',
    },
    {
      title: 'Your Parts, Our Expertise',
      description: 'You provide the components you love, and we provide the professional assembly and care to bring them to life.',
    },
    {
      title: 'Rigorous Stress Testing',
      description: 'We use apps like OCCT, Furmark, and Cinebench R23 to ensure your PC is stable and performs as expected under heavy loads.',
    },
    {
      title: 'Transparent Process',
      description: 'From receiving your parts to final testing, we keep you informed every step of the way. No surprises, just your perfect PC, professionally assembled.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-32 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Why BitMorph Builds?</h2>
            <p className="mt-4 text-lg text-gray-400">
              Building a PC is more than just assembling parts. It's an art. We are passionate about technology and dedicated to delivering a superior experience and an exceptional final product.
            </p>
            <div className="mt-12 space-y-6 text-left">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircleIcon className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                    <p className="text-gray-400">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;