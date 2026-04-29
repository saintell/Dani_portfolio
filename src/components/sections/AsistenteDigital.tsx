import React from 'react';
import { Badge, Reveal, SectionTag, cn } from '@/lib/utils';
import { MockupFrame } from '../ui/MockupFrame';
import { CheckCircle2, ShieldAlert, Zap, LayoutDashboard, BrainCircuit, Activity, LineChart, FileTerminal, Network, Layers, GitMerge, Settings, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const AsistenteDigital = () => {
  return (
    <section id="asistente" className="py-24 md:py-40 px-6 md:px-12 bg-bg-main relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[30%] right-[-10%] w-[1000px] h-[1000px] bg-brand/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTag number="02" title="Case Study" />

        <div className="flex flex-col gap-24 md:gap-32">
          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col items-start gap-8">
            <Reveal>
              <Badge className="bg-brand/20 text-brand-light border-brand/30">App Web</Badge>
              <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight mt-6">
                Asistente Digital Industrial
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h3 className="text-xl md:text-2xl text-white font-medium">
                Asistente conversacional para generación de dashboards dinámicos
              </h3>
            </Reveal>
            
            <Reveal delay={0.2} className="flex flex-col gap-6">
              <p className="text-sm md:text-base text-gray-light leading-relaxed font-semibold">
                Diseño de una herramienta que permite acceder a datos operativos en tiempo real mediante lenguaje natural.
              </p>
              <p className="text-sm md:text-base text-gray-light leading-relaxed">
                El proyecto propone una interfaz conversacional para entornos industriales, permitiendo que supervisores, jefes de turno, operadores y tracking managers consulten información crítica sin navegar múltiples sistemas. El asistente funciona como punto de entrada persistente para generar dashboards dinámicos, visualizar KPIs, detectar anomalías y apoyar la toma de decisiones en tiempo real.
              </p>
            </Reveal>
          </div>
          
          <div className="flex items-center justify-center relative">
            <Reveal delay={0.3} className="w-full">
              <MockupFrame type="browser" url="orion.industrial.app" className="aspect-[16/10] bg-[#0E0E10]">
                <img src="/assets/images/asistente/Asistente Dashboard 01.png" alt="Dashboard" className="w-full h-full object-cover object-top" />
              </MockupFrame>
            </Reveal>
          </div>
        </div>

        {/* Problem and Objective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <Reveal className="flex flex-col gap-6 p-8 md:p-12 border border-white/5 bg-white/[0.02] rounded-3xl">
            <h4 className="text-3xl font-display font-medium text-white mb-2">El problema</h4>
            <p className="text-gray-light text-sm">Sobrecarga de información en entornos operativos.</p>
            <ul className="flex flex-col gap-4 mt-4">
              {[
                "Datos fragmentados en múltiples sistemas.",
                "Interfaces complejas y poco intuitivas.",
                "Pérdida de tiempo buscando KPIs críticos.",
                "Dificultad para interpretar información operativa en tiempo real.",
                "Navegación compleja entre dashboards, reportes y sistemas."
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0" />
                  <span className="text-sm text-gray-mid leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-6 p-8 md:p-12 border border-brand/20 bg-brand/[0.02] rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <BrainCircuit size={120} />
            </div>
            <h4 className="text-3xl font-display font-medium text-white mb-2 relative z-10">Objetivo</h4>
            <p className="text-gray-light text-sm relative z-10">Facilitar el acceso a información operativa en tiempo real mediante una interfaz conversacional que permita generar dashboards dinámicos según la necesidad del usuario.</p>
            <ul className="flex flex-col gap-4 mt-4 relative z-10">
              {[
                "Permitir consultas mediante lenguaje natural.",
                "Generar visualizaciones dinámicas según la intención del usuario.",
                "Reducir la fricción en el acceso a KPIs críticos.",
                "Mejorar la toma de decisiones en operación.",
                "Mantener el contexto operativo sin obligar al usuario a navegar múltiples pantallas."
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  <span className="text-sm text-gray-mid leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Insight Central */}
        <Reveal className="w-full relative py-12 md:py-20 flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/10 to-transparent"></div>
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>
            <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>
            <div className="max-w-4xl text-center px-6 relative z-10">
               <h4 className="text-xs uppercase tracking-widest font-semibold text-brand-light mb-6">Insight Clave</h4>
               <p className="text-2xl md:text-5xl font-display font-medium text-white italic leading-tight">
                “Los usuarios no necesitan más datos, necesitan acceso inmediato y comprensible a la información.”
               </p>
            </div>
        </Reveal>

        {/* Key Users & Needs */}
        <div className="flex flex-col gap-16">
          <Reveal>
             <h3 className="text-3xl md:text-5xl font-display font-medium">Usuarios clave</h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Supervisor",
                desc: "Supervisa la operación en tiempo real y requiere visibilidad rápida del estado general.",
                icon: ShieldAlert
              },
              {
                title: "Jefe de turno",
                desc: "Necesita entender qué ocurrió en el turno anterior y tomar decisiones inmediatas.",
                icon: Zap
              },
              {
                title: "Operador de planta",
                desc: "Interactúa directamente con el sistema y requiere información clara para ejecutar tareas.",
                icon: Settings
              },
              {
                title: "Tracking Manager",
                desc: "Analiza métricas, incidentes y desempeño para optimizar la operación.",
                icon: Activity
              }
            ].map((persona, i) => (
              <Reveal key={i} delay={0.1 * i} className="bg-bg-sec border border-white/5 p-8 rounded-2xl flex flex-col gap-6 group hover:border-brand/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-brand/20 group-hover:text-brand-light transition-colors shadow-inner">
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
            <Reveal className="col-span-1 md:col-span-6 lg:col-span-7 bg-[#141416] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
              <h4 className="text-xl font-medium text-white mb-8 relative z-10">Necesidades</h4>
              <ul className="flex flex-col gap-5 relative z-10">
                {[
                  "Acceso inmediato a información crítica.",
                  "Visualización clara de KPIs.",
                  "Respuestas rápidas sin navegación compleja.",
                  "Soporte para toma de decisiones en tiempo real.",
                  "Información estructurada y fácil de interpretar."
                ].map((need, i) => (
                  <li key={i} className="flex gap-4 items-center">
                     <CheckCircle2 className="text-teal-400 flex-shrink-0" size={18} />
                     <span className="text-sm text-gray-light leading-relaxed">{need}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2} className="col-span-1 md:col-span-6 lg:col-span-5 bg-gradient-to-br from-[#141416] to-[#111112] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-center">
              <p className="text-xl font-display text-gray-light italic leading-relaxed border-l-2 border-brand/50 pl-6">
                “No tienen tiempo para aprender herramientas complejas ni navegar múltiples sistemas.”
              </p>
            </Reveal>
          </div>
        </div>

        {/* Context of Use */}
        <div className="flex flex-col gap-12">
          <Reveal>
            <h3 className="text-3xl font-display font-medium">Contexto de uso</h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Cambios de turno", text: "Revisión rápida de lo ocurrido, incidentes abiertos y estado actual de la operación." },
               { title: "Monitoreo en planta", text: "Consulta inmediata de métricas y comportamiento del sistema ante anomalías." },
               { title: "Análisis de incidentes", text: "Identificación y priorización de eventos críticos según severidad e impacto." },
               { title: "Registro en campo", text: "Ingreso de datos operativos donde la precisión y validación son clave." }
             ].map((ctx, i) => (
               <Reveal key={i} delay={i * 0.1} className="bg-[#141416] border border-white/5 p-8 rounded-2xl flex flex-col gap-4">
                  <div className="text-xs font-mono text-brand mb-2">0{i+1}</div>
                  <h4 className="text-white font-semibold">{ctx.title}</h4>
                  <p className="text-sm text-gray-mid leading-relaxed">{ctx.text}</p>
               </Reveal>
             ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="flex flex-col gap-12">
           <Reveal>
            <h3 className="text-3xl font-display font-medium">Metodología</h3>
            <p className="text-sm text-gray-mid mt-2">Proceso de diseño ágil</p>
           </Reveal>
           <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-px bg-white/10 hidden md:block" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {[
                   { title: "Entender", tasks: ["Análisis del flujo operativo.", "Identificación de necesidades críticas."] },
                   { title: "Priorizar", tasks: ["Enfoque en casos de uso clave.", "Consultas rápidas.", "Visualización de KPIs.", "Incidentes."] },
                   { title: "Diseñar", tasks: ["Flujos conversacionales.", "Dashboards dinámicos.", "UI enfocada en claridad."] },
                   { title: "Ajustar", tasks: ["Iteraciones rápidas basadas en lógica del sistema.", "Optimización de visualización y jerarquía."] }
                 ].map((step, i) => (
                   <Reveal key={i} delay={0.1 * i} className="relative z-10 flex flex-col gap-6">
                      <div className="w-16 h-16 rounded-full bg-bg-main border border-white/10 flex items-center justify-center text-xl font-display text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                        {i+1}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                        <ul className="flex flex-col gap-2">
                           {step.tasks.map((task, j) => (
                             <li key={j} className="text-xs text-gray-mid flex items-start gap-2">
                               <div className="w-1 h-1 rounded-full bg-brand/50 mt-1.5 flex-shrink-0" />
                               <span>{task}</span>
                             </li>
                           ))}
                        </ul>
                      </div>
                   </Reveal>
                 ))}
              </div>
           </div>
        </div>

        {/* Architecture */}
        <div className="flex flex-col gap-12">
           <Reveal>
            <h3 className="text-3xl font-display font-medium">Arquitectura de la Información</h3>
           </Reveal>
           
           <Reveal delay={0.1} className="w-full bg-[#0E0E10] border border-white/5 rounded-3xl p-6 md:p-16 overflow-hidden relative">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4">
                 
                 {/* 1. Usuarios */}
                 <div className="flex flex-col gap-4 flex-1">
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest text-center mb-2">Usuarios</div>
                    <div className="bg-[#141416] p-6 rounded-xl border border-white/5 flex flex-col gap-4 relative z-20 shadow-xl h-full">
                       <Users className="text-gray-400 mb-2" size={24} />
                       {['Supervisor', 'Jefe de turno', 'Operador de planta', 'Tracking Manager'].map((u) => (
                         <div key={u} className="text-xs text-gray-300 bg-white/5 px-3 py-2 rounded-lg border border-white/5">{u}</div>
                       ))}
                    </div>
                 </div>

                 {/* Connector (hidden logic for desktop vs mobile styling) */}
                 <div className="hidden md:flex flex-col justify-center items-center px-2">
                    <div className="w-12 h-px bg-white/10 relative">
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 border-t border-r border-white/30"></div>
                    </div>
                 </div>

                 {/* 2. Entrada */}
                 <div className="flex flex-col gap-4 flex-1">
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest text-center mb-2">Entrada</div>
                    <div className="bg-[#141416] p-6 rounded-xl border border-white/5 flex flex-col gap-4 relative z-20 shadow-xl h-full">
                       <FileTerminal className="text-gray-400 mb-2" size={24} />
                       {['Acciones manuales.', 'Chat / asistente.', 'Lenguaje natural.', 'Registro incidentes.'].map((u) => (
                         <div key={u} className="text-xs text-gray-300 bg-white/5 px-3 py-2 rounded-lg border border-white/5">{u}</div>
                       ))}
                    </div>
                 </div>

                 <div className="hidden md:flex flex-col justify-center items-center px-2">
                    <div className="w-12 h-px bg-brand/50 relative">
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 border-t border-r border-brand"></div>
                    </div>
                 </div>

                 {/* 3. Motor Inteligente */}
                 <div className="flex flex-col gap-4 flex-[1.2]">
                    <div className="text-xs font-mono text-brand uppercase tracking-widest text-center mb-2">Motor Inteligente</div>
                    <div className="bg-brand/10 p-6 rounded-xl border border-brand/30 flex flex-col gap-4 relative z-20 shadow-[0_0_30px_rgba(168,85,247,0.1)] h-full overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent"></div>
                       <BrainCircuit className="text-brand-light mb-2 relative z-10" size={24} />
                       <div className="grid grid-cols-1 gap-2 relative z-10">
                         {['Interpretación de consulta', 'Identificación de intención', 'Priorización de información', 'Generación de visualizaciones'].map((u) => (
                           <div key={u} className="text-xs text-brand-light/90 bg-brand/10 px-3 py-2 rounded-lg border border-brand/20">{u}</div>
                         ))}
                       </div>
                    </div>
                 </div>

                 <div className="hidden md:flex flex-col justify-center items-center px-4 relative">
                    {/* Fork connector */}
                    <svg className="w-20 h-40 text-brand/30" fill="none" stroke="currentColor" viewBox="0 0 80 160">
                        <path d="M0,80 L20,80 M20,80 L40,20 L80,20 M20,80 L40,140 L80,140" strokeWidth="1" strokeLinejoin="round" />
                        <polygon points="76,16 80,20 76,24" fill="currentColor" stroke="none" />
                        <polygon points="76,136 80,140 76,144" fill="currentColor" stroke="none" />
                    </svg>
                 </div>

                 {/* 4. Fuente de Datos & Salida Stacked */}
                 <div className="flex flex-col gap-8 flex-1 justify-center">
                    
                    {/* Fuente de datos */}
                    <div className="flex flex-col gap-4">
                       <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center mb-1">Fuente Datos</div>
                       <div className="bg-[#141416] p-4 rounded-xl border border-white/5 shadow-xl flex flex-col gap-2">
                           <Network className="text-teal-400/50 mb-1" size={16} />
                           {['DB Operativa', 'Sensores', 'Sistemas de planta'].map((u) => (
                             <div key={u} className="text-[10px] text-gray-400 bg-white/5 px-2 py-1.5 rounded">{u}</div>
                           ))}
                       </div>
                    </div>

                    {/* Salida */}
                    <div className="flex flex-col gap-4">
                       <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center mb-1">Salida</div>
                       <div className="bg-[#141416] p-4 rounded-xl border border-teal-500/20 shadow-xl flex flex-col gap-2 relative">
                           <LineChart className="text-teal-400 mb-1" size={16} />
                           {['Dashboards', 'KPIs', 'Alertas críticas'].map((u) => (
                             <div key={u} className="text-[10px] text-teal-100/70 bg-teal-500/10 px-2 py-1.5 rounded border border-teal-500/10">{u}</div>
                           ))}
                       </div>
                    </div>

                 </div>

              </div>
           </Reveal>
        </div>

        {/* Design Decisions */}
        <div className="flex flex-col gap-12">
          <Reveal>
            <h3 className="text-3xl font-display font-medium">Decisiones de diseño</h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Interacción conversacional",
                text: "Se implementó un modelo basado en lenguaje natural para reducir la fricción en el acceso a la información y eliminar la navegación compleja."
              },
              {
                title: "Chat como punto de entrada",
                text: "Se diseñó un chat flotante persistente que permite solicitar información sin perder el contexto de la operación."
              },
              {
                title: "Jerarquía visual con KPIs",
                text: "Se utilizaron tarjetas con indicadores claros para priorizar métricas críticas y facilitar la lectura rápida."
              },
              {
                title: "Simplificación de datos",
                text: "Se estructuró la información para manejar grandes volúmenes de datos mediante agrupación, filtros y visualización progresiva."
              },
              {
                title: "Dashboards dinámicos",
                text: "Las visualizaciones se generan en función de la consulta del usuario, adaptándose a la intención y tipo de información requerida."
              },
              {
                title: "Prevención de errores",
                text: "Se diseñaron formularios con validación inmediata y guía visual para reducir errores en el ingreso de datos."
              }
            ].map((decision, i) => (
              <Reveal key={i} delay={i * 0.1} className="p-8 rounded-2xl bg-[#141416] border border-white/5 hover:border-brand/20 transition-colors">
                <h4 className="text-base font-semibold text-white mb-4">{decision.title}</h4>
                <p className="text-sm text-gray-light leading-relaxed">{decision.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* UI Design & Key Concept */}
        <div className="flex flex-col gap-12 pt-12">
           <Reveal className="max-w-3xl">
             <h3 className="text-3xl md:text-5xl font-display font-medium mb-6">Diseño UI</h3>
             <h4 className="text-xl font-medium text-brand-light mb-4">Interacción principal: asistente conversacional</h4>
             <p className="text-lg text-white font-medium italic mb-6">"Acceso inmediato a la información sin salir del contexto operativo"</p>
             <p className="text-sm text-gray-light leading-relaxed">
               El asistente conversacional funciona como un punto de entrada rápido y constante dentro de la interfaz, permitiendo a los usuarios consultar información operativa en tiempo real sin navegar entre múltiples pantallas. Ubicado como un widget flotante, el usuario puede interactuar mediante lenguaje natural y recibir respuestas estructuradas en forma de datos, alertas o visualizaciones.
             </p>
           </Reveal>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <Reveal className="col-span-1 md:col-span-2 bg-[#141416] border border-white/5 rounded-3xl p-8 md:p-12">
                <h4 className="text-lg font-medium text-white mb-6">Funcionalidades clave</h4>
                <ul className="flex flex-col gap-4">
                  {[
                    "Consulta de información mediante lenguaje natural.",
                    "Respuestas inmediatas con contexto operativo.",
                    "Visualización de métricas y estados críticos.",
                    "Detección y comunicación de anomalías.",
                    "Acceso persistente desde cualquier pantalla."
                  ].map((feat, i) => (
                    <li key={i} className="flex gap-4 items-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                       <span className="text-sm text-gray-mid">{feat}</span>
                    </li>
                  ))}
                </ul>
             </Reveal>
             <Reveal delay={0.2} className="col-span-1 bg-brand/5 border border-brand/20 rounded-3xl p-8 md:p-12 flex items-center justify-center text-center">
                <p className="text-lg font-display text-white italic">
                  “Reduce la fricción al eliminar la necesidad de navegar, filtrar o interpretar múltiples sistemas.”
                </p>
             </Reveal>
           </div>
        </div>

        {/* Mockups Grid Section */}
        <div className="flex flex-col gap-32 pt-12">
          
          {/* Mockup 1: Login & Mockup 4: Widget */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <Reveal className="lg:col-span-3 flex flex-col gap-6">
               <h4 className="text-xl font-display font-medium text-white shadow-none">Login Industrial</h4>
               <p className="text-sm text-gray-mid mb-4 max-w-md">Acceso seguro con énfasis en monitoreo inteligente de activos críticos en tiempo real.</p>
               <MockupFrame type="browser" url="orion.industrial.app" className="aspect-[16/11] bg-[#0E0E10] border-white/10">
                 {/* Simulating Login UI if image isn't perfect, but we have image */}
                 <img src="/assets/images/asistente/Asistente - Login.png" alt="Login" className="w-full h-full object-cover object-center" />
               </MockupFrame>
            </Reveal>

            <Reveal delay={0.2} className="lg:col-span-2 flex flex-col gap-6">
               <h4 className="text-xl font-display font-medium text-white">Widget Orion</h4>
               <p className="text-sm text-gray-mid mb-4">Interacción rápida, contexto persistente.</p>
               <div className="relative w-full aspect-[4/5] bg-bg-sec border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent"></div>
                 <motion.img 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                   src="/assets/images/asistente/WIDGET.png" 
                   alt="Widget Orion" 
                   className="w-[80%] max-w-[300px] h-auto object-contain relative z-10 drop-shadow-2xl" 
                 />
               </div>
            </Reveal>
          </div>

          {/* Mockup 2: Dashboard & Mockup 3: Reporte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal className="flex flex-col gap-6">
               <h4 className="text-xl font-display font-medium text-white">Reporte de Turno / Análisis</h4>
               <p className="text-sm text-gray-mid mb-4">Vista detallada de incidentes, validaciones y datos de producción resumidos.</p>
               <MockupFrame type="browser" url="orion.industrial.app" className="aspect-[16/12] bg-[#0E0E10] border-white/10">
                <img src="/assets/images/asistente/Asistente-Análisis de planta.png" alt="Análisis" className="w-full h-full object-cover object-top" />
              </MockupFrame>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-col gap-6">
               <h4 className="text-xl font-display font-medium text-white">Mantenimiento Integrado</h4>
               <p className="text-sm text-gray-mid mb-4">Gestión de alertas y control de tareas preventivas y predictivas.</p>
               <MockupFrame type="browser" url="orion.industrial.app" className="aspect-[16/12] bg-[#0E0E10] border-white/10">
                <img src="/assets/images/asistente/Asistente Mantenimiento.png" alt="Mantenimiento" className="w-full h-full object-cover object-top" />
              </MockupFrame>
            </Reveal>
          </div>

          {/* Mockup 5: Collage Editorial */}
          <Reveal className="w-full relative h-[600px] md:h-[900px] bg-[#0E0E10] rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center p-6 md:p-12 mb-12">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 via-[#0e0e10] to-[#0e0e10] pointer-events-none" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
             
             <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
                {/* Center Main Dashboard */}
                <motion.div 
                   animate={{ y: [-5, 5, -5] }}
                   transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-20"
                >
                   <img src="/assets/images/asistente/Asistente Dashboard alerts-.png" alt="Dashboard Alerts" className="w-full h-auto" />
                </motion.div>
                
                {/* Left Floating Analysis */}
                <motion.div 
                   animate={{ y: [10, -10, 10], x: [-10, 0, -10] }}
                   transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
                   className="absolute top-[10%] left-[0%] md:left-[5%] w-[45%] md:w-[35%] rounded-xl overflow-hidden shadow-2xl border border-white/10 z-10 opacity-70 hover:opacity-100 transition-opacity"
                >
                   <img src="/assets/images/asistente/Asistente-Análisis de planta 2.png" alt="Análisis 2" className="w-full h-auto" />
                </motion.div>
                
                {/* Right Floating Setup */}
                <motion.div 
                   animate={{ y: [-15, 10, -15], x: [10, 0, 10] }}
                   transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                   className="absolute bottom-[10%] right-[0%] md:right-[5%] w-[45%] md:w-[35%] rounded-xl overflow-hidden shadow-2xl border border-white/10 z-30 opacity-80 hover:opacity-100 transition-opacity"
                >
                   <img src="/assets/images/asistente/Asistente-Análisis de planta 3.png" alt="Análisis 3" className="w-full h-auto" />
                </motion.div>

                {/* Floating Widget Context */}
                <motion.div 
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                   className="absolute bottom-[20%] left-[20%] w-[150px] md:w-[220px] shadow-2xl z-40 drop-shadow-2xl"
                >
                   <img src="/assets/images/asistente/WIDGET-2.png" alt="Widget Overlay" className="w-full h-auto" />
                </motion.div>
             </div>
          </Reveal>

        </div>
        </div>
      </div>
    </section>
  );
};
