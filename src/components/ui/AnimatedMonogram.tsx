import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedMonogramProps {
  className?: string;
}

export const AnimatedMonogram = ({ className }: AnimatedMonogramProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(4px) drop-shadow(0px 0px 0px rgba(168,85,247,0))' }}
      animate={{ opacity: 1, filter: 'blur(0px) drop-shadow(0px 0px 8px rgba(168,85,247,0.3))' }}
      whileHover={{ scale: 1.05, filter: 'blur(0px) drop-shadow(0px 0px 16px rgba(168,85,247,0.8))' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn("text-brand cursor-default inline-flex items-center justify-center", className)}
      style={{ width: "1.2em", height: "1.2em" }}
    >
      <svg 
        viewBox="-10 -10 120 120" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="12" 
        strokeLinecap="butt" 
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        className="w-full h-full drop-shadow-md"
      >
        {/* Left piece ('d') */}
        <path d="M 40 12 L 40 88 L 12 60 L 12 32 L 40 32" />
        {/* Right piece ('p') */}
        <path d="M 60 88 L 60 12 L 88 40 L 88 68 L 60 68" />
      </svg>
    </motion.div>
  );
};
