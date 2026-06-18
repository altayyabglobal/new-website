export const site = {
  name: "Al-Tayyab Career Consultancy",
  shortName: "Al-Tayyab",
  tagline: "Kashmir's trusted route to MBBS & Engineering in Bangladesh.",
  domain: "altayyab.example.com",
  description:
    "Al-Tayyab Career Consultancy guides Kashmiri students into BMDC/UGC-approved MBBS and engineering colleges in Bangladesh. We only consult — your fees go directly to the college, never to us.",
  contact: {
    phone: "+91 78894 20003",
    phoneHref: "tel:+917889420003",
    whatsapp: "+91 78894 20003",
    whatsappNumber: "917889420003",
    email: "admissions@altayyab.example.com",
    address: "Lal Chowk, Srinagar, Kashmir",
  },
  hours: "Mon–Sat · 10:00 AM – 7:30 PM",
  countryFocus: "Bangladesh",
  audience: "Kashmiri students",
  homeRegion: "Kashmir",
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
} as const;

export const trustPillars = [
  {
    title: "Direct payment to college",
    body: "You pay the college, not us. We never touch your fees — every transaction is between you and the college accounts office.",
  },
  {
    title: "Direct contact with college",
    body: "We connect you on call/WhatsApp with the actual admission officer in Dhaka. Verify everything before you commit.",
  },
  {
    title: "Guidance only, transparent",
    body: "Free consultation. No hidden charges, no donation, no capitation. We earn from the college's referral, not from you.",
  },
  {
    title: "We've done this for years",
    body: "Kashmiri students placed in Bangladesh across MBBS and engineering. Real students, reachable on WhatsApp for reference.",
  },
] as const;

export const stats = [
  { label: "Kashmiri students placed", value: "650+" },
  { label: "Partner colleges (BD)", value: "24" },
  { label: "Direct-to-college payments", value: "100%" },
  { label: "Years guiding from Kashmir", value: "9+" },
] as const;

export const programs = [
  {
    id: "mbbs",
    name: "MBBS in Bangladesh",
    short: "MBBS",
    eligibility: "NEET qualified, 50%+ in PCB (12th)",
    duration: "5 years + 1 year internship",
    totalCost: "₹25–35 L (entire course)",
    recognition: "BMDC + India's NMC listed",
    benefits: [
      "English medium, NMC-pattern syllabus",
      "FMGE/NEXT-ready curriculum",
      "Practice in India after FMGE/NEXT",
    ],
  },
  {
    id: "engineering",
    name: "Engineering in Bangladesh",
    short: "Engineering",
    eligibility: "JEE not mandatory · 60%+ in PCM (12th)",
    duration: "4 years (B.Sc. Engineering)",
    totalCost: "₹8–14 L (entire course)",
    recognition: "UGC Bangladesh + BAETE accredited",
    benefits: [
      "CSE, EEE, Civil, Mechanical, Architecture",
      "AICTE-equivalent degree, valid in India",
      "Active campus placements + internships",
    ],
  },
] as const;

export const mbbsColleges = [
  {
    name: "Dhaka Community Medical College",
    city: "Dhaka",
    seats: "75 seats",
    fees: "₹28–32 L total",
    badge: "BMDC · NMC listed",
  },
  {
    name: "Bangladesh Medical College",
    city: "Dhaka",
    seats: "150 seats",
    fees: "₹32–36 L total",
    badge: "Established 1986",
  },
  {
    name: "Holy Family Red Crescent MC",
    city: "Dhaka",
    seats: "140 seats",
    fees: "₹30–34 L total",
    badge: "Govt. affiliated",
  },
  {
    name: "Z H Sikder Women's MC",
    city: "Dhaka",
    seats: "100 seats",
    fees: "₹26–30 L total",
    badge: "Female-only seats",
  },
  {
    name: "TMSS Medical College",
    city: "Bogra",
    seats: "100 seats",
    fees: "₹24–28 L total",
    badge: "Budget-friendly",
  },
  {
    name: "Shahabuddin Medical College",
    city: "Dhaka",
    seats: "90 seats",
    fees: "₹30–34 L total",
    badge: "Strong NEXT/FMGE results",
  },
] as const;

export const engineeringColleges = [
  {
    name: "Ahsanullah University of Science & Tech",
    city: "Dhaka",
    seats: "CSE, EEE, Civil",
    fees: "₹10–12 L total",
    badge: "BAETE accredited",
  },
  {
    name: "BRAC University",
    city: "Dhaka",
    seats: "CSE, EEE, BBA",
    fees: "₹12–14 L total",
    badge: "Top private university",
  },
  {
    name: "North South University",
    city: "Dhaka",
    seats: "CSE, EEE, Architecture",
    fees: "₹13–15 L total",
    badge: "Ranked #1 private (BD)",
  },
  {
    name: "Independent University Bangladesh",
    city: "Dhaka",
    seats: "CSE, EEE, Civil",
    fees: "₹11–13 L total",
    badge: "Strong placement record",
  },
  {
    name: "Daffodil International University",
    city: "Dhaka",
    seats: "CSE, EEE, SWE",
    fees: "₹8–10 L total",
    badge: "Most affordable",
  },
  {
    name: "American International Univ. — BD",
    city: "Dhaka",
    seats: "CSE, EEE, Architecture",
    fees: "₹12–14 L total",
    badge: "US-curriculum aligned",
  },
] as const;

