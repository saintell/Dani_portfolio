import React from 'react';
import { Reveal, SectionTag } from '@/lib/utils';
import { cn } from '@/lib/utils';

export const FruztyPersonas = () => {
  const personas = [
    {
      role: "Exportador de Fruta",
      name: "Exportador",
      age: 42,
      location: "Chile",
      level: "Operativo / Estratégico",
      desc: "Responsable de la comercialización de fruta hacia mercados internacionales. Maneja múltiples clientes, órdenes y coordinación logística. Necesita visibilidad clara del estado de sus envíos y control sobre la operación.",
      behavior: [
        "Gestiona ventas por canales dispersos: WhatsApp, Excel, llamadas.",
        "Hace seguimiento manual de envíos.",
        "Depende de terceros para información logística."
      ],
      pain: [
        "Falta de trazabilidad en tiempo real.",
        "Información fragmentada.",
        "Procesos manuales y repetitivos."
      ]
    },
    {
      role: "Comprador / Importador",
      name: "Importador",
      age: 38,
      location: "Estados Unidos",
      level: "Toma de decisiones",
      desc: "Compra fruta a diferentes proveedores internacionales. Busca confiabilidad, claridad en la información y cumplimiento en tiempos. Necesita comparar opciones y reducir riesgo en la compra.",
      behavior: [
        "Evalúa múltiples proveedores.",
        "Se comunica vía email y plataformas externas.",
        "Requiere información clara antes de comprar."
      ],
      pain: [
        "Falta de transparencia en procesos.",
        "Incertidumbre en tiempos de entrega.",
        "Dificultad para comparar ofertas."
      ]
    },
    {
      role: "Operador Logístico",
      name: "Logística",
      age: 34,
      location: "Colombia",
      level: "Operativo",
      desc: "Encargada de coordinar envíos, documentación y seguimiento logístico. Trabaja con múltiples actores: exportadores, transporte, puertos. Necesita precisión y control del estado de cada operación.",
      behavior: [
        "Usa múltiples herramientas: Excel, sistemas internos.",
        "Hace seguimiento manual.",
        "Coordina procesos entre actores."
      ],
      pain: [
        "Falta de integración entre sistemas.",
        "Información desactualizada.",
        "Errores por procesos manuales."
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTag number="03" title="Personas" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {personas.map((p, i) => (
            <Reveal key={i} delay={i * 0.1} className="flex h-full">
              <div className="glass w-full rounded-[2rem] p-8 flex flex-col gap-8 relative overflow-hidden group hover:border-brand/30 transition-colors">
                
                {/* Number Watermark */}
                <span className="absolute -top-4 -right-4 font-display font-bold text-[120px] text-white/5 leading-none select-none pointer-events-none group-hover:text-brand/5 transition-colors">
                  0{i+1}
                </span>

                {/* Header */}
                <div className="relative z-10 flex flex-col gap-4">
                  <span className="caption-label text-brand">{p.role}</span>
                  <div className="flex items-baseline gap-4 border-b border-white/10 pb-6">
                    <h3 className="text-3xl font-display font-normal">{p.name}</h3>
                  </div>
                  
                  {/* Meta Specs */}
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono uppercase tracking-wider text-gray-mid pt-2">
                    <div className="flex flex-col gap-1">
                      <span className="opacity-50">Edad</span>
                      <span className="text-gray-light">{p.age}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="opacity-50">Base</span>
                      <span className="text-gray-light">{p.location}</span>
                    </div>
                    <div className="flex flex-col gap-1 col-span-2">
                      <span className="opacity-50">Nivel</span>
                      <span className="text-gray-light">{p.level}</span>
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <p className="relative z-10 text-sm leading-relaxed text-gray-light italic">
                  "{p.desc}"
                </p>

                {/* Lists */}
                <div className="relative z-10 flex flex-col gap-6 mt-auto">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white mb-3">Comportamiento</h4>
                    <ul className="flex flex-col gap-2">
                      {p.behavior.map((b, idx) => (
                        <li key={idx} className="text-xs text-gray-mid flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-white/20 mt-1.5 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-brand-light mb-3">Pain Points</h4>
                    <ul className="flex flex-col gap-2">
                      {p.pain.map((pain, idx) => (
                        <li key={idx} className="text-xs text-gray-mid flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-brand/40 mt-1.5 flex-shrink-0" />
                          <span>{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
