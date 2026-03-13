import { useEffect, useRef, useState } from "react";
import { Mail, Building2 } from "lucide-react";

const ContactSection = () => {
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
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-card scroll-mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Kontak</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Hubungi Kami</h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
          <div className={`bg-background rounded-2xl p-6 shadow-card flex-1 w-full transition-all duration-700 hover:shadow-elevated hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <Building2 className="w-8 h-8 text-primary mx-auto mb-3 transition-transform duration-300 hover:scale-110" />
            <h3 className="font-bold text-foreground mb-1 text-sm">Developer</h3>
            <p className="text-muted-foreground text-sm">Komunitas Menulis Online (KMO Indonesia)</p>
          </div>
          <div className={`bg-background rounded-2xl p-6 shadow-card flex-1 w-full transition-all duration-700 hover:shadow-elevated hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <Mail className="w-8 h-8 text-primary mx-auto mb-3 transition-transform duration-300 hover:scale-110" />
            <h3 className="font-bold text-foreground mb-1 text-sm">Email</h3>
            <a href="mailto:devs.kmo@gmail.com" className="text-primary text-sm font-medium hover:underline transition-all duration-300">devs.kmo@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
