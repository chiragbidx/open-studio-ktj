// ─── RelateCRM Brand Homepage Content ─────────────
// Keep the full nested HomeContent structure as expected by all landing and hero section components

export const homeContent = {
  // ── Hero ─────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "RelateCRM is here",
    titleBefore: "Your team's internal",
    titleHighlight: "CRM",
    titleAfter: "— built for seamless collaboration",
    subtitle:
      "Centralize your customer relationships, track interactions, and empower your team with an intuitive CRM dashboard.",
    primaryCta: { label: "Get Started", href: "#signup" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "RelateCRM dashboard preview",
  },

  // ── Sponsors ─────────────────
  sponsors: {
    heading: "Built with trusted tech",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ────────────────
  benefits: {
    eyebrow: "Why RelateCRM",
    heading: "A practical CRM starter",
    description:
      "Built for teams that want productivity, transparency, and simple workflows, not just another contact list.",
    items: [
      {
        icon: "Blocks",
        title: "All Your Contacts, Organized",
        description: "Keep every client profile, company, and interaction in one place—accessible to your entire team.",
      },
      {
        icon: "Users",
        title: "Seamless Collaboration",
        description: "Assign follow-ups, share notes, and never lose track of important conversations.",
      },
      {
        icon: "ShieldCheck",
        title: "Simple and Secure",
        description: "Enjoy peace of mind with secure access and a clutter-free interface built for productivity.",
      },
    ],
  },

  // ── Feature Grid ─────────────
  features: {
    eyebrow: "Features",
    heading: "Why Choose RelateCRM?",
    subtitle:
      "RelateCRM helps teams move faster and follow up with ease—no more lost contacts or forgotten clients.",
    items: [
      {
        icon: "Contact2",
        title: "Contact Management",
        description: "Store details, track conversations, and never lose history.",
      },
      {
        icon: "Building2",
        title: "Company Data",
        description: "Link contacts and activity across organizations.",
      },
      {
        icon: "Speech",
        title: "Interaction Timeline",
        description: "Log every email, call, and follow-up in one feed.",
      },
      {
        icon: "Users",
        title: "Team Collaboration",
        description: "Share assignments, notes, and tasks among your team.",
      },
      {
        icon: "BarChart2",
        title: "Dashboard Analytics",
        description: "See engagement stats and recent activity.",
      },
      {
        icon: "ShieldCheck",
        title: "Simple & Secure",
        description: "Role control and secure team-only access.",
      },
    ],
  },

  // ── Services ────────────────
  services: {
    eyebrow: "CRM Core Services",
    heading: "Everything you need for customer success",
    subtitle: "RelateCRM is designed to be the new home base for your client relationships.",
    items: [
      { title: "Contact Library", description: "All your contacts in one place.", pro: false },
      { title: "Company Directory", description: "Organize clients by their companies.", pro: false },
      { title: "Collaboration", description: "Assign and discuss follow-up tasks.", pro: true },
      { title: "Analytics Dashboard", description: "View activity and engagement at a glance.", pro: true },
    ],
  },

  // ── Testimonials ─────────────
  testimonials: {
    eyebrow: "Success Stories",
    heading: "Teams Love RelateCRM",
    reviews: [
      {
        image: "/team1.jpg",
        name: "Samantha L.",
        role: "Sales Director",
        comment: "RelateCRM simplified our workflows—our whole team finally works out of the same system.",
        rating: 5.0,
      },
      {
        image: "/team2.jpg",
        name: "Eric V.",
        role: "Ops Manager",
        comment: "We finally stopped losing track of customer follow-ups. Integration was a breeze!",
        rating: 4.8,
      },
      {
        image: "/team3.jpg",
        name: "Isha R.",
        role: "Growth Lead",
        comment: "Fantastic UI and the activity dashboard helps us stay accountable and focused.",
        rating: 5.0,
      },
    ],
  },

  // ── Team ─────────────────────
  team: {
    eyebrow: "Team",
    heading: "The RelateCRM Team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://linkedin.com/in/chiragdodiya" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Priya",
        lastName: "Sharma",
        positions: ["Engineering"],
        socialNetworks: [
          { name: "LinkedIn", url: "#" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "Ravi",
        lastName: "Mehta",
        positions: ["Success Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "#" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple Pricing",
    subtitle: "Choose a plan that fits your team.",
    priceSuffix: "/mo",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "For individuals and small teams",
        buttonText: "Start for free",
        benefits: ["3 teammates", "Unlimited contacts", "Activity view", "Email support"],
      },
      {
        title: "Business",
        popular: true,
        price: 49,
        description: "Full CRM for growing teams",
        buttonText: "Start trial",
        benefits: ["Unlimited teammates", "Companies & interactions", "Collaboration", "Priority support"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "For orgs needing custom onboarding",
        buttonText: "Contact sales",
        benefits: ["Custom permissions", "SLA and onboarding", "Dedicated support"],
      },
    ],
  },

  // ── Contact ─────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to RelateCRM",
    description:
      "Looking for a demo or CRM migration? Our team can help your business centralize customer info and boost productivity.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Address", value: "Remote team - India, USA" },
      phone: { label: "Phone", value: "" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Mon-Fri", "10AM - 6PM"] },
    },
    formSubjects: ["Demo Request", "Integration", "Support", "Billing", "Other"],
    formSubmitLabel: "Send Message",
  },

  // ── FAQ ─────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Questions About RelateCRM?",
    items: [
      {
        question: "Is RelateCRM free to start?",
        answer: "Yes. You can start with the Starter plan and upgrade as you grow.",
      },
      {
        question: "Can we import our existing contacts?",
        answer: "Contact our support for import assistance, it's fast and free for new users.",
      },
      {
        question: "Is my data secure?",
        answer: "Absolutely. We follow industry security best practices for customer data protection.",
      },
    ],
  },

  // ── Footer ─────────────────────
  footer: {
    brandName: "RelateCRM",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "#team" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Social",
        links: [
          { label: "Github", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://linkedin.com/in/chiragdodiya" },
        ],
      },
    ],
    copyright: "© 2024 RelateCRM. All rights reserved.",
    attribution: { label: "Built with Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ─────────────
  navbar: {
    brandName: "RelateCRM",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "RelateCRM preview" },
    features: [
      { title: "Contact Management", description: "Organize clients and companies with ease." },
      { title: "Collaboration", description: "Assign, share, and follow-up as a team." },
      { title: "Secure Access", description: "Enterprise security, always." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View on GitHub" },
  },
};

export default homeContent;