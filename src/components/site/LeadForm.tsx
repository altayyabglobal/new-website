"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2, MessageCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { leadSchema, PROGRAMS, type LeadInput } from "@/lib/leadSchema";
import { site } from "@/lib/site.config";
import { waLink } from "@/lib/whatsapp";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      program: "Not sure yet",
      city: "",
    },
  });

  const program = watch("program");

  async function onSubmit(data: LeadInput) {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error ?? "Submission failed");
      }
      setSubmitted(true);
      reset();

      // Build personalised pre-filled WhatsApp message
      const lines = [
        `Hi, I'm ${data.name} from ${data.city}.`,
        `I just filled the enquiry form on your website.`,
        ``,
        `📱 Phone: ${data.phone}`,
        data.email ? `📧 Email: ${data.email}` : "",
        data.neetScore ? `📊 NEET Score: ${data.neetScore}` : "",
        `🎓 Interested in: ${data.program}`,
        data.preferredCollege ? `🏫 Preferred college: ${data.preferredCollege}` : "",
        data.message ? `💬 Message: ${data.message}` : "",
        ``,
        `Please get in touch when you're available.`,
      ].filter(Boolean).join("\n");

      window.open(waLink(lines), "_blank", "noopener,noreferrer");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast.error(`${msg}. Please try WhatsApp.`);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
        <h3 className="mt-4 text-xl font-semibold">Details saved!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          WhatsApp opened with your details pre-filled — just hit Send.
        </p>
        <ButtonLink
          href={waLink("Hi, I just submitted the enquiry form on your website.")}
          target="_blank"
          rel="noreferrer"
          className="mt-6 rounded-full"
        >
          <MessageCircle className="mr-1.5 h-4 w-4" />
          Open WhatsApp again
        </ButtonLink>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name *" error={errors.name?.message}>
          <Input
            {...register("name")}
            placeholder="Mehraj Bhat"
            autoComplete="name"
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="WhatsApp number *" error={errors.phone?.message}>
          <Input
            {...register("phone")}
            placeholder="+91 98xxx xxxxx"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input
            {...register("email")}
            placeholder="you@email.com"
            inputMode="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label="NEET score" error={errors.neetScore?.message}>
          <Input
            {...register("neetScore")}
            placeholder="e.g. 450"
            inputMode="numeric"
            aria-invalid={!!errors.neetScore}
          />
        </Field>
        <Field label="I'm interested in *" error={errors.program?.message}>
          <Select
            value={program}
            onValueChange={(v) =>
              setValue("program", v as LeadInput["program"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="MBBS / Engineering / Not sure" />
            </SelectTrigger>
            <SelectContent>
              {PROGRAMS.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Your city *" error={errors.city?.message}>
          <Input
            {...register("city")}
            placeholder="Srinagar, Anantnag…"
            autoComplete="address-level2"
            aria-invalid={!!errors.city}
          />
        </Field>
        <Field label="Preferred college" error={errors.preferredCollege?.message} className="sm:col-span-2">
          <Input
            {...register("preferredCollege")}
            placeholder="e.g. Dhaka Community Medical College (optional)"
            aria-invalid={!!errors.preferredCollege}
          />
        </Field>
        <Field label="Message" error={errors.message?.message} className="sm:col-span-2">
          <Textarea
            {...register("message")}
            placeholder="Any questions or specific requirements… (optional)"
            rows={3}
            aria-invalid={!!errors.message}
          />
        </Field>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-brand" />
          Private — never shared, never sold.
        </p>
        <div className="flex items-center gap-2">
          <ButtonLink
            href={waLink("Asalamu alaikum, I'd like to apply for MBBS / Engineering in Bangladesh.")}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            className="rounded-full border-success/30 bg-success/5 text-success hover:bg-success/10 hover:text-success"
          >
            <MessageCircle className="mr-1.5 h-4 w-4" />
            WhatsApp
          </ButtonLink>
          <Button type="submit" disabled={isSubmitting} className="rounded-full">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              "Get free callback"
            )}
          </Button>
        </div>
      </div>

      <p className="text-[11px] leading-relaxed text-muted-foreground">
        By submitting, you agree to be contacted by {site.name} via call,
        WhatsApp or email regarding your admission enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`space-y-1.5 ${className ?? ""}`}>
      <Label className="text-xs font-medium text-foreground/80">{label}</Label>
      {children}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
