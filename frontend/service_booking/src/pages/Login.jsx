import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-full flex items-center justify-center py-20 px-4 bg-slate-50/50">
      <div className="max-w-md w-full clear-card p-10 sm:p-12 shadow-xl shadow-slate-200/50">
        <div className="text-center mb-10">
           <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl text-3xl mb-4">🔐</div>
           <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back</h2>
           <p className="text-slate-500 mt-2 font-medium">Please enter your details to sign in.</p>
        </div>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Email address</label>
            <input 
              type="email" 
              required 
              placeholder="name@company.com"
              className="block w-full border border-slate-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium" 
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2 ml-1">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
              <a href="#" className="text-xs font-bold text-indigo-600 hover:text-indigo-700">Forgot?</a>
            </div>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              className="block w-full border border-slate-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" 
            />
          </div>
          <button type="submit" className="w-full btn btn-primary py-3.5 text-base shadow-lg shadow-indigo-200">
            Sign In to Account
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-slate-600 font-medium">
          New here? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 font-bold">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
