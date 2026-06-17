import { stats } from "@/lib/site.config";

export function StatsBand() {
  return (
    <section className="border-y border-border bg-card">
      <div className="container-wide py-8 sm:py-10">
        <dl className="grid grid-cols-2 gap-y-6 gap-x-4 text-center sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                {s.label}
              </dt>
              <dd className="mt-1.5 text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
