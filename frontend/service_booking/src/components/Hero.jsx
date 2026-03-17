import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MOCK_SERVICES = [
  'House Cleaning', 'Ac Repair', 'Electrician', 'Plumber', 'Carpenter',
  'Pest Control', 'Painting', 'Appliance Repair', 'Salon at Home', 'Massage'
];

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Mock API search
  useEffect(() => {
    if (debouncedSearch.length > 0) {
      const filtered = MOCK_SERVICES.filter(service => 
        service.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearch]);

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    setIsFocused(false);
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-blue-100/60 dark:bg-blue-900/30 blur-3xl opacity-60 mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-5%] w-80 h-80 rounded-full bg-purple-100/60 dark:bg-purple-900/30 blur-3xl opacity-60 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-72 h-72 rounded-full bg-indigo-100/60 dark:bg-indigo-900/30 blur-3xl opacity-60 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-36 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-sm font-semibold text-blue-600 dark:text-blue-400">
          🎉 The #1 Platform for Professional Services
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Trusted Services</span>
          <br className="hidden md:block" /> Anytime, Anywhere
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 mb-10">
          Find, book, and manage professional services for your home and business. Fast, secure, and reliable.
        </p>

        {/* Search Bar with Debouncing & Suggestions */}
        <div className="max-w-2xl mx-auto mb-10 relative z-20">
          <div className={`relative flex items-center w-full h-16 rounded-2xl bg-white dark:bg-gray-800 border-2 transition-all duration-300 shadow-lg ${
            isFocused ? 'border-blue-500 shadow-blue-500/20' : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
          }`}>
            <div className="px-5 text-gray-400 dark:text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="w-full h-full bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500 text-lg"
              placeholder="Search for a service (e.g., Electrician, Cleaning)..."
            />
            <div className="pr-2">
              <button className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-md">
                Search
              </button>
            </div>
          </div>

          {/* Render Suggestions Box */}
          {isFocused && searchTerm && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden text-left z-50 transform origin-top animate-in fade-in slide-in-from-top-2 duration-200">
              <ul className="py-2">
                {suggestions.map((suggestion, index) => (
                  <li key={index}>
                    <button
                      className="w-full px-6 py-3 text-left bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 flex items-center transition-colors"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {suggestion}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {isFocused && searchTerm && suggestions.length === 0 && (
             <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 text-center text-gray-500 dark:text-gray-400 z-50">
               No services found matching "{searchTerm}"
             </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            Log In <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
