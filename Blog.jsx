import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import { BLOG_POSTS } from '../utils/constants';

const Blog = () => (
  <div className="pt-24 min-h-screen bg-gray-50 pb-16">
    <Container>
      <SectionHeading center tag="📰 Blog" title="Exam Insights & Updates" subtitle="Latest notifications, preparation strategies, and success tips for Indian competitive exams." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post, i) => (
          <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:i*0.08}} viewport={{once:true}}>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary-50 transition-all duration-300 cursor-pointer group h-full flex flex-col">
              <div className="p-6 text-5xl flex items-center justify-center" style={{background:post.color}}>{post.icon}</div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{background:post.catBg,color:post.catText}}>{post.cat}</span>
                  <span className="text-xs text-gray-400">{post.read} read</span>
                </div>
                <h3 className="font-semibold font-poppins text-gray-900 text-base leading-snug mb-2.5 flex-1">{post.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{post.desc}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-primary-600 font-semibold text-xs group-hover:gap-2 flex items-center gap-1 transition-all">Read More <span>→</span></span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  </div>
);
export default Blog;
