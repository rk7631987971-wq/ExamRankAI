import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaCheckCircle } from 'react-icons/fa';
import Button from '../common/Button';
import Container from '../common/Container';

const StatBox = ({ value, label }) => (
  <div>
    <div className="text-3xl font-bold font-poppins text-primary-600">{value}</div>
    <div className="text-sm text-gray-500 mt-0.5">{label}</div>
  </div>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden" style={{background:'linear-gradient(145deg,#ffffff 0%,#eff6ff 50%,#f0f9ff 100%)'}}>
    {/* Blobs */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20 pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-100 rounded-full filter blur-3xl opacity-30 pointer-events-none -translate-x-1/2 -translate-y-1/2" />

    {/* Dot grid */}
    <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(circle at 1px 1px, #2563EB 1px, transparent 0)',backgroundSize:'32px 32px'}} />

    <Container className="relative z-10 pt-24 pb-16">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <motion.div initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}} transition={{duration:0.8}}>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"/>
            India's #1 AI Exam Prep Platform
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight text-gray-900 mb-6">
            Crack Any Exam with{' '}
            <span className="bg-gradient-to-r from-primary-700 to-primary-400 bg-clip-text text-transparent">Smart AI Preparation</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
            Bihar Board से UPSC तक — AI-powered questions, personalized mock tests, और smart study plans के साथ अपनी तैयारी शुरू करें।
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/signup">
              <Button size="lg" className="group !px-8">
                Start Free Trial <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
              </Button>
            </Link>
            <Link to="/mock-test">
              <Button variant="outline" size="lg" className="!px-8">
                <FaPlay size={14}/> Take Mock Test
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-10">
            <StatBox value="50K+" label="Active Students"/>
            <StatBox value="100K+" label="Practice Questions"/>
            <StatBox value="95%" label="Success Rate"/>
            <StatBox value="8+" label="Exams Covered"/>
          </div>
          <div className="flex flex-wrap gap-5 mt-8">
            {['Free to start','No credit card','Cancel anytime'].map(t => (
              <div key={t} className="flex items-center gap-2 text-sm text-gray-500">
                <FaCheckCircle className="text-green-500 flex-shrink-0"/>{t}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — dashboard preview */}
        <motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:0.8,delay:0.15}} className="relative hidden lg:block">
          <motion.div animate={{y:[0,-8,0]}} transition={{duration:3,repeat:Infinity,ease:'easeInOut'}}>
            <div className="bg-white rounded-3xl shadow-2xl shadow-primary-100 p-7 border border-gray-100">
              <div className="flex items-center gap-2 mb-5">
                {['bg-red-400','bg-yellow-400','bg-green-400'].map(c => <div key={c} className={`w-3 h-3 ${c} rounded-full`}/>)}
                <span className="text-xs text-gray-400 ml-2">AI Question Generator</span>
              </div>
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-5 mb-5 text-white">
                <div className="text-xs opacity-70 mb-1.5">BPSC • History • Medium</div>
                <div className="font-semibold text-sm leading-snug">बिहार राज्य की स्थापना किस वर्ष हुई थी?</div>
              </div>
              <div className="space-y-2.5 mb-5">
                {[['1911','border-gray-200 bg-white text-gray-700'],['1912 ✓','border-green-400 bg-green-50 text-green-700'],['1936','border-gray-200 bg-white text-gray-700'],['1947','border-gray-200 bg-white text-gray-700']].map(([opt,cls],i) => (
                  <div key={i} className={`p-3 rounded-xl border-2 text-sm font-medium ${cls}`}>
                    <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs inline-flex items-center justify-center mr-2 font-bold">{String.fromCharCode(65+i)}</span>
                    {opt}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[['87%','Accuracy'],['#234','Your Rank'],['8/10','Score']].map(([v,l]) => (
                  <div key={l} className="bg-primary-50 rounded-xl p-3 text-center">
                    <div className="text-base font-bold text-primary-700 font-poppins">{v}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Floating badges */}
          <motion.div animate={{y:[0,-6,0]}} transition={{duration:2.5,repeat:Infinity,delay:0.5}}
            className="absolute -top-6 -right-6 bg-white border border-gray-100 shadow-lg rounded-2xl px-4 py-3 flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"/><span className="text-sm font-semibold text-gray-700">Live Mock Test</span>
          </motion.div>
          <motion.div animate={{y:[0,-6,0]}} transition={{duration:3.5,repeat:Infinity,delay:1}}
            className="absolute -bottom-6 -left-6 bg-white border border-gray-100 shadow-lg rounded-2xl px-4 py-3">
            <div className="text-xs text-gray-500 mb-0.5">Today's Rank</div>
            <div className="text-lg font-bold text-primary-600 font-poppins">#234 / 50K+</div>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  </section>
);
export default Hero;
