
import React, { useState } from 'react';

const builds = [
  {
    src: '/images/frostbite.jpg',
    title: 'The Frostbite',
    description: 'A clean, all-white build featuring an AIO liquid cooler and RGB accents for a stunning aesthetic.',
  },
  {
    src: '/images/stealth-bomber.jpg',
    title: 'Stealth Bomber',
    description: 'A minimalist all-black build focused on silent operation and pure, unadulterated performance.',
  },
  {
    src: '/images/compact-powerhouse.jpg',
    title: 'Compact Powerhouse (ITX)',
    description: 'Maximum performance in a minimal footprint. This ITX build proves great things come in small packages.',
  },
  {
    src: '/images/rgb-unicorn.jpg',
    title: 'The RGB Unicorn',
    description: 'A vibrant explosion of color, this build is for gamers who want their rig to be the center of attention.',
  },
  {
    src: '/images/air-cooled-classic.jpg',
    title: 'Air-Cooled Classic',
    description: 'Relying on a premium air cooler, this build delivers exceptional thermal performance with rock-solid reliability.',
  },
  {
    src: '/images/workstation.jpg',
    title: 'The Workstation',
    description: 'A powerful machine built not just for gaming, but for content creation and heavy multitasking workloads.',
  },
];

const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
  
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const Gallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? builds.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const isLastSlide = currentIndex === builds.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const currentBuild = builds[currentIndex];

    return (
        <section id="gallery" className="py-20 sm:py-32 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Build Gallery</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        Check out some of the custom gaming PCs we've recently assembled for our clients.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative group">
                    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl shadow-cyan-500/10">
                        <div className="overflow-hidden">
                             <img
                                key={currentBuild.src}
                                src={currentBuild.src}
                                alt={currentBuild.title}
                                className="w-full h-auto object-cover aspect-[16/9] transition-opacity duration-300"
                            />
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">{currentBuild.title}</h3>
                            <p className="text-gray-400">{currentBuild.description}</p>
                        </div>
                    </div>

                    <button
                        onClick={handlePrev}
                        aria-label="Previous build"
                        className="absolute top-1/2 -left-4 sm:-left-16 transform -translate-y-1/2 bg-slate-700/50 p-3 rounded-full text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ArrowLeftIcon className="w-6 h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        aria-label="Next build"
                        className="absolute top-1/2 -right-4 sm:-right-16 transform -translate-y-1/2 bg-slate-700/50 p-3 rounded-full text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ArrowRightIcon className="w-6 h-6" />
                    </button>

                    <div className="text-center mt-6 text-gray-400 text-lg font-semibold tracking-wider">
                        {currentIndex + 1} / {builds.length}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
