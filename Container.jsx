import React from 'react';
const Container = ({ children, className = '', maxWidth = '7xl' }) => (
  <div className={`max-w-${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
export default Container;
