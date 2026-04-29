import React from 'react';
import { Reveal, SectionTag, Badge } from '@/lib/utils';
import { MockupFrame } from '../ui/MockupFrame';

export const FruztyUI = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-bg-sec border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-fruzty-green/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTag number="06" title="Diseño UI" />
        
        <Reveal className="max-w-2xl mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">
            Diseño UI
          </h2>
          <p className="text-xl text-gray-light leading-relaxed">
            Una interfaz clara para conectar operación comercial, trazabilidad logística y toma de decisiones en tiempo real.
          </p>
        </Reveal>

        <div className="flex flex-col gap-24 md:gap-40">
          
          {/* Mockup 1: Dashboard */}
          <Reveal className="w-full">
            <MockupFrame className="aspect-[16/10] overflow-hidden p-0 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <img src="/assets/images/fruzty/diseño ui 01.png" alt="UI Desktop 1" className="w-full h-full object-cover object-top" />
            </MockupFrame>
          </Reveal>

          {/* Mockup 1.5 */}
          <Reveal className="w-full pt-4 md:pt-0">
            <MockupFrame className="aspect-[16/10] overflow-hidden p-0 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <img src="/assets/images/fruzty/diseño ui 2.png" alt="UI Desktop 1.5" className="w-full h-full object-cover object-top" />
            </MockupFrame>
          </Reveal>

          {/* Mockup 2: Detalle de Producto / Marketplace */}
          <Reveal className="w-full md:w-[90%] mr-auto pt-12 md:pt-0">
            <MockupFrame className="aspect-[16/10] overflow-hidden p-0 border-white/10">
              <img src="/assets/images/fruzty/diseño ui 3.png" alt="UI Desktop 2" className="w-full h-full object-cover object-top" />
            </MockupFrame>
          </Reveal>

          {/* Additional Designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-12 md:pt-0">
            <Reveal>
              <MockupFrame className="aspect-[16/10] overflow-hidden p-0 border-white/10">
                <img src="/assets/images/fruzty/diseño ui 4.png" alt="UI Desktop 4" className="w-full h-full object-cover object-top" />
              </MockupFrame>
            </Reveal>
            <Reveal delay={0.2}>
              <MockupFrame className="aspect-[16/10] overflow-hidden p-0 border-white/10">
                <img src="/assets/images/fruzty/diseño ui 5.png" alt="UI Desktop 5" className="w-full h-full object-cover object-top" />
              </MockupFrame>
            </Reveal>
          </div>

          <Reveal className="w-full mt-12 rounded-2xl overflow-hidden border border-white/5 opacity-90 transition-opacity">
            <img src="/assets/images/fruzty/design system.jpg.jpeg" alt="Sistema de Diseño" className="w-full h-auto object-cover" />
          </Reveal>

        </div>
      </div>
    </section>
  );
};
