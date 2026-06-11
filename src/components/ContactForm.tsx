import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Only digits, spaces and + ( ) - allowed"),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(1000),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    // Simulated submission – wire to backend when ready
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Thank you! A care advisor will reach you within 24 hours.");
    reset();
    console.log("Contact form submitted", values);
  };

  const fieldBase =
    "mt-2 block w-full rounded-lg border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-labelledby="contact-heading"
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldBase}
            placeholder="Adaeze Okeke"
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone number <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldBase}
            placeholder="+234 800 000 0000"
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1 text-sm text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email address <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldBase}
          placeholder="you@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-foreground">
          Service needed <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <select
          id="service"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={fieldBase}
          defaultValue=""
          {...register("service")}
        >
          <option value="" disabled>Select a service…</option>
          <option value="elderly">Elderly care</option>
          <option value="post-hospital">Post-hospital recovery</option>
          <option value="nursing">Skilled nursing</option>
          <option value="companion">Companion care</option>
          <option value="physio">Physiotherapy at home</option>
          <option value="other">Something else</option>
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className="mt-1 text-sm text-destructive">
            {errors.service.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          How can we help? <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldBase}
          placeholder="Tell us about the person who needs care, location, and preferred schedule."
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-95 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request a free consultation"}
      </button>
      <p className="text-xs text-muted-foreground">
        We respect your privacy. Your details are only used to contact you about care.
      </p>
    </form>
  );
}
