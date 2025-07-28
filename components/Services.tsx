import React from 'react';

const WaterDropIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.01 9.01 0 006.8-3.12c2.04-2.5 2.18-5.93.4-8.74C17.5 5.2 15.1 3 12 3s-5.5 2.2-7.2 6.14c-1.78 2.81-1.64 6.24.4 8.74A9.01 9.01 0 0012 21z" />
    </svg>
);

const FanIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-8 0a8 8 0 1016 0 8 8 0 10-16 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0" />
    </svg>
);

const ChatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
    <div className="bg-slate-700 text-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Build Services For Your Parts</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            You've picked the components, now let us handle the hard part. We offer expert assembly focused on superior cooling to guarantee peak performance and stability for your hardware.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<WaterDropIcon className="w-8 h-8" />}
            title="AIO Liquid Cooler Installation"
            description="We'll expertly install your All-in-One liquid cooler for maximum thermal performance, ensuring your high-end components can be pushed to their limits."
          />
          <ServiceCard
            icon={<FanIcon className="w-8 h-8" />}
            title="Air Cooler Installation"
            description="We'll install your performance air cooler with precision for rock-solid reliability, keeping temperatures low and performance high during sustained gaming sessions."
          />
          <ServiceCard
            icon={<ChatIcon className="w-8 h-8" />}
            title="Pre-Purchase Consultation"
            description="Need help choosing parts before you buy? We offer a separate consultation service to help you select the perfect components for your build and budget."
          />
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>We build with the elite cooling solutions you provide.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;