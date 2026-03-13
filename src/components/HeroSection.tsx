import appMockup from "@/assets/mock2.png";

const HeroSection = () => (
  <section className="gradient-hero pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground mb-5">
            KMO App – <span className="text-gradient">Ekosistem Literasi</span> untuk Penulis Masa Kini
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            Belajar menulis, membangun karya, dan berkembang bersama komunitas literasi dalam satu aplikasi.
          </p>
          <div id="download" className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
            <a href="#" className="gradient-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              <GooglePlayIcon /> Download on Google Play
            </a>
            <a href="#" className="bg-foreground text-background font-semibold px-7 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              <AppleIcon /> Download on App Store
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={appMockup} alt="KMO App mobile mockup" className="w-72 sm:w-80 md:w-96 lg:w-[28rem] animate-float drop-shadow-2xl" />
        </div>
      </div>
    </div>
  </section>
);

const GooglePlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.698-2.302 2.698-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/></svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
);

export default HeroSection;
