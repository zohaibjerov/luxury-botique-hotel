import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "About", path: "/about" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const showBg = isScrolled || !isHome || isMobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        showBg
          ? "bg-background/80 backdrop-blur-2xl border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxury flex items-center px-6 md:px-12 lg:px-20 h-20">
        {/* Left nav links */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] tracking-[0.25em] uppercase font-body font-light transition-all duration-500 hover:text-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-primary after:transition-all after:duration-500 ${
                location.pathname === link.path
                  ? "text-primary after:w-full"
                  : "text-foreground/40 after:w-0 hover:after:w-full"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center logo */}
        <Link to="/" className="font-heading text-3xl tracking-[0.15em] text-center font-light">
          <span className="text-primary">A</span>
          <span className="text-foreground">URORA</span>
        </Link>

        {/* Right nav links */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] tracking-[0.25em] uppercase font-body font-light transition-all duration-500 hover:text-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-primary after:transition-all after:duration-500 ${
                location.pathname === link.path
                  ? "text-primary after:w-full"
                  : "text-foreground/40 after:w-0 hover:after:w-full"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="group flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-light text-primary border border-primary/30 px-5 py-2 rounded-full transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
          >
            Reserve
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden ml-auto text-foreground/60 transition-colors hover:text-primary"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background/98 backdrop-blur-2xl z-40">
          <div className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-3xl font-light tracking-wider transition-all duration-500 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/40 hover:text-foreground"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 px-10 py-3 bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase rounded-full"
            >
              Reserve Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
