import AnimatedSection from "@/components/AnimatedSection";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/hotel";

const Testimonials = () => (
  <main>
    <section className="relative h-[60vh] flex items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-accent/10 to-accent/5" />
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-16 w-full container-luxury">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-8 h-px bg-primary/60" />
          <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Guest Experiences</p>
        </div>
        <h1 className="font-heading text-5xl md:text-7xl text-foreground font-light">
          <span className="italic text-primary">Testimonials</span>
        </h1>
      </div>
    </section>

    <AnimatedSection>
      <div className="container-luxury">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t) => (
            <div key={t.id} className="break-inside-avoid">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </main>
);

export default Testimonials;
