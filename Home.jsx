import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ExamsCovered from '../components/home/ExamsCovered';
import Testimonials from '../components/home/Testimonials';
import Pricing from '../components/home/Pricing';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const CTABanner = () => (
  <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-500 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',backgroundSize:'28px 28px'}}/>
    <Container>
      <div className="text-center text-white relative z-10">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold font-poppins mb-4">
          Ready to Start Your Preparation?
        </motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}} className="text-lg mb-8 text-white/80 max-w-xl mx-auto">
          Join 50,000+ successful students who cracked their dream exams with ExamRankAI
        </motion.p>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6,delay:0.4}} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup"><Button variant="white" size="lg" className="!bg-white !text-primary-700 hover:!shadow-xl">Start Free Trial →</Button></Link>
          <Link to="/exams"><button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all font-poppins">Browse Exams</button></Link>
        </motion.div>
      </div>
    </Container>
  </section>
);

const Home = () => (
  <div className="overflow-hidden">
    <Hero />
    <Features />
    <ExamsCovered />
    <Testimonials />
    <Pricing />
    <CTABanner />
  </div>
);
export default Home;
