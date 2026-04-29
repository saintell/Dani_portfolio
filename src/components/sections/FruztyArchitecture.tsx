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
            <Reveal delay={0.1} className="w-full rounded-2xl overflow-hidden border border-white/5">
               <img src="/assets/images/fruzty/arquitectura 1.png" alt="Arquitectura" className="w-full h-auto object-cover" />
            </Reveal>
          </div>
        </div>

        {/* User Flow Diagram */}
        <Reveal delay={0.2} className="w-full">
          <div className="w-full rounded-2xl overflow-hidden border border-white/5 bg-white/5 p-4 md:p-8">
             <img src="/assets/images/fruzty/flujos de usuario.png" alt="Flujos de Usuario" className="w-full h-auto object-contain mx-auto" />
          </div>
        </Reveal>

      </div>
    </section>
  );
};
