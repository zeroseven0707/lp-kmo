import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, GraduationCap, TrendingUp } from "lucide-react";

const items = [
  { icon: BookOpen, label: "Belajar Menulis", desc: "Kuasai teknik menulis dari dasar hingga mahir" },
  { icon: Users, label: "Komunitas Penulis", desc: "Bergabung dengan jaringan penulis se-Indonesia" },
  { icon: GraduationCap, label: "Kelas Literasi", desc: "Ikuti kelas terstruktur dengan materi berkualitas" },
  { icon: TrendingUp, label: "Karier Penulis", desc: "Bangun karier dan penghasilan dari menulis" },
];

const EcosystemSection = () => {
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
    <section id="ecosystem" ref={sectionRef} className="py-16 md:py-24 bg-card scroll-mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Ekosistem Literasi</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Lebih dari Sekadar Platform Belajar</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
            KMO App adalah ekosistem lengkap yang menghubungkan proses belajar menulis, komunitas, kelas, dan pengembangan karier dalam satu platform terintegrasi.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={item.label} 
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl gradient-card transition-all duration-700 hover:scale-110 hover:shadow-elevated ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center transition-transform duration-300 hover:rotate-12">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground text-sm">{item.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
