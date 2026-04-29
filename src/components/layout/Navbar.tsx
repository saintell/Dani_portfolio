import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { AnimatedMonogram } from '../ui/AnimatedMonogram';

export const Navbar = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex items-start justify-between pointer-events-none"
    >
      <div className="flex flex-col pointer-events-auto">
        <AnimatedMonogram className="text-2xl" />
        <span className="text-[10px] tracking-[0.2em] text-gray-mid uppercase mt-1">Daniela Pantoja</span>
      </div>
      <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.15em] text-gray-mid pointer-events-auto">
        <a href="#perfil" className="text-white border-b border-brand pb-1">Perfil</a>
        <a href="#fruzty" className="hover:text-white transition-colors">Fruzty</a>
        <a href="#glimmo" className="hover:text-white transition-colors">Glimmo</a>
        <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
      </nav>
    </motion.header>
  );
};
