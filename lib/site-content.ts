// Central content file — all text strings, navigation items, and data
// Source: https://www.dcdataconsultancy.nl (crawled 2026-06-13)

export const siteConfig = {
  name: "DC Data Consultancy",
  tagline: "Wil jij meer uit je data halen?",
  url: "https://www.dcdataconsultancy.nl",
  email: "dennis@dcdataconsultancy.nl",
  linkedin: "https://www.linkedin.com/in/dennisvanburg/",
  location: "Goes, Nederland",
  copyright: "© 2024 DC Data Consultancy",
} as const;

export const navigation = [
  { label: "Wie?", href: "#wie" },
  { label: "Waarom?", href: "#waarom" },
  { label: "Wat?", href: "#wat" },
  { label: "Projecten", href: "#projecten" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  heading: "Data is everywhere.",
  subheading: "Benieuwd hoe jij jouw data optimaal kan inzetten?",
  cta: "Aan de slag!",
  ctaHref: "#contact",
} as const;

export const whyData = {
  sectionId: "waarom",
  heading: "Waarom is data (science) belangrijk?",
  intro:
    "Data is niet meer weg te denken in onze huidige wereld. Bedrijven die data slim inzetten hebben een concurrentievoordeel. Maar wat kun je er eigenlijk mee?",
  bullets: [
    "Om de concurrentie een stap voor te blijven",
    "Om patronen te ontdekken die met het blote oog niet te vinden zijn",
    "Om effectiever en efficiënter processen in te richten",
    "Om keuzes te maken op basis van feiten in plaats van onderbuik gevoel",
  ],
} as const;

export const about = {
  sectionId: "wie",
  heading: "DC Data Consultancy",
  subheading: "Wie?",
  name: "Dennis van Burg",
  role: "Freelance data analytics consultant",
  bio: "Mijn naam is Dennis van Burg en ik werk als freelance data analytics consultant. Met meer dan 8 jaar ervaring help ik organisaties om meer uit hun data te halen. Ik heb gewerkt voor bedrijven in uiteenlopende sectoren en weet daardoor goed wat er speelt.",
  experience: "Meer dan 8 jaar ervaring",
  industries: ["Logistiek", "Vastgoed", "Energie", "Banken", "Verzekeraars"],
  profileImage: "/images/profile-dennis.jpg",
  profileImageAlt: "Dennis van Burg — Freelance Data Analytics Consultant",
} as const;

export const offer = {
  sectionId: "wat",
  heading: "Wat bied ik aan?",
  intro:
    "Data analytics consultancy op maat. Samen maken we een plan op basis van jouw doelstelling. Of je nu wilt starten met data of jouw huidige aanpak wilt verbeteren — ik help je verder.",
  items: [
    {
      title: "Inventarisatie",
      description:
        "We beginnen met een inventarisatie van jouw data en doelstellingen.",
    },
    {
      title: "Plan op maat",
      description:
        "Op basis van de inventarisatie maken we een concreet plan dat aansluit bij jouw organisatie.",
    },
    {
      title: "Uitvoering",
      description:
        "Van engineering tot dashboarding — ik kan het hele traject begeleiden of specifieke onderdelen oppakken.",
    },
  ],
} as const;

export const quote = {
  text: "To ask the right question is harder than to answer it",
  attribution: "",
} as const;

export const aiUseCases = {
  heading: "Wat kun je met AI?",
  intro:
    "Artificial Intelligence biedt enorme mogelijkheden voor bedrijven die hun data op orde hebben. Hier zijn een paar voorbeelden van wat mogelijk is:",
  cases: [
    {
      title: "Forecasting",
      description:
        "Voorspel toekomstige vraag, omzet of andere KPIs op basis van historische data.",
      icon: "TrendingUp",
    },
    {
      title: "Predicting Churn",
      description:
        "Identificeer klanten die dreigen te vertrekken voordat het te laat is.",
      icon: "Users",
    },
    {
      title: "Anomaly Detection",
      description:
        "Ontdek afwijkingen en fraude in real-time voordat ze schade aanrichten.",
      icon: "AlertTriangle",
    },
    {
      title: "Recommendation System",
      description:
        "Geef klanten relevante aanbevelingen op basis van hun gedrag en voorkeuren.",
      icon: "Star",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Analyseer tekst, sentimenten en klantfeedback automatisch op grote schaal.",
      icon: "MessageSquare",
    },
  ],
} as const;

export const services = {
  heading: "Wat kan ik allemaal?",
  subheading: "Diensten",
  items: [
    {
      title: "Data Engineering",
      subtitle: "Extract Transform Load — ETL",
      description:
        "Van ruwe data naar schone, betrouwbare data pipelines. Ik bouw en onderhoud de infrastructuur waarop jouw analyses draaien.",
      icon: "Database",
    },
    {
      title: "Data Analyse",
      subtitle: "",
      description:
        "Diepgaande analyses om patronen, trends en inzichten uit jouw data te halen die bijdragen aan betere beslissingen.",
      icon: "BarChart2",
    },
    {
      title: "Dashboarding",
      subtitle: "",
      description:
        "Overzichtelijke en interactieve dashboards die de juiste informatie tonen aan de juiste mensen op het juiste moment.",
      icon: "PieChart",
    },
    {
      title: "Data Science (AI)",
      subtitle: "",
      description:
        "Machine learning modellen en AI-oplossingen die jouw data laten werken. Van forecasting tot anomaly detection.",
      icon: "Cpu",
    },
  ],
} as const;

export const projects = {
  sectionId: "projecten",
  heading: "Mijn projecten",
  intro: "Ik heb samengewerkt met diverse organisaties in uiteenlopende sectoren.",
  clients: [
    { name: "Gulf", logo: "/images/logo-gulf.png" },
    { name: "de Volksbank", logo: "/images/logo-volksbank.jpg" },
    { name: "Mileway", logo: "/images/logo-mileway.png" },
    { name: "PostNL", logo: "/images/logo-postnl.png" },
    { name: "Rabobank", logo: "/images/logo-rabobank.png" },
    { name: "Achmea", logo: "/images/logo-achmea.png" },
    { name: "Obvion", logo: "/images/logo-obvion.png" },
    { name: "Brandweer", logo: "/images/logo-brandweer.png" },
    { name: "ABG", logo: "/images/logo-abg.png" },
  ],
} as const;

export const contact = {
  sectionId: "contact",
  heading: "Neem contact op",
  intro:
    "Heb je een vraag of wil je weten wat ik voor jouw organisatie kan betekenen? Stuur me een bericht en ik reageer zo snel mogelijk.",
  fields: {
    name: { label: "Naam", placeholder: "Jouw naam" },
    email: { label: "E-mail", placeholder: "jouw@email.nl" },
    message: { label: "Bericht", placeholder: "Vertel me over jouw datauitdaging..." },
  },
  submitLabel: "Verstuur bericht",
  linkedinLabel: "Verbind op LinkedIn",
} as const;

export const footer = {
  tagline: "Data is everywhere.",
  links: navigation,
  linkedinUrl: siteConfig.linkedin,
  copyright: siteConfig.copyright,
} as const;
