import { useEffect, useRef, useState } from "react";
import { PenTool, GraduationCap, Users, Briefcase } from "lucide-react";

const features = [
  {
    icon: PenTool,
    title: "Belajar Teknik Menulis Secara Praktis",
    desc: "Mulai dari dasar menulis, storytelling, hingga teknik menulis buku yang mudah dipahami dan langsung bisa dipraktikkan.",
  },
  {
    icon: GraduationCap,
    title: "Mengikuti Kelas Literasi",
    desc: "Materi pembelajaran disusun secara bertahap agar membantu pengguna belajar menulis secara sistematis.",
  },
  {
    icon: Users,
    title: "Bergabung dengan Komunitas Penulis",
    desc: "Terhubung dengan sesama penulis untuk berdiskusi, berbagi pengalaman, dan saling mendukung dalam proses berkarya.",
  },
  {
    icon: Briefcase,
    title: "Membangun Karier sebagai Penulis",
    desc: "Pelajari cara membangun personal branding sebagai penulis, menjadi ghostwriter, serta menghasilkan penghasilan dari tulisan.",
  },
];

const FeaturesSection = () => {
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
    <section id="features" ref={sectionRef} className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Fitur Unggulan</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Semua yang Kamu Butuhkan untuk Menulis</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((f, index) => (
            <div 
              key={f.title} 
              className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-12">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
