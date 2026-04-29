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

          <div className="col-span-1 lg:col-span-7 flex flex-col gap-12 lg:gap-16 justify-center w-full pt-12 lg:pt-0">
             
             {/* App Usuario */}
             <Reveal delay={0.4} className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/5 p-4 md:p-8">
               <h4 className="text-sm uppercase tracking-widest font-semibold text-white mb-6 text-center">App Usuario</h4>
               <img src="/assets/images/glimmo/Glimmo-ui usuario.png" alt="Glimmo UI Usuario" className="w-full h-auto object-contain mx-auto" />
             </Reveal>

             {/* App Experto */}
             <Reveal delay={0.5} className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/5 p-4 md:p-8">
                 <h4 className="text-sm uppercase tracking-widest font-semibold text-white mb-6 text-center">App Experto</h4>
                 <img src="/assets/images/glimmo/Glimmo-ui experto.png" alt="Glimmo UI Experto" className="w-full h-auto object-contain mx-auto" />
             </Reveal>

          </div>

        </div>
        
        {/* Additional Images */}
        <div className="mt-32 flex flex-col gap-24">
           {/* Architecture */}
           <div className="flex flex-col gap-12">
             <Reveal>
               <h3 className="text-3xl font-display font-medium">Arquitectura de la Plataforma</h3>
             </Reveal>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Reveal delay={0.1} className="w-full rounded-2xl overflow-hidden border border-white/5 bg-white/5 p-4 md:p-8">
                  <h4 className="text-sm uppercase tracking-widest font-semibold text-white mb-6 text-center">App Usuario</h4>
                  <img src="/assets/images/glimmo/Glimmo-arquitectura usuario.png" alt="Arquitectura Usuario" className="w-full h-auto object-contain mx-auto" />
                </Reveal>
                <Reveal delay={0.2} className="w-full rounded-2xl overflow-hidden border border-white/5 bg-white/5 p-4 md:p-8">
                  <h4 className="text-sm uppercase tracking-widest font-semibold text-white mb-6 text-center">App Experto</h4>
                  <img src="/assets/images/glimmo/Glimmo-arquitectura experto.png" alt="Arquitectura Experto" className="w-full h-auto object-contain mx-auto" />
                </Reveal>
             </div>
           </div>

           {/* Mobile Screens Ext */}
           <div className="flex flex-col gap-12 items-center">
             <Reveal>
               <h3 className="text-3xl font-display font-medium text-center">Flujo de Autenticación</h3>
             </Reveal>
             <Reveal delay={0.1} className="w-full max-w-lg rounded-2xl flex justify-center overflow-hidden border border-white/5 bg-white/5 p-4 md:p-6">
                 <img src="/assets/images/glimmo/Glimmo-login.png" alt="Glimmo Login" className="w-auto h-auto max-h-[400px] object-contain mx-auto" />
             </Reveal>
           </div>
        </div>

      </div>
    </section>
  );
};
