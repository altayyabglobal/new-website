import { ArrowUpRight, BedDouble, MapPin, Stethoscope, Wallet } from "lucide-react";
import { mbbsColleges } from "@/lib/site.config";
import { waLink } from "@/lib/whatsapp";
import styles from "./Programs.module.css";

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

        <div className={styles.overviewCard}>
          <div className={styles.overviewHeader}>
            <div className={styles.overviewIconWrap}>
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold tracking-tight">MBBS Program Overview</h3>
              <p className="text-sm text-muted-foreground">Eligibility · Duration · Cost · Recognition</p>
            </div>
          </div>
          <dl className={styles.overviewGrid}>
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
          <ul className={styles.overviewBullets}>
            {["English medium, NMC-pattern syllabus", "FMGE/NEXT-ready curriculum", "Practice in India after FMGE/NEXT"].map((b) => (
              <li key={b} className={styles.bullet}>
                <span className={styles.bulletDot} aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.collegesSection}>
          <div className={styles.collegesHeader}>
            <div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                MBBS colleges in Bangladesh
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                BMDC-approved, NMC-listed · <span className="font-medium text-foreground">₹31–32 L – ₹42–43 L</span> full course · Session 2026–27 · $1 = ₹94.33
              </p>
            </div>
            <a href="/mbbs-colleges-in-bangladesh" className={styles.seeAllLink}>
              See all {mbbsColleges.length} colleges
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className={styles.cardGrid}>
            {visible.map((c) => (
              <CollegeCard key={c.name} college={c} />
            ))}
          </div>

          <div className={styles.viewAllWrap}>
            <a href="/mbbs-colleges-in-bangladesh" className={styles.viewAllBtn}>
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
    <article className={styles.card}>
      <span className={styles.badge}>{c.badge}</span>
      <h4 className="mt-2.5 font-semibold tracking-tight">{c.name}</h4>
      <dl className={styles.metaList}>
        <div className={styles.metaRow}>
          <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
          <dt className="sr-only">City</dt>
          <dd>{c.city}</dd>
        </div>
        <div className={styles.metaRow}>
          <Wallet className="h-3.5 w-3.5 shrink-0 text-brand" />
          <dt className="sr-only">Fees</dt>
          <dd className="font-medium text-foreground">{c.feesINR}</dd>
        </div>
        <div className={styles.metaRow}>
          <BedDouble className="h-3.5 w-3.5 shrink-0 text-brand" />
          <dt className="sr-only">Hostel</dt>
          <dd>Hostel charges may be extra</dd>
        </div>
      </dl>
      <a
        href={waLink(`Please share details on ${c.name} — fees, seat availability, and hostel.`)}
        target="_blank"
        rel="noreferrer"
        className={styles.cardLink}
      >
        Ask on WhatsApp
        <ArrowUpRight className={`h-4 w-4 ${styles.cardLinkIcon}`} />
      </a>
    </article>
  );
}
