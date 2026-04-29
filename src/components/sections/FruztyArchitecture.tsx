import React from 'react';
import { Reveal, SectionTag } from '@/lib/utils';
import { ArrowRight, Box } from 'lucide-react';

export const FruztyArchitecture = () => {
  const nodes = [
    "Marketplace", "Usuarios", "Ofertas", "Órdenes", 
    "Logística", "Reportes", "Trazabilidad", "Calendario"
  ];
  const steps = ["Registro", "Exploración", "Oferta", "Compra", "Programación", "Seguimiento", "Reporte"];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-bg-sec border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTag number="04" title="Arquitectura" />

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
          <Reveal className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8">
              Módulos y Flujos
            </h2>
            <p className="text-lg text-gray-light leading-relaxed mb-6">
              Definición de arquitectura de información para estructurar un ecosistema que conecta roles distintos. Diseño de flujos de usuario enfocados en reducir la fricción entre la oferta y la logística.
            </p>
          </Reveal>
          
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nodes.map((node, i) => (
                <Reveal key={node} delay={i * 0.05}>
                  <div className="h-24 glass rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-brand/30 transition-colors">
                    <Box className="w-5 h-5 text-gray-mid" />
                    <span className="text-xs font-medium tracking-wider uppercase text-gray-light">{node}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* User Flow Diagram */}
        <Reveal delay={0.2} className="w-full">
          <div className="w-full overflow-x-auto pb-8 no-scrollbar">
            <div className="flex items-center min-w-[800px] w-full">
              {steps.map((step, i) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center gap-4 relative group">
                    <div className="w-12 h-12 rounded-full border border-brand/40 bg-brand/10 flex items-center justify-center font-mono text-sm text-brand group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <span className="text-xs font-medium uppercase tracking-widest text-gray-light whitespace-nowrap">{step}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-px bg-gradient-to-r from-brand/20 via-brand/40 to-brand/20 mx-4 flex items-center justify-center relative">
                       <ArrowRight className="w-4 h-4 text-brand absolute" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
