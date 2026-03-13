import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <img src="/logo.png" alt="KMO App Logo" className="h-8 w-8 md:h-10 md:w-10" />
          <span className="text-xl font-bold text-gradient">KMO App</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#about" 
            onClick={(e) => handleSmoothScroll(e, "about")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
          >
            Tentang
          </a>
          <a 
            href="#features" 
            onClick={(e) => handleSmoothScroll(e, "features")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
          >
            Fitur
          </a>
          <a 
            href="#ecosystem" 
            onClick={(e) => handleSmoothScroll(e, "ecosystem")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
          >
            Ekosistem
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
          >
            Kontak
          </a>
          <a 
            href="#download" 
            onClick={(e) => handleSmoothScroll(e, "download")}
            className="gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Download
          </a>
        </div>
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden p-2 text-foreground transition-transform duration-300 hover:scale-110" 
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 flex flex-col gap-3 animate-slide-up">
          <a 
            href="#about" 
            onClick={(e) => handleSmoothScroll(e, "about")}
            className="text-sm font-medium text-muted-foreground py-2 transition-colors duration-300"
          >
            Tentang
          </a>
          <a 
            href="#features" 
            onClick={(e) => handleSmoothScroll(e, "features")}
            className="text-sm font-medium text-muted-foreground py-2 transition-colors duration-300"
          >
            Fitur
          </a>
          <a 
            href="#ecosystem" 
            onClick={(e) => handleSmoothScroll(e, "ecosystem")}
            className="text-sm font-medium text-muted-foreground py-2 transition-colors duration-300"
          >
            Ekosistem
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="text-sm font-medium text-muted-foreground py-2 transition-colors duration-300"
          >
            Kontak
          </a>
          <a 
            href="#download" 
            onClick={(e) => handleSmoothScroll(e, "download")}
            className="gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-all duration-300"
          >
            Download
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
