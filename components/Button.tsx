import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300 ease-in-out border";
  
  const variants = {
    primary: "bg-gold border-gold text-white hover:bg-gold-hover hover:border-gold-hover shadow-lg hover:shadow-gold/20",
    outline: "bg-transparent border-gold text-gold hover:bg-gold hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};