import React from 'react';
import { Badge, Reveal, SectionTag, cn } from '@/lib/utils';
import { MockupFrame } from '../ui/MockupFrame';
import { LayoutTemplate, Activity, BarChart, Settings, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const PCA = () => {
  return (
    <section id="pca" className="py-24 md:py-40 px-6 md:px-12 bg-bg-main relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] left-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTag number="08" title="Case Study" />

        <div className="flex flex-col gap-32">
          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col items-start gap-8">
            <Reveal>
              <Badge className="bg-brand/20 text-brand-light border-brand/30">Sitio Web WordPress</Badge>
              <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight mt-6">
                PCA
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h3 className="text-xl md:text-2xl text-white font-medium">
                Rediseño de la presencia digital enfocado en claridad, estructura y conversión.
              </h3>
            </Reveal>
            
            <Reveal delay={0.2} className="flex flex-col gap-6">
              <p className="text-sm md:text-base text-gray-light leading-relaxed font-semibold">
                Diseño y desarrollo de un sitio web estructurado para comunicar servicios, reforzar la presencia digital y facilitar el contacto con clientes potenciales.
              </p>
              <p className="text-sm md:text-base text-gray-light leading-relaxed">
                El proyecto consistió en transformar una presencia digital limitada, basada en una única landing page, en un sitio web más claro, navegable y modular. El objetivo fue mejorar la comprensión de la oferta, organizar la información en páginas clave y aumentar las oportunidades de conversión mediante una arquitectura más clara y una experiencia de navegación más eficiente.
              </p>
            </Reveal>
          </div>
          
          <div className="flex items-center justify-center relative">
            <Reveal delay={0.3} className="w-full">
              <MockupFrame type="browser" url="pca.com.co" className="aspect-[16/8] md:aspect-[16/7.5] bg-white/5">
                <img src="/assets/images/pca/PCA HOME 01.png" alt="PCA Home" className="w-full h-full object-cover object-top" />
              </MockupFrame>
            </Reveal>
          </div>
        </div>

        {/* Problem and Objective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <Reveal className="flex flex-col gap-6 p-8 md:p-12 border border-white/5 bg-white/[0.02] rounded-3xl">
            <h4 className="text-3xl font-display font-medium text-white mb-2">El problema</h4>
            <p className="text-gray-light text-sm">El sitio estaba limitado a una única landing page, sin navegación a otras secciones.</p>
            <ul className="flex flex-col gap-4 mt-4">
              {[
                "No existían páginas estructuradas como servicios, productos o contacto.",
                "La información estaba concentrada en un solo flujo, dificultando la exploración.",
                "Falta de jerarquía y organización del contenido.",
                "Baja claridad en la propuesta de valor.",
                "El usuario no podía navegar ni entender fácilmente la oferta.",
                "La estructura limitaba la exploración y la conversión."
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0" />
                  <span className="text-sm text-gray-mid leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-6 border-l-[3px] border-l-red-400/50 glass rounded-xl">
              <p className="text-lg font-display text-gray-light italic">
                “Una landing page única limitaba la exploración, la claridad de la oferta y la conversión.”
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-6 p-8 md:p-12 border border-brand/20 bg-brand/[0.02] rounded-3xl">
            <h4 className="text-3xl font-display font-medium text-white mb-2">Objetivo</h4>
            <p className="text-gray-light text-sm">Diseñar y desarrollar un sitio web que comunique claramente los servicios, mejore la navegación y estructura, refuerce la presencia digital y facilite el contacto con clientes potenciales.</p>
            <ul className="flex flex-col gap-4 mt-4">
              {[
                "Comunicar claramente los servicios.",
                "Mejorar la navegación y estructura.",
                "Reforzar la presencia digital.",
                "Facilitar el contacto con clientes potenciales.",
                "Organizar el contenido en páginas clave.",
                "Mejorar la claridad de la propuesta de valor.",
                "Enfocar la experiencia en conversión."
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  <span className="text-sm text-gray-mid leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Key Users & Needs */}
        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-4">
            <Reveal>
              <h3 className="text-3xl md:text-5xl font-display font-medium">Usuarios clave & Necesidades</h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-mid max-w-sm text-sm">
                Diseñado considerando diferentes perfiles dentro de la industria.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Empresas",
                desc: "Organizaciones que buscan optimizar sus procesos mediante soluciones de transformación digital, automatización y análisis de datos.",
                icon: LayoutTemplate
              },
              {
                title: "Tomadores de decisión",
                desc: "Responsables de definir estrategias de eficiencia, innovación y modernización tecnológica dentro de la empresa.",
                icon: Activity
              },
              {
                title: "Aliados / partners",
                desc: "Profesionales de ingeniería, IT o planta que evalúan la viabilidad, implementación y uso de las soluciones.",
                icon: Users
              }
            ].map((persona, i) => (
              <Reveal key={i} delay={0.1 * i} className="bg-bg-sec border border-white/5 p-8 rounded-2xl flex flex-col gap-6 group hover:border-brand/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-brand/20 group-hover:text-brand-light transition-colors">
                  <persona.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">{persona.title}</h4>
                  <p className="text-sm text-gray-mid leading-relaxed">{persona.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <Reveal className="col-span-1 md:col-span-6 lg:col-span-7 bg-bg-sec border border-white/5 rounded-3xl p-8 md:p-12">
              <h4 className="text-xl font-medium text-white mb-8">Necesidades del usuario</h4>
              <ul className="flex flex-col gap-5">
                {[
                  "Entender rápidamente qué hace PCA y qué soluciones ofrece.",
                  "Identificar cómo los servicios impactan su operación: eficiencia, datos y automatización.",
                  "Acceder a información clara sin lenguaje excesivamente técnico.",
                  "Evaluar credibilidad y experiencia de la empresa.",
                  "Encontrar fácilmente cómo iniciar contacto o solicitar información."
                ].map((need, i) => (
                  <li key={i} className="flex gap-4">
                     <CheckCircle2 className="text-brand-light flex-shrink-0 mt-0.5" size={18} />
                     <span className="text-sm text-gray-light leading-relaxed">{need}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2} className="col-span-1 md:col-span-6 lg:col-span-5 bg-gradient-to-br from-brand/10 to-transparent border border-brand/20 rounded-3xl p-8 md:p-12 flex flex-col justify-center">
              <h4 className="text-sm uppercase tracking-widest font-semibold text-brand-light mb-6">Insight</h4>
              <p className="text-2xl font-display text-white italic leading-snug">
                “Los usuarios no buscan solo información, buscan entender rápidamente cómo una solución impacta su operación.”
              </p>
            </Reveal>
          </div>
        </div>

        {/* Context of Use */}
        <div className="flex flex-col gap-12">
          <Reveal>
            <h3 className="text-3xl font-display font-medium text-center">Contexto de uso</h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
             {[
               "Búsqueda de proveedores de transformación digital industrial.",
               "Evaluación de soluciones tecnológicas para optimizar procesos.",
               "Revisión rápida desde entornos laborales: oficina o planta.",
               "Comparación entre diferentes empresas del sector.",
               "Necesidad de entender propuestas en poco tiempo."
             ].map((ctx, i) => (
               <Reveal key={i} delay={i * 0.1} className="bg-bg-sec border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/5 text-xs flex items-center justify-center font-mono text-gray-mid">0{i+1}</div>
                  <p className="text-xs text-gray-light leading-relaxed">{ctx}</p>
               </Reveal>
             ))}
          </div>
        </div>

        {/* Design Process */}
        <div className="flex flex-col gap-12">
           <Reveal>
            <h3 className="text-3xl font-display font-medium">Proceso de diseño</h3>
           </Reveal>
           <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-px bg-white/10 hidden md:block" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {[
                   { title: "Analizar", tasks: ["Revisión del sitio actual.", "Identificación de problemas de UX."] },
                   { title: "Estructurar", tasks: ["Arquitectura de información.", "Definición de páginas clave."] },
                   { title: "Diseñar", tasks: ["Wireframes.", "UI limpia y jerárquica."] },
                   { title: "Construir", tasks: ["Implementación en WordPress.", "Ajustes visuales y funcionales."] }
                 ].map((step, i) => (
                   <Reveal key={i} delay={0.1 * i} className="relative z-10 flex flex-col gap-6">
                      <div className="w-16 h-16 rounded-full bg-bg-main border border-white/10 flex items-center justify-center text-xl font-display text-white">
                        {i+1}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                        <ul className="flex flex-col gap-2">
                           {step.tasks.map((task, j) => (
                             <li key={j} className="text-xs text-gray-mid flex items-center gap-2">
                               <div className="w-1 h-1 rounded-full bg-brand/50" />
                               {task}
                             </li>
                           ))}
                        </ul>
                      </div>
                   </Reveal>
                 ))}
              </div>
           </div>
        </div>

        {/* Design Decisions */}
        <div className="flex flex-col gap-12">
          <Reveal>
            <h3 className="text-3xl font-display font-medium">Decisiones de diseño</h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Claridad en la propuesta de valor",
                text: "Se reorganizó el contenido para explicar de forma directa qué hace PCA, qué soluciones ofrece y cómo puede aportar valor a sus clientes."
              },
              {
                title: "Jerarquía y consistencia visual",
                text: "Se definió una estructura visual más clara, con títulos, bloques de contenido y llamadas a la acción consistentes."
              },
              {
                title: "Simplificación de navegación",
                text: "Se pasó de una landing page única a una experiencia con páginas y secciones diferenciadas para facilitar la exploración."
              },
              {
                title: "Enfoque en conversión",
                text: "Se priorizaron rutas claras hacia contacto, solicitud de información y comprensión rápida de los servicios."
              },
              {
                title: "Diseño modular",
                text: "Se estructuró el sitio en módulos reutilizables para facilitar escalabilidad, mantenimiento y futuras actualizaciones."
              }
            ].map((decision, i) => (
              <Reveal key={i} delay={i * 0.1} className={cn(
                "p-8 rounded-2xl bg-bg-sec border border-white/5",
                i === 3 ? "md:col-span-1 lg:col-span-2" : "",
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              )}>
                <h4 className="text-base font-semibold text-white mb-4">{decision.title}</h4>
                <p className="text-sm text-gray-light leading-relaxed">{decision.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="flex flex-col gap-12">
           <Reveal>
            <h3 className="text-3xl font-display font-medium">Arquitectura de la Información</h3>
           </Reveal>
           <Reveal delay={0.1} className="w-full bg-bg-sec border border-white/5 rounded-3xl p-8 md:p-16 overflow-hidden relative">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto">
                 {/* Root */}
                 <div className="flex justify-center mb-12">
                    <div className="bg-bg-main border border-brand/50 px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col items-center text-center w-full max-w-xs relative">
                       <span className="text-sm font-bold text-white mb-1">Home</span>
                       <span className="text-[10px] text-gray-mid">Hero / Servicios / Casos</span>
                       <div className="absolute -bottom-12 left-1/2 w-px h-12 bg-brand/30"></div>
                    </div>
                 </div>

                 {/* Top connector line */}
                 <div className="hidden md:block w-[calc(100%-25%)] h-px bg-brand/30 mx-auto relative mb-8">
                    <div className="absolute top-0 left-0 w-px h-8 bg-brand/30"></div>
                    <div className="absolute top-0 left-[33.33%] w-px h-8 bg-brand/30"></div>
                    <div className="absolute top-0 left-[66.66%] w-px h-8 bg-brand/30"></div>
                    <div className="absolute top-0 right-0 w-px h-8 bg-brand/30"></div>
                 </div>

                 {/* Nodes */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
                    {/* Node 1 */}
                    <div className="flex flex-col gap-3">
                       <div className="bg-bg-main border border-white/10 px-4 py-3 rounded-lg w-full">
                         <span className="text-xs font-semibold text-white">Servicios</span>
                       </div>
                       <ul className="flex flex-col gap-2 pl-4 border-l border-white/10 ml-4 py-2">
                         {["Transformación digital", "Automatización", "Analítica de datos", "Consultoría"].map(item => (
                           <li key={item} className="text-[10px] text-gray-mid relative before:content-[''] before:absolute before:-left-4 before:top-1/2 before:w-3 before:h-px before:bg-white/10">{item}</li>
                         ))}
                       </ul>
                    </div>
                    {/* Node 2 */}
                    <div className="flex flex-col gap-3">
                       <div className="bg-bg-main border border-white/10 px-4 py-3 rounded-lg w-full">
                         <span className="text-xs font-semibold text-white">Productos / Soluciones</span>
                       </div>
                       <ul className="flex flex-col gap-2 pl-4 border-l border-white/10 ml-4 py-2">
                         {["Soluciones ind.", "Htas. digitales", "Monitoreo", "Dashboards"].map(item => (
                           <li key={item} className="text-[10px] text-gray-mid relative before:content-[''] before:absolute before:-left-4 before:top-1/2 before:w-3 before:h-px before:bg-white/10">{item}</li>
                         ))}
                       </ul>
                    </div>
                    {/* Node 3 */}
                    <div className="flex flex-col gap-3">
                       <div className="bg-bg-main border border-white/10 px-4 py-3 rounded-lg w-full">
                         <span className="text-xs font-semibold text-white">Nosotros</span>
                       </div>
                       <ul className="flex flex-col gap-2 pl-4 border-l border-white/10 ml-4 py-2">
                         {["Experiencia", "Credibilidad", "Enfoque", "Diferenciales"].map(item => (
                           <li key={item} className="text-[10px] text-gray-mid relative before:content-[''] before:absolute before:-left-4 before:top-1/2 before:w-3 before:h-px before:bg-white/10">{item}</li>
                         ))}
                       </ul>
                    </div>
                    {/* Node 4 */}
                    <div className="flex flex-col gap-3">
                       <div className="bg-bg-main border border-brand/30 px-4 py-3 rounded-lg w-full relative overflow-hidden">
                         <div className="absolute inset-0 bg-brand/5"></div>
                         <span className="text-xs font-semibold text-white relative z-10">Contacto</span>
                       </div>
                       <ul className="flex flex-col gap-2 pl-4 border-l border-white/10 ml-4 py-2">
                         {["Formulario", "Datos contacto", "CTA Información"].map(item => (
                           <li key={item} className="text-[10px] text-brand-light/80 relative before:content-[''] before:absolute before:-left-4 before:top-1/2 before:w-3 before:h-px before:bg-white/10">{item}</li>
                         ))}
                       </ul>
                    </div>
                 </div>

              </div>
           </Reveal>
        </div>

        {/* Real Mockups & UI Layouts */}
        <div className="flex flex-col gap-32 pt-12">
          
          {/* Mockup 1: Home & 2: Servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Reveal className="flex flex-col gap-6">
               <h4 className="text-xl font-display font-medium text-white">Homepage</h4>
               <p className="text-sm text-gray-mid mb-4">Hero con propuesta de valor clara, CTA principal hacia contacto y exploración rápida de servicios.</p>
               <MockupFrame type="browser" url="pca.com.co" className="aspect-[16/16] md:aspect-[16/12]">
                <img src="/assets/images/pca/PCA HOME 02.png" alt="PCA Homepage" className="w-full h-full object-cover object-top" />
              </MockupFrame>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-col gap-6">
               <h4 className="text-xl font-display font-medium text-white">Página de Servicios</h4>
               <p className="text-sm text-gray-mid mb-4">Grid de servicios bien estructurado con cards accesibles, iconografía clara y texto resumido.</p>
               <MockupFrame type="browser" url="pca.com.co" className="aspect-[16/16] md:aspect-[16/12]">
                <img src="/assets/images/pca/PCA SERVICIOS.png" alt="PCA Servicios" className="w-full h-full object-cover object-top" />
              </MockupFrame>
            </Reveal>
          </div>

          {/* Additional Blog Section that uses the provided image */}
          <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto w-full">
             <Reveal className="flex flex-col gap-6">
               <h4 className="text-xl font-display font-medium text-white">Sobre Nosotros / Blog</h4>
               <p className="text-sm text-gray-mid mb-4">Módulos para presentar los valores, enfoque diferencial y noticias de la industria (Diseño adaptado).</p>
               <MockupFrame type="browser" url="pca.com.co" className="aspect-[16/16] md:aspect-[16/8]">
                <img src="/assets/images/pca/PCA BLOG.png" alt="PCA Blog" className="w-full h-auto object-cover object-top" />
              </MockupFrame>
            </Reveal>
          </div>

          {/* Mockup 5: Collage Editorial */}
          <Reveal className="w-full relative h-[400px] md:h-[600px] max-w-5xl mx-auto bg-bg-sec rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center p-6 md:p-12">
             <div className="absolute inset-0 bg-brand/5 mix-blend-screen pointer-events-none" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-light/10 blur-[120px] rounded-full pointer-events-none" />
             
             <div className="relative w-full h-full max-w-5xl">
                <motion.div 
                   animate={{ y: [-10, 10, -10] }}
                   transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                   className="absolute top-[5%] left-[5%] w-[50%] md:w-[40%] rounded-xl overflow-hidden shadow-2xl border border-white/10 z-10"
                >
                   <img src="/assets/images/pca/PCA HOME 01.png" alt="Screenshot 1" className="w-full h-auto" />
                </motion.div>
                <motion.div 
                   animate={{ y: [10, -10, 10] }}
                   transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                   className="absolute top-[20%] right-[5%] w-[45%] md:w-[35%] rounded-xl overflow-hidden shadow-2xl border border-white/10 z-20"
                >
                   <img src="/assets/images/pca/PCA SERVICIOS.png" alt="Screenshot 2" className="w-full h-auto" />
                </motion.div>
                <motion.div 
                   animate={{ y: [-5, 15, -5] }}
                   transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
                   className="absolute bottom-[10%] left-[25%] w-[45%] md:w-[35%] rounded-xl overflow-hidden shadow-2xl border border-white/10 z-30"
                >
                   <img src="/assets/images/pca/PCA SOBRE NOSOTROS.png" alt="Screenshot 3" className="w-full h-auto" />
                </motion.div>
             </div>
          </Reveal>

        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-24">
          <div className="col-span-1 md:col-span-4">
            <Reveal>
              <h3 className="text-3xl font-display font-medium mb-4">Resultados</h3>
              <p className="text-sm text-gray-mid">Impacto a nivel de experiencia e información.</p>
            </Reveal>
          </div>
          <div className="col-span-1 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {[
              "Sitio más claro y fácil de explorar.",
              "Navegación más estructurada.",
              "Mejor comprensión de la oferta de servicios.",
              "Mayor enfoque en conversión.",
              "Presencia digital más sólida.",
              "Base modular para crecimiento futuro."
            ].map((res, i) => (
              <Reveal key={i} delay={0.1 * i} className="flex gap-4 items-center bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <CheckCircle2 className="text-brand flex-shrink-0" size={20} />
                <span className="text-sm text-gray-light">{res}</span>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
      </div>
    </section>
  );
};
