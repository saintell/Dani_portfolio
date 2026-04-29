import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Reusable components
export const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("inline-block bg-bg-sec border border-brand/30 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-brand-light", className)}>
    {children}
  </div>
);

export const SectionTag = ({ number, title }: { number: string, title?: string }) => (
  <div className="text-gray-mid text-[10px] uppercase tracking-widest mb-8 md:mb-16">
    {number} {title && `/ ${title}`}
  </div>
);

export const Reveal = ({ children, delay = 0, className, ...props }: { children: React.ReactNode, delay?: number, className?: string, [x:string]: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    viewport={{ once: false, margin: "-10%" }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);
