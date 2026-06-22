import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { site, mbbsColleges } from "@/lib/site.config";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "MBBS in Bangladesh from Kashmir — Complete Guide 2026",
  description:
    "Complete guide to MBBS in Bangladesh for Kashmiri students. NMC-approved, BMDC colleges, total cost ₹30–35 L, FMGE/NEXT eligibility, safety, and direct admission process. No agent fees.",
  alternates: {
    canonical: `https://www.${site.domain}/mbbs-in-bangladesh-from-kashmir`,
  },
  openGraph: {
    title: "MBBS in Bangladesh from Kashmir — Complete Guide 2026",
    description:
      "NMC-approved MBBS in Bangladesh for Kashmiri students. Total cost ₹30–35 L. Direct college payment. No agent fees.",
    url: `https://www.${site.domain}/mbbs-in-bangladesh-from-kashmir`,
  },
};

const faqs = [
  {
    q: "What NEET score do I need for MBBS in Bangladesh?",
    a: "You need a valid NEET qualification with 50%+ marks in Physics, Chemistry, and Biology in Class 12. The specific NEET cutoff score varies by college, but most BMDC-approved colleges we work with accept students with 300–450 NEET scores. Contact us on WhatsApp with your score and we'll tell you exactly which colleges you qualify for.",
  },
  {
    q: "Is MBBS from Bangladesh valid in India?",
    a: "Yes. MBBS degrees from BMDC-approved and NMC-listed colleges in Bangladesh are valid in India. After completing your degree, you appear for the FMGE (Foreign Medical Graduate Exam) or NEXT exam to get a licence to practise in India. This is the same route followed by graduates from Russia, Ukraine, China, and other countries.",
  },
  {
    q: "What is the total cost of MBBS in Bangladesh?",
    a: "The total fee for a 5-year MBBS program at BMDC-approved colleges ranges from ₹30 L to ₹35 L depending on the college. This covers tuition for all 5 years. Living costs (hostel + food) add approximately ₹4,000–6,000 per month. There are no agent fees — you pay the college directly.",
  },
  {
    q: "Is Bangladesh safe for Kashmiri students?",
    a: "Yes. There is a large and well-established community of Kashmiri and Indian students in Dhaka. Campuses have 24×7 security, dedicated prayer rooms, and halal food. Al-Tayyab has been placing students from Kashmir for 9+ years. We can connect you with current Kashmiri students in Bangladesh via WhatsApp before you decide.",
  },
  {
    q: "How long does the MBBS program take?",
    a: "The MBBS program in Bangladesh is 5 years, followed by a 1-year compulsory internship in Bangladesh. Total time from admission to completing internship: 6 years. After that, you appear for FMGE/NEXT in India.",
  },
  {
    q: "Can I get an education loan for MBBS in Bangladesh?",
    a: "Yes. JKB (Jammu & Kashmir Bank), SBI, Bank of Baroda, and other major banks provide education loans for MBBS in Bangladesh. The bank disburses the fee directly to the college's official account. We assist with the documentation required for the loan application.",
  },
  {
    q: "Do I need to pay any fees to Al-Tayyab?",
    a: "No. Our consultation is completely free. You pay the college's fees directly to their official bank account — not to us. Al-Tayyab earns a referral fee from the college, not from you. Every rupee you pay goes directly to the college.",
  },
];

const collegeData = [
  { name: "Dhaka Community Medical College (Dhaka CMC)", seats: "75 seats", fees: "₹28–32 L", badge: "BMDC · NMC listed", highlight: "Strong FMGE track record among Kashmiri graduates" },
  { name: "Bangladesh Medical College", seats: "150 seats", fees: "₹32–36 L", badge: "Established 1986", highlight: "One of the oldest private medical colleges in Bangladesh" },
  { name: "Holy Family Red Crescent Medical College", seats: "140 seats", fees: "₹30–34 L", badge: "Govt. affiliated", highlight: "Government-affiliated, well-regarded infrastructure" },
  { name: "Z H Sikder Women's Medical College", seats: "100 seats", fees: "₹26–30 L", badge: "Female-only seats", highlight: "Dedicated women-only institution in Dhaka" },
  { name: "TMSS Medical College, Bogra", seats: "100 seats", fees: "₹24–28 L", badge: "Budget-friendly", highlight: "Most affordable BMDC option — lower cost of living in Bogra" },
  { name: "Shahabuddin Medical College", seats: "90 seats", fees: "₹30–34 L", badge: "Strong NEXT/FMGE results", highlight: "Consistent FMGE pass rates cited by graduates" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `https://www.${site.domain}` },
    { "@type": "ListItem", position: 2, name: "MBBS in Bangladesh from Kashmir", item: `https://www.${site.domain}/mbbs-in-bangladesh-from-kashmir` },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MBBS in Bangladesh from Kashmir — Complete Guide 2026",
  description:
    "Complete guide to MBBS in Bangladesh for Kashmiri students: NMC-approved colleges, total cost, FMGE eligibility, safety, and direct admission process.",
  author: {
    "@type": "Organization",
    name: site.name,
    url: `https://www.${site.domain}`,
  },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `https://www.${site.domain}/logo.png` },
  },
  datePublished: "2026-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
};

