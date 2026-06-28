import { mission } from "@/lib/site.config";

export function AboutSection() {
  return (
    <section id="about" className="section-pad border-b border-border">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow">About us</span>
            <h2 className="heading-2 mt-3">
              A premier overseas education consultancy.
            </h2>
            <p className="lead mt-4 text-muted-foreground">
              Al-Tayyab Global Consultants is dedicated to helping Indian students
              navigate their journey toward an MBBS degree in Bangladesh. We recognise
              that pursuing medical education abroad is a monumental milestone — our
              expert team is committed to reliable, high-quality advice tailored to
              each student&apos;s aspirations.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Our core mission
            </p>
            <blockquote className="mt-4 border-l-2 border-brand pl-5 text-lg font-medium italic leading-relaxed text-foreground">
              &ldquo;{mission}&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
