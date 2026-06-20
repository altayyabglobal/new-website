import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site.config";
import { waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {site.description}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">{site.hours}</p>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#why" className="hover:text-foreground">
                Why Bangladesh
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-foreground">
                MBBS colleges in Bangladesh
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-foreground">
                Admission process
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-foreground">
                FAQ
              </a>
            </li>
            <li>
              <a href="#apply" className="hover:text-foreground">
                Apply now
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-sm font-semibold">Reach us</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-brand" />
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={waLink("Asalamu alaikum, I'd like to know more about MBBS in Bangladesh.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4 text-success" />
                {site.contact.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-brand" />
                {site.contact.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 text-brand" />
              {site.contact.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wide flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Guidance only — your fees go directly to the college, never to us.
          </p>
        </div>
      </div>
    </footer>
  );
}
