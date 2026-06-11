import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Only digits, spaces and + ( ) - allowed"),
  preferredDate: z
    .string()
    .min(1, "Please choose a date")
    .refine((v) => new Date(v) >= new Date(new Date().toDateString()), {
      message: "Please pick today or a future date",
    }),
  preferredTime: z.string().min(1, "Please choose a time"),
  address: z.string().trim().min(5, "Please share a full address").max(255),
  caregiverType: z.string().min(1, "Please choose a caregiver type"),
  notes: z.string().trim().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

export function BookingForm() {
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setConfirmation(values);
    reset();
    console.log("Booking request submitted", values);
  };

  const fieldBase =
    "mt-2 block w-full rounded-lg border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary";

  if (confirmation) {
    const dateLabel = new Date(`${confirmation.preferredDate}T${confirmation.preferredTime}`)
      .toLocaleString("en-NG", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

    return (
      <div role="status" aria-live="polite" className="text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-foreground">Your booking is in!</h3>
        <p className="mt-2 text-base text-muted-foreground">
          Thank you, <strong className="text-foreground">{confirmation.name}</strong>. We’ve
          received your request for a <strong className="text-foreground">{caregiverLabel(confirmation.caregiverType)}</strong>{" "}
          on <strong className="text-foreground">{dateLabel}</strong>.
        </p>
        <p className="mt-2 text-base text-muted-foreground">
          A care advisor will call you on{" "}
          <strong className="text-foreground">{confirmation.phone}</strong> within 2 hours to
          confirm.
        </p>
        <button
          type="button"
          onClick={() => setConfirmation(null)}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-lg border border-input bg-card px-5 text-sm font-semibold text-foreground hover:bg-muted"
        >
          Book another visit
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="b-name" className="text-sm font-medium text-foreground">
            Full name <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <input
            id="b-name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "b-name-error" : undefined}
            className={fieldBase}
            placeholder="Adaeze Okeke"
            {...register("name")}
          />
          {errors.name && <ErrorText id="b-name-error">{errors.name.message}</ErrorText>}
        </div>

        <div>
          <label htmlFor="b-phone" className="text-sm font-medium text-foreground">
            Phone number <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <input
            id="b-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "b-phone-error" : undefined}
            className={fieldBase}
            placeholder="+234 800 000 0000"
            {...register("phone")}
          />
          {errors.phone && <ErrorText id="b-phone-error">{errors.phone.message}</ErrorText>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="b-date" className="text-sm font-medium text-foreground">
            Preferred date <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <input
            id="b-date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            aria-invalid={!!errors.preferredDate}
            aria-describedby={errors.preferredDate ? "b-date-error" : undefined}
            className={fieldBase}
            {...register("preferredDate")}
          />
          {errors.preferredDate && (
            <ErrorText id="b-date-error">{errors.preferredDate.message}</ErrorText>
          )}
        </div>

        <div>
          <label htmlFor="b-time" className="text-sm font-medium text-foreground">
            Preferred time <span className="text-destructive" aria-hidden="true">*</span>
          </label>
          <input
            id="b-time"
            type="time"
            aria-invalid={!!errors.preferredTime}
            aria-describedby={errors.preferredTime ? "b-time-error" : undefined}
            className={fieldBase}
            {...register("preferredTime")}
          />
          {errors.preferredTime && (
            <ErrorText id="b-time-error">{errors.preferredTime.message}</ErrorText>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="b-address" className="text-sm font-medium text-foreground">
          Home address <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <input
          id="b-address"
          type="text"
          autoComplete="street-address"
          aria-invalid={!!errors.address}
          aria-describedby={errors.address ? "b-address-error" : "b-address-hint"}
          className={fieldBase}
          placeholder="House number, street, area, city"
          {...register("address")}
        />
        {errors.address ? (
          <ErrorText id="b-address-error">{errors.address.message}</ErrorText>
        ) : (
          <p id="b-address-hint" className="mt-1 text-xs text-muted-foreground">
            We currently serve Lagos, Abuja and Port Harcourt.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="b-type" className="text-sm font-medium text-foreground">
          Caregiver type <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <select
          id="b-type"
          defaultValue=""
          aria-invalid={!!errors.caregiverType}
          aria-describedby={errors.caregiverType ? "b-type-error" : undefined}
          className={fieldBase}
          {...register("caregiverType")}
        >
          <option value="" disabled>Choose a caregiver…</option>
          <option value="companion">Companion caregiver</option>
          <option value="personal">Personal care aide</option>
          <option value="nurse">Registered nurse</option>
          <option value="physio">Physiotherapist</option>
          <option value="livein">Live-in caregiver</option>
        </select>
        {errors.caregiverType && (
          <ErrorText id="b-type-error">{errors.caregiverType.message}</ErrorText>
        )}
      </div>

      <div>
        <label htmlFor="b-notes" className="text-sm font-medium text-foreground">
          Anything else we should know? <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="b-notes"
          rows={3}
          className={fieldBase}
          placeholder="Medical conditions, mobility needs, preferred language…"
          {...register("notes")}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95 disabled:opacity-60"
      >
        {submitting ? "Sending request…" : "Request booking"}
      </button>
    </form>
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} role="alert" className="mt-1 text-sm text-destructive">
      {children}
    </p>
  );
}

function caregiverLabel(value: string) {
  switch (value) {
    case "companion": return "companion caregiver";
    case "personal": return "personal care aide";
    case "nurse": return "registered nurse";
    case "physio": return "physiotherapist";
    case "livein": return "live-in caregiver";
    default: return "caregiver";
  }
}
