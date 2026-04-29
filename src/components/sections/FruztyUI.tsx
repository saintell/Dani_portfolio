import React, { useCallback, useState, useEffect } from 'react';
import { Reveal, SectionTag, Badge } from '@/lib/utils';
import { MockupFrame } from '../ui/MockupFrame';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const FruztyUI = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const images = [
    "/assets/images/fruzty/diseño ui 01.png",
    "/assets/images/fruzty/diseño ui 2.png",
    "/assets/images/fruzty/diseño ui 3.png",
    "/assets/images/fruzty/diseño ui 4.png",
    "/assets/images/fruzty/diseño ui 5.png",
    "/assets/images/fruzty/diseño ui 6.png",
    "/assets/images/fruzty/diseño ui 7.png",
    "/regenerated_image_1777440757120.jpeg",
    "/assets/images/fruzty/Design system fruzty.jpeg"
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-bg-sec border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-fruzty-green/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTag number="06" title="Diseño UI" />
        
        <Reveal className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">
            Diseño UI
          </h2>
          <p className="text-xl text-gray-light leading-relaxed">
            Una interfaz clara para conectar operación comercial, trazabilidad logística y toma de decisiones en tiempo real.
          </p>
        </Reveal>

        <div className="flex flex-col gap-24">
          
          <Reveal className="w-full relative group">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y items-center">
                {images.map((src, index) => (
                  <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_70%] pl-4 md:pl-8 first:pl-0" key={index}>
                    <MockupFrame className="aspect-[16/10] overflow-hidden p-0 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                      <img src={src} alt={`UI Desktop ${index + 1}`} className="w-full h-full object-cover object-top" />
                    </MockupFrame>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed md:opacity-0 md:group-hover:opacity-100 z-10 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6 ml-[-2px]" />
            </button>
            <button 
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed md:opacity-0 md:group-hover:opacity-100 z-10 shadow-xl"
            >
              <ChevronRight className="w-6 h-6 mr-[-2px]" />
            </button>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
