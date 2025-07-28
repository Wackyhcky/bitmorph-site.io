import React from 'react';

const DiscordIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.27 5.33C17.94 4.7 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.24.43-.45.88-.63 1.36a12.89 12.89 0 0 0-3.6 0c-.18-.48-.39-.93-.63-1.36a.09.09 0 0 0-.07-.03c-1.5.26-2.94.7-4.27 1.33a.07.07 0 0 0-.03.06A13.43 13.43 0 0 0 4 15.65a.07.07 0 0 0 .06.07c1.4.55 2.83.9 4.28 1.1a.09.09 0 0 0 .09-.05c.2-.3.38-.63.56-.95a.08.08 0 0 0-.06-.1c-.49-.16-.96-.34-1.4-.55a.08.08 0 0 1-.04-.09c.15-.22.3-.45.43-.68a.08.08 0 0 1 .09-.02c2.4.83 4.97.83 7.37 0a.08.08 0 0 1 .09.02c.13.23.28.46.43.68a.08.08 0 0 1-.04.09c-.44.21-.91.39-1.4.55a.08.08 0 0 0-.06.1c.18.32.36.65.56.95a.09.09 0 0 0 .09.05c1.45-.2 2.88-.55 4.28-1.1a.07.07 0 0 0 .06-.07a13.43 13.43 0 0 0-1.63-10.32a.07.07 0 0 0-.03-.06zM8.02 12.32c-.7 0-1.28-.6-1.28-1.33s.58-1.33 1.28-1.33c.7 0 1.28.6 1.28 1.33s-.58 1.33-1.28 1.33zm3.96 0c-.7 0-1.28-.6-1.28-1.33s.58-1.33 1.28-1.33c.7 0 1.28.6 1.28 1.33s-.58 1.33-1.28 1.33z" />
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-32 md:py-40 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
          Your Dream Gaming PC, <span className="text-cyan-400">Expertly Built.</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300">
          You buy the parts, we provide the elite build service. BitMorph Builds offers professional assembly for your components, specializing in superior cooling solutions for optimal gaming performance.
        </p>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            Get a Free Quote
          </a>
          <a
            href="https://discord.gg/your-invite-code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-slate-700 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
          >
            <DiscordIcon className="w-6 h-6 mr-2" />
            Join Our Discord
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center bg-transparent border-2 border-slate-600 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-700 hover:border-slate-700 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;