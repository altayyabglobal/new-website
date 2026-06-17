import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site.config";

export function Testimonials() {
  return (
    <section className="section-pad bg-gradient-to-b from-brand-soft/30 to-transparent">
      <div className="container-wide">
        <div className="max-w-2xl">
          <span className="eyebrow">Student voices</span>
          <h2 className="heading-2 mt-3">
            Real students. Real admissions. Real numbers.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="h-6 w-6 text-brand/40" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-sm font-semibold text-brand-deep">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
