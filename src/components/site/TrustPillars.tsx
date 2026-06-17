import { HandCoins, PhoneCall, Eye, Award } from "lucide-react";
import { trustPillars } from "@/lib/site.config";

const icons = [HandCoins, PhoneCall, Eye, Award];

export function TrustPillars() {
  return (
    <section className="border-y border-border bg-brand-soft/30 py-12 sm:py-14">
      <div className="container-wide">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">How we&apos;re different</span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              We guide. The college handles your money.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            That&apos;s the entire model. No agent fees, no commission from you,
            no third-party in your transaction.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-sm font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
