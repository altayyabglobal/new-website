import { ArrowRight, ShieldCheck, HandCoins } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site.config";
import { waLink } from "@/lib/whatsapp";
import { LeadForm } from "./LeadForm";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={`${styles.wrap} section-pad pt-6 sm:pt-8 pb-10 sm:pb-12`}>
      <div className={styles.bgMesh} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <div className="container-wide grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <span className={styles.flag}>
            <span className={styles.flagDot} aria-hidden />
            From {site.homeRegion} · For {site.audience}
          </span>

          <p className="mt-3 text-sm font-medium text-muted-foreground">
            {site.tagline}
          </p>

          <h1 className="heading-1 mt-4">
            <span className="text-brand">MBBS in Bangladesh</span> direct from Kashmir.
          </h1>

          <p className="lead mt-5 max-w-xl">
            You pay the college directly. We only guide — no agent fees, no
            donation, no surprise charges.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <ButtonLink href="#apply-form" size="lg" className="group rounded-full px-6 py-3 text-base font-semibold shadow-lg shadow-primary/25">
              Free eligibility check
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink
              href={waLink("Asalamu alaikum, I'd like to know about MBBS in Bangladesh.")}
              target="_blank"
              rel="noreferrer"
              size="lg"
              variant="outline"
              className="group rounded-full border-2 border-success/50 bg-success/10 px-6 py-3 text-base font-semibold text-success hover:bg-success/20 hover:text-success"
            >
              <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </ButtonLink>
          </div>

          <ul className="mt-7 grid max-w-xl gap-y-2 gap-x-5 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="inline-flex items-center gap-2">
              <HandCoins className="h-4 w-4 text-brand" /> Pay college directly — never us
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" /> BMDC + NMC approved colleges
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
                Send your details — we reply on WhatsApp within 1 hour.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
