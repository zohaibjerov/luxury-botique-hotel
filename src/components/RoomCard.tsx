import { Link } from "react-router-dom";
import type { Room } from "@/data/hotel";
import { Users, Maximize, ArrowRight } from "lucide-react";

interface RoomCardProps {
  room: Room;
  featured?: boolean;
}

const RoomCard = ({ room, featured }: RoomCardProps) => (
  <div
    className={`group relative bg-card rounded-sm overflow-hidden border border-border/10 transition-all duration-700 hover:border-primary/20 ${
      featured ? "lg:col-span-1" : ""
    }`}
  >
    <div className="relative overflow-hidden aspect-[3/4]">
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-75"
        loading="lazy"
      />
      {/* Overlay content on image */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      
      {/* Price badge */}
      <div className="absolute top-5 left-5 text-primary text-[10px] tracking-[0.3em] uppercase font-light bg-background/60 backdrop-blur-md px-4 py-2 rounded-full border border-primary/10">
        From €{room.price}
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-heading text-2xl mb-2 font-light text-foreground">{room.name}</h3>
        <p className="text-xs text-foreground/50 leading-relaxed mb-4 font-light line-clamp-2">
          {room.description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-[10px] text-foreground/40 font-light">
          <span className="flex items-center gap-1.5">
            <Maximize size={11} className="text-primary/60" strokeWidth={1.5} />
            {room.size}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={11} className="text-primary/60" strokeWidth={1.5} />
            Up to {room.guests}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {room.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="text-[10px] px-2.5 py-1 bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-full text-foreground/50 font-light"
            >
              {f}
            </span>
          ))}
        </div>

        <Link
          to="/contact"
          className="group/btn inline-flex items-center gap-2 text-primary text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-500 hover:gap-4"
        >
          Reserve
          <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  </div>
);

export default RoomCard;
