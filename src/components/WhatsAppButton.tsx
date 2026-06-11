import { MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "2348000000000"; // Replace with real number
const DEFAULT_MESSAGE = "Hello! I'd like to learn more about your home care services.";

export function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {showPopup && (
        <div
          role="dialog"
          aria-label="Chat with us on WhatsApp"
          className="relative max-w-xs rounded-2xl bg-card p-4 pr-9 shadow-[var(--shadow-glow)] border border-border animate-in fade-in slide-in-from-bottom-4"
        >
          <button
            type="button"
            onClick={() => setShowPopup(false)}
            aria-label="Dismiss message"
            className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="text-sm font-semibold text-foreground">Send us a message</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Need care for a loved one? Chat with a care advisor now.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-whatsapp hover:underline"
          >
            Start chat
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
        <span className="sr-only">Open WhatsApp chat</span>
      </a>
    </div>
  );
}
