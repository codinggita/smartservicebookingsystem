import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 dark:bg-blue-900 rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 text-white shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl mix-blend-overlay"></div>
          
          <div className="flex-1 relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Stay in the loop
            </h2>
            <p className="text-blue-100 max-w-xl text-lg">
              Subscribe to our newsletter and get exclusive offers, service tips, and the latest updates directly perfectly to your inbox.
            </p>
          </div>
          
          <div className="w-full max-w-md relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className={`block w-full pl-10 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 bg-white border-2 focus:outline-none focus:ring-0 ${
                    status === 'error' ? 'border-red-400' : 'border-transparent focus:border-blue-300'
                  } transition-colors shadow-inner`}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="py-4 px-8 border border-transparent rounded-xl text-base font-bold text-blue-700 bg-blue-100 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white transition-all transform hover:-translate-y-0.5 shadow-lg disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            {status === 'error' && (
              <p className="mt-2 text-sm text-red-200">Please enter a valid email address.</p>
            )}
            {status === 'success' && (
              <p className="mt-2 text-sm text-green-200">Thanks for subscribing!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
