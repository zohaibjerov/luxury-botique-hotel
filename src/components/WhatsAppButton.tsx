import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/3225550100"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[hsl(142,60%,35%)] text-[hsl(0,0%,100%)] rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_hsl(142,60%,35%/0.3)]"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={20} strokeWidth={1.5} />
  </a>
);

export default WhatsAppButton;
