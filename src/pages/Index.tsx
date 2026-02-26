import { Link } from "react-router-dom";
import { Wifi, Waves, Droplets, Car, UtensilsCrossed, ArrowRight, MoveDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import RoomCard from "@/components/RoomCard";
import TestimonialCard from "@/components/TestimonialCard";
import { images, rooms, testimonials } from "@/data/hotel";

const amenities = [
  { icon: Wifi, label: "Free WiFi", desc: "High-speed throughout" },
  { icon: Waves, label: "Luxury Spa", desc: "World-class treatments" },
  { icon: Droplets, label: "Private Pool", desc: "Heated indoor pool" },
  { icon: Car, label: "Airport Pickup", desc: "Complimentary transfer" },
  { icon: UtensilsCrossed, label: "Fine Dining", desc: "Michelin-inspired" },
];

const Index = () => {
  return (
    <main>
      {/* Hero - split layout */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Left: Content */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-32 lg:py-0 order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-10 animate-fade-up">
              <div className="w-12 h-px bg-primary/60" />
              <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-body font-light">
                Boutique Hotel — Brussels
              </p>
            </div>
            <h1 className="font-heading text-6xl md:text-7xl xl:text-8xl text-foreground mb-8 animate-fade-up-delay-1 leading-[0.95] font-light">
              Where
              <br />
              <span className="italic text-primary">Elegance</span>
              <br />
              Meets
              <br />
              Comfort
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm animate-fade-up-delay-2 font-light">
              A sanctuary of refined luxury nestled in the heart of Europe. Experience timeless sophistication.
            </p>
            <div className="flex flex-wrap items-center gap-4 animate-fade-up-delay-3">
              <Link
                to="/contact"
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-[11px] tracking-[0.3em] uppercase rounded-full transition-all duration-500 hover:shadow-[0_0_40px_hsl(42_50%_45%/0.3)]"
              >
                Book Your Stay
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/rooms"
                className="px-8 py-4 text-foreground/50 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:text-primary font-light"
              >
                Explore Rooms
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative h-[60vh] lg:h-screen order-1 lg:order-2">
          <img
            src={images.heroRoom}
            alt="Aurora Boutique Hotel luxury room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 md:left-16 lg:left-20 z-10 flex items-center gap-3 animate-fade-up-delay-3">
          <MoveDown size={14} className="text-primary/50 animate-bounce" strokeWidth={1.5} />
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/30 font-light">Scroll to explore</span>
        </div>
      </section>

      {/* About Preview - overlapping cards style */}
      <AnimatedSection>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative">
              <img
                src={images.hotelExterior}
                alt="Aurora Hotel exterior"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-sm"
                loading="lazy"
              />
              {/* Floating stats card */}
              <div className="absolute -bottom-8 right-4 lg:right-[-40px] glass-card px-8 py-6 rounded-sm">
                <div className="flex gap-10">
                  <div className="text-center">
                    <p className="font-heading text-3xl text-primary font-light">130+</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-light mt-1">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading text-3xl text-primary font-light">24</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-light mt-1">Suites</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading text-3xl text-primary font-light">5★</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-light mt-1">Rating</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 lg:pl-8 mt-16 lg:mt-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-primary/60" />
                <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Our Story</p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-[1.1] font-light">
                A Legacy of
                <br />
                <span className="italic text-primary">European</span>
                <br />
                Elegance
              </h2>
              <p className="text-muted-foreground leading-[1.8] mb-5 text-sm font-light">
                Nestled in the heart of Brussels, Aurora Boutique Hotel is a
                sanctuary of refined luxury. Originally a 19th-century mansion, our
                hotel blends historic grandeur with contemporary design.
              </p>
              <p className="text-muted-foreground leading-[1.8] mb-10 text-sm font-light">
                Every detail has been curated to create an atmosphere of warmth,
                beauty, and timeless sophistication.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 text-primary text-[11px] tracking-[0.3em] uppercase font-light transition-all duration-500 hover:gap-5"
              >
                Discover Our Story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Rooms Preview - horizontal scroll feel */}
      <AnimatedSection className="bg-card/50 border-y border-border/10">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-primary/60" />
                <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Accommodations</p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-light">
                Rooms & <span className="italic text-primary">Suites</span>
              </h2>
            </div>
            <Link
              to="/rooms"
              className="group inline-flex items-center gap-3 text-primary text-[11px] tracking-[0.3em] uppercase font-light transition-all duration-500 hover:gap-5 mt-6 md:mt-0"
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Amenities - horizontal strip */}
      <AnimatedSection>
        <div className="container-luxury">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-px bg-primary/60" />
              <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Services</p>
              <div className="w-8 h-px bg-primary/60" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-light">
              Premium <span className="italic text-primary">Amenities</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border/10">
            {amenities.map((a) => (
              <div
                key={a.label}
                className="group text-center py-12 px-6 bg-background transition-all duration-700 hover:bg-accent/20"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-700 group-hover:border-primary/50 group-hover:scale-110 group-hover:shadow-[0_0_25px_hsl(42_50%_45%/0.1)]">
                  <a.icon size={20} className="text-primary/70 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-sm mb-1 font-medium">{a.label}</h3>
                <p className="text-[11px] text-muted-foreground font-light">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials - staggered layout */}
      <AnimatedSection className="bg-card/50 border-y border-border/10">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-primary/60" />
                <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Guest Experiences</p>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-light">
                What Our <span className="italic text-primary">Guests</span> Say
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={t.id} className={i === 1 ? "md:mt-12" : ""}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA - cinematic full width */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.spaPool}
            alt="Aurora spa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary/60" />
            <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Your Journey Awaits</p>
            <div className="w-12 h-px bg-primary/60" />
          </div>
          <h2 className="font-heading text-5xl md:text-7xl text-foreground mb-10 leading-[0.95] font-light">
            Experience
            <br />
            <span className="italic text-primary">Luxury Tonight</span>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-[11px] tracking-[0.3em] uppercase rounded-full transition-all duration-500 hover:shadow-[0_0_40px_hsl(42_50%_45%/0.3)]"
          >
            Book Your Stay
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
