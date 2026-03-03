import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import { TESTIMONIALS } from '../../utils/constants';

const Testimonials = () => (
  <section className="section-padding bg-gray-50">
    <Container>
      <SectionHeading center tag="Success Stories" title="Students Who Cracked It 🏆" subtitle="Join thousands of successful students who trusted ExamRankAI for their preparation." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div key={i} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:i*0.1}} viewport={{once:true}}>
            <Card hover className="h-full flex flex-col">
              <div className="flex gap-0.5 mb-3">{Array(t.stars).fill(0).map((_,j)=><FaStar key={j} className="text-yellow-400" size={14}/>)}</div>
              <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{background:'linear-gradient(135deg,#2563EB,#7C3AED)'}}>{t.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400 truncate">{t.loc}</div>
                </div>
                <span className="bg-green-50 text-green-600 text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0">{t.exam}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);
export default Testimonials;
