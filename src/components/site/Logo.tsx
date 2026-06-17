import { site } from "@/lib/site.config";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-brand-foreground shadow-sm ring-1 ring-brand/20 transition-transform group-hover:-rotate-3"
      >
        {/* placeholder mark — replace with /public/logo.svg */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18M3 12h18" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-tight sm:text-base">{site.shortName}</span>
        <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          Kashmir → Bangladesh · MBBS · Engineering
        </span>
      </span>
    </a>
  );
}
