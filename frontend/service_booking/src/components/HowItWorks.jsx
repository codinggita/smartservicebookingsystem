const steps = [
  {
    number: '01',
    title: 'Search Service',
    description: 'Find exactly what you need from our extensive list of professional services.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Book Instantly',
    description: 'Select your preferred time slot and confirm your booking securely.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Get Service',
    description: 'A verified professional arrives at your location to get the job done right.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-50 dark:bg-gray-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Process</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Get your required service delivered to your doorstep in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 -translate-y-1/2 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative group perspective">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <div className="pt-8 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4">
                    Step {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
