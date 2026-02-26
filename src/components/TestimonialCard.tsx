import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/hotel";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="relative bg-card/40 backdrop-blur-sm border border-border/10 p-8 rounded-sm transition-all duration-700 hover:border-primary/15 hover:bg-card/60 group">
    <Quote size={28} className="text-primary/10 mb-6" strokeWidth={1} />
    
    <div className="flex gap-0.5 mb-5">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className="fill-primary/80 text-primary/80"
        />
      ))}
    </div>

    <p className="text-sm text-foreground/60 leading-[1.8] mb-8 font-light">
      {testimonial.text}
    </p>

    <div className="flex items-center gap-4 pt-6 border-t border-border/10">
      <div className="w-10 h-10 rounded-full bg-accent/30 border border-primary/10 flex items-center justify-center">
        <span className="text-[10px] font-medium text-primary tracking-wider">
          {testimonial.avatar}
        </span>
      </div>
      <div>
        <p className="text-sm font-medium text-foreground/80">{testimonial.name}</p>
        <p className="text-[11px] text-muted-foreground font-light">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