export default function MbbsBangladeshPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pb-20">

        {/* Hero */}
        <section className="section-pad border-b border-border bg-card/40 pt-10 pb-12">
          <div className="container-tight">
            <span className="eyebrow">Complete guide · 2026</span>
            <h1 className="heading-1 mt-3">
              MBBS in Bangladesh from Kashmir
            </h1>
            <p className="lead mt-5 max-w-2xl">
              Everything a Kashmiri student and their family needs to know — total costs,
              NMC recognition, FMGE/NEXT, safety, college comparison, and how to apply
              without paying any agent fees.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink("Asalamu alaikum, I read the MBBS guide and want to know my eligibility.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-success px-5 py-2.5 text-sm font-semibold text-white hover:bg-success/90"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Check my eligibility — free
              </a>
              <Link href="/#apply-form" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:border-brand/40 hover:text-brand">
                Fill enquiry form
              </Link>
            </div>
          </div>
        </section>

        {/* Quick facts */}
        <section className="section-pad border-b border-border">
          <div className="container-tight">
            <h2 className="heading-2">At a glance</h2>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Total cost", value: "₹30–35 L", note: "Full 5-year program" },
                { label: "Duration", value: "5 + 1 yr", note: "Degree + internship" },
                { label: "Recognition", value: "BMDC + NMC", note: "Valid in India via FMGE/NEXT" },
                { label: "NEET required", value: "Yes", note: "50%+ in PCB, valid score" },
              ].map((f) => (
                <div key={f.label} className="rounded-2xl border border-border bg-card p-5">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{f.label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-brand">{f.value}</dd>
                  <p className="mt-1 text-xs text-muted-foreground">{f.note}</p>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Why Bangladesh */}
        <section className="section-pad border-b border-border">
          <div className="container-tight">
            <h2 className="heading-2">Why Kashmiri students choose Bangladesh for MBBS</h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Bangladesh has become the most popular destination for MBBS abroad among Kashmiri students — and for good reason. The combination of affordable fees, English-medium instruction, NMC-listed colleges, and cultural familiarity makes it the closest thing to studying medicine in India, at a fraction of the cost.
              </p>

              <h3 className="text-lg font-semibold text-foreground">1. Cost — ₹30–35 L for the entire degree</h3>
              <p>
                Indian private medical colleges charge ₹70 L to ₹1.5 Cr for management-quota MBBS seats. Bangladesh BMDC-approved colleges charge ₹30–35 L for the complete 5-year program. This is not a per-year fee — it is the total cost for the entire degree. Living costs in Dhaka add approximately ₹4,000–6,000 per month, which is comparable to Jammu or Delhi.
              </p>

              <h3 className="text-lg font-semibold text-foreground">2. The degree is valid in India</h3>
              <p>
                Every college Al-Tayyab works with is BMDC (Bangladesh Medical and Dental Council) approved and listed on India&apos;s NMC (National Medical Commission) approved college list. After completing your degree and internship, you appear for the FMGE (Foreign Medical Graduate Exam) or its successor NEXT to get a licence to practise medicine in India. This is the same route taken by thousands of Indian MBBS graduates from Russia, China, Ukraine, and the Philippines.
              </p>

              <h3 className="text-lg font-semibold text-foreground">3. English medium — no language barrier</h3>
              <p>
                All lectures, textbooks, clinical training, and examinations in Bangladesh MBBS colleges are conducted in English. The NMC-pattern syllabus means the curriculum aligns closely with FMGE/NEXT preparation. Kashmiri students report no language adjustment issues. Basic conversational Bangla is picked up naturally over the first year.
              </p>

              <h3 className="text-lg font-semibold text-foreground">4. Close to Kashmir — Srinagar to Dhaka in hours</h3>
              <p>
                The route from Srinagar to Dhaka is straightforward: Srinagar → Delhi (1.5 hrs) → Dhaka (2.5 hrs direct). IndiGo, Air India, and Biman Bangladesh Airlines operate this route regularly. The student visa process for Bangladesh is well-established for Indian students and typically takes 2–4 weeks.
              </p>

              <h3 className="text-lg font-semibold text-foreground">5. Cultural comfort — halal food, prayer rooms, Kashmiri community</h3>
              <p>
                Bangladesh is a Muslim-majority country. Every BMDC-approved college campus has prayer rooms (masjids), halal food in the mess, and accommodates Islamic practices including Friday prayers. There is a large and active Kashmiri student community in Dhaka, particularly around Mirpur and Dhanmondi. Students can connect with Kashmiri seniors before arrival.
              </p>

              <h3 className="text-lg font-semibold text-foreground">6. No entrance exam in Bangladesh</h3>
              <p>
                Unlike some countries that require a separate entrance test, the BMDC-approved colleges Al-Tayyab works with admit students based on their Class 12 (PCB) marks and NEET score. There is no additional Bangladesh entrance exam. Your existing academic record is sufficient.
              </p>
            </div>
          </div>
        </section>

        {/* Colleges */}
        <section className="section-pad border-b border-border">
          <div className="container-tight">
            <h2 className="heading-2">BMDC-approved colleges for Kashmiri students</h2>
            <p className="lead mt-4">
              All colleges below are BMDC-approved and NMC-listed. You speak directly with the
              admission officer of each college — we never handle your fees.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-card/60">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">College</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden sm:table-cell">Seats</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Total fees</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {collegeData.map((c) => (
                    <tr key={c.name} className="bg-card hover:bg-card/60">
                      <td className="px-4 py-3 font-medium">{c.name}</td>
                      <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{c.seats}</td>
                      <td className="px-4 py-3 font-semibold text-brand">{c.fees}</td>
                      <td className="px-4 py-3 text-muted-foreground hidden md:table-cell text-xs">{c.highlight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Fees shown are approximate total for the 5-year program. Actual fee depends on the college and year of admission. Always verify directly with the college admission office — we will connect you.
            </p>
          </div>
        </section>

        {/* Admission process */}
        <section className="section-pad border-b border-border">
          <div className="container-tight">
            <h2 className="heading-2">How admission works — step by step</h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  step: "01",
                  title: "Check your eligibility",
                  body: "You need a valid NEET score and 50%+ in PCB in Class 12. Share your marksheet and NEET scorecard with us on WhatsApp. We will tell you within the hour which colleges you qualify for and at what fee.",
                },
                {
                  step: "02",
                  title: "Get direct college contact",
                  body: "We connect you directly with the admission officer of 2–3 shortlisted colleges in Bangladesh. You call or WhatsApp them yourself to verify seat availability, fees, hostel, and any other details. We sit on the call if you want.",
                },
                {
                  step: "03",
                  title: "Pay fees directly to the college",
                  body: "Once you confirm your choice, fees are wired by you directly to the college's official bank account. We never touch your money. You receive an official receipt from the college — not from us.",
                },
                {
                  step: "04",
                  title: "Visa, tickets, and arrival",
                  body: "We help with the student-file documentation required for your Bangladesh student visa. We also help arrange airport pickup in Dhaka through our network of current students. Most students land in Dhaka with everything sorted.",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-sm font-bold text-brand-foreground">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="section-pad border-b border-border bg-card/30">
          <div className="container-tight">
            <h2 className="heading-2">Is Bangladesh safe for Kashmiri students in 2026?</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                This is the most common question from parents, and a fair one. Bangladesh went through significant political change in 2024 following the resignation of Prime Minister Sheikh Hasina. However, university campuses — including all the medical colleges Al-Tayyab works with — continued operating normally throughout this period.
              </p>
              <p>
                The Kashmiri and Indian student community in Dhaka has been present and active for over a decade. Campus security is 24×7. Prayer facilities and halal food are standard. Indian students are a familiar presence in Dhaka, with established hostels and a support network.
              </p>
              <p>
                Al-Tayyab has been sending students from Kashmir to Bangladesh for 9+ years. We maintain active contacts with current students in Dhaka. Before you decide, we will share the WhatsApp numbers of Kashmiri students already studying there — so you can ask them directly about daily life, safety, and campus conditions.
              </p>
              <div className="rounded-2xl border border-brand/20 bg-brand-soft p-5">
                <p className="font-medium text-foreground">Ask a current student before you decide</p>
                <p className="mt-1 text-sm">We will connect you with Kashmiri students currently studying at any of our partner colleges in Bangladesh. No pressure — just honest answers from students who have been there.</p>
                <a
                  href={waLink("Asalamu alaikum, can you connect me with a Kashmiri student studying MBBS in Bangladesh?")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-success hover:underline"
                >
                  Request a student contact on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad border-b border-border">
          <div className="container-tight">
            <h2 className="heading-2">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-base font-medium hover:text-brand [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" aria-hidden>+</span>
                  </summary>
                  <p className="pb-4 pr-8 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad">
          <div className="container-tight">
            <div className="rounded-3xl border border-border bg-card/60 p-8 text-center sm:p-12">
              <h2 className="heading-2">Ready to check your eligibility?</h2>
              <p className="lead mt-4 mx-auto max-w-xl">
                Send your NEET score and Class 12 marks on WhatsApp. We reply within 1 hour from
                Srinagar with college options and real fees — no agent fees, ever.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href={waLink("Asalamu alaikum, I read the MBBS guide and want to check my eligibility for Bangladesh.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-success px-6 py-3 text-base font-semibold text-white hover:bg-success/90"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp us now
                </a>
                <Link href="/#apply-form" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-base font-semibold hover:border-brand/40 hover:text-brand">
                  Fill the form
                </Link>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Free consultation · Mon–Sat 10 AM–7:30 PM · Reply within 1 hour · Srinagar office
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
