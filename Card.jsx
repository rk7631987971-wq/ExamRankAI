import React from 'react';
const Card = ({ children, className = '', hover = false, onClick }) => (
  <div onClick={onClick}
    className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 ${hover ? 'transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary-100 cursor-pointer' : ''} ${className}`}>
    {children}
  </div>
);
export default Card;
