import React from 'react';
import { Reveal, SectionTag } from '@/lib/utils';
import { cn } from '@/lib/utils';

export const FruztyWireframes = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag number="05" title="Wireframes" />
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:order-2 flex-1 max-w-lg lg:ml-auto">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8">
                Estructura
              </h2>
              <p className="text-lg text-gray-light leading-relaxed">
                Antes de definir la interfaz visual, se estructuraron flujos, jerarquías y módulos clave para soportar procesos comerciales y logísticos complejos.
              </p>
            </Reveal>
          </div>

          <div className="lg:order-1 flex-[1.5] w-full relative h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Collage wrapper */}
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Back card */}
              <Reveal delay={0.2} className="absolute -left-4 md:-left-12 top-[10%] w-[60%] aspect-video glass rounded-2xl p-4 border border-white/10 opacity-60 -rotate-6 scale-90">
                <div className="w-full h-full border border-dashed border-white/20 rounded-xl p-4 flex flex-col gap-4">
                  <div className="w-1/3 h-4 bg-white/10 rounded" />
                  <div className="w-full flex-1 bg-white/5 rounded" />
                </div>
              </Reveal>

              {/* Back right card */}
              <Reveal delay={0.3} className="absolute -right-4 md:-right-12 bottom-[10%] w-[50%] aspect-square glass rounded-2xl p-4 border border-white/10 opacity-50 rotate-3 scale-95">
                <div className="w-full h-full border border-dashed border-white/20 rounded-xl flex items-center justify-center flex-col gap-4">
                  <div className="w-24 h-24 rounded-full border-4 border-white/10 border-t-white/30" />
                  <div className="w-1/2 h-3 bg-white/10 rounded" />
                  <div className="w-2/3 h-3 bg-white/5 rounded" />
                </div>
              </Reveal>

              {/* Main front card */}
              <Reveal delay={0.4} className="relative z-10 w-[80%] md:w-[70%] aspect-[16/11] bg-bg-sec rounded-2xl shadow-2xl p-4 flex gap-4 rotate-1 border border-white/5">
                {/* Sidebar */}
                <div className="w-1/4 h-full border-r border-white/5 pr-4 flex flex-col gap-3">
                  <div className="w-8 h-8 rounded bg-white/10 mb-4" />
                  <div className="w-full h-4 rounded bg-white/5" />
                  <div className="w-3/4 h-4 rounded bg-white/5" />
                  <div className="w-5/6 h-4 rounded bg-white/5" />
                </div>
                {/* Main */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="w-1/3 h-6 rounded bg-white/10" />
                  <div className="flex gap-4">
                    <div className="flex-1 h-20 rounded bg-white/5" />
                    <div className="flex-1 h-20 rounded bg-white/5" />
                    <div className="flex-1 h-20 rounded bg-white/5" />
                  </div>
                  <div className="flex-1 w-full rounded bg-white/5 flex flex-col p-4 gap-3">
                    <div className="w-full h-8 bg-white/5 rounded" />
                    <div className="w-full flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                      <div className="flex-1 h-8 rounded bg-white/5" />
                    </div>
                     <div className="w-full flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                      <div className="flex-1 h-8 rounded bg-white/5" />
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
