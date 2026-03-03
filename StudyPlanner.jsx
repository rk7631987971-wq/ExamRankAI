import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCheckCircle, FaClock, FaBook } from 'react-icons/fa';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const WEEKS = [
  { phase:'Phase 1', label:'Week 1–2', focus:'Foundation Building',  color:'bg-blue-50',   border:'border-blue-200',   topics:['Syllabus Analysis & PYQ Overview','Basic Concepts & Fundamentals','NCERT Reading','Topic-wise Notes'] },
  { phase:'Phase 2', label:'Week 3–4', focus:'Core Subject Study',    color:'bg-violet-50', border:'border-violet-200', topics:['History: Ancient & Medieval India','Geography: Physical India','Polity: Constitution Basics','Economy: Fundamentals'] },
  { phase:'Phase 3', label:'Week 5–6', focus:'Advanced Topics',       color:'bg-amber-50',  border:'border-amber-200',  topics:['Modern History & Independence','Indian Economy Deep Dive','Environment & Ecology','Science & Technology'] },
  { phase:'Phase 4', label:'Week 7+',  focus:'Revision & Mock Tests', color:'bg-green-50',  border:'border-green-200',  topics:['Full-Length Mock Tests','Weak Area Intensive Revision','Current Affairs','Answer Writing Practice'] },
];

const WEEKLY_SCHEDULE = [
  {day:'Monday',focus:'Theory & Concepts',icon:'📖'},
  {day:'Tuesday',focus:'Practice Problems',icon:'✏️'},
  {day:'Wednesday',focus:'Previous Year Papers',icon:'📋'},
  {day:'Thursday',focus:'Mock Test',icon:'⏱️'},
  {day:'Friday',focus:'Analysis & Revision',icon:'📊'},
  {day:'Saturday',focus:'Weak Areas',icon:'🎯'},
  {day:'Sunday',focus:'Full Length Test',icon:'🏆'},
];

const StudyPlanner = () => {
  const [exam,    setExam]    = useState('');
  const [date,    setDate]    = useState('');
  const [hours,   setHours]   = useState(6);
  const [loading, setLoading] = useState(false);
  const [plan,    setPlan]    = useState(null);

  const generate = () => {
    if (!exam || !date) return;
    setLoading(true);
    setTimeout(() => {
      const days = Math.max(0, Math.ceil((new Date(date) - new Date()) / 86400000));
      setPlan({ days, exam, hours });
      setLoading(false);
    }, 1400);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <Container>
        <SectionHeading center tag="📅 Study Planner" title="Smart Study Planner" subtitle="Get a personalized week-by-week study roadmap based on your target exam date." />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="shadow-sm">
            <h2 className="text-xl font-semibold font-poppins mb-6">Plan Your Preparation</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Select Exam</label>
                <select className="select-base" value={exam} onChange={e => setExam(e.target.value)}>
                  <option value="">Choose your exam</option>
                  {['Bihar Board 10th','Bihar Board 12th','UPSC Prelims','BPSC','SSC CGL','Railway NTPC','Banking PO'].map(e => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Target Exam Date</label>
                <input type="date" className="input-base" value={date} onChange={e => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Daily Study Hours: <span className="text-primary-600 font-bold">{hours} hrs</span></label>
                <input type="range" min="2" max="12" value={hours} onChange={e => setHours(+e.target.value)} className="w-full accent-primary-600" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>2 hrs</span><span>12 hrs</span></div>
              </div>
              <Button onClick={generate} disabled={!exam || !date || loading} fullWidth size="lg" className="!mt-2">
                {loading ? '🔄 Generating Plan...' : '📅 Generate My Study Plan'}
              </Button>
            </div>
          </Card>

          {/* Plan output */}
          {plan ? (
            <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}}>
              <Card className="shadow-sm">
                <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                  <h2 className="text-xl font-semibold font-poppins">Your Study Plan</h2>
                  <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <FaCalendarAlt size={13}/> {plan.days} days remaining
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[['📅',plan.days,'Days Left'],['⏰',plan.hours,'Hrs/Day'],['📚','4','Subjects'],['🎯',plan.exam.split(' ').slice(-1)[0],'Exam']].map(([ic,v,l])=>(
                    <div key={l} className="bg-gray-50 rounded-xl p-3 text-center">
                      <div className="text-xl mb-1">{ic}</div>
                      <div className="font-bold font-poppins text-sm text-gray-900 truncate">{v}</div>
                      <div className="text-xs text-gray-400">{l}</div>
                    </div>
                  ))}
                </div>
                <h3 className="font-semibold text-sm mb-3 flex items-center gap-2"><FaClock className="text-primary-600"/> Week-by-Week Roadmap</h3>
                <div className="space-y-3 mb-5">
                  {WEEKS.map((w,i) => (
                    <div key={i} className={`${w.color} border ${w.border} rounded-xl p-4`}>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{w.phase} • {w.label}</span>
                          <div className="font-semibold font-poppins text-gray-900 text-sm mt-0.5">🎯 {w.focus}</div>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-1.5">
                        {w.topics.map((t,j) => (
                          <div key={j} className="bg-white rounded-lg px-3 py-1.5 text-xs text-gray-600 flex items-center gap-1.5">
                            <span className="text-primary-500 font-bold">→</span>{t}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="font-semibold text-sm mb-3 flex items-center gap-2"><FaBook className="text-primary-600"/> Weekly Schedule</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                  {WEEKLY_SCHEDULE.map(d => (
                    <div key={d.day} className="bg-gray-50 rounded-xl p-3">
                      <div className="text-lg mb-1">{d.icon}</div>
                      <div className="font-semibold text-primary-600 text-xs">{d.day}</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-tight">{d.focus}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                  <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0"/>
                  <div>
                    <p className="font-semibold text-green-800 text-sm">Pro Tip</p>
                    <p className="text-xs text-green-700 mt-0.5 leading-relaxed">Start with your weakest subjects in the morning. Take 10-minute breaks every 90 minutes to maintain peak focus.</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ) : (
            <Card className="text-center flex flex-col items-center justify-center py-16">
              <FaCalendarAlt size={52} className="text-gray-200 mb-4"/>
              <h3 className="text-lg font-semibold font-poppins mb-2 text-gray-600">No Plan Generated Yet</h3>
              <p className="text-gray-400 text-sm max-w-xs">Fill in your exam details on the left to get a personalized week-by-week study roadmap.</p>
            </Card>
          )}
        </div>
      </Container>
    </div>
  );
};
export default StudyPlanner;
