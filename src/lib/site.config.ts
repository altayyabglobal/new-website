export const site = {
  name: "Al-Tayyab Global Consultants",
  shortName: "Al-Tayyab",
  tagline: "Kashmir's most trusted MBBS consultancy for Bangladesh.",
  domain: "altayyabglobalconsultants.com",
  description:
    "Al-Tayyab Global Consultants guides Kashmiri students into BMDC/NMC-approved MBBS colleges in Bangladesh. Free consultation — your fees go directly to the college.",
  contact: {
    phone: "+91 88035 12375",
    phoneHref: "tel:+918803512375",
    phone2: "+91 99068 10028",
    phone2Href: "tel:+919906810028",
    whatsapp: "+91 99068 10028",
    whatsappNumber: "919906810028",
    email: "admissions@altayyabglobalconsultants.com",
    address: "4th Floor, 4G Spot Complex, Opposite Tattoo Ground, Batamallo, Srinagar, Jammu and Kashmir 190009",
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
] as const;

export const stats = [
  { label: "Govt colleges (BD)", value: "10+" },
  { label: "Private colleges (BD)", value: "25+" },
  { label: "Direct-to-college payments", value: "100%" },
] as const;

export const programs = [
  {
    id: "mbbs",
    name: "MBBS in Bangladesh",
    short: "MBBS",
    eligibility: "NEET qualified, 50%+ in PCB (12th)",
    duration: "5 years + 1 year internship",
    totalCost: "₹30–35 L (entire course)",
    recognition: "BMDC + India's NMC listed",
    benefits: [
      "English medium, NMC-pattern syllabus",
      "FMGE/NEXT-ready curriculum",
      "Practice in India after FMGE/NEXT",
    ],
  },
] as const;

// Fees verified from official college documents (Session 2026-27). Rate: $1 = ₹94.33 (June 2026).
export const mbbsColleges = [
  {
    name: "Ad-din Akil Medical College",
    city: "Khulna",
    feesUSD: "$33,500",
    feesINR: "₹31–32 L",
    hostel: "Included · food $50/mo extra",
    badge: "Budget pick",
  },
  {
    name: "Ad-din Sakina Women's Medical College",
    city: "Jashore",
    feesUSD: "$33,500",
    feesINR: "₹31–32 L",
    hostel: "$120–150/mo (not included)",
    badge: "Women only",
  },
  {
    name: "President Abdul Hamid Medical College",
    city: "Kishoreganj",
    feesUSD: "$35,000",
    feesINR: "₹33–34 L",
    hostel: "Included · no intern fee",
    badge: "All-in fees",
  },
  {
    name: "Ad-din Momin Medical College",
    city: "Keraniganj, Dhaka",
    feesUSD: "$35,500",
    feesINR: "₹33–34 L",
    hostel: "Included · utility $30/mo extra",
    badge: "Near Dhaka",
  },
  {
    name: "Parkview Medical College",
    city: "Sylhet",
    feesUSD: "$36,000",
    feesINR: "₹34–35 L",
    hostel: "$1,000/yr extra (not included)",
    badge: "Sylhet city",
  },
  {
    name: "Brahmanbaria Medical College",
    city: "Brahmanbaria",
    feesUSD: "$38,000",
    feesINR: "₹35–36 L",
    hostel: "Included ($50/mo)",
    badge: "Hostel included",
  },
  {
    name: "Mainamoti Medical College",
    city: "Comilla",
    feesUSD: "$40,000",
    feesINR: "₹37–38 L",
    hostel: "Included · $4,000 discount for Indian students",
    badge: "Indian discount",
  },
  {
    name: "Diabetic Association Medical College (DAMC)",
    city: "Faridpur",
    feesUSD: "$42,000",
    feesINR: "₹39–40 L",
    hostel: "AC hostel included ($60/mo) · +$1,000 DU reg.",
    badge: "AC hostel incl.",
  },
  {
    name: "Tairunnessa Memorial Medical College",
    city: "Gazipur, Dhaka",
    feesUSD: "$42,000",
    feesINR: "₹39–40 L",
    hostel: "Non-AC included · AC +$35/mo",
    badge: "Near Dhaka",
  },
  {
    name: "Delta Medical College",
    city: "Dhaka",
    feesUSD: "$42,000",
    feesINR: "₹39–40 L",
    hostel: "+$2,000/yr session & hostel (not included)",
    badge: "Dhaka campus",
  },
  {
    name: "Shahabuddin Medical College",
    city: "Gulshan, Dhaka",
    feesUSD: "$42,000",
    feesINR: "₹39–40 L",
    hostel: "Separate — contact for rate",
    badge: "Gulshan, Dhaka",
  },
  {
    name: "Prime Medical College",
    city: "Rangpur",
    feesUSD: "$42,500",
    feesINR: "₹40–41 L",
    hostel: "Included (3-sharing room)",
    badge: "Full package",
  },
  {
    name: "Eastern Medical College",
    city: "Comilla",
    feesUSD: "~$43,000",
    feesINR: "₹40–41 L",
    hostel: "Included",
    badge: "Comilla",
  },
  {
    name: "Ad-din Women's Medical College",
    city: "Maghbazar, Dhaka",
    feesUSD: "$43,500",
    feesINR: "₹41–42 L",
    hostel: "Included · utility $30/mo extra",
    badge: "Women only · Dhaka",
  },
  {
    name: "Jalalabad Ragib-Rabeya Medical College",
    city: "Sylhet",
    feesUSD: "$44,000",
    feesINR: "₹41–42 L",
    hostel: "Contact college for hostel rates",
    badge: "Sylhet campus",
  },
  {
    name: "International Medical College",
    city: "Gazipur",
    feesUSD: "$44,000",
    feesINR: "₹41–42 L",
    hostel: "AC hostel +BDT 1,000/mo (not included)",
    badge: "Gazipur",
  },
  {
    name: "Anwer Khan Modern Medical College (AKMMC)",
    city: "Dhaka",
    feesUSD: "$45,000",
    feesINR: "₹42–43 L",
    hostel: "Non-AC BDT 7,000/mo · AC BDT 12,000/mo (not included)",
    badge: "Premium · Dhaka",
  },
  {
    name: "Medical College for Women (MCW)",
    city: "Uttara, Dhaka",
    feesUSD: "$45,000",
    feesINR: "₹42–43 L",
    hostel: "+$2,000 internship deposit (refundable)",
    badge: "Women only · Dhaka",
  },
  {
    name: "TMSS Medical College",
    city: "Bogra",
    feesUSD: "$45,000",
    feesINR: "₹42–43 L",
    hostel: "Included (food + accommodation)",
    badge: "All-inclusive",
  },
] as const;

export const whyBangladesh = [
  {
    title: "Cost: ₹30–35 L total",
    body: "MBBS from ₹30 L — a fraction of Indian private/management quota. Quality BMDC-approved education without the financial burden.",
  },
  {
    title: "Degree valid in India",
    body: "MBBS via FMGE/NEXT. Your degree is NMC-listed — the recognised path to practise medicine in India. A well-trodden route taken by thousands of Indian graduates.",
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
    body: "No Bangladesh entrance exam for the colleges we partner with. Your 12th marks + NEET score are enough to apply.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Free Kashmir consultation",
    body: "Walk into our Srinagar office or talk on WhatsApp. We assess your 12th marks, NEET score, and budget — and tell you honestly what's possible.",
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
    name: "Sana Mir",
    location: "Shopian → Holy Family Red Crescent MC (MBBS)",
    quote:
      "Al-Tayyab connected me directly with the admissions office in Dhaka. Fees went straight to the college account — no middleman. My family was nervous but everything happened exactly as they said.",
  },
  {
    name: "Bilal Wani",
    location: "Baramulla → TMSS Medical College (MBBS)",
    quote:
      "They shared WhatsApp numbers of 3 Kashmiri students already studying in Bangladesh. After talking to them, we were confident. Best decision for my MBBS.",
  },
] as const;

export const faqs = [
  {
    q: "Do I pay you any fees?",
    a: "No. Al-Tayyab does not charge students. Our consultation is free. The full college fee is paid by you directly to the college's official bank account — you get an official college receipt. We are paid a referral by the college, not by you.",
  },
  {
    q: "Is the MBBS degree valid in India?",
    a: "Yes. MBBS colleges we work with are BMDC-approved and NMC-listed. After completing your degree, you clear the FMGE/NEXT exam to practise medicine in India. This is the standard route for all foreign MBBS graduates.",
  },
  {
    q: "What's the total cost?",
    a: "MBBS: ₹30–35 L for the full 5-year program + 1-year internship. Living costs (hostel + food) add approximately ₹4–6 K per month in Dhaka. No agent fees — you pay only the college.",
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
    q: "What if I didn't qualify NEET this year?",
    a: "You need a valid NEET score for MBBS in Bangladesh. If you missed the cutoff this year, walk into the Srinagar office or WhatsApp us — we can guide you on the minimum score required and when the next application window opens.",
  },
  {
    q: "Can I take an education loan from a J&K bank?",
    a: "Yes — JKB, SBI, BoB and other major banks fund MBBS in Bangladesh. We help with the documentation. The bank disburses directly to the college account.",
  },
] as const;
