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
          
          {/* Mockup 1: Dashboard + Mobile */}
          <div className="relative">
            <Reveal className="w-full md:w-[80%] ml-auto">
              {/* Dashboard desktop */}
              <MockupFrame className="aspect-[16/10]">
                <div className="flex h-full w-full bg-bg-main text-white">
                  <div className="w-16 h-full border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-bg-sec">
                    <div className="w-8 h-8 rounded bg-fruzty-green" />
                    <div className="w-6 h-6 rounded-full bg-white/10" />
                    <div className="w-6 h-6 rounded-full bg-white/10" />
                    <div className="w-6 h-6 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 p-8 flex flex-col gap-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="text-2xl font-bold tracking-tight text-white">Resumen de Operación</h4>
                        <p className="text-sm text-gray-mid">Octubre 2026</p>
                      </div>
                      <div className="px-4 py-2 bg-fruzty-green text-white rounded-md text-sm font-medium">Exportar Reporte</div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                      {['Ingresos', 'Volumen (kg)', 'Órdenes Activas', 'En tránsito'].map((t, i) => (
                        <div key={t} className="border border-white/5 bg-white/5 rounded-xl p-4 flex flex-col gap-2">
                          <span className="text-xs text-gray-mid uppercase font-medium tracking-wider">{t}</span>
                          <span className="text-2xl font-semibold">{i === 0 ? '$452K' : i === 1 ? '12,450' : i === 2 ? '34' : '12'}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex-1 grid grid-cols-3 gap-6">
                      <div className="col-span-2 border border-white/5 bg-white/5 rounded-xl p-6 flex flex-col gap-4">
                        <span className="text-sm font-semibold text-white">Tendencia de exportación</span>
                        <div className="flex-1 w-full border border-white/5 bg-bg-sec rounded flex items-end justify-between px-4 pt-8 pb-2 gap-2">
                          {[40, 60, 30, 80, 50, 90, 70, 85].map((h, i) => (
                            <div key={i} className="w-full bg-fruzty-green rounded-t-sm" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                      <div className="col-span-1 border border-white/5 bg-white/5 rounded-xl p-6 flex flex-col gap-4">
                        <span className="text-sm font-semibold text-white">Distribución global</span>
                        <div className="flex-1 flex items-center justify-center relative">
                          <div className="w-32 h-32 rounded-full border-[16px] border-fruzty-green border-l-fruzty-green/40 border-b-fruzty-green/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MockupFrame>
            </Reveal>

            {/* Mobile Overlap */}
            <Reveal delay={0.3} className="absolute -bottom-12 -left-4 md:-bottom-20 md:left-12 w-[180px] md:w-[240px] z-20">
              <MockupFrame type="mobile" className="aspect-[9/19.5] bg-bg-main">
                <div className="p-6 pt-16 flex flex-col gap-6 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold tracking-tight">Hola, Carlos</span>
                    <div className="w-10 h-10 rounded-full bg-white/10" />
                  </div>
                  <div className="bg-fruzty-green/20 border border-fruzty-green/30 text-white rounded-2xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-fruzty-green/20 blur-xl rounded-full -translate-y-1/2 translate-x-1/2" />
                    <span className="text-xs text-gray-mid uppercase tracking-widest block mb-1">Total exportado</span>
                    <span className="text-3xl font-semibold">$124,500</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-sm font-semibold">Órdenes recientes</span>
                    {[1,2,3].map(i => (
                      <div key={i} className="bg-bg-sec p-4 rounded-xl border border-white/5 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/20" />
                        <div className="flex-1">
                          <div className="text-sm font-medium">Uvas Red Globe</div>
                          <div className="text-xs text-gray-mid">A Estados Unidos</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </MockupFrame>
            </Reveal>
          </div>

          {/* Mockup 2: Detalle de Producto / Marketplace */}
          <Reveal className="w-full md:w-[90%] mr-auto">
            <MockupFrame className="aspect-[16/10]">
              <div className="flex flex-col h-full w-full bg-bg-main text-white">
                <div className="h-16 border-b border-white/5 flex items-center px-8 justify-between bg-bg-sec">
                   <div className="flex gap-8 font-medium text-sm">
                     <span className="text-white border-b-2 border-fruzty-green pb-5 pt-5">Marketplace</span>
                     <span className="text-gray-mid pt-5">Mis Órdenes</span>
                     <span className="text-gray-mid pt-5">Logística</span>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-white/10" />
                </div>
                
                <div className="flex-1 flex overflow-hidden">
                  <div className="w-[30%] h-full bg-bg-sec border-r border-white/5 p-6 flex flex-col gap-4 overflow-y-auto">
                    <span className="text-xs font-bold uppercase text-gray-mid tracking-wider">Ofertas Disponibles</span>
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`p-4 rounded-xl border ${i===1 ? 'border-fruzty-green bg-white/5' : 'border-white/5 bg-transparent'} flex gap-4 cursor-pointer`}>
                        <div className="w-16 h-16 rounded-lg bg-orange-500/20 flex-shrink-0" />
                        <div className="flex flex-col flex-1">
                          <span className="font-semibold text-sm">Uvas Red Globe</span>
                          <span className="text-xs text-gray-mid mb-2">Chile • Calibre XL</span>
                          <span className="text-sm font-bold text-fruzty-green mt-auto">$24.50 / kg</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex-1 p-10 flex flex-col bg-bg-main overflow-y-auto">
                    <div className="w-full h-40 bg-gradient-to-br from-fruzty-green/10 to-transparent rounded-2xl mb-8 flex items-center justify-center border border-fruzty-green/20">
                       <span className="text-8xl select-none opacity-20">🍇</span>
                    </div>
                    
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <Badge className="bg-fruzty-green/20 text-fruzty-green border-fruzty-green/30 mb-3 block w-fit">Disponible</Badge>
                        <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Uvas Red Globe Premium</h1>
                        <p className="text-gray-mid">Exportador: Agricola del Sur SA • Origen: Ica, Perú.</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$24.50 <span className="text-lg text-gray-mid font-normal">/ kg</span></div>
                        <p className="text-xs text-gray-mid mt-1">Lote min. 500kg</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mt-4">
                      <div className="border border-white/5 rounded-xl p-5 bg-white/5">
                        <h4 className="text-sm font-semibold mb-4 border-b border-white/5 pb-2 text-white">Especificaciones</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-light">
                          <div className="flex justify-between"><span className="text-gray-mid">Calibre</span><span className="font-medium">10-12mm</span></div>
                          <div className="flex justify-between"><span className="text-gray-mid">Empaque</span><span className="font-medium">Caja 8.2kg</span></div>
                          <div className="flex justify-between"><span className="text-gray-mid">Certificación</span><span className="font-medium">Global GAP</span></div>
                        </div>
                      </div>
                      <div className="border border-white/5 rounded-xl p-5 bg-white/5 flex flex-col justify-between">
                         <div>
                           <h4 className="text-sm font-semibold mb-2 text-white">Código de Trazabilidad QR</h4>
                           <p className="text-xs text-gray-mid">Escanea para ver historial de lote.</p>
                         </div>
                         <div className="w-full py-3 bg-fruzty-green/20 hover:bg-fruzty-green/40 border border-fruzty-green transition-colors text-fruzty-green rounded-lg text-center font-medium mt-4 cursor-pointer">
                           Iniciar Compra
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MockupFrame>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
