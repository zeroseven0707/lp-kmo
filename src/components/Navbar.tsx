import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="KMO App Logo" className="h-8 w-8 md:h-10 md:w-10" />
          <span className="text-xl font-bold text-gradient">KMO App</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Tentang</a>
          <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Fitur</a>
          <a href="/#ecosystem" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Ekosistem</a>
          <a href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Kontak</a>
          <a href="#download" className="gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">Download</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="/#about" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2">Tentang</a>
          <a href="/#features" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2">Fitur</a>
          <a href="/#ecosystem" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2">Ekosistem</a>
          <a href="/#contact" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-2">Kontak</a>
          <a href="#download" className="gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full text-center">Download</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
