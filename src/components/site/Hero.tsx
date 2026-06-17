import { ArrowRight, MessageCircle, ShieldCheck, BadgeCheck, Sparkles, HandCoins } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site.config";
import { waLink } from "@/lib/whatsapp";
import { LeadForm } from "./LeadForm";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={`${styles.wrap} section-pad pt-10 sm:pt-14`}>
      <div className={styles.bgMesh} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <div className="container-wide grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <span className={styles.flag}>
            <span className={styles.flagDot} aria-hidden />
            From {site.homeRegion} · For {site.audience}
          </span>

          <h1 className="heading-1 mt-5">
            <span className="text-brand">MBBS &amp; Engineering</span> in
            Bangladesh — straight from Kashmir, no middleman.
          </h1>

          <p className="lead mt-5 max-w-xl">
            650+ Kashmiri students placed. You pay the college directly. We
            only guide — no agent fees, no donation, no surprise charges.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <ButtonLink href="#apply-form" size="lg" className="group rounded-full">
              Free eligibility check
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink
              href={waLink("Asalamu alaikum, I'd like to know about MBBS / Engineering in Bangladesh.")}
              target="_blank"
              rel="noreferrer"
              size="lg"
              variant="outline"
              className="group rounded-full border-success/30 bg-success/5 text-success hover:bg-success/10 hover:text-success"
            >
              <MessageCircle className="mr-1.5 h-4 w-4" />
              WhatsApp
            </ButtonLink>
          </div>

          <ul className="mt-7 grid max-w-xl gap-y-2 gap-x-5 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="inline-flex items-center gap-2">
              <HandCoins className="h-4 w-4 text-brand" /> Pay college directly — never us
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" /> BMDC + UGC + NMC approved
            </li>
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-brand" /> Direct call with admission officer
            </li>
            <li className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand" /> 9+ years guiding from Kashmir
            </li>
          </ul>
        </div>

        <div id="apply-form" className="lg:col-span-6 scroll-mt-20">
          <div className="relative rounded-3xl border border-border/70 bg-card/95 p-6 shadow-xl shadow-brand/10 backdrop-blur sm:p-7">
            <div className="absolute -right-3 -top-3 rounded-full bg-accent-gold/90 px-3 py-1 text-xs font-semibold text-foreground shadow">
              Free callback · 2026 seats open
            </div>
            <div className="mb-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
                Get started
              </p>
              <h2 className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl">
                Free eligibility check
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Send your details — we reply on WhatsApp from Srinagar within 1 hour.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
