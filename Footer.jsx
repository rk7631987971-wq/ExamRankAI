import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const quickLinks = [
    {name:'About Us',path:'/about'},{name:'Contact',path:'/contact'},
    {name:'Privacy Policy',path:'/privacy'},{name:'Terms of Service',path:'/terms'},{name:'FAQs',path:'/faqs'},
  ];
  const exams = [
    {name:'Bihar Board 10th',path:'/exams'},{name:'Bihar Board 12th',path:'/exams'},
    {name:'UPSC',path:'/exams'},{name:'BPSC',path:'/exams'},
    {name:'SSC CGL',path:'/exams'},{name:'Railway NTPC',path:'/exams'},{name:'Banking PO',path:'/exams'},
  ];
  const social = [{Icon:FaFacebook},{Icon:FaTwitter},{Icon:FaInstagram},{Icon:FaLinkedin},{Icon:FaYoutube}];
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold font-poppins">ER</span>
              </div>
              <span className="font-poppins font-bold text-xl text-white">ExamRank<span className="text-primary-400">AI</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">India's most advanced AI-powered exam preparation platform for all major competitive exams.</p>
            <div className="flex gap-3">
              {social.map(({Icon},i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                  <Icon size={16}/>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(l => <li key={l.name}><Link to={l.path} className="text-gray-400 hover:text-primary-400 text-sm transition-colors no-underline">{l.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-base mb-4">Popular Exams</h3>
            <ul className="space-y-2.5">
              {exams.map(l => <li key={l.name}><Link to={l.path} className="text-gray-400 hover:text-primary-400 text-sm transition-colors no-underline">{l.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {[[MdLocationOn,'Boring Road, Patna, Bihar - 800001'],[MdPhone,'+91 98765 43210'],[MdEmail,'support@examrank.ai']].map(([Icon,text],i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon className="text-primary-400 mt-0.5 flex-shrink-0" size={18}/>
                  <span className="text-gray-400 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 ExamRankAI. All rights reserved. Made with ❤️ for Indian students.</p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Service','Sitemap'].map(t => <Link key={t} to="#" className="text-gray-400 hover:text-primary-400 text-xs no-underline transition-colors">{t}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
