import { Stethoscope, GraduationCap, Wallet, Plane, Calendar, HeartHandshake } from "lucide-react";
import { whyBangladesh } from "@/lib/site.config";

const icons = [Stethoscope, GraduationCap, Wallet, Plane, Calendar, HeartHandshake];

export function WhyBangladesh() {
  return (
    <section id="why" className="section-pad">
      <div className="container-wide">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Bangladesh</span>
          <h2 className="heading-2 mt-3">
            Why so many Kashmiri students pick Bangladesh.
          </h2>
          <p className="lead mt-4">
            Affordable. Close to home. English medium. NMC-listed degree valid in India.
            Here is why Kashmiri students keep choosing Bangladesh for MBBS.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyBangladesh.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-deep ring-1 ring-brand/15">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand/5 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
