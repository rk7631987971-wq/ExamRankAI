import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaFlag, FaCheckCircle, FaTimesCircle, FaTrophy } from 'react-icons/fa';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { MOCK_QUESTIONS } from '../utils/constants';

const Setup = ({ onStart }) => (
  <div className="pt-24 min-h-screen bg-gray-50 pb-16 flex items-center justify-center">
    <div className="max-w-lg w-full mx-4">
      <Card className="text-center shadow-xl">
        <div className="text-6xl mb-5">📝</div>
        <h1 className="text-3xl font-bold font-poppins text-gray-900 mb-2">General Studies Mock Test</h1>
        <p className="text-gray-500 mb-8">Full-length test designed as per Bihar Board / BPSC pattern</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[['📋',MOCK_QUESTIONS.length,'Questions'],['⏱️','30','Minutes'],['+2','Marks','Correct'],['-0.5','Marks','Wrong']].map(([ic,v,l])=>(
            <div key={l} className="bg-gray-50 rounded-xl p-4">
              <div className="text-xl mb-1">{ic}</div>
              <div className="font-bold font-poppins text-xl text-gray-900">{v}</div>
              <div className="text-xs text-gray-400 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
        <Button onClick={onStart} size="lg" className="w-full !justify-center">🚀 Start Test Now</Button>
      </Card>
    </div>
  </div>
);

const TestInterface = ({ onSubmit }) => {
  const [answers,  setAnswers]  = useState({});
  const [current,  setCurrent]  = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [flagged,  setFlagged]  = useState([]);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => setTimeLeft(t => { if (t <= 1) { clearInterval(timer.current); onSubmit(answers); return 0; } return t-1; }), 1000);
    return () => clearInterval(timer.current);
  }, []);

  const mins = String(Math.floor(timeLeft/60)).padStart(2,'0');
  const secs = String(timeLeft%60).padStart(2,'0');
  const q = MOCK_QUESTIONS[current];

  const handleSubmit = () => { clearInterval(timer.current); onSubmit(answers); };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 pb-10">
      <Container maxWidth="4xl">
        {/* Sticky header */}
        <div className="sticky top-16 z-10 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl px-5 py-3.5 mb-6 flex flex-wrap justify-between items-center gap-3 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Q {current+1} / {MOCK_QUESTIONS.length}</span>
            <div className="w-40 h-1.5 bg-gray-200 rounded-full hidden sm:block">
              <div className="h-full bg-primary-600 rounded-full transition-all" style={{width:`${((current+1)/MOCK_QUESTIONS.length)*100}%`}}/>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 font-mono font-bold text-lg ${timeLeft<300?'text-red-500':'text-primary-700'}`}>
              <FaClock size={15}/> {mins}:{secs}
            </div>
            <Button size="sm" variant="outline" onClick={handleSubmit}>Submit Test</Button>
          </div>
        </div>

        <Card className="mb-5 shadow-sm">
          <div className="flex justify-between items-start mb-5">
            <h3 className="font-semibold text-gray-900">Question {current+1}</h3>
            <button onClick={() => setFlagged(f => f.includes(current) ? f.filter(i=>i!==current) : [...f,current])}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer border-0 transition-all ${flagged.includes(current)?'bg-yellow-100 text-yellow-700':'bg-gray-100 text-gray-500 hover:bg-yellow-50 hover:text-yellow-600'}`}>
              <FaFlag size={11}/> {flagged.includes(current)?'Flagged':'Flag'}
            </button>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">{q.q}</p>
          <div className="space-y-3">
            {q.opts.map((opt, i) => (
              <button key={i} onClick={() => setAnswers(a => ({...a,[current]:i}))}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all text-sm flex items-center gap-3 cursor-pointer font-medium ${answers[current]===i?'border-primary-600 bg-primary-50 text-primary-800':'border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/50 text-gray-700'}`}>
                <span className="w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs font-bold flex-shrink-0">{String.fromCharCode(65+i)}</span>
                {opt}
              </button>
            ))}
          </div>
        </Card>

        <div className="flex justify-between items-center mb-6">
          <Button variant="outline" onClick={() => setCurrent(c => Math.max(0,c-1))} disabled={current===0}>← Previous</Button>
          {current < MOCK_QUESTIONS.length-1
            ? <Button onClick={() => setCurrent(c => c+1)}>Next →</Button>
            : <Button onClick={handleSubmit}>Submit Test ✓</Button>}
        </div>

        {/* Palette */}
        <Card>
          <h4 className="font-semibold text-sm mb-3">Question Palette</h4>
          <div className="flex flex-wrap gap-2">
            {MOCK_QUESTIONS.map((_,i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-9 h-9 rounded-lg border-2 text-xs font-bold cursor-pointer transition-all ${current===i?'border-primary-600 bg-primary-600 text-white':answers[i]!==undefined?'border-green-400 bg-green-50 text-green-700':flagged.includes(i)?'border-yellow-400 bg-yellow-50 text-yellow-700':'border-gray-200 bg-white text-gray-500 hover:border-primary-300'}`}>
                {i+1}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
            {[['bg-primary-600 border-primary-600 text-white','Current'],['bg-green-50 border-green-400 text-green-700','Answered'],['bg-yellow-50 border-yellow-400 text-yellow-700','Flagged'],['bg-white border-gray-200 text-gray-500','Not Attempted']].map(([cls,l])=>(
              <div key={l} className="flex items-center gap-1.5">
                <div className={`w-5 h-5 rounded border-2 ${cls}`}/>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
};

const Result = ({ answers, onRetake }) => {
  const score   = MOCK_QUESTIONS.filter((q,i) => answers[i] === q.ans).length;
  const wrong   = Object.keys(answers).length - score;
  const skipped = MOCK_QUESTIONS.length - Object.keys(answers).length;
  const pct     = Math.round((score / MOCK_QUESTIONS.length) * 100);
  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <Container maxWidth="4xl">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
          <Card className="text-center mb-8 shadow-xl shadow-primary-50">
            <div className="text-6xl mb-4">{pct>=70?'🏆':pct>=40?'👍':'📚'}</div>
            <h1 className="text-3xl font-bold font-poppins mb-2">Test Complete!</h1>
            <div className="text-7xl font-black font-poppins bg-gradient-to-r from-primary-700 to-primary-400 bg-clip-text text-transparent my-3">{pct}%</div>
            <p className="text-gray-500 mb-8">You scored <b>{score}</b> out of <b>{MOCK_QUESTIONS.length}</b> correctly</p>
            <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-8">
              {[[score,'✅','Correct','bg-green-50 text-green-700'],[wrong,'❌','Wrong','bg-red-50 text-red-600'],[skipped,'⏭️','Skipped','bg-gray-50 text-gray-500']].map(([v,ic,l,cls])=>(
                <div key={l} className={`${cls} rounded-2xl p-4`}>
                  <div className="text-2xl mb-1">{ic}</div>
                  <div className="text-2xl font-bold font-poppins">{v}</div>
                  <div className="text-xs mt-0.5">{l}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xs mx-auto">
              <Button onClick={onRetake} variant="outline" fullWidth>🔄 Retake</Button>
              <Button fullWidth>📊 Full Analysis</Button>
            </div>
          </Card>
          <h2 className="font-semibold font-poppins text-lg mb-4 text-gray-900">📋 Question-wise Analysis</h2>
          <div className="space-y-3">
            {MOCK_QUESTIONS.map((q,i) => (
              <Card key={i} className={`border-2 ${answers[i]===q.ans?'border-green-100':answers[i]!==undefined?'border-red-100':'border-gray-100'}`}>
                <div className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">{answers[i]===q.ans?'✅':answers[i]!==undefined?'❌':'⏭️'}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 mb-1">Q{i+1}: {q.q}</p>
                    <p className="text-xs text-green-600 font-medium">✓ {q.opts[q.ans]}</p>
                    {answers[i]!==undefined && answers[i]!==q.ans && <p className="text-xs text-red-500 mt-0.5">✗ Your answer: {q.opts[answers[i]]}</p>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

const MockTest = () => {
  const [phase,  setPhase]  = useState('setup');
  const [answers,setAnswers]= useState({});
  const start  = () => setPhase('test');
  const submit = (ans) => { setAnswers(ans); setPhase('result'); };
  if (phase==='setup')  return <Setup onStart={start}/>;
  if (phase==='test')   return <TestInterface onSubmit={submit}/>;
  return <Result answers={answers} onRetake={() => setPhase('setup')}/>;
};
export default MockTest;
