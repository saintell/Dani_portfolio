import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { AnimatedMonogram } from '../ui/AnimatedMonogram';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('perfil');

  useEffect(() => {
    const sections = ['perfil', 'asistente', 'fruzty', 'glimmo', 'pca', 'contacto'];
    
    const handleScroll = () => {
      let currentSection = sections[0];
      
      // Also check if we're at the bottom of the page
      const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
      
      if (isAtBottom) {
        setActiveSection('contacto');
        return;
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is above the middle of the viewport
          if (rect.top <= window.innerHeight / 3) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        {[
          { id: 'perfil', label: 'Perfil' },
          { id: 'asistente', label: 'Asistente' },
          { id: 'fruzty', label: 'Fruzty' },
          { id: 'glimmo', label: 'Glimmo' },
          { id: 'pca', label: 'PCA' },
          { id: 'contacto', label: 'Contacto' },
        ].map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`} 
            onClick={() => setActiveSection(item.id)}
            className={cn(
              "transition-colors pb-1",
              activeSection === item.id 
                ? "text-white border-b border-brand" 
                : "hover:text-white border-b border-transparent"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
};
