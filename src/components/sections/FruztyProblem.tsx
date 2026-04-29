import React from 'react';
import { Reveal } from '@/lib/utils';
import { cn } from '@/lib/utils';

export const FruztyProblem = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-bg-sec border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-16 md:mb-24 text-center md:text-left">
            El reto
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 mb-20">
          
          {/* Problema */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-[1px] bg-white/20" />
                <h3 className="caption-label text-white">El problema</h3>
              </div>
              <p className="text-xl md:text-2xl text-gray-light leading-snug font-medium border-l border-brand/50 pl-6 py-2">
                La exportación de fruta opera con baja trazabilidad, procesos logísticos fragmentados, poca visibilidad en tiempo real y alta incertidumbre en la comercialización.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4 mt-4">
              {[
                "Baja trazabilidad.",
                "Procesos logísticos fragmentados.",
                "Poca visibilidad en tiempo real.",
                "Alta incertidumbre en la comercialización."
              ].map((item, i) => (
                <Reveal key={i} delay={0.2 + (i*0.1)}>
                  <div className="glass p-4 rounded-xl flex items-center gap-4 border-l-2 border-l-red-500/50">
                    <span className="font-display text-gray-mid text-sm">0{i+1}</span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Objetivo */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.3}>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-[1px] bg-white/20" />
                <h3 className="caption-label text-brand-light">El objetivo</h3>
              </div>
              <p className="text-xl md:text-2xl text-white leading-snug font-medium border-l border-brand pl-6 py-2">
                Diseñar una plataforma que centralice la operación comercial y logística, mejore la visibilidad en tiempo real, facilite la conexión y reduzca la fricción.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4 mt-4">
              {[
                "Centralizar la operación comercial y logística.",
                "Mejorar la visibilidad en tiempo real.",
                "Facilitar la conexión entre actores.",
                "Reducir la fricción operativa."
              ].map((item, i) => (
                <Reveal key={i} delay={0.4 + (i*0.1)}>
                  <div className="glass p-4 rounded-xl flex items-center gap-4 border-l-2 border-l-fruzty-green">
                    <span className="font-display text-gray-mid text-sm">0{i+1}</span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

        <Reveal delay={0.5} className="w-full mt-12 rounded-2xl overflow-hidden border border-white/5 opacity-90 transition-opacity">
          <img src="/assets/images/fruzty/Fruzty- el problema.png" alt="El problema illustración" className="w-full h-auto object-cover" />
        </Reveal>
      </div>
    </section>
  );
};
