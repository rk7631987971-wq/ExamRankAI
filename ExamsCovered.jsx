import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { EXAMS } from '../../utils/constants';

const ExamsCovered = () => (
  <section className="section-padding bg-white">
    <Container>
      <SectionHeading center tag="Exams Covered" title="All Major Indian Exams" subtitle="Comprehensive preparation for Bihar Board, UPSC, BPSC, SSC, Railway, Banking, and more." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {EXAMS.map((exam, i) => (
          <motion.div key={exam.id} initial={{opacity:0,scale:0.92}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,delay:i*0.07}} viewport={{once:true}}>
            <Link to={`/exams?id=${exam.id}`} className="no-underline block">
              <div className="rounded-2xl p-6 border border-gray-100 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary-50 transition-all duration-300 cursor-pointer group" style={{background:exam.color}}>
                <div className="text-4xl mb-4">{exam.icon}</div>
                <div className="inline-block bg-primary-100 text-primary-700 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2">{exam.badge}</div>
                <h3 className="font-semibold font-poppins text-gray-900 mb-1">{exam.name}</h3>
                <p className="text-xs text-gray-400 mb-4">{exam.students} students</p>
                <div className="flex items-center text-primary-600 text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
                  Explore <FaArrowRight size={12}/>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);
export default ExamsCovered;
