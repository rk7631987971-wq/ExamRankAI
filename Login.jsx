import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';
import Button from '../components/common/Button';

const Login = () => {
  const [form,    setForm]    = useState({ email:'', password:'', remember:false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate('/'); }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4" style={{background:'linear-gradient(145deg,#eff6ff,#f8faff,#f0f4ff)'}}>
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="w-full max-w-3xl">
        <div className="flex rounded-3xl overflow-hidden shadow-2xl shadow-primary-100">
          {/* Left panel */}
          <div className="hidden md:flex flex-col justify-center p-12 flex-1 bg-gradient-to-br from-primary-800 to-primary-600">
            <div className="text-5xl mb-6">👋</div>
            <h2 className="font-poppins text-3xl font-extrabold text-white mb-3">Welcome Back!</h2>
            <p className="text-primary-200 text-sm leading-relaxed mb-8">Continue your exam preparation journey with 50K+ students across India.</p>
            {['AI-powered mock tests','Personalized study plans','All-India ranking','Real-time analytics'].map(f => (
              <div key={f} className="flex items-center gap-3 mb-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">✓</div>
                <span className="text-primary-100 text-sm">{f}</span>
              </div>
            ))}
          </div>
          {/* Right form */}
          <div className="bg-white p-10 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center"><span className="text-white font-bold font-poppins text-sm">ER</span></div>
              <span className="font-poppins font-bold text-base text-gray-900">ExamRank<span className="text-primary-600">AI</span></span>
            </div>
            <h2 className="font-poppins text-2xl font-extrabold text-gray-900 mb-1">Sign In</h2>
            <p className="text-gray-500 text-sm mb-7">Login to continue your preparation</p>
            <form onSubmit={submit} className="space-y-4">
              <div className="relative">
                <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={15}/>
                <input type="email" required placeholder="Email Address" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="input-base !pl-10"/>
              </div>
              <div className="relative">
                <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={15}/>
                <input type="password" required placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className="input-base !pl-10"/>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" checked={form.remember} onChange={e=>setForm({...form,remember:e.target.checked})} className="w-4 h-4 accent-primary-600"/>
                  Remember me
                </label>
                <a href="#" className="text-primary-600 text-xs font-semibold hover:underline">Forgot password?</a>
              </div>
              <Button type="submit" disabled={loading} fullWidth size="lg">{loading ? '🔄 Signing in...' : 'Login to Dashboard →'}</Button>
            </form>
            <div className="flex items-center gap-3 my-5"><div className="flex-1 h-px bg-gray-200"/><span className="text-xs text-gray-400">or</span><div className="flex-1 h-px bg-gray-200"/></div>
            <div className="grid grid-cols-2 gap-3">
              {[[FaGoogle,'text-red-500','Google'],[FaFacebook,'text-blue-600','Facebook']].map(([Icon,cls,label]) => (
                <button key={label} className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors`}>
                  <Icon className={cls} size={16}/> {label}
                </button>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">
              Don't have an account? <Link to="/signup" className="text-primary-600 font-semibold hover:underline no-underline">Sign Up Free</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Login;
