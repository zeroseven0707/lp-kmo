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

const FeaturesSection = () => (
  <section id="features" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Fitur Unggulan</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Semua yang Kamu Butuhkan untuk Menulis</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
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

export default FeaturesSection;
