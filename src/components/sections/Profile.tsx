import React from 'react';
import { Reveal, SectionTag } from '@/lib/utils';

export const Profile = () => {
  const expertise = [
    "UX Design", "UI Design", "HMI Interfaces", "Research", 
    "Prototyping", "Arquitectura de Información", "Dashboards", "SaaS"
  ];

  return (
    <section id="perfil" className="py-24 md:py-40 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag number="01" title="Perfil" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Abstract Visual / Monogram */}
          <div className="col-span-1 md:col-span-5 relative h-[300px] md:h-auto min-h-[400px]">
            <Reveal className="w-full h-full glass rounded-3xl overflow-hidden relative flex flex-col justify-end p-8 border border-white/5">
              {/* Abstract structural shapes mimicking a 'DP' or architectural layout */}
              <div className="absolute top-1/4 left-1/4 w-[120%] h-[120%] bg-gradient-to-br from-brand/20 to-transparent rounded-full blur-[80px]" />
              <div className="absolute inset-0 bg-noise opacity-50" />
              
              <div className="relative z-10 flex flex-col gap-2">
                <div className="font-display text-8xl font-bold text-white/10 tracking-tighter">DP</div>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent my-4" />
                <div className="caption-label">Industrial Designer</div>
                <div className="caption-label text-brand-light">UI/UX Designer</div>
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-4">
                Hola, soy <br className="hidden md:block"/> Daniela Pantoja
              </h2>
              <h3 className="text-xl md:text-2xl text-brand-light mb-8 font-medium">
                Diseñadora Industrial & UI/UX Designer
              </h3>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-base md:text-xl text-gray-light leading-relaxed mb-12 max-w-2xl">
                Diseñadora de interfaz y experiencia de usuario, con base en Diseño Industrial, enfocada en crear experiencias claras para productos digitales complejos. Trabajo en software empresarial y entornos industriales, donde la información es crítica y la usabilidad impacta directamente la toma de decisiones. Mi enfoque combina investigación, pensamiento sistémico y diseño centrado en las personas para transformar procesos complejos en interfaces comprensibles y eficientes.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="flex flex-wrap gap-3">
              {expertise.map((item) => (
                <span key={item} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:border-brand/50 hover:bg-brand/10 transition-colors">
                  {item}
                </span>
              ))}
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