export const whyBangladesh = [
  {
    title: "Cost: ₹8–35 L total",
    body: "Engineering from ₹8 L. MBBS from ₹25 L — fraction of Indian private/management quota for both.",
  },
  {
    title: "Degree valid in India",
    body: "MBBS via FMGE/NEXT. Engineering recognised by AICTE-equivalent process. Both routes are well-trodden.",
  },
  {
    title: "Close to Kashmir",
    body: "Srinagar → Delhi → Dhaka. Direct flights from Delhi and Kolkata. Visa-on-letter process is straightforward.",
  },
  {
    title: "English medium",
    body: "All classes, books, exams in English. No language barrier — basic Bangla picked up over time.",
  },
  {
    title: "Cultural comfort",
    body: "Halal food, prayer rooms on every campus, large Indian/Kashmiri student community in Dhaka.",
  },
  {
    title: "Direct admission process",
    body: "No Bangladesh entrance exam for the colleges we partner with. Your 12th + NEET/eligibility marks are enough.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Free Kashmir consultation",
    body: "Walk into our Srinagar office or talk on WhatsApp. We assess your 12th marks, NEET/JEE score, and budget — and tell you honestly what's possible.",
  },
  {
    step: "02",
    title: "Direct college introduction",
    body: "We connect you with the admission officer of 2–3 shortlisted colleges in Bangladesh. You verify fees, hostel, seat availability yourself.",
  },
  {
    step: "03",
    title: "You pay college directly",
    body: "Fees are wired by you straight to the college's official account. We never touch the money. You get a college-issued receipt.",
  },
  {
    step: "04",
    title: "Visa, ticket, on-arrival",
    body: "We help with student-file visa documentation, ticketing, and arrange Dhaka airport pickup through our on-ground student network.",
  },
] as const;

export const testimonials = [
  {
    name: "Mehraj-ud-din Bhat",
    location: "Anantnag → Dhaka CMC (MBBS)",
    quote:
      "Indian private colleges quoted ₹1 Cr+ for MBBS. Al-Tayyab put me direct on call with Dhaka CMC. I paid the college account directly — no agent fees. Cleared FMGE last attempt.",
  },
  {
    name: "Insha Jan",
    location: "Srinagar → NSU (CSE Engineering)",
    quote:
      "Got 86% in 12th but no JEE rank worth a private college in India. Al-Tayyab walked me through CSE admission at North South — fees were ₹14L total, paid the university account directly. On campus since 2024.",
  },
  {
    name: "Arif Mir",
    location: "Baramulla → AUST (Civil Engineering)",
    quote:
      "Walked into the Lal Chowk office. They didn't push any college — they gave me phone numbers of 3 colleges in Dhaka and told me to verify myself. Felt honest. Joined AUST last year.",
  },
] as const;

export const faqs = [
  {
    q: "Do I pay you any fees?",
    a: "No. Al-Tayyab does not charge students. Our consultation is free. The full college fee is paid by you directly to the college's official bank account — you get an official college receipt. We are paid a referral by the college, not by you.",
  },
  {
    q: "Are these MBBS/Engineering degrees valid in India?",
    a: "Yes. MBBS colleges we work with are BMDC + NMC listed — you clear FMGE/NEXT to practise in India. Engineering colleges are BAETE accredited and recognised in India via the AICTE-equivalent route.",
  },
  {
    q: "What's the total cost?",
    a: "Engineering: ₹8–14 L for the entire 4-year program. MBBS: ₹25–35 L for 5 years + internship. Living costs (hostel + food) add ~₹4–6 K per month in Dhaka.",
  },
  {
    q: "Can I directly talk to the college before deciding?",
    a: "Yes — that's how we work. We give you the admission officer's direct number and WhatsApp. You verify seat availability, fees, hostel and everything else yourself. We sit on the call if you want.",
  },
  {
    q: "How do you know it's safe for Kashmiri students?",
    a: "We've been sending students from Kashmir for 9+ years. Large Kashmiri/Indian student community in Dhaka, 24×7 campus security, prayer rooms, halal mess. Past students are reachable on WhatsApp for reference — we'll share their numbers.",
  },
  {
    q: "What if I'm not sure between MBBS and Engineering?",
    a: "Walk into the Srinagar office, or send your 12th marksheet + NEET/JEE results on WhatsApp. We'll show you both options with real fees and seat status, and you decide.",
  },
  {
    q: "Can I take an education loan from a J&K bank?",
    a: "Yes — JKB, SBI, BoB and other major banks fund both MBBS and engineering in Bangladesh. We help with the documentation. The bank disburses directly to the college account.",
  },
] as const;
