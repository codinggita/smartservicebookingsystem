import { useState, useEffect } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({ services: 0, users: 0, bookings: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue('services', 0, 500, 2000);
          animateValue('users', 0, 1000, 2500);
          animateValue('bookings', 0, 300, 2000);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [hasAnimated]);

  const animateValue = (key, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth stop
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCounts(prev => ({
        ...prev,
        [key]: Math.floor(easeOutQuart * (end - start) + start)
      }));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const statItems = [
    { label: 'Available Services', value: counts.services, suffix: '+', icon: '🛠️' },
    { label: 'Active Users', value: counts.users, suffix: '+', icon: '👥' },
    { label: 'Daily Bookings', value: counts.bookings, suffix: '+', icon: '📅' },
  ];

  return (
    <section id="stats-section" className="py-16 bg-blue-600 dark:bg-blue-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-400 dark:divide-blue-700">
          {statItems.map((stat, index) => (
            <div key={index} className="py-6 md:py-0 px-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3 opacity-80">{stat.icon}</div>
              <div className="text-5xl font-extrabold text-white tracking-tight mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-lg font-medium text-blue-100 dark:text-blue-200 uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
