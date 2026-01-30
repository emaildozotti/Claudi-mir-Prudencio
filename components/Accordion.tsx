import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AccordionProps } from '../types';

export const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>('0px');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="border-b border-neutral-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg font-serif font-medium transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-neutral-300 group-hover:text-gold'}`}>
          {title}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
        />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="pb-6 text-neutral-400 font-sans leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};