import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-full flex items-center justify-center py-20 px-4 bg-slate-50/50">
      <div className="max-w-md w-full clear-card p-10 sm:p-12 shadow-xl shadow-slate-200/50">
        <div className="text-center mb-10">
           <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl text-3xl mb-4">🚀</div>
           <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Join ServiceHub</h2>
           <p className="text-slate-500 mt-2 font-medium">Get access to elite professionals today.</p>
        </div>
        <form className="space-y-5" onSubmit={handleSignup}>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Full Name</label>
            <input 
              type="text" 
              required 
              placeholder="John Doe"
              className="block w-full border border-slate-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Email address</label>
            <input 
              type="email" 
              required 
              placeholder="name@official.com"
              className="block w-full border border-slate-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Secure Password</label>
            <input 
              type="password" 
              required 
              placeholder="At least 8 characters"
              className="block w-full border border-slate-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" 
            />
          </div>
          <div className="pt-2">
            <button type="submit" className="w-full btn btn-primary py-3.5 text-base shadow-lg shadow-indigo-200">
              Create My Account
            </button>
          </div>
        </form>
        <p className="mt-8 text-center text-sm text-slate-600 font-medium">
          Already have an account? <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-bold">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
