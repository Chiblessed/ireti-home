import { useEffect, useRef, useState } from "react";
import { X, MessageCircle } from "lucide-react";

export function WelcomeDialog() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-foreground/50 p-4 animate-in fade-in"
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        aria-describedby="welcome-desc"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl bg-card p-7 shadow-(--shadow-glow) animate-in zoom-in-95"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close welcome message"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </div>

        <h2 id="welcome-title" className="mt-4 text-2xl font-semibold text-foreground">
          Send us a message
        </h2>
        <p id="welcome-desc" className="mt-2 text-base text-muted-foreground">
          Welcome to <strong className="text-foreground">Ireti HomeCare</strong>. Our care
          advisors are ready to help you find the right support for your loved one. How can we
          care for you today?
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-95"
          >
            Send a message
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-lg border border-input bg-card px-5 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
