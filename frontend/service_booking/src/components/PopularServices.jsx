const services = [
  {
    title: 'Expert Electrician',
    category: 'Home Repair',
    rating: 4.9,
    reviews: 120,
    price: '$45/hr',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Plumbing Services',
    category: 'Home Repair',
    rating: 4.8,
    reviews: 85,
    price: '$50/hr',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Professional Cleaning',
    category: 'Cleaning',
    rating: 4.7,
    reviews: 210,
    price: '$30/hr',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Math & Science Tutor',
    category: 'Education',
    rating: 5.0,
    reviews: 45,
    price: '$40/hr',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'General Physician',
    category: 'Healthcare',
    rating: 4.9,
    reviews: 320,
    price: '$80/visit',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500',
  },
  {
    title: 'Personal Fitness Trainer',
    category: 'Wellness',
    rating: 4.8,
    reviews: 95,
    price: '$60/session',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=500',
  },
];

const PopularServices = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Popular Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              Explore our most highly-rated professional services tailored to your needs.
            </p>
          </div>
          <button className="hidden md:flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group">
            View all services
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {service.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center text-yellow-400">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>
                  <span className="ml-1 text-gray-900 dark:text-white font-bold">{service.rating}</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400 text-sm">({service.reviews} reviews)</span>
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
                    {service.price}
                  </div>
                  <button className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-xl text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto">
            View all services
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
