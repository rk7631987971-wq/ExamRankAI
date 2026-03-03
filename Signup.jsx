import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';
import Button from '../components/common/Button';

const Signup = () => {
  const [form,    setForm]    = useState({ name:'', email:'', password:'', confirm:'', exam:'', terms:false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate('/'); }, 1500);
  };

  const F = ({icon:Icon,type='text',name,placeholder,required=true}) => (
    <div className="relative">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={15}/>
      <input type={type} required={required} placeholder={placeholder} value={form[name]} onChange={e=>setForm({...form,[name]:e.target.value})} className="input-base !pl-10"/>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4" style={{background:'linear-gradient(145deg,#f5f3ff,#f8faff,#eff6ff)'}}>
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="w-full max-w-3xl">
        <div className="flex rounded-3xl overflow-hidden shadow-2xl shadow-violet-100">
          <div className="hidden md:flex flex-col justify-center p-12 flex-1 bg-gradient-to-br from-violet-800 to-primary-600">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="font-poppins text-3xl font-extrabold text-white mb-3">Start Your Journey</h2>
            <p className="text-violet-200 text-sm leading-relaxed mb-8">Join 50,000+ students cracking their dream exams with AI-powered preparation.</p>
            {['Free AI Question Generator','Unlimited Mock Tests','Personalized Study Plans','All-India Ranking System'].map(f => (
              <div key={f} className="flex items-center gap-3 mb-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">✓</div>
                <span className="text-violet-100 text-sm">{f}</span>
              </div>
            ))}
          </div>
          <div className="bg-white p-10 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center"><span className="text-white font-bold font-poppins text-sm">ER</span></div>
              <span className="font-poppins font-bold text-base text-gray-900">ExamRank<span className="text-primary-600">AI</span></span>
            </div>
            <h2 className="font-poppins text-2xl font-extrabold text-gray-900 mb-1">Create Account</h2>
            <p className="text-gray-500 text-sm mb-6">Join ExamRankAI for free today</p>
            <form onSubmit={submit} className="space-y-3">
              <F icon={FaUser}     name="name"     placeholder="Full Name"/>
              <F icon={FaEnvelope} name="email"    type="email"    placeholder="Email Address"/>
              <F icon={FaLock}     name="password" type="password" placeholder="Create Password"/>
              <F icon={FaLock}     name="confirm"  type="password" placeholder="Confirm Password"/>
              <div className="relative">
                <select className="select-base" value={form.exam} onChange={e=>setForm({...form,exam:e.target.value})}>
                  <option value="">🎯 Select Target Exam</option>
                  {['Bihar Board 10th','Bihar Board 12th','UPSC','BPSC','SSC CGL','Railway NTPC','Banking PO'].map(e=><option key={e} value={e}>{e}</option>)}
                </select>
              </div>
              <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
                <input type="checkbox" required checked={form.terms} onChange={e=>setForm({...form,terms:e.target.checked})} className="mt-0.5 w-4 h-4 accent-primary-600 flex-shrink-0"/>
                <span>I agree to the <Link to="/terms" className="text-primary-600 font-medium no-underline hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary-600 font-medium no-underline hover:underline">Privacy Policy</Link></span>
              </label>
              <Button type="submit" disabled={loading} fullWidth size="lg">{loading ? '🔄 Creating account...' : 'Create Free Account →'}</Button>
            </form>
            <div className="flex items-center gap-3 my-4"><div className="flex-1 h-px bg-gray-200"/><span className="text-xs text-gray-400">or</span><div className="flex-1 h-px bg-gray-200"/></div>
            <div className="grid grid-cols-2 gap-3">
              {[[FaGoogle,'text-red-500','Google'],[FaFacebook,'text-blue-600','Facebook']].map(([Icon,cls,label])=>(
                <button key={label} className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                  <Icon className={cls} size={16}/> {label}
                </button>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-5">Already have an account? <Link to="/login" className="text-primary-600 font-semibold hover:underline no-underline">Sign In</Link></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Signup;
