import { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  
  return (
    <div className="py-12 bg-slate-50/50 min-h-full">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center gap-6 mb-12">
           <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-indigo-200">
             JD
           </div>
           <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Account Settings</h1>
              <p className="text-slate-500 font-medium">Configure your personal information and preferences.</p>
           </div>
        </div>
        
        <div className="clear-card p-8 sm:p-10 shadow-lg shadow-slate-200/50">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div>
                 <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Full Identity</label>
                 <input 
                   type="text" 
                   value={name} 
                   onChange={(e) => setName(e.target.value)}
                   className="block w-full border border-slate-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium" 
                 />
               </div>
               <div>
                 <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Verified Email</label>
                 <input 
                   type="email" 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)}
                   className="block w-full border border-slate-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium" 
                 />
               </div>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Connected Phone</label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000"
                className="block w-full border border-slate-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium" 
              />
            </div>
            
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary px-10 py-3.5 shadow-lg shadow-indigo-100">
                Update Security Profile
              </button>
              <button className="btn btn-outline px-10 py-3.5">
                Discard Changes
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 clear-card p-8 bg-slate-900 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <h3 className="text-lg font-extrabold mb-2 relative z-10 tracking-tight">Need to close your account?</h3>
           <p className="text-slate-400 text-sm mb-6 relative z-10 font-medium">Deletion is permanent and cannot be undone. Please backup your history.</p>
           <button className="text-red-400 text-xs font-bold uppercase tracking-widest hover:text-red-300 transition-colors relative z-10">Deactivate Profile →</button>
        </div>
      </div>
    </div>
  );
}
