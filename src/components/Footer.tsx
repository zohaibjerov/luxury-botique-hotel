import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal border-t border-border/10">
    {/* Top section */}
    <div className="container-luxury px-6 md:px-12 lg:px-20 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Brand */}
        <div className="lg:col-span-5">
          <h3 className="font-heading text-4xl text-foreground mb-6 font-light">
            <span className="text-primary">A</span>URORA
          </h3>
          <p className="text-sm leading-[1.8] text-foreground/30 font-light max-w-sm mb-8">
            Where Elegance Meets Comfort. A luxury boutique hotel offering
            timeless European hospitality in the heart of Brussels.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Facebook", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] tracking-[0.2em] uppercase text-foreground/25 hover:text-primary transition-colors duration-500 font-light"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="lg:col-span-3">
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-primary/60 mb-8 font-light">Navigate</h4>
          <div className="flex flex-col gap-4">
            {[
              { name: "Home", path: "/" },
              { name: "Rooms & Suites", path: "/rooms" },
              { name: "About Us", path: "/about" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group inline-flex items-center gap-2 text-sm text-foreground/30 hover:text-primary transition-all duration-500 font-light"
              >
                {link.name}
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="lg:col-span-4">
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-primary/60 mb-8 font-light">Contact</h4>
          <div className="flex flex-col gap-5 text-sm text-foreground/30 font-light">
            <div className="flex items-start gap-4">
              <MapPin size={14} className="text-primary/40 mt-1 shrink-0" strokeWidth={1.5} />
              <span>Rue de la Paix 42, 1000 Brussels, Belgium</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={14} className="text-primary/40 shrink-0" strokeWidth={1.5} />
              <span>+32 2 555 0100</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={14} className="text-primary/40 shrink-0" strokeWidth={1.5} />
              <span>hello@aurorahotel.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border/5 px-6 md:px-12 lg:px-20 py-6">
      <div className="container-luxury flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-foreground/15 tracking-[0.2em] font-light">
          © 2026 AURORA BOUTIQUE HOTEL
        </p>
        <p className="text-[10px] text-foreground/15 tracking-[0.2em] font-light">
          ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
