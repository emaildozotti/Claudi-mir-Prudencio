import React from 'react';

export interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}