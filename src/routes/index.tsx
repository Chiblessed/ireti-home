import { createFileRoute } from "@tanstack/react-router";
import {
  HeartPulse,
  Stethoscope,
  Users,
  Activity,
  HandHeart,
  ShieldCheck,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WelcomeDialog } from "@/components/WelcomeDialog";
import { ContactForm } from "@/components/ContactForm";
import { BookingForm } from "@/components/BookingForm";
import heroImage from "@/assets/hero-caregiver.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ireti HomeCare — Compassionate Home Care in Nigeria" },
      {
        name: "description",
        content:
          "Trusted home care, nursing and elderly care services in Nigeria. Vetted caregivers, 24/7 support. Request a free consultation today.",
      },
      { property: "og:title", content: "Ireti HomeCare — Compassionate Home Care in Nigeria" },
      {
        property: "og:description",
        content:
          "Trusted home care, nursing and elderly care services in Nigeria. Vetted caregivers, 24/7 support.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: HandHeart, title: "Elderly Care", desc: "Daily living support, companionship and personal care for our aged loved ones, with dignity." },
  { icon: Stethoscope, title: "Skilled Nursing", desc: "Registered nurses for wound care, injections, vitals monitoring and chronic illness management at home." },
  { icon: Activity, title: "Post-Hospital Recovery", desc: "Personalised care plans to help you heal safely after surgery or hospital discharge." },
  { icon: Users, title: "Companion Care", desc: "Friendly visits, light housekeeping and meaningful company for those who live alone." },
  { icon: HeartPulse, title: "Chronic Care", desc: "Support for diabetes, hypertension, stroke recovery and other long-term conditions." },
  { icon: ShieldCheck, title: "Live-in Caregivers", desc: "Around-the-clock support from trained, background-checked caregivers in your home." },
];

const stats = [
  { value: "500+", label: "Families served" },
  { value: "120+", label: "Vetted caregivers" },
  { value: "24/7", label: "Care support" },
  { value: "8 yrs", label: "Caring for Nigeria" },
];

const steps = [
  { n: "1", title: "Tell us your needs", desc: "Share a few details about your loved one and the support you’re looking for." },
  { n: "2", title: "Meet your caregiver", desc: "We match you with a trained caregiver that fits your culture, language and schedule." },
  { n: "3", title: "Care begins at home", desc: "Your caregiver arrives ready to help — and we stay in touch to make sure all is well." },
];

const testimonials = [
  { quote: "The nurse Ireti sent took such gentle care of my mother after her stroke. We finally had peace of mind.", name: "Chinwe A.", role: "Lagos" },
  { quote: "Professional, kind and always on time. My father looks forward to his caregiver’s visits every morning.", name: "Tunde O.", role: "Abuja" },
  { quote: "From the first call, they listened. The care plan fit our family perfectly.", name: "Grace E.", role: "Port Harcourt" },
];

function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary ring-1 ring-border">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Trusted home care across Nigeria
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Compassionate care, <span className="text-primary">in the comfort of home.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                From elderly support to skilled nursing, Ireti HomeCare brings trained, kind-hearted
                caregivers to your doorstep — so your loved ones can heal, thrive and live with dignity.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95"
                >
                  Request free consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-card px-6 text-base font-semibold text-foreground hover:bg-muted"
                >
                  Explore services
                </a>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-2xl font-semibold text-primary">{s.value}</dd>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-glow)] ring-1 ring-border">
                <img
                  src={heroImage}
                  alt="A smiling Nigerian caregiver holding hands with an elderly man in a warm, sunlit living room"
                  width={1536}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-[var(--shadow-soft)] ring-1 ring-border sm:block">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
                    <HeartPulse className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Care visit in progress</p>
                    <p className="text-xs text-muted-foreground">Lagos · 9:42 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our services</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Care plans built around your family
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every family is different. Choose a service or talk to us — we’ll design care that truly fits.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-secondary/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                Getting care is simple
              </h2>
            </div>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.n} className="rounded-2xl bg-card p-7 ring-1 ring-border">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg font-semibold">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHY US */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why families choose us</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                The care you’d want for your own mother
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We’re a Nigerian-owned home care agency built on warmth, professionalism and trust.
                Every caregiver is screened, trained and supervised — because peace of mind matters.
              </p>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, title: "Vetted & trained", desc: "Background-checked, certified caregivers." },
                  { icon: Clock, title: "Flexible hours", desc: "Hourly, daily or live-in care." },
                  { icon: Award, title: "Quality assured", desc: "Care supervisors check in regularly." },
                  { icon: HeartPulse, title: "Person-centred", desc: "Care plans built around your loved one." },
                ].map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-3">
                    <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{title}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="grid gap-5">
              {testimonials.map((t) => (
                <li key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-lg text-foreground">“{t.quote}”</p>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {t.name} <span className="font-normal text-muted-foreground">· {t.role}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BOOKING */}
        <section id="booking" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Book a visit</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                Schedule care in three easy steps
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Pick a date and time, tell us where you live and the type of caregiver you need.
                We’ll confirm your booking within 2 hours.
              </p>
              <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                <li>· Same-day visits available in Lagos, Abuja and Port Harcourt</li>
                <li>· Free 15-minute consultation before any booking</li>
                <li>· Cancel or reschedule anytime, at no cost</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)] ring-1 ring-border sm:p-8 lg:col-span-3">
              <BookingForm />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-gradient-to-b from-background to-secondary/40 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact us</p>
              <h2 id="contact-heading" className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                Let’s talk about your loved one
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us a little about who needs care. A friendly advisor will reach out within 24 hours
                — no obligations, just guidance.
              </p>

              <ul className="mt-8 space-y-4 text-base">
                <li className="flex items-center gap-3 text-foreground">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  <a href="tel:+2348000000000" className="hover:underline">+234 800 000 0000</a>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  <a href="mailto:care@iretihomecare.ng" className="hover:underline">care@iretihomecare.ng</a>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>Lagos · Abuja · Port Harcourt</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)] ring-1 ring-border sm:p-8 lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <WelcomeDialog />
      <Toaster richColors position="top-center" />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#main" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <HeartPulse className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-semibold text-foreground">Ireti HomeCare</span>
        </a>
        <nav aria-label="Primary" className="hidden gap-7 md:flex">
          <a href="#services" className="text-sm font-medium text-foreground hover:text-primary">Services</a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-95 sm:inline-flex"
        >
          Get care
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ireti HomeCare. Caring for Nigerian families.
        </p>
        <p className="text-sm text-muted-foreground">RC: 0000000 · Lagos, Nigeria</p>
      </div>
    </footer>
  );
}
