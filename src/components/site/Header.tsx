"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site.config";
import { ButtonLink } from "@/components/ui/button-link";

const nav = [
  { href: "/#programs", label: "MBBS Colleges" },
  { href: "/#why", label: "Why Bangladesh" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={site.contact.phoneHref}
            aria-label={`Call ${site.contact.phone}`}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">{site.contact.phone}</span>
          </a>
          <ButtonLink href="/#apply-form" size="sm" className="rounded-full">
            Apply now
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
