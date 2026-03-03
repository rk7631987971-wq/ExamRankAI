import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaRobot, FaFileAlt, FaCalendarAlt } from 'react-icons/fa';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { EXAMS } from '../utils/constants';

const ExamDetail = ({ exam }) => (
  <div className="pt-24 min-h-screen bg-gray-50 pb-16">
    <Container>
      <Link to="/exams" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all mb-8 no-underline">
        <FaArrowLeft/> Back to Exams
      </Link>
      <Card className="shadow-lg">
        <div className="flex flex-col sm:flex-row items-start gap-5 mb-8">
          <div className="text-6xl">{exam.icon}</div>
          <div>
            <h1 className="text-3xl font-bold font-poppins text-gray-900 mb-2">{exam.name}</h1>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">{exam.badge}</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">{exam.students} Active Students</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <div className="bg-gray-50 rounded-2xl p-5">
            <h3 className="font-semibold font-poppins mb-4 flex items-center gap-2">📋 Subjects / Syllabus</h3>
            {exam.subjects.map((s,i) => (
              <div key={i} className={`py-2.5 text-sm text-gray-600 flex items-center gap-2 ${i<exam.subjects.length-1?'border-b border-gray-100':''}`}>
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"/>  {s}
              </div>
            ))}
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <h3 className="font-semibold font-poppins mb-4 flex items-center gap-2">📊 Exam Pattern</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{exam.pattern}</p>
            <div className="mt-4 p-3 bg-primary-50 rounded-xl text-xs text-primary-700 font-medium">
              💡 ExamRankAI के AI questions बिल्कुल इसी pattern पर based हैं।
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/ai-generator"><Button><FaRobot className="mr-1"/> Generate AI Questions</Button></Link>
          <Link to="/mock-test"><Button variant="outline"><FaFileAlt className="mr-1"/> Take Mock Test</Button></Link>
          <Link to="/study-planner"><Button variant="ghost"><FaCalendarAlt className="mr-1"/> Create Study Plan</Button></Link>
        </div>
      </Card>
    </Container>
  </div>
);

const Exams = () => {
  const [params] = useSearchParams();
  const id = params.get('id');
  const selected = id ? EXAMS.find(e => e.id === id) : null;
  if (selected) return <ExamDetail exam={selected}/>;
  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <Container>
        <SectionHeading center tag="All Exams" title="Choose Your Target Exam" subtitle="Click on any exam card to explore syllabus, pattern, and AI-powered preparation resources." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {EXAMS.map((exam, i) => (
            <motion.div key={exam.id} initial={{opacity:0,scale:0.93}} whileInView={{opacity:1,scale:1}} transition={{duration:0.4,delay:i*0.06}} viewport={{once:true}}>
              <Link to={`/exams?id=${exam.id}`} className="no-underline block h-full">
                <div className="rounded-2xl p-6 h-full border border-gray-100 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary-50 transition-all duration-300 group cursor-pointer" style={{background:exam.color}}>
                  <div className="text-4xl mb-3">{exam.icon}</div>
                  <div className="inline-block bg-primary-100 text-primary-700 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2">{exam.badge}</div>
                  <h3 className="font-semibold font-poppins text-gray-900 text-base mb-1">{exam.name}</h3>
                  <p className="text-xs text-gray-400 mb-3">{exam.students} students enrolled</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exam.subjects.slice(0,3).map(s => <span key={s} className="text-xs bg-white/80 text-primary-600 px-2 py-0.5 rounded-lg font-medium">{s}</span>)}
                  </div>
                  <div className="flex items-center gap-1.5 text-primary-600 text-sm font-semibold group-hover:gap-3 transition-all">
                    View Details <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default Exams;
