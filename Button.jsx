import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'md', fullWidth = false, onClick, type = 'button', disabled = false, className = '' }) => {
  const base = 'rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 font-poppins';
  const variants = {
    primary:   'bg-gradient-to-r from-primary-700 to-primary-500 text-white shadow-lg shadow-primary-200 hover:shadow-xl hover:shadow-primary-300',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50',
    outline:   'border-2 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600',
    ghost:     'text-gray-700 hover:bg-gray-100',
    danger:    'bg-red-500 text-white hover:bg-red-600',
  };
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' };
  return (
    <motion.button whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.97 }}
      type={type} disabled={disabled} onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      {children}
    </motion.button>
  );
};
export default Button;
