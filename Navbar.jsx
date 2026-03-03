import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Button from '../common/Button';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 no-underline">
    <div className="w-9 h-9 bg-gradient-to-br from-primary-700 to-primary-400 rounded-xl flex items-center justify-center shadow-md shadow-primary-200">
      <span className="text-white font-bold font-poppins text-base">ER</span>
    </div>
    <span className="font-poppins font-bold text-xl text-gray-900">ExamRank<span className="text-primary-600">AI</span></span>
  </Link>
);

const NAV = [
  {name:'Home',path:'/'},
  {name:'Exams',path:'/exams'},
  {name:'AI Generator',path:'/ai-generator'},
  {name:'Mock Tests',path:'/mock-test'},
  {name:'Study Planner',path:'/study-planner'},
  {name:'Blog',path:'/blog'},
];

const Navbar = () => {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname }            = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {NAV.map(item => (
              <Link key={item.path} to={item.path}
                className={`font-medium text-sm transition-colors duration-200 no-underline relative group ${pathname===item.path ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${pathname===item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login"><Button variant="outline" size="sm">Login</Button></Link>
            <Link to="/signup"><Button size="sm">Sign Up Free</Button></Link>
          </div>
          <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 text-gray-600 hover:text-primary-600 bg-transparent border-0 cursor-pointer">
            {open ? <HiX size={24}/> : <HiMenu size={24}/>}
          </button>
        </div>
        {/* Mobile */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="md:hidden overflow-hidden">
              <div className="pt-4 pb-2 flex flex-col gap-1 border-t border-gray-100 mt-3">
                {NAV.map(item => (
                  <Link key={item.path} to={item.path}
                    className={`px-4 py-2.5 rounded-xl font-medium text-sm no-underline transition-colors ${pathname===item.path ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                    {item.name}
                  </Link>
                ))}
                <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                  <Link to="/login" className="flex-1"><Button variant="outline" fullWidth size="sm">Login</Button></Link>
                  <Link to="/signup" className="flex-1"><Button fullWidth size="sm">Sign Up</Button></Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
export default Navbar;
