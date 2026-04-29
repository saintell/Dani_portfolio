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
              <Reveal delay={0.2} className="absolute -left-4 md:-left-12 top-[10%] w-[60%] aspect-video rounded-2xl overflow-hidden border border-white/10 opacity-70 -rotate-6 scale-90 shadow-2xl">
                <img src="/assets/images/fruzty/Wireframes 01.png" alt="Wireframe 1" className="w-full h-full object-cover object-left-top" />
              </Reveal>

              {/* Back right card */}
              <Reveal delay={0.3} className="absolute -right-4 md:-right-12 bottom-[10%] w-[50%] aspect-video rounded-2xl overflow-hidden border border-white/10 opacity-80 rotate-3 scale-95 shadow-2xl">
                <img src="/assets/images/fruzty/Wireframes 02.png" alt="Wireframe 2" className="w-full h-full object-cover object-left-top" />
              </Reveal>

              {/* Main front card */}
              <Reveal delay={0.4} className="relative z-10 w-[80%] md:w-[70%] aspect-[16/11] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rotate-1 border border-white/10">
                <img src="/assets/images/fruzty/wireframes 3.png" alt="Wireframe 3" className="w-full h-full object-cover object-left-top bg-bg-sec" />
              </Reveal>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
