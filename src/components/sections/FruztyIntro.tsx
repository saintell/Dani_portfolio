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
              <MockupFrame className="aspect-[16/10] md:aspect-video w-full">
                {/* Simulated UI for Fruzty Dashboard */}
                <div className="flex h-full w-full bg-bg-main text-white">
                  {/* Sidebar */}
                  <div className="w-16 md:w-56 h-full bg-bg-sec border-r border-white/5 flex flex-col py-6 px-4">
                    <div className="w-8 h-8 rounded-md bg-fruzty-green mb-10 flex-shrink-0 mx-auto md:mx-0" />
                    <div className="flex flex-col gap-3">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`h-8 rounded-md flex items-center px-2 gap-3 ${i === 1 ? 'bg-fruzty-green/10 text-fruzty-green' : 'text-gray-mid'}`}>
                          <div className={`w-4 h-4 rounded-sm ${i === 1 ? 'bg-fruzty-green' : 'bg-white/10'}`} />
                          <div className={`hidden md:block h-3 rounded-sm w-full max-w-[80px] ${i === 1 ? 'bg-fruzty-green/50' : 'bg-white/10'}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Main Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 overflow-hidden">
                    <div className="flex justify-between items-center">
                      <div className="w-40 h-6 bg-white/10 rounded-md" />
                      <div className="w-10 h-10 rounded-full bg-white/10" />
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="bg-bg-sec p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                          <div className="w-1/2 h-3 bg-white/10 rounded-sm" />
                          <div className="w-3/4 h-6 bg-white/90 rounded-sm" />
                        </div>
                      ))}
                    </div>
                    {/* Table area */}
                    <div className="flex-1 bg-bg-sec rounded-xl border border-white/5 p-4 flex flex-col gap-4">
                      <div className="w-1/3 h-5 bg-white/10 rounded-md mb-2" />
                      <div className="w-full h-8 bg-white/5 flex items-center px-4 rounded-md">
                        <div className="w-full h-2 bg-white/10 rounded-sm" />
                      </div>
                      {[1,2,3,4].map((row) => (
                        <div key={row} className="w-full flex items-center px-4 py-3 gap-4 border-b border-white/5">
                          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex-shrink-0" /> {/* Avatar/Fruit */}
                          <div className="flex-1 h-3 bg-white/20 rounded-sm" />
                          <div className="w-20 h-3 bg-white/10 rounded-sm" />
                          <div className="w-16 h-5 rounded-full bg-fruzty-green/20" /> {/* Status */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MockupFrame>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
