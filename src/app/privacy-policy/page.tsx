import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { site } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "Privacy Policy — Al-Tayyab Global Consultants",
  description: "How Al-Tayyab Global Consultants collects, uses, and protects your personal information.",
  alternates: { canonical: `https://www.${site.domain}/privacy-policy` },
};

const sections = [
  {
    number: "1",
    title: "Information We Collect",
    content: null,
    bullets: [
      "Full Name",
      "Email Address",
      "Phone/WhatsApp Number",
      "City/State",
      "Preferred College or Course",
      "Academic Information",
      "Messages or Enquiries",
      "Website usage data (cookies and analytics)",
    ],
  },
  {
    number: "2",
    title: "How We Use Your Information",
    content: "We use your information to:",
    bullets: [
      "Respond to your enquiries.",
      "Assess your eligibility for MBBS admissions.",
      "Provide counselling and admission guidance.",
      "Contact you via phone, WhatsApp or email.",
      "Improve our website and services.",
      "Send important updates regarding admissions, deadlines and counselling.",
    ],
  },
  {
    number: "3",
    title: "Sharing of Information",
    content: "We do not sell or rent your personal information. Your information may be shared only when necessary with:",
    bullets: [
      "Partner medical colleges and universities.",
      "Government authorities where legally required.",
      "Trusted service providers who assist us in operating our business.",
    ],
    footer: "All partners are expected to protect your information.",
  },
  {
    number: "4",
    title: "Data Security",
    content: "We implement appropriate technical and organizational security measures to safeguard your personal information against unauthorized access, misuse or disclosure.",
    bullets: [],
  },
  {
    number: "5",
    title: "Cookies",
    content: "Our website may use cookies and analytics tools to improve user experience and understand website traffic. You may disable cookies through your browser settings if you prefer.",
    bullets: [],
  },
  {
    number: "6",
    title: "Third-Party Links",
    content: "Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.",
    bullets: [],
  },
  {
    number: "7",
    title: "Your Rights",
    content: "You may request to:",
    bullets: [
      "Access your personal information.",
      "Correct inaccurate information.",
      "Delete your information where legally permissible.",
      "Withdraw your consent for marketing communications.",
    ],
    footer: "To make a request, please contact us using the details below.",
  },
  {
    number: "8",
    title: "Children's Privacy",
    content: "Our services are intended for students and their guardians. We do not knowingly collect personal information from children without appropriate consent.",
    bullets: [],
  },
  {
    number: "9",
    title: "Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. Any changes will be published on this page with the updated revision date.",
    bullets: [],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main>
        <div className="container-wide max-w-3xl py-16 sm:py-20">
          <div className="mb-10 border-b border-border pb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Legal</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Privacy Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last Updated: 2 July 2026</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              At Al-Tayyab Global Consultants, we value your privacy and are committed to protecting
              your personal information. This Privacy Policy explains how we collect, use, store, and
              protect the information you provide through our website, contact forms, WhatsApp, email,
              phone calls, and social media platforms.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <section key={s.number}>
                <h2 className="text-base font-semibold tracking-tight">
                  <span className="mr-2 text-brand">{s.number}.</span>
                  {s.title}
                </h2>
                {s.content && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.content}</p>
                )}
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {"footer" in s && s.footer && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.footer}</p>
                )}
              </section>
            ))}

            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-base font-semibold tracking-tight">
                <span className="mr-2 text-brand">10.</span>
                Contact Us
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{site.name}</p>
              <ul className="mt-4 flex flex-col gap-2 text-sm">
                <li>
                  <span className="text-muted-foreground">Email: </span>
                  <a href={`mailto:${site.contact.email}`} className="text-foreground hover:text-brand">
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">Phone: </span>
                  <a href={site.contact.phoneHref} className="text-foreground hover:text-brand">
                    {site.contact.phone}
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">Website: </span>
                  <a href={`https://www.${site.domain}`} className="text-foreground hover:text-brand">
                    www.{site.domain}
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
