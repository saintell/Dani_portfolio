import React from 'react';
import { Badge, Reveal, SectionTag } from '@/lib/utils';
import { MockupFrame } from '../ui/MockupFrame';

export const FruztyIntro = () => {
  return (
    <section id="fruzty" className="py-24 md:py-40 px-6 md:px-12 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionTag number="02" title="Case Study" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="col-span-1 lg:col-span-5 flex flex-col items-start gap-6">
            <Reveal>
              <Badge className="bg-fruzty-dark/20 text-fruzty-green border-fruzty-green/30">App Web</Badge>
              <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight mt-6">
                Fruzty
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h3 className="text-xl md:text-2xl text-white font-medium">
                Marketplace B2B para trading de fruta fresca
              </h3>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-base md:text-lg text-gray-light max-w-lg leading-relaxed">
                Diseño de una plataforma que centraliza la operación comercial y logística en la exportación de fruta.
              </p>
            </Reveal>
          </div>

          <div className="col-span-1 lg:col-span-7">
            <Reveal delay={0.3} className="w-full">
              <MockupFrame className="aspect-[16/10] md:aspect-video w-full overflow-hidden">
                <img src="/assets/images/fruzty/web.png" alt="Fruzty Web Desktop" className="w-full h-full object-cover object-top" />
              </MockupFrame>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
