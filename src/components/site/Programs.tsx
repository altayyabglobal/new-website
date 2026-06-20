import { ArrowUpRight, BedDouble, MapPin, Stethoscope, Wallet } from "lucide-react";
import { mbbsColleges } from "@/lib/site.config";
import { waLink } from "@/lib/whatsapp";

type College = {
  name: string;
  city: string;
  feesUSD: string;
  feesINR: string;
  hostel: string;
  badge: string;
};

export function Programs() {
  const PREVIEW = 6;
  const visible = mbbsColleges.slice(0, PREVIEW);

  return (
    <section id="programs" className="section-pad">
      <div className="container-wide">
        <div className="max-w-2xl">
          <span className="eyebrow">MBBS in Bangladesh</span>
          <h2 className="heading-2 mt-3">
            BMDC-approved colleges — fees paid direct to the college.
          </h2>
          <p className="lead mt-4">
            Every college we work with is BMDC-approved and NMC-listed. You speak directly
            with the admission officer, verify everything yourself, and pay the college account directly.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card/50 p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-brand-foreground">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold tracking-tight">MBBS Program Overview</h3>
              <p className="text-sm text-muted-foreground">Eligibility · Duration · Cost · Recognition</p>
            </div>
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Eligibility</dt>
              <dd className="mt-1 font-medium">NEET qualified, 50%+ PCB</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Duration</dt>
              <dd className="mt-1 font-medium">5 years + 1 year internship</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Total cost</dt>
              <dd className="mt-1 font-medium">₹30–35 L (entire course)</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Recognition</dt>
              <dd className="mt-1 font-medium">BMDC + India&apos;s NMC listed</dd>
            </div>
          </dl>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-muted-foreground">
            {["English medium, NMC-pattern syllabus", "FMGE/NEXT-ready curriculum", "Practice in India after FMGE/NEXT"].map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                MBBS colleges in Bangladesh
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                BMDC-approved, NMC-listed · <span className="font-medium text-foreground">₹31.6 L – ₹42.4 L</span> full course · Session 2026–27 · $1 = ₹94.33
              </p>
            </div>
            <a
              href="/mbbs-colleges-in-bangladesh"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-deep"
            >
              See all {mbbsColleges.length} colleges
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {visible.map((c) => (
              <CollegeCard key={c.name} college={c} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="/mbbs-colleges-in-bangladesh"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
            >
              View all colleges
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CollegeCard({ college: c }: { college: College }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 sm:p-6">
      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-success/10 px-2.5 py-0.5 text-[11px] font-medium text-success">
        {c.badge}
      </span>
      <h4 className="mt-2.5 font-semibold tracking-tight">{c.name}</h4>
      <dl className="mt-3 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
          <dt className="sr-only">City</dt>
          <dd>{c.city}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <Wallet className="h-3.5 w-3.5 shrink-0 text-brand" />
          <dt className="sr-only">Fees</dt>
          <dd className="font-medium text-foreground">{c.feesINR}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <BedDouble className="h-3.5 w-3.5 shrink-0 text-brand" />
          <dt className="sr-only">Hostel</dt>
          <dd>{"Hostel charges may be extra"}</dd>
        </div>
      </dl>
      <a
        href={waLink(`Please share details on ${c.name} — fees, seat availability, and hostel.`)}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-deep"
      >
        Ask on WhatsApp
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </article>
  );
}
