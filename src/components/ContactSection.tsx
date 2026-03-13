import { Mail, Building2 } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-card">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Kontak</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Hubungi Kami</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
        <div className="bg-background rounded-2xl p-6 shadow-card flex-1 w-full">
          <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-bold text-foreground mb-1 text-sm">Developer</h3>
          <p className="text-muted-foreground text-sm">Komunitas Menulis Online (KMO Indonesia)</p>
        </div>
        <div className="bg-background rounded-2xl p-6 shadow-card flex-1 w-full">
          <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-bold text-foreground mb-1 text-sm">Email</h3>
          <a href="mailto:devs.kmo@gmail.com" className="text-primary text-sm font-medium hover:underline">devs.kmo@gmail.com</a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
