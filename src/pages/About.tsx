import AnimatedSection from "@/components/AnimatedSection";
import { images, teamMembers } from "@/data/hotel";
import { ArrowRight } from "lucide-react";

const About = () => (
  <main>
    {/* Hero - bottom aligned */}
    <section className="relative h-[70vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={images.hotelExterior} alt="Aurora Hotel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      </div>
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-16 w-full container-luxury">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-8 h-px bg-primary/60" />
          <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Our Story</p>
        </div>
        <h1 className="font-heading text-5xl md:text-7xl text-foreground font-light">
          About <span className="italic text-primary">Aurora</span>
        </h1>
      </div>
    </section>

    {/* Story - editorial layout */}
    <AnimatedSection>
      <div className="container-luxury max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light mb-4">Est. 1892</p>
            <h2 className="font-heading text-4xl font-light leading-[1.1]">
              A Legacy <span className="italic text-primary">Reimagined</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-muted-foreground leading-[2] mb-6 text-sm font-light">
              Originally built in 1892 as a private residence for a Belgian diplomat, the Aurora has been 
              lovingly restored and reimagined as a boutique hotel that honors its storied past while 
              embracing modern luxury. Every arch, every cornice, every hand-laid tile tells a story 
              spanning more than a century.
            </p>
            <p className="text-muted-foreground leading-[2] text-sm font-light">
              In 2018, the Fontaine family — fifth-generation hoteliers — undertook a meticulous two-year 
              renovation. The result is a hotel that feels both timeless and refreshingly contemporary.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>

    {/* Images */}
    <AnimatedSection className="!py-0">
      <div className="container-luxury grid grid-cols-1 md:grid-cols-2 gap-2">
        <img src={images.spaPool} alt="Spa" className="w-full h-80 object-cover rounded-sm" loading="lazy" />
        <img src={images.restaurant} alt="Restaurant" className="w-full h-80 object-cover rounded-sm" loading="lazy" />
      </div>
    </AnimatedSection>

    {/* Mission & Vision */}
    <AnimatedSection>
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/10">
          <div className="bg-background p-10 md:p-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-primary/60" />
              <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Our Mission</p>
            </div>
            <h2 className="font-heading text-3xl mb-6 font-light">Crafting <span className="italic text-primary">Unforgettable</span> Moments</h2>
            <p className="text-muted-foreground leading-[2] text-sm font-light">
              We believe that true luxury lies not in ostentation, but in the quiet perfection of every 
              detail. Our mission is to create a sanctuary where guests feel genuinely cared for.
            </p>
          </div>
          <div className="bg-background p-10 md:p-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-primary/60" />
              <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Our Vision</p>
            </div>
            <h2 className="font-heading text-3xl mb-6 font-light">The Future of <span className="italic text-primary">Boutique</span></h2>
            <p className="text-muted-foreground leading-[2] text-sm font-light">
              To be recognized as Europe's most beloved boutique hotel — not the largest, not the most 
              extravagant, but the one guests return to year after year.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>

    {/* Team */}
    <AnimatedSection className="bg-card/50 border-y border-border/10">
      <div className="container-luxury">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-primary/60" />
          <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Our People</p>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl mb-16 font-light">
          Meet the <span className="italic text-primary">Team</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/10 max-w-4xl">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-background p-10 text-center group transition-all duration-700 hover:bg-card/80">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/30 border border-primary/10 flex items-center justify-center group-hover:border-primary/30 transition-all duration-500">
                <span className="font-heading text-lg text-primary font-light">{member.avatar}</span>
              </div>
              <h3 className="font-heading text-lg mb-1 font-medium">{member.name}</h3>
              <p className="text-primary/60 text-[10px] tracking-[0.3em] uppercase mb-5 font-light">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-[1.8] font-light">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </main>
);

export default About;
