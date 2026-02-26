import AnimatedSection from "@/components/AnimatedSection";
import RoomCard from "@/components/RoomCard";
import { rooms, images } from "@/data/hotel";
import { ArrowRight } from "lucide-react";

const Rooms = () => (
  <main>
    <section className="relative h-[70vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={images.roomDeluxe} alt="Luxury suite" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      </div>
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-16 w-full container-luxury">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-8 h-px bg-primary/60" />
          <p className="text-primary text-[10px] tracking-[0.5em] uppercase font-light">Accommodations</p>
        </div>
        <h1 className="font-heading text-5xl md:text-7xl text-foreground font-light">
          Rooms & <span className="italic text-primary">Suites</span>
        </h1>
      </div>
    </section>

    <AnimatedSection>
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  </main>
);

export default Rooms;
