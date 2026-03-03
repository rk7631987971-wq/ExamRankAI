import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaSpinner, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { SUBJECT_MAP, TOPICS, SAMPLE_QUESTIONS } from '../utils/constants';

const QuestionCard = ({ q, index }) => {
  const [selected, setSelected] = useState(null);
  const [showExp, setShowExp]   = useState(false);
  return (
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:index*0.1}}>
      <Card className="mb-5 border border-gray-100">
        <div className="flex gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">Q{index+1}</div>
          <p className="font-medium text-gray-900 leading-relaxed">{q.q}</p>
        </div>
        <div className="space-y-2.5 mb-4">
          {q.opts.map((opt, i) => {
            let cls = 'p-3.5 rounded-xl border-2 cursor-pointer transition-all text-sm flex items-center gap-3 ';
            if (selected !== null) {
              if (i === q.ans) cls += 'border-green-400 bg-green-50 text-green-800 font-medium';
              else if (i === selected) cls += 'border-red-300 bg-red-50 text-red-700';
              else cls += 'border-gray-100 bg-gray-50 text-gray-500';
            } else {
              cls += selected === i ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-primary-400 hover:bg-primary-50';
            }
            return (
              <div key={i} className={cls} onClick={() => selected === null && setSelected(i)}>
                <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold flex-shrink-0">{String.fromCharCode(65+i)}</span>
                {opt}
                {selected !== null && i === q.ans && <FaCheckCircle className="ml-auto text-green-500 flex-shrink-0"/>}
                {selected !== null && i === selected && i !== q.ans && <FaTimesCircle className="ml-auto text-red-400 flex-shrink-0"/>}
              </div>
            );
          })}
        </div>
        {selected !== null && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`font-semibold text-sm ${selected === q.ans ? 'text-green-600' : 'text-red-500'}`}>
                {selected === q.ans ? '✅ Correct!' : '❌ Incorrect!'}
              </span>
              <button onClick={() => setShowExp(s => !s)} className="ml-auto flex items-center gap-1.5 bg-amber-50 text-amber-700 border-0 px-3 py-1.5 rounded-lg cursor-pointer text-xs font-semibold hover:bg-amber-100 transition-colors">
                <FaLightbulb size={11}/> {showExp ? 'Hide' : 'View'} Explanation
              </button>
            </div>
            <AnimatePresence>
              {showExp && (
                <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 leading-relaxed overflow-hidden">
                  {q.exp}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

const AIGenerator = () => {
  const [exam, setExam]       = useState('');
  const [subj, setSubj]       = useState('');
  const [topic, setTopic]     = useState('');
  const [diff, setDiff]       = useState('medium');
  const [loading, setLoading] = useState(false);
  const [qs, setQs]           = useState([]);

  const generate = () => {
    if (!exam || !subj) return;
    setLoading(true); setQs([]);
    setTimeout(() => { setQs(SAMPLE_QUESTIONS[diff] || SAMPLE_QUESTIONS.medium); setLoading(false); }, 1800);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <Container>
        <SectionHeading center tag="🧠 AI Generator" title="AI Question Generator" subtitle="Generate unlimited exam-pattern questions powered by AI. Select your exam, subject, and get practicing instantly." />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border border-gray-100">
              <h3 className="text-lg font-semibold font-poppins mb-5">Generate Questions</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-2">Select Exam</label>
                  <select className="select-base" value={exam} onChange={e=>{setExam(e.target.value);setSubj('');setTopic('');}}>
                    <option value="">-- Choose Exam --</option>
                    {Object.keys(SUBJECT_MAP).map(k=><option key={k} value={k}>{k}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-2">Select Subject</label>
                  <select className="select-base" value={subj} onChange={e=>{setSubj(e.target.value);setTopic('');}} disabled={!exam}>
                    <option value="">-- Choose Subject --</option>
                    {(SUBJECT_MAP[exam]||[]).map(s=><option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-2">Select Topic</label>
                  <select className="select-base" value={topic} onChange={e=>setTopic(e.target.value)} disabled={!subj}>
                    <option value="">-- Choose Topic --</option>
                    {(TOPICS[subj]||['General','Important Concepts','Revision']).map(t=><option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-2">Difficulty Level</label>
                  <div className="flex gap-2">
                    {[['easy','🟢'],['medium','🟡'],['hard','🔴']].map(([v,ic])=>(
                      <button key={v} onClick={()=>setDiff(v)} className={`flex-1 py-2.5 rounded-xl border-2 text-sm font-semibold capitalize cursor-pointer transition-all ${diff===v?'border-primary-600 bg-primary-50 text-primary-700':'border-gray-200 bg-white text-gray-500 hover:border-gray-300'}`}>
                        {ic} {v}
                      </button>
                    ))}
                  </div>
                </div>
                <Button onClick={generate} disabled={!exam||!subj||loading} fullWidth className="!mt-2">
                  {loading ? <><FaSpinner className="animate-spin mr-1"/> Generating...</> : <><FaRobot className="mr-1"/> Generate Questions</>}
                </Button>
              </div>
            </Card>
          </div>
          {/* Output */}
          <div className="lg:col-span-2">
            {loading && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-14 h-14 border-4 border-primary-100 border-t-primary-600 rounded-full animate-spin mb-4"/>
                <p className="text-gray-500 text-sm">AI analyzing exam pattern & generating questions...</p>
              </div>
            )}
            {!loading && qs.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-5">
                  <h2 className="font-semibold font-poppins text-lg text-gray-900">📋 {qs.length} Questions Generated</h2>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">{exam} • {diff}</span>
                </div>
                {qs.map((q,i) => <QuestionCard key={i} q={q} index={i}/>)}
              </div>
            )}
            {!loading && qs.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <FaRobot className="text-gray-200 mb-4" size={56}/>
                <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-700">No Questions Yet</h3>
                <p className="text-gray-400 text-sm max-w-xs">Select your exam, subject, and difficulty to generate AI-powered practice questions.</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default AIGenerator;
