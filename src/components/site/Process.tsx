import { process } from "@/lib/site.config";

export function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="container-wide">
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="heading-2 mt-3">
            Four clear steps. We do the heavy lifting.
          </h2>
          <p className="lead mt-4">
            From your NEET scorecard to the day you land in Dhaka — one team, one
            point of contact, zero surprises.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <li
              key={p.step}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-brand">
                STEP {p.step}
              </span>
              <h3 className="mt-2 font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              {i < process.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-border lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
