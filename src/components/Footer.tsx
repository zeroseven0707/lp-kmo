import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm font-bold text-gradient">KMO App</p>
      <nav className="flex items-center gap-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
        <a href="mailto:devs.kmo@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
      </nav>
      <p className="text-xs text-muted-foreground">© 2024 KMO Indonesia. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
