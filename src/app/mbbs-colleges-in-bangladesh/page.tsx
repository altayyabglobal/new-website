import type { Metadata } from "next";
import { BedDouble, MapPin, Wallet } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { site, mbbsColleges } from "@/lib/site.config";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "MBBS Colleges in Bangladesh 2026 — Fees & Hostel Charges",
  description:
    "Complete list of BMDC-approved MBBS colleges in Bangladesh for Kashmiri students. Official fees for Session 2026–27, hostel charges, and direct admission — no agent fees.",
  alternates: {
    canonical: `https://www.${site.domain}/mbbs-colleges-in-bangladesh`,
  },
  openGraph: {
    title: "MBBS Colleges in Bangladesh 2026 — Fees & Hostel Charges",
    description:
      "19 BMDC-approved colleges. Official fees (Session 2026–27) at $1 = ₹94.33. Hostel info included. Direct admission for Kashmiri students.",
    url: `https://www.${site.domain}/mbbs-colleges-in-bangladesh`,
  },
};

export default function CollegesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section-pad border-b border-border">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="eyebrow">Session 2026–27</span>
              <h1 className="heading-1 mt-3">
                MBBS colleges in Bangladesh — official fees &amp; hostel charges
              </h1>
              <p className="lead mt-5 max-w-2xl">
                {mbbsColleges.length} BMDC-approved, NMC-listed colleges. Fees sourced directly from
                official college documents for the 2026–27 session.{" "}
                <span className="font-medium text-foreground">$1 = ₹94.33</span> (June 2026).
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                You pay the college directly — Al-Tayyab charges no agent fees. We connect you with
                the admission officer so you can verify everything yourself.
              </p>
            </div>
          </div>
        </section>

        {/* College grid */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mbbsColleges.map((c) => (
                <article
                  key={c.name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-success/10 px-2.5 py-0.5 text-[11px] font-medium text-success">
                    {c.badge}
                  </span>
                  <h2 className="mt-3 font-semibold leading-snug tracking-tight">{c.name}</h2>
                  <dl className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
                      <dt className="sr-only">City</dt>
                      <dd>{c.city}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wallet className="h-3.5 w-3.5 shrink-0 text-brand" />
                      <dt className="sr-only">Total fees</dt>
                      <dd className="font-semibold text-foreground">{c.feesINR}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedDouble className="h-3.5 w-3.5 shrink-0 text-brand" />
                      <dt className="sr-only">Hostel</dt>
                      <dd>{"Hostel charges may be extra"}</dd>
                    </div>
                  </dl>
                  <div className="mt-5 border-t border-border pt-4">
                    <a
                      href={waLink(
                        `Asalamu alaikum, I'd like to know more about ${c.name} — fees, seat availability, and hostel.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-brand hover:text-brand-deep"
                    >
                      Ask about this college →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="mt-10 rounded-xl border border-border bg-card/50 px-5 py-4 text-xs text-muted-foreground">
              <strong>Note:</strong> Fees are sourced from official college documents (Session
              2026–27) and converted at $1 = ₹94.33 (June 2026). Exchange rates fluctuate — verify
              the current INR equivalent before payment. Living costs (food, transport, personal
              expenses) are not included unless stated. All fees are paid directly to the college —
              Al-Tayyab charges no agent fees.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad border-t border-border">
          <div className="container-wide">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-brand-soft via-card to-card p-8 sm:p-12">
              <div className="max-w-2xl">
                <h2 className="heading-2">Ready to apply?</h2>
                <p className="lead mt-4">
                  Tell us your NEET score and budget — we&apos;ll shortlist 2–3 colleges that fit,
                  connect you directly with the admission officer, and guide you through the rest.
                  Free consultation, no fees from you.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="/#apply-form"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow hover:opacity-90"
                  >
                    Free eligibility check
                  </a>
                  <a
                    href={waLink(
                      "Asalamu alaikum, I'd like help choosing the right MBBS college in Bangladesh."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-6 py-3 text-sm font-semibold text-success hover:bg-success/20"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
