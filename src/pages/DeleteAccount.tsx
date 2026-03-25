import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, Mail, ShieldAlert, Clock, MessageCircle, ChevronRight, Trash2 } from "lucide-react";

const steps = [
  { number: "01", text: "Buka KMO App" },
  { number: "02", text: "Pergi ke Profil" },
  { number: "03", text: "Klik menu informasi akun" },
  { number: "04", text: 'Tap "Hapus Akun"' },
  { number: "05", text: "Ikuti instruksi yang diberikan" },
];

const dataPoints = [
  "Data pribadi Anda akan dihapus secara permanen dari sistem kami.",
  "Beberapa data mungkin tetap disimpan jika diwajibkan oleh hukum yang berlaku.",
];

const DeleteAccount = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <div className="gradient-hero pt-32 pb-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl gradient-primary shadow-elevated mb-6 animate-scale-in">
              <Trash2 className="w-9 h-9 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
              Hapus Akun <span className="text-gradient">KMO App</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto animate-fade-in">
              Kami menghormati hak Anda untuk mengontrol data pribadi Anda sepenuhnya.
            </p>
          </div>
        </div>

        {/* Content */}
        <div ref={sectionRef} className="container mx-auto px-4 max-w-3xl py-12 space-y-6">

          {/* Via App */}
          <div
            className={`bg-card rounded-2xl shadow-card overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="p-6 border-b border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-card">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Metode 1</p>
                <h2 className="text-base font-bold text-foreground">Melalui Aplikasi</h2>
              </div>
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-3">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`flex items-center gap-4 bg-muted/50 rounded-xl p-4 transition-all duration-500 hover:shadow-card hover:-translate-y-0.5 ${i === steps.length - 1 ? "sm:col-span-2 sm:max-w-sm sm:mx-auto sm:w-full justify-center" : ""} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${100 + i * 80}ms` }}
                >
                  <span className="text-2xl font-bold text-gradient leading-none">{step.number}</span>
                  <p className="text-sm text-foreground font-medium leading-snug">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Via Email */}
          <div
            className={`bg-card rounded-2xl shadow-card overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="p-6 border-b border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-card">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Metode 2</p>
                <h2 className="text-base font-bold text-foreground">Via Email</h2>
              </div>
            </div>
            <div className="p-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-muted/50 rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Kirim ke</p>
                <a href="mailto:devs.kmo@gmail.com" className="text-primary font-semibold hover:underline text-sm">
                  devs.kmo@gmail.com
                </a>
              </div>
              <div className="flex-1 bg-muted/50 rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Subjek Email</p>
                <p className="text-foreground font-semibold text-sm">Delete Account Request</p>
              </div>
            </div>
          </div>

          {/* Data Deletion & Processing Time side by side */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div
              className={`bg-card rounded-2xl shadow-card overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "250ms" }}
            >
              <div className="p-6 border-b border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-card">
                  <ShieldAlert className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-base font-bold text-foreground">Penghapusan Data</h2>
              </div>
              <div className="p-6 space-y-3">
                {dataPoints.map((point, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`bg-card rounded-2xl shadow-card overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "320ms" }}
            >
              <div className="p-6 border-b border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-card">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-base font-bold text-foreground">Waktu Pemrosesan</h2>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center h-[calc(100%-73px)]">
                <p className="text-5xl font-bold text-gradient mb-2">3–7</p>
                <p className="text-sm text-muted-foreground">hari kerja untuk memproses permintaan Anda</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div
            className={`gradient-card rounded-2xl border border-border p-8 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-card mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">Ada Pertanyaan?</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
              Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami kapan saja.
            </p>
            <a
              href="mailto:devs.kmo@gmail.com"
              className="inline-flex items-center gap-2 gradient-primary text-primary-foreground text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-elevated"
            >
              <Mail className="w-4 h-4" />
              devs.kmo@gmail.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DeleteAccount;
