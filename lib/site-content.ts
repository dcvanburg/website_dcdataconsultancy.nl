// Central content file — all text strings, navigation items, and data
// Source: https://www.dcdataconsultancy.nl (crawled 2026-06-13)

export const siteConfig = {
  name: "DC Data Consultancy",
  tagline: "Wil jij meer uit je data halen?",
  url: "https://www.dcdataconsultancy.nl",
  email: "dennis@dcdataconsultancy.nl",
  linkedin: "https://www.linkedin.com/in/dennisvanburg/",
  location: "Goes, Nederland",
  copyright: "© 2025 DC Data Consultancy",
} as const;

export const navigation = [
  { label: "Wie?", href: "#wie" },
  { label: "Waarom?", href: "#waarom" },
  { label: "Wat?", href: "#wat" },
  { label: "Projecten", href: "#projecten" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
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
    "Om de concurrentie een stap voor te blijven!",
    "Om patronen te ontdekken die met het blote oog niet te vinden zijn!",
    "Om effectiever en efficiënter processen in te richten!",
    "Om keuzes te maken op basis van feiten in plaats van onderbuik gevoel!",
  ],
} as const;

export const about = {
  sectionId: "wie",
  heading: "DC Data Consultancy",
  subheading: "Wie?",
  name: "Dennis van Burg",
  role: "Freelance data analytics consultant",
  bio: "Mijn naam is Dennis van Burg en ik werk als freelance data analytics consultant. Mijn passie ligt bij het oplossen van complexe puzzels. Dit is precies hoe ik naar data kijk, het is een uitdagende puzzel die ontrafelt moet worden. Inmiddels werk ik al meer dan 8 jaar als data consultant met ervaring in onder andere logistiek, vastgoed, energiebanken en verzekeraars, daarom weet ik precies hoe complexe vraagstukken vertaald moeten worden naar begrijpbare taal. Klanten vinden dat ik; denk in oplossingen, initiatief neem, communicatief sterk ben en een echte teamplayer!",
  experience: "Meer dan 8 jaar ervaring",
  industries: ["Logistiek", "Vastgoed", "Energie", "Banken", "Verzekeraars"],
  profileImage: "/images/profile-dennis.jpg",
  profileImageAlt: "Dennis van Burg — Freelance Data Analytics Consultant",
} as const;

export const offer = {
  sectionId: "wat",
  heading: "Wat bied ik aan?",
  intro:
    "Als data analytics consultant weet ik precies hoe jij data optimaal kan inzetten binnen jouw bedrijf. Op basis van jouw doelstelling maken we in overleg een plan om tot de juiste inzichten te komen.",
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
        "Extract Transform Load (ETL) staat voor het proces om van ruwe data, bruikbare data te maken waarmee je verdere analyses kunt doen!",
      icon: "Database",
    },
    {
      title: "Data Analyse",
      subtitle: "",
      description:
        "Data analyse is onderzoeksvragen beantwoorden door gebruik te maken van de nodige tools en technieken.",
      icon: "BarChart2",
    },
    {
      title: "Dashboarding",
      subtitle: "",
      description:
        "Dashboards zijn een visuele weergave van bedrijfsdata, en geven inzicht in de stand van zaken van je bedrijf. Doordat deze informatie inzichtelijk is kunnen beslissingen gemaakt worden op basis van data in plaats van onderbuik gevoel.",
      icon: "PieChart",
    },
    {
      title: "Data Science (AI)",
      subtitle: "",
      description:
        "Data science is een combinatie van wiskunde, programmeervaardigheden en domeinkennis. Met het doel om met Artificial Intelligence (AI) verborgen patronen te ontdekken en hier voorspellingen mee te doen!",
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
    "Wil je samenwerken om meer uit jouw data te halen? Neem dan contact met me op!",
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
