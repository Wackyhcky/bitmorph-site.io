
import React from 'react';

const ComputerChipIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-6h3m-3 6h3m-3-12h3m-3 0V6M4 6v3m16-3v3m-9 3h.01M12 12h.01M12 9h.01M12 6h.01M12 3h.01M9 6h.01M6 9h.01M6 12h.01M6 15h.01M9 15h.01M9 18h.01M12 18h.01M15 18h.01M15 15h.01M15 12h.01M15 9h.01M18 9h.01M18 12h.01M18 15h.01" />
    </svg>
  );

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const DiscordIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M19.27 5.33C17.94 4.7 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.24.43-.45.88-.63 1.36a12.89 12.89 0 0 0-3.6 0c-.18-.48-.39-.93-.63-1.36a.09.09 0 0 0-.07-.03c-1.5.26-2.94.7-4.27 1.33a.07.07 0 0 0-.03.06A13.43 13.43 0 0 0 4 15.65a.07.07 0 0 0 .06.07c1.4.55 2.83.9 4.28 1.1a.09.09 0 0 0 .09-.05c.2-.3.38-.63.56-.95a.08.08 0 0 0-.06-.1c-.49-.16-.96-.34-1.4-.55a.08.08 0 0 1-.04-.09c.15-.22.3-.45.43-.68a.08.08 0 0 1 .09-.02c2.4.83 4.97.83 7.37 0a.08.08 0 0 1 .09.02c.13.23.28.46.43.68a.08.08 0 0 1-.04.09c-.44.21-.91.39-1.4.55a.08.08 0 0 0-.06.1c.18.32.36.65.56.95a.09.09 0 0 0 .09.05c1.45-.2 2.88-.55 4.28-1.1a.07.07 0 0 0 .06-.07a13.43 13.43 0 0 0-1.63-10.32a.07.07 0 0 0-.03-.06zM8.02 12.32c-.7 0-1.28-.6-1.28-1.33s.58-1.33 1.28-1.33c.7 0 1.28.6 1.28 1.33s-.58 1.33-1.28 1.33zm3.96 0c-.7 0-1.28-.6-1.28-1.33s.58-1.33 1.28-1.33c.7 0 1.28.6 1.28 1.33s-.58 1.33-1.28 1.33z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <ComputerChipIcon className="w-6 h-6 text-cyan-400" />
              <span className="text-lg font-bold text-white">
                BitMorph <span className="text-cyan-400">Builds</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} BitMorph Builds. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center space-x-5">
            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61578320553105" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <FacebookIcon className="w-7 h-7" />
            </a>
            <a href="https://discord.gg/KNRWDDnYTj" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <DiscordIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;