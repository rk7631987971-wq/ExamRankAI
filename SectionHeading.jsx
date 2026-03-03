import React from 'react';
const SectionHeading = ({ title, subtitle, center = false, tag }) => (
  <div className={`mb-14 ${center ? 'text-center' : ''}`}>
    {tag && (
      <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-1.5 rounded-full text-xs font-semibold font-poppins tracking-wide mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-primary-600 inline-block" />{tag}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4 leading-tight">{title}</h2>
    {subtitle && <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);
export default SectionHeading;
