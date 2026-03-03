import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { PLANS } from '../../utils/constants';

const Pricing = () => (
  <section className="section-padding bg-white">
    <Container>
      <SectionHeading center tag="Pricing" title="Simple, Transparent Pricing" subtitle="No hidden fees. Cancel anytime. Choose the plan that fits your preparation needs." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
        {PLANS.map((plan, i) => (
          <motion.div key={i} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:i*0.1}} viewport={{once:true}} className="relative">
            {plan.highlight && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10"><span className="bg-gradient-to-r from-primary-700 to-primary-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">Most Popular</span></div>}
            <div className={`rounded-2xl p-7 h-full flex flex-col border-2 ${plan.highlight ? 'border-primary-500 shadow-xl shadow-primary-100' : 'border-gray-100 shadow-sm'}`}>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold font-poppins mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold font-poppins text-gray-900">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-7 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {f.y ? <FaCheck className="text-green-500 mt-0.5 flex-shrink-0"/> : <FaTimes className="text-gray-300 mt-0.5 flex-shrink-0"/>}
                    <span className={`text-sm ${f.y ? 'text-gray-700' : 'text-gray-400'}`}>{f.t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/signup">
                <Button variant={plan.highlight ? 'primary' : 'outline'} fullWidth>{plan.cta}</Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm mb-3">Secure payment powered by</p>
        <div className="flex justify-center gap-4 flex-wrap">
          {['Razorpay','Paytm','PhonePe','Google Pay','UPI'].map(p => (
            <span key={p} className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg text-xs font-medium">{p}</span>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
export default Pricing;
