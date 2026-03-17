import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 px-4 sm:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center text-white">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8">
            The New Standard for Home Services
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1]">
            Expert help, <br className="hidden sm:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">instantly booked.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connecting homeowners with verified professionals for every task, from deep cleaning to complex repairs.
          </p>
          
          <div className="max-w-xl mx-auto bg-slate-800/50 backdrop-blur-md rounded-2xl p-1.5 flex flex-col sm:flex-row gap-2 border border-slate-700 shadow-2xl">
             <div className="flex-grow flex items-center px-6">
                <span className="text-indigo-400 mr-3">🔍</span>
                <input 
                  type="text" 
                  placeholder="Need a plumber? Electrician?" 
                  className="w-full text-white placeholder-slate-500 border-none focus:ring-0 py-3.5 bg-transparent font-medium"
                />
             </div>
             <button className="btn btn-primary px-10 py-4 text-base whitespace-nowrap shadow-indigo-500/20">
                Book Service
             </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '5k+', label: 'Verified Pros' },
              { val: '12k+', label: 'Happy Users' },
              { val: '150k+', label: 'Jobs Done' },
              { val: '4.9/5', label: 'Satisfaction' }
            ].map(s => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">{s.val}</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-24 px-4 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Specialists</h2>
              <p className="text-lg text-slate-500 font-medium">Curated professionals with top-tier ratings and background checks.</p>
            </div>
            <Link to="/signup" className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-2 group">
              Browse All Services 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, name: 'Home Vitality', price: 'Premium Care', icon: '🧹', color: 'bg-indigo-50', text: 'text-indigo-600' },
              { id: 2, name: 'Core Infrastructure', price: 'Technical Experts', icon: '🔧', color: 'bg-violet-50', text: 'text-violet-600' },
              { id: 3, name: 'Climate Control', price: 'Efficiency Pro', icon: '❄️', color: 'bg-slate-100', text: 'text-slate-600' },
              { id: 4, name: 'Power Systems', price: 'Safety First', icon: '⚡', color: 'bg-amber-50', text: 'text-amber-600' }
            ].map(service => (
              <div key={service.id} className="clear-card p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-sm`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{service.name}</h3>
                <p className="text-slate-400 text-sm font-bold mb-6">{service.price}</p>
                <button className={`${service.text} font-black text-sm uppercase tracking-widest`}>Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 rounded-[3rem] p-16 sm:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-900/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-8 relative z-10 tracking-tighter leading-tight">Great service is <br /> just a tap away.</h2>
          <p className="text-xl text-indigo-100 mb-14 relative z-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Stop waiting and start getting things done. Join the ServiceHub community today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link to="/signup" className="bg-white text-indigo-600 font-extrabold px-12 py-5 rounded-2xl shadow-xl hover:bg-slate-50 hover:scale-105 transition-all text-lg">
              Create My Account
            </Link>
            <Link to="/login" className="bg-indigo-500/20 backdrop-blur-md text-white font-extrabold px-12 py-5 rounded-2xl border border-white/20 hover:bg-white/10 transition-all text-lg">
              Manage Bookings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
