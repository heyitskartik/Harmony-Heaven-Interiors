import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* Phone Button */}
      <a href="tel:+919784037296">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg hover-lift hover-glow bg-primary hover:bg-primary/90"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </a>

      {/* WhatsApp Button */}
      <a href="https://wa.me/919784037296" target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg hover-lift hover-glow !bg-green-500 hover:!bg-green-600 !text-white !border-0"
        >
          <MessageCircle className="h-6 w-6 !text-white fill-white" />
        </Button>
      </a>
    </div>
  );
};