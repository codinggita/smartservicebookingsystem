import { useState } from 'react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 flex justify-between items-center px-4 py-2 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="flex-1 text-center text-sm font-medium text-white flex items-center justify-center gap-2">
        <span className="text-xl">🔥</span> 
        <span>20% off on your first booking! Use code <span className="font-bold bg-white/20 px-2 py-0.5 rounded">FIRST20</span></span>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="text-white/80 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Banner;
