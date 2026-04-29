import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MockupFrameProps {
  children: React.ReactNode;
  className?: string;
  type?: 'browser' | 'mobile' | 'bare';
  url?: string;
}

export const MockupFrame = ({ children, className, type = 'browser', url = 'app.fruzty.com' }: MockupFrameProps) => {
  if (type === 'mobile') {
    return (
      <div className={cn("relative mx-auto rounded-[3rem] border-[8px] border-carbon bg-bg-main overflow-hidden shadow-2xl overflow-y-auto no-scrollbar", className)}>
        {/* Dynamic Island / Notch simulate */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-carbon rounded-b-[1.2rem] z-50 flex justify-center items-center">
            <div className="w-16 h-1 rounded-full bg-white/10" />
        </div>
        {children}
      </div>
    );
  }

  if (type === 'browser') {
    return (
      <div className={cn("w-full rounded-2xl border border-white/5 bg-bg-sec overflow-hidden shadow-2xl flex flex-col relative", className)}>
        <div className="h-10 border-b border-white/5 bg-bg-sec flex items-center px-4 gap-2 z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
          </div>
          <div className="bg-bg-main px-4 py-1 rounded text-[9px] text-gray-mid ml-4 border border-white/5">
             {url}
          </div>
        </div>
        <div className="flex-1 overflow-hidden relative">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("rounded-2xl border border-white/10 bg-bg-sec overflow-hidden shadow-xl", className)}>
      {children}
    </div>
  );
}
