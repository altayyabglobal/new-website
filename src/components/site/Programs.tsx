import { ArrowUpRight, GraduationCap, MapPin, Stethoscope, Users, Wallet } from "lucide-react";
import {
  engineeringColleges,
  mbbsColleges,
  programs,
} from "@/lib/site.config";
import { waLink } from "@/lib/whatsapp";

type College = {
  name: string;
  city: string;
  seats: string;
  fees: string;
  badge: string;
};

export function Programs() {
  return (
    <section id="programs" className="section-pad">
      <div className="container-wide">
        <div className="max-w-2xl">
          <span className="eyebrow">Two programs we guide</span>
          <h2 className="heading-2 mt-3">
            MBBS or Engineering — pick the one that fits, we&apos;ll handle the rest.
          </h2>
          <p className="lead mt-4">
            Same trusted process for both: direct college contact, transparent
            fees paid by you straight to the college, on-ground support in Dhaka.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {programs.map((p) => (
            <ProgramSummary key={p.id} program={p} />
          ))}
        </div>

        <ProgramBlock
          id="mbbs"
          title="MBBS colleges in Bangladesh"
          subtitle="BMDC-approved, NMC-listed. Fees shown are for the full 5-year program."
          Icon={Stethoscope}
          colleges={mbbsColleges}
          ctaMessage="Send me the full BMDC MBBS college list with fees."
          ctaLabel="See all MBBS colleges"
        />

        <ProgramBlock
          id="engineering"
          title="Engineering colleges in Bangladesh"
          subtitle="BAETE accredited. Fees shown are for the full 4-year B.Sc. Engineering program."
          Icon={GraduationCap}
          colleges={engineeringColleges}
          ctaMessage="Send me the full engineering college list with fees and branches."
          ctaLabel="See all Engineering colleges"
        />
      </div>
    </section>
  );
}

function ProgramSummary({ program }: { program: (typeof programs)[number] }) {
  const Icon = program.id === "mbbs" ? Stethoscope : GraduationCap;
  return (
    <article className="flex flex-col rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-brand-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{program.name}</h3>
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
        <Row label="Eligibility" value={program.eligibility} />
        <Row label="Duration" value={program.duration} />
        <Row label="Total cost" value={program.totalCost} />
        <Row label="Recognition" value={program.recognition} />
      </dl>
      <ul className="mt-6 space-y-1.5 text-sm text-muted-foreground">
        {program.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-2 h-1 w-1 rounded-full bg-brand" aria-hidden />
            {b}
          </li>
        ))}
      </ul>
      <a
        href={waLink(`I'm interested in ${program.short} in Bangladesh. Please share fees and seat availability.`)}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex w-fit items-center gap-1.5 rounded-full bg-success/10 px-3.5 py-1.5 text-sm font-medium text-success hover:bg-success/15"
      >
        Ask about {program.short} on WhatsApp
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 font-medium text-foreground">{value}</dd>
    </div>
  );
}

function ProgramBlock({
  id,
  title,
  subtitle,
  Icon,
  colleges,
  ctaMessage,
  ctaLabel,
}: {
  id: string;
  title: string;
  subtitle: string;
  Icon: typeof Stethoscope;
  colleges: readonly College[];
  ctaMessage: string;
  ctaLabel: string;
}) {
  return (
    <div id={id} className="mt-20 scroll-mt-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand-deep ring-1 ring-brand/15">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {title}
            </h3>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </div>
        <a
          href={waLink(ctaMessage)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-deep"
        >
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {colleges.map((c) => (
          <article
            key={c.name}
            className="group flex flex-col rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 sm:p-6"
          >
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-success/10 px-2.5 py-0.5 text-[11px] font-medium text-success">
              {c.badge}
            </span>
            <h4 className="mt-2.5 font-semibold tracking-tight">{c.name}</h4>
            <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-muted-foreground sm:grid-cols-1 sm:space-y-0">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
                <dt className="sr-only">City</dt>
                <dd>{c.city}</dd>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 shrink-0 text-brand" />
                <dt className="sr-only">Seats</dt>
                <dd>{c.seats}</dd>
              </div>
              <div className="col-span-2 flex items-center gap-1.5 sm:col-span-1">
                <Wallet className="h-3.5 w-3.5 shrink-0 text-brand" />
                <dt className="sr-only">Fees</dt>
                <dd className="font-medium text-foreground">{c.fees}</dd>
              </div>
            </dl>
            <a
              href={waLink(`Please share details on ${c.name} — fees, branches, seat status.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-deep"
            >
              Ask on WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
