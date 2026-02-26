import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <section className="relative h-[60vh] flex items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-accent/10 to-accent/5" />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-16 w-full container-luxury">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-primary/60" />
            <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Get in Touch</p>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl text-foreground font-light">
            Contact <span className="italic text-primary">Us</span>
          </h1>
        </div>
      </section>

      <AnimatedSection>
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-primary/60" />
              <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Message</p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl mb-10 font-light">
              Send a <span className="italic text-primary">Message</span>
            </h2>

            {submitted ? (
              <div className="bg-card/40 border border-border/10 p-16 rounded-sm text-center">
                <p className="text-primary text-[10px] tracking-[0.5em] uppercase mb-5 font-light">Thank You</p>
                <h3 className="font-heading text-3xl mb-4 font-light">Message Received</h3>
                <p className="text-muted-foreground font-light text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] text-muted-foreground mb-3 tracking-[0.3em] uppercase font-light">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-0 py-4 bg-transparent border-b border-border/20 text-foreground placeholder:text-muted-foreground/20 focus:outline-none focus:border-primary/40 transition-all duration-500 font-light text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-muted-foreground mb-3 tracking-[0.3em] uppercase font-light">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-0 py-4 bg-transparent border-b border-border/20 text-foreground placeholder:text-muted-foreground/20 focus:outline-none focus:border-primary/40 transition-all duration-500 font-light text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] text-muted-foreground mb-3 tracking-[0.3em] uppercase font-light">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-b border-border/20 text-foreground placeholder:text-muted-foreground/20 focus:outline-none focus:border-primary/40 transition-all duration-500 resize-none font-light text-sm"
                    placeholder="Tell us about your dream stay..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-[11px] tracking-[0.3em] uppercase rounded-full transition-all duration-500 hover:shadow-[0_0_40px_hsl(42_50%_45%/0.3)] mt-4"
                >
                  Send Message
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-primary/60" />
              <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Details</p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl mb-10 font-light">
              Hotel <span className="italic text-primary">Info</span>
            </h2>

            <div className="space-y-8 mb-12">
              {[
                { icon: MapPin, title: "Address", text: "Rue de la Paix 42, 1000 Brussels, Belgium" },
                { icon: Phone, title: "Phone", text: "+32 2 555 0100" },
                { icon: Mail, title: "Email", text: "hello@aurorahotel.com" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-primary/60" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-primary/60 mb-1 font-light">{item.title}</h3>
                    <p className="text-foreground/60 text-sm font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-sm overflow-hidden border border-border/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.6856!2d4.3517!3d50.8503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUxJzAxLjEiTiA0wrAyMScwNi4xIkU!5e0!3m2!1sen!2sbe!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aurora Hotel Location"
              />
            </div>

            <a
              href="https://wa.me/3225550100"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-light text-[hsl(142,60%,40%)] border border-[hsl(142,60%,40%/0.3)] px-6 py-3 rounded-full transition-all duration-500 hover:bg-[hsl(142,60%,40%/0.1)]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default Contact;
