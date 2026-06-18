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
      email: "",
      program: "Not sure yet",
      city: "",
      preferredCollege: "",
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
        <Field label="Email *" error={errors.email?.message}>
          <Input
            {...register("email")}
            placeholder="you@email.com"
            inputMode="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
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
        <Field label="Your city" error={errors.city?.message}>
          <Input
            {...register("city")}
            placeholder="Srinagar, Anantnag…"
            autoComplete="address-level2"
            aria-invalid={!!errors.city}
          />
        </Field>
        <Field label="Preferred college" error={errors.preferredCollege?.message}>
          <Input
            {...register("preferredCollege")}
            placeholder="e.g. Dhaka CMC (optional)"
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

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <ButtonLink
            href={waLink("Asalamu alaikum, I'd like to apply for MBBS / Engineering in Bangladesh.")}
            target="_blank"
            rel="noreferrer"
            size="lg"
            variant="outline"
            className="w-full rounded-full border-2 border-success/40 bg-success/10 py-3 text-base font-semibold text-success hover:bg-success/20 hover:text-success"
          >
            <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </ButtonLink>
          <Button type="submit" disabled={isSubmitting} size="lg" className="w-full rounded-full py-3 text-base font-semibold shadow-md shadow-primary/20">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending…
              </>
            ) : (
              "Get free callback"
            )}
          </Button>
        </div>
        <p className="inline-flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-brand" />
          Private — never shared, never sold.
        </p>
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
