import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaFileAlt, FaCalendarAlt, FaChartLine, FaUsers, FaMobile } from 'react-icons/fa';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';

const FEATURES = [
  { icon:FaRobot,     title:'AI Question Generator',  desc:'Generate unlimited practice questions tailored to your exam pattern with our advanced AI engine.',                        bg:'bg-blue-50',   ic:'text-blue-600' },
  { icon:FaFileAlt,   title:'Full Mock Tests',          desc:'Take full-length timed mock tests with real exam simulation and detailed performance analytics.',                          bg:'bg-violet-50', ic:'text-violet-600'},
  { icon:FaCalendarAlt,title:'Smart Study Planner',    desc:'Get personalized 30–90 day study roadmaps based on your target exam date and preparation level.',                         bg:'bg-amber-50',  ic:'text-amber-600' },
  { icon:FaChartLine, title:'Performance Analytics',   desc:'Deep insights into weak topics, accuracy trends, time management, and improvement velocity.',                             bg:'bg-green-50',  ic:'text-green-600' },
  { icon:FaUsers,     title:'All-India Ranking',        desc:'Compete with 50K+ students across India. Real-time rank updates after every mock test.',                                  bg:'bg-rose-50',   ic:'text-rose-600'  },
  { icon:FaMobile,    title:'Mobile First Design',      desc:'Seamlessly study on any device — fully optimized for mobile, tablet, and desktop browsers.',                              bg:'bg-cyan-50',   ic:'text-cyan-600'  },
];

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <SectionHeading center tag="Features" title="Everything You Need to Crack Your Exam" subtitle="Powerful AI features designed to make your competitive exam preparation effective, efficient, and engaging." />
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.1}} }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, bg, ic }, i) => (
            <motion.div key={i} variants={{ hidden:{opacity:0,y:24}, visible:{opacity:1,y:0,transition:{duration:0.5}} }}>
              <Card hover className="h-full group">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`${ic} text-xl`}/>
                </div>
                <h3 className="text-lg font-semibold font-poppins text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
export default Features;
