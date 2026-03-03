import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home         from './pages/Home';
import Exams        from './pages/Exams';
import AIGenerator  from './pages/AIGenerator';
import MockTest     from './pages/MockTest';
import StudyPlanner from './pages/StudyPlanner';
import Blog         from './pages/Blog';
import Login        from './pages/Login';
import Signup       from './pages/Signup';
import './index.css';

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login"  element={<Login />}  />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/"             element={<Home />}         />
          <Route path="/exams"        element={<Exams />}        />
          <Route path="/ai-generator" element={<AIGenerator />}  />
          <Route path="/mock-test"    element={<MockTest />}     />
          <Route path="/study-planner"element={<StudyPlanner />} />
          <Route path="/blog"         element={<Blog />}         />
        </Route>
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);
export default App;
