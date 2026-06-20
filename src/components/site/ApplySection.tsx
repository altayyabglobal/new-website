import { ArrowUp, Clock, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site.config";
import { waLink } from "@/lib/whatsapp";

export function ApplySection() {
  return (
    <section id="apply" className="section-pad">
      <div className="container-wide">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-soft via-card to-card p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">Ready when you are</span>
              <h2 className="heading-2 mt-3 text-balance">
                Free eligibility check &mdash; reply on WhatsApp within 1 hour.
              </h2>
              <p className="lead mt-4 max-w-xl">
                Send your details once. We come back with college options, real
                fees, and the admission officer&apos;s direct number. You verify
                everything yourself before deciding.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="#apply-form" size="lg" className="group rounded-full">
                  <ArrowUp className="mr-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  Fill the form above
                </ButtonLink>
                <ButtonLink
                  href={waLink("Asalamu alaikum, I'd like to discuss MBBS in Bangladesh.")}
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  variant="outline"
                  className="rounded-full border-success/30 bg-success/5 text-success hover:bg-success/10 hover:text-success"
                >
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  Skip the form, WhatsApp us
                </ButtonLink>
              </div>
            </div>

            <ul className="space-y-4 text-sm lg:col-span-5">
              <li className="flex items-start gap-3 rounded-2xl border border-border bg-card/80 p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-medium">Under 1-hour reply</p>
                  <p className="text-muted-foreground">{site.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-border bg-card/80 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-medium">You pay the college, not us</p>
                  <p className="text-muted-foreground">
                    Every rupee goes to the college&apos;s official account.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-border bg-card/80 p-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-medium">Prefer to call?</p>
                  <a
                    href={site.contact.phoneHref}
                    className="text-foreground hover:text-brand"
                  >
                    {site.contact.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
