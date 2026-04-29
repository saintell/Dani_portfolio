import React from 'react';
import { Badge, Reveal, SectionTag } from '@/lib/utils';
import { MockupFrame } from '../ui/MockupFrame';

export const Glimmo = () => {
  return (
    <section id="glimmo" className="py-24 md:py-40 px-6 md:px-12 bg-bg-main relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-light/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTag number="07" title="Case Study" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="col-span-1 lg:col-span-5 flex flex-col items-start gap-8">
            <Reveal>
              <Badge className="bg-brand-light/20 text-brand-light border-brand-light/30">App Mobile</Badge>
              <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight mt-6">
                Glimmo
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h3 className="text-xl md:text-2xl text-white font-medium">
                Plataforma de servicios de belleza a domicilio
              </h3>
            </Reveal>
            
            <Reveal delay={0.2} className="flex flex-col gap-6">
              <p className="text-base md:text-lg text-gray-light leading-relaxed">
                Diseño de una plataforma tipo marketplace que conecta usuarios con profesionales de belleza bajo demanda.
              </p>
              
              <div className="p-6 glass rounded-2xl border-l-[3px] border-l-brand-light mt-4 flex flex-col gap-4">
                <h4 className="text-sm uppercase tracking-widest font-semibold text-white">Insight Clave</h4>
                <p className="text-xl font-display text-gray-light italic">
                  "Las personas quieren comodidad + control + inmediatez."
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="w-full mt-6">
              <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
                 <h4 className="text-sm font-semibold text-white">Objetivo</h4>
                 <p className="text-sm text-gray-light leading-relaxed">
                   Crear un modelo tipo uberización de la belleza que conecte usuarios y expertos en tiempo real, permita reserva o servicio inmediato y genere confianza mediante reputación.
                 </p>
              </div>
            </Reveal>
          </div>

          <div className="col-span-1 lg:col-span-7 relative h-[600px] md:h-[800px] flex items-center justify-center">
             
             {/* Left Mobile */}
             <Reveal delay={0.4} className="absolute left-0 md:left-[10%] top-1/2 -translate-y-1/2 w-[220px] md:w-[260px] -rotate-6 z-10">
               <MockupFrame type="mobile" className="aspect-[9/19.5] bg-[#0E0E10] border-carbon/80 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
                 <div className="p-5 flex flex-col h-full text-white pt-14">
                    <div className="flex justify-between items-center mb-6">
                       <span className="font-display text-xl font-bold">Glimmo</span>
                       <div className="w-8 h-8 rounded-full bg-white/10" />
                    </div>
                    {/* Search */}
                    <div className="w-full h-10 bg-white/5 rounded-full border border-white/10 mb-6 flex items-center px-4">
                      <span className="text-xs text-white/40">Buscar manicura, peinado...</span>
                    </div>
                    {/* Categories */}
                    <div className="flex gap-3 overflow-x-auto no-scrollbar mb-6 pb-2">
                       {['Uñas', 'Cabello', 'Maquillaje', 'Spa'].map(c => (
                         <div key={c} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs whitespace-nowrap">{c}</div>
                       ))}
                    </div>
                    {/* Active Cards */}
                    <span className="text-sm font-semibold mb-4">Profesionales cerca</span>
                    <div className="flex flex-col gap-4">
                       {[1,2].map(i => (
                         <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/10 flex gap-3">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-brand to-brand-light flex-shrink-0" />
                            <div className="flex flex-col justify-center gap-1">
                               <span className="font-semibold text-sm">María S.</span>
                               <span className="text-[10px] text-white/50">Manicurista • 4.9 ★</span>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
               </MockupFrame>
             </Reveal>

             {/* Right Mobile */}
             <Reveal delay={0.5} className="absolute right-0 md:right-[15%] top-1/2 -translate-y-[45%] w-[240px] md:w-[280px] rotate-3 z-20">
                <MockupFrame type="mobile" className="aspect-[9/19.5] bg-bg-sec border-carbon shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                 <div className="p-5 flex flex-col h-full text-white pt-14">
                    {/* Header profile */}
                    <div className="w-full aspect-square rounded-2xl bg-white/5 mb-4 relative overflow-hidden flex items-end p-4">
                       <Badge className="absolute top-4 right-4 bg-bg-main text-white border-white/10 shadow-sm font-bold">4.9 ★</Badge>
                       <span className="text-white font-display text-2xl font-bold drop-shadow-md">María S.</span>
                    </div>
                    <div className="flex gap-2 mb-6">
                      <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium">Manicura</div>
                      <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium">Pedicura</div>
                    </div>

                    <span className="text-sm font-semibold mb-3">Servicios populares</span>
                    <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
                       {[1,2,3].map(i => (
                         <div key={i} className="bg-bg-main border text-left border-white/5 rounded-xl p-3 flex justify-between items-center shadow-sm">
                            <div className="flex flex-col">
                               <span className="font-semibold text-sm">{i===1 ? 'Manicura Semipermanente' : i===2 ? 'Acrílicas' : 'Pedicura Spa'}</span>
                               <span className="text-xs text-gray-mid">45 min</span>
                            </div>
                            <span className="font-bold text-brand-light">${i===1 ? '45' : i===2 ? '60' : '55'}</span>
                         </div>
                       ))}
                    </div>

                    <div className="w-full mt-4 bg-brand text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-brand/20">
                      Reservar Ahora
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
