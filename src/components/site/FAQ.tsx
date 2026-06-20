import { faqs } from "@/lib/site.config";

export function FAQ() {
  return (
    <section id="faq" className="section-pad">
      <div className="container-tight">
        <div className="max-w-2xl">
          <span className="eyebrow">Frequently asked</span>
          <h2 className="heading-2 mt-3">Quick answers before you apply.</h2>
        </div>

        <div className="mt-10 w-full divide-y divide-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-base font-medium hover:text-brand [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="pb-4 pr-8 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
