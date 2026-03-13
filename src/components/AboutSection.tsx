import { useEffect, useRef, useState } from "react";
import mock1 from "@/assets/mock1.png";
import mock3 from "@/assets/mock3.png";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-card scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className={`flex-1 flex justify-center items-center w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative w-full max-w-[400px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] h-[420px] sm:h-[450px] md:h-[450px]">
              <img
                src={mock1}
                alt="KMO App Screenshot"
                className="absolute left-0 sm:left-0 md:left-4 top-4 sm:top-8 md:top-4 w-56 sm:w-60 md:w-72 lg:w-80 rotate-[-8deg] drop-shadow-2xl hover:rotate-[-5deg] transition-all duration-500 hover:scale-105 z-10"
              />
              <img
                src={mock3}
                alt="KMO App Screenshot"
                className="absolute right-0 sm:right-0 md:right-4 top-16 sm:top-20 md:top-16 w-60 sm:w-64 md:w-80 lg:w-[22rem] rotate-[8deg] drop-shadow-2xl hover:rotate-[5deg] transition-all duration-500 hover:scale-105 z-20"
              />
            </div>
          </div>
          <div className={`flex-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Tentang KMO App</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
              Platform Belajar Menulis & Literasi
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                KMO App adalah platform belajar menulis dan literasi yang dirancang untuk membantu siapa pun menjadi penulis yang produktif, terampil, dan berdampak.
              </p>
              <p>
                Di dalam aplikasi ini, pengguna tidak hanya belajar teori menulis, tetapi juga langsung mempraktikkannya melalui sistem pembelajaran yang terstruktur, komunitas yang suportif, serta tantangan menulis yang mendorong konsistensi berkarya.
              </p>
              <p>
                KMO App lahir dari pengalaman Komunitas Menulis Online (KMO Indonesia) yang telah membantu ribuan orang menulis buku, artikel, dan karya literasi selama bertahun-tahun. Kini seluruh pengalaman tersebut dikemas dalam satu aplikasi yang mudah diakses kapan saja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;