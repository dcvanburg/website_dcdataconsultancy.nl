// Central content file — single source of truth for all copy.
// Positioning: Senior Data Engineering Consultancy based in Breda, NL.
// DC Data Consultancy: actief sinds 2021, ervaring sinds 2016.

export const siteConfig = {
  name: "DC Data Consultancy",
  shortName: "DC Data",
  tagline: "Senior Data Engineering Consultancy",
  proposition:
    "Schaalbare, betrouwbare en business-driven dataplatforms voor organisaties die meer uit data willen halen.",
  url: "https://www.dcdataconsultancy.nl",
  email: "dennis@dcdataconsultancy.nl",
  linkedin: "https://www.linkedin.com/in/dennisvanburg/",
  city: "Breda",
  country: "Nederland",
  region: "Noord-Brabant",
  postalCode: "4811",
  foundedYear: 2021,
  experienceSince: 2016,
  copyright: `© ${new Date().getFullYear()} DC Data Consultancy — KvK Breda`,
} as const;

export const navigation = [
  { label: "Diensten", href: "/diensten" },
  { label: "Data Engineering", href: "/diensten/data-engineering" },
  { label: "Cases", href: "/cases" },
  { label: "Industrieën", href: "/industrieen" },
  { label: "Over Dennis", href: "/over-dennis" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  diensten: [
    { label: "Data Engineering", href: "/diensten/data-engineering" },
    { label: "Data Analytics", href: "/diensten/data-analytics" },
    { label: "Data Science", href: "/diensten/data-science" },
    { label: "Modern Data Stack", href: "/diensten/modern-data-stack" },
    { label: "dbt Consultancy", href: "/diensten/dbt-consultancy" },
    { label: "Azure Data Engineering", href: "/diensten/azure-data-engineering" },
  ],
  bedrijf: [
    { label: "Over Dennis", href: "/over-dennis" },
    { label: "Cases", href: "/cases" },
    { label: "Industrieën", href: "/industrieen" },
    { label: "Insights", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  locatie: [
    { label: "Data Consultant Breda", href: "/data-consultant-breda" },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE
// ─────────────────────────────────────────────────────────────────────────────

export const hero = {
  badge: "Senior Data Engineering Consultancy · Breda",
  heading: "Dataplatforms waar je echt op kunt bouwen.",
  subheading:
    "Veel organisaties verzuipen in fragmenteerde data, trage rapportages en pipelines die elke maandagochtend stuk zijn. Ik bouw schaalbare data-architectuur die wél werkt — zodat jouw team beslissingen neemt op cijfers waar iedereen op vertrouwt.",
  primaryCta: { label: "Plan een vrijblijvend gesprek", href: "/contact" },
  secondaryCta: { label: "Bekijk data engineering", href: "/diensten/data-engineering" },
  trustBar: {
    label: "Gewerkt voor o.a.",
    clients: ["Rabobank", "de Volksbank", "Achmea", "PostNL", "Mileway", "Gulf", "Brandweer"],
  },
} as const;

export const problemSection = {
  sectionId: "uitdagingen",
  eyebrow: "Herkenbaar?",
  heading: "Data zou een asset moeten zijn. Vaak is het een hoofdpijndossier.",
  intro:
    "Tijdens elke kennismaking kom ik dezelfde verhalen tegen. Niet omdat teams niet hard werken — wel omdat de fundering onder de dataomgeving nooit goed is gelegd.",
  problems: [
    {
      title: "Cijfers die niet kloppen",
      description:
        "Drie dashboards laten drie verschillende omzetten zien. Niemand durft de directie nog een rapport voor te leggen.",
    },
    {
      title: "Pipelines die breken",
      description:
        "Iedere maandag begint met handmatige fixes. Data engineering is reactief geworden in plaats van strategisch.",
    },
    {
      title: "Trage analyses",
      description:
        "Een simpele vraag van de business kost twee weken — terwijl de markt al verder is.",
    },
    {
      title: "Versplinterde data",
      description:
        "Bron-systemen, exports, losse Excels. Er is geen single source of truth en business metrics zijn nergens vastgelegd.",
    },
    {
      title: "Geen vertrouwen in BI",
      description:
        "Dashboards worden genegeerd. Beslissingen gaan terug naar onderbuik en eigen spreadsheets.",
    },
    {
      title: "Legacy zonder roadmap",
      description:
        "Een SSIS-tuin uit 2014, een ongedocumenteerd datawarehouse en geen plan om eruit te komen.",
    },
  ],
} as const;

export const offerSection = {
  sectionId: "aanpak",
  eyebrow: "Wat ik doe",
  heading: "Ik help je bouwen aan een dataplatform dat schaalt met je business.",
  intro:
    "Geen losse projecten of speeltjes, maar een fundering die jaren meegaat. Mijn focus ligt op data engineering — analytics en data science werken alleen als die fundering klopt.",
  pillars: [
    {
      number: "01",
      title: "Data Engineering",
      tagline: "Pipelines en architectuur die je vertrouwt",
      description:
        "Schaalbare ELT/ETL, datawarehousing, data modelling, orchestration en data quality. Op moderne stacks: Azure, Snowflake, Databricks, dbt en Airflow.",
      href: "/diensten/data-engineering",
      primary: true,
    },
    {
      number: "02",
      title: "Data Analytics",
      tagline: "Business metrics waar de directie op stuurt",
      description:
        "Heldere KPI-definities, gemodelleerde semantische lagen en dashboards die niemand meer hoeft uit te leggen. Power BI, Tableau, Looker.",
      href: "/diensten/data-analytics",
      primary: false,
    },
    {
      number: "03",
      title: "Data Science",
      tagline: "AI die landt in de operatie",
      description:
        "Forecasting, churn prediction en anomaly detection — gebouwd op een dataplatform dat productie aankan, niet op een notebook dat lokaal draait.",
      href: "/diensten/data-science",
      primary: false,
    },
  ],
} as const;

export const techStack = {
  sectionId: "stack",
  eyebrow: "Modern Data Stack",
  heading: "Technologie die de business ondersteunt — niet andersom.",
  intro:
    "Ik werk technologie-agnostisch, maar adviseer wat in jouw context werkt. Geen hype, geen vendor lock-in zonder reden.",
  categories: [
    {
      name: "Cloud platforms",
      items: ["Microsoft Azure", "AWS", "Google Cloud Platform"],
    },
    {
      name: "Data warehousing & lakehouse",
      items: ["Snowflake", "Databricks", "Azure Synapse", "BigQuery"],
    },
    {
      name: "Transformation & modelling",
      items: ["dbt Core", "dbt Cloud", "SQL", "Python"],
    },
    {
      name: "Orchestration",
      items: ["Azure Data Factory", "Apache Airflow", "Prefect"],
    },
    {
      name: "BI & visualisatie",
      items: ["Power BI", "Tableau", "Looker"],
    },
    {
      name: "Data quality & governance",
      items: ["Great Expectations", "Monte Carlo", "dbt tests", "Unity Catalog"],
    },
  ],
} as const;

export const aboutSection = {
  sectionId: "over-dennis",
  eyebrow: "Wie staat er achter DC Data Consultancy?",
  heading: "Dennis van Burg — senior data engineering consultant.",
  role: "Founder · Senior Data Engineering Consultant",
  bio: [
    "Sinds 2016 werk ik aan dataproblemen die er écht toe doen. In 2021 ben ik DC Data Consultancy gestart om als zelfstandige senior consultant opdrachtgevers te helpen die niet zomaar een paar handjes nodig hebben, maar iemand die kan ontwerpen, bouwen, vragen stellen en richting geven.",
    "Mijn werk speelt zich af op het snijvlak van engineering en business. Ik bouw geen pipelines om de pipelines — ik bouw ze omdat de finance-afdeling op maandag op de juiste cijfers moet kunnen vertrouwen, omdat marketing wil weten welke campagnes werken en omdat de directie de strategie wil onderbouwen met data in plaats van met aannames.",
    "Vanuit Breda werk ik door heel Nederland, vooral voor opdrachtgevers in financial services, logistiek, vastgoed, energie en publieke sector. Hands-on, technisch sterk, en met de communicatieve vaardigheden om stakeholders mee te nemen.",
  ],
  highlights: [
    { value: "8+", label: "jaar ervaring in data" },
    { value: "2021", label: "DC Data Consultancy gestart" },
    { value: "5+", label: "sectoren waarvoor gewerkt" },
    { value: "9", label: "enterprise opdrachtgevers" },
  ],
  industries: [
    "Financial Services (banken, verzekeraars, pensioenen)",
    "Logistiek & Supply Chain",
    "Vastgoed",
    "Energie",
    "Publieke sector",
  ],
  profileImage: "/images/profile-dennis.jpg",
  profileImageAlt: "Dennis van Burg — senior data engineering consultant bij DC Data Consultancy",
  cta: { label: "Lees meer over Dennis", href: "/over-dennis" },
} as const;

export const processSection = {
  sectionId: "proces",
  eyebrow: "Aanpak",
  heading: "Geen powerpoint-strategie. Werkende oplossingen.",
  intro:
    "Strategie en uitvoering zijn één ding bij mij. Ik schrijf niet eerst een dik adviesrapport om vervolgens te verdwijnen — ik ontwerp, bouw, draag over en zorg dat je team het overneemt.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description:
        "Korte intake (1–2 sessies). We brengen huidige architectuur, pijnpunten, stakeholders en business doelstellingen in kaart.",
    },
    {
      number: "02",
      title: "Architectuur & plan",
      description:
        "Concrete oplossing op één A4: doel-architectuur, fasering, technologiekeuzes en verwacht businessresultaat per fase.",
    },
    {
      number: "03",
      title: "Bouwen",
      description:
        "Hands-on engineering. Iteratief opleveren in sprints, met directe waarde — geen big bang na zes maanden.",
    },
    {
      number: "04",
      title: "Overdracht & coaching",
      description:
        "Goede documentatie, code reviews en kennisoverdracht. Zodat je intern team het zelfstandig verder draagt.",
    },
  ],
} as const;

export const quote = {
  text: "To ask the right question is harder than to answer it.",
  attribution: "Werkprincipe — Dennis van Burg",
} as const;

export const aiUseCases = {
  sectionId: "ai",
  eyebrow: "AI & Data Science",
  heading: "Wat een goed dataplatform mogelijk maakt.",
  intro:
    "AI is geen knop. Het is wat je krijgt als je dataplatform op orde is. Een paar concrete toepassingen waar ik voor opdrachtgevers aan heb gewerkt:",
  cases: [
    {
      title: "Demand & sales forecasting",
      description:
        "Voorspel toekomstige vraag of omzet op basis van historische patronen, seizoenseffecten en externe factoren — om voorraad, planning en budgettering aan te scherpen.",
      icon: "TrendingUp",
    },
    {
      title: "Churn prediction",
      description:
        "Identificeer klanten met een hoog vertrekrisico voordat ze opzeggen. Direct gekoppeld aan retentie-acties in de operatie.",
      icon: "Users",
    },
    {
      title: "Anomaly detection",
      description:
        "Spot afwijkingen, fraude of operationele incidenten realtime. Werkt alleen als je datakwaliteit en monitoring solide zijn.",
      icon: "AlertTriangle",
    },
    {
      title: "Recommendation engines",
      description:
        "Persoonlijke aanbevelingen voor klanten op basis van gedrag, voorkeuren en context — die ook daadwerkelijk in productie draaien.",
      icon: "Star",
    },
    {
      title: "Natural Language Processing",
      description:
        "Analyse van klantfeedback, klachten, contracten en interne documenten op schaal — zonder weken handmatig labelen.",
      icon: "MessageSquare",
    },
  ],
} as const;

export const services = {
  sectionId: "diensten",
  heading: "Diensten",
  subheading: "Data engineering staat centraal. Analytics en science bouwen daarop.",
  items: [
    {
      title: "Data Engineering",
      tagline: "Hoofdspecialisatie",
      description:
        "Schaalbare data pipelines (ELT/ETL), cloud datawarehouses, dbt-gebaseerde modelleerlagen en orchestration die productie aankan.",
      icon: "Database",
      href: "/diensten/data-engineering",
      primary: true,
    },
    {
      title: "Data Analytics",
      tagline: "Inzicht met onderbouwing",
      description:
        "Van losse rapporten naar een gemodelleerde semantische laag met heldere business metrics en self-service dashboards.",
      icon: "BarChart2",
      href: "/diensten/data-analytics",
    },
    {
      title: "Data Science",
      tagline: "AI in productie, niet in PoC-land",
      description:
        "Forecasting, classificatie en anomaly detection — geïntegreerd in een productiewaardig dataplatform.",
      icon: "Cpu",
      href: "/diensten/data-science",
    },
    {
      title: "Modern Data Stack",
      tagline: "Architectuur voor schaal",
      description:
        "Implementatie van moderne stack-componenten (Snowflake, Databricks, dbt, Airflow) inclusief best practices voor governance en CI/CD.",
      icon: "Layers",
      href: "/diensten/modern-data-stack",
    },
  ],
} as const;

export const projects = {
  sectionId: "projecten",
  eyebrow: "Track record",
  heading: "Gewerkt voor partijen die data serieus nemen.",
  intro:
    "Een greep uit de opdrachtgevers van de afgelopen jaren — van retailbanken en verzekeraars tot logistieke en publieke organisaties.",
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
  cta: { label: "Bekijk uitgewerkte cases", href: "/cases" },
} as const;

export const testimonialsSection = {
  eyebrow: "Hoe klanten DC Data Consultancy ervaren",
  heading: "Senior, hands-on en business-aware.",
  intro:
    "Een korte greep uit de feedback die ik in de afgelopen jaren van opdrachtgevers en collega's heb gekregen.",
  quotes: [
    {
      text: "Dennis denkt vanuit de business én bouwt zelf de oplossing. Die combinatie is zeldzaam — en exact wat we nodig hadden om ons data domein op te zetten.",
      role: "Data & Analytics lead, financial services",
    },
    {
      text: "Pragmatisch, technisch sterk en geen ego. We hadden binnen drie maanden een werkend dbt-project met tests, documentatie en een CI/CD pipeline.",
      role: "Engineering manager, logistiek",
    },
    {
      text: "Eindelijk iemand die kan vertalen tussen onze finance-afdeling en het engineering team. Dat scheelde maanden discussie.",
      role: "Finance director, vastgoed",
    },
  ],
} as const;

export const contactSection = {
  sectionId: "contact",
  eyebrow: "Aan de slag",
  heading: "Klaar voor een dataplatform dat staat?",
  intro:
    "Of het nu gaat om een review van je huidige architectuur, het opzetten van een dbt-project, een interim-rol als senior data engineer of een volledig nieuw dataplatform — neem contact op en ik denk vrijblijvend mee.",
  fields: {
    name: { label: "Naam", placeholder: "Voor- en achternaam" },
    email: { label: "Zakelijk e-mailadres", placeholder: "naam@bedrijf.nl" },
    company: { label: "Bedrijf", placeholder: "Bedrijfsnaam" },
    message: {
      label: "Wat is de uitdaging?",
      placeholder: "Vertel kort over je dataomgeving, het probleem en het gewenste resultaat.",
    },
  },
  submitLabel: "Stuur bericht",
  responseTime: "Reactie binnen één werkdag, vaak sneller.",
  alternative: "Liever direct?",
  alternativeOptions: [
    { label: "Mail dennis@dcdataconsultancy.nl", href: "mailto:dennis@dcdataconsultancy.nl" },
    {
      label: "Connect via LinkedIn",
      href: "https://www.linkedin.com/in/dennisvanburg/",
    },
  ],
} as const;

export const finalCta = {
  heading: "Klaar om je data fundering serieus te nemen?",
  subheading:
    "Korte kennismaking van 30 minuten. Geen verkooppraatje — wel een eerlijke read op waar je nu staat en wat haalbaar is.",
  cta: { label: "Plan een gesprek", href: "/contact" },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGES — DATA ENGINEERING (FLAGSHIP)
// ─────────────────────────────────────────────────────────────────────────────

export const dataEngineeringPage = {
  slug: "data-engineering",
  title: "Data Engineering Consultancy",
  metaTitle: "Data Engineering Consultancy | DC Data Consultancy Breda",
  metaDescription:
    "Senior data engineering consultancy uit Breda. Schaalbare data pipelines, cloud datawarehousing, dbt en Azure-architectuur — gebouwd om jaren mee te gaan.",
  hero: {
    eyebrow: "Hoofdspecialisatie",
    heading: "Data engineering die de basis legt voor alles wat erna komt.",
    subheading:
      "Een dashboard is net zo goed als de pipeline eronder. Ik bouw schaalbare, betrouwbare data-architectuur waar je BI, analytics en AI op kunt vertrouwen.",
  },
  problems: [
    "Pipelines breken regelmatig en er is geen alerting.",
    "Verschillende teams hanteren verschillende business definities.",
    "Het datawarehouse is een spaghetti van views en stored procedures.",
    "Iedere wijziging duurt weken en niemand durft te refactoren.",
    "Er is geen CI/CD, geen testing en geen documentatie van data lineage.",
  ],
  solution: {
    heading: "Een fundering die schaalt — niet weer een set losse oplossingen.",
    paragraphs: [
      "Ik ontwerp en bouw moderne data-architectuur op basis van bewezen patronen: ELT op een cloud datawarehouse, transformaties in dbt, orchestration via Azure Data Factory of Airflow, en geautomatiseerde tests en monitoring.",
      "Het resultaat is een platform waar pipelines voorspelbaar lopen, business metrics één bron hebben, en jouw eigen team in staat is om verder te bouwen zonder afhankelijk te blijven van consultants.",
    ],
  },
  capabilities: [
    {
      title: "Data pipelines (ELT/ETL)",
      description:
        "Robuuste ingestion en transformatie van bronsystemen naar het datawarehouse, met idempotente runs, retries en alerting.",
    },
    {
      title: "Cloud datawarehousing",
      description:
        "Architectuur en implementatie op Snowflake, Databricks, Azure Synapse of BigQuery — inclusief cost management en performance tuning.",
    },
    {
      title: "Data modelling met dbt",
      description:
        "Een gelaagd model (staging → intermediate → marts) met sources, tests, snapshots en documentatie. Eén centrale plek voor business metrics.",
    },
    {
      title: "Orchestration",
      description:
        "DAG-gedreven orchestration met Azure Data Factory, Airflow of Prefect. Inclusief observability en SLA-bewaking.",
    },
    {
      title: "Data quality & testing",
      description:
        "Automatische data tests (uniqueness, niet-null, referentiële integriteit), data contracts en Great Expectations voor zware checks.",
    },
    {
      title: "CI/CD voor data",
      description:
        "Git-gebaseerde workflows, automatische deploys, environment-scheiding (dev/staging/prod) en peer review op datamodellen.",
    },
    {
      title: "Documentation & lineage",
      description:
        "Self-service documentatie, end-to-end lineage en heldere business glossaries — zodat nieuwe teamleden binnen een week productief zijn.",
    },
    {
      title: "Cost & performance",
      description:
        "Slimme partitionering, clustering, materialisatiestrategie en monitoring — zodat je dataplatform betaalbaar blijft naarmate volumes groeien.",
    },
  ],
  process: [
    {
      title: "Architectuur-review",
      description:
        "We brengen in 1–2 sessies je huidige stack, pijnpunten en doelarchitectuur in kaart.",
    },
    {
      title: "Doel-architectuur op één A4",
      description:
        "Concrete blueprint, fasering en technologiekeuze — gericht op meetbare business outcomes per sprint.",
    },
    {
      title: "Iteratief bouwen",
      description:
        "Sprints van 2 weken, demo's met stakeholders, vroege oplevering van eerste werkende pipelines.",
    },
    {
      title: "Overdracht",
      description:
        "Documentatie, hands-on coaching en pair-engineering met je interne team. Zodat je het zelf overneemt.",
    },
  ],
  outcomes: [
    "Eén bron van waarheid voor business metrics — gedefinieerd in code, getest en gedocumenteerd.",
    "Pipelines die voorspelbaar draaien, met alerting en duidelijke ownership.",
    "Verkorte time-to-insight: van weken naar dagen voor nieuwe vragen uit de business.",
    "Een platform dat schaalt naar nieuwe bronnen en nieuwe gebruikers zonder herontwerp.",
    "Een intern team dat zelfstandig kan doorbouwen — geen vendor lock-in op consultants.",
  ],
  stack: [
    "Azure (ADF, Synapse, Data Lake)",
    "AWS (Glue, Redshift, S3)",
    "Snowflake",
    "Databricks",
    "dbt Core & dbt Cloud",
    "Airflow",
    "Python & SQL",
    "Terraform",
    "GitHub Actions / Azure DevOps",
  ],
  faqs: [
    {
      q: "Wat is het verschil tussen ETL en ELT, en wat raad je aan?",
      a: "Klassieke ETL transformeert data voordat hij in het warehouse landt. ELT laadt eerst de ruwe data in een cloud warehouse en doet de transformaties dáár — met SQL en dbt. Voor moderne cloud-platforms is ELT bijna altijd te prefereren: het is goedkoper, beter testbaar en sluit beter aan op moderne tooling.",
    },
    {
      q: "Welke cloud raad je aan: Azure, AWS of GCP?",
      a: "Meestal volg ik de bestaande cloud-strategie van de organisatie. Bij financial services en publieke sector in Nederland is dat vaak Azure. Voor data-intensieve workloads zijn Snowflake en Databricks cloud-agnostisch en blijven ze een sterke keuze, ongeacht de onderliggende cloud.",
    },
    {
      q: "Hoe zit het met data governance en privacy (AVG/GDPR)?",
      a: "Governance is geen apart project, maar een eigenschap van het platform. Ik werk standaard met rolgebaseerde toegang, audit logs, encryptie at-rest en in-transit, en data classificatie via tools als Unity Catalog of Microsoft Purview. Voor PII werk ik met masking, tokenisatie en strikte access policies.",
    },
    {
      q: "Doe je ook interim of detachering rollen?",
      a: "Ja. Naast project-gebaseerde opdrachten doe ik ook interim-rollen als senior data engineer of lead data engineer. Typisch 3–4 dagen per week voor 3–9 maanden.",
    },
    {
      q: "Wat onderscheidt jouw aanpak van een grote consultancy?",
      a: "Je krijgt direct een senior aan tafel die zowel kan ontwerpen als bouwen. Geen team van junioren met een partner op afstand. Eén aanspreekpunt, kortere lijnen, lagere kosten en geen verkoop-pitches.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGE — DATA ANALYTICS
// ─────────────────────────────────────────────────────────────────────────────

export const dataAnalyticsPage = {
  slug: "data-analytics",
  title: "Data Analytics Consultancy",
  metaTitle: "Data Analytics Consultancy | Power BI, Tableau & Semantic Layers",
  metaDescription:
    "Data analytics consultancy gericht op heldere business metrics, self-service dashboards en analytics engineering met dbt en Power BI.",
  hero: {
    eyebrow: "Analytics dat staat",
    heading: "Van losse rapporten naar één betrouwbare bron van waarheid.",
    subheading:
      "Dashboards waarvan iedereen de cijfers vertrouwt, gebouwd op een gemodelleerde semantische laag met heldere business definities.",
  },
  problems: [
    "Drie afdelingen, drie verschillende omzetdefinities.",
    "Power BI-bestanden die niemand meer durft aan te raken.",
    "Rapporten die handmatig worden bijgewerkt elke maand.",
    "Geen versiebeheer of testing op datatransformaties.",
    "Self-service is een ramp omdat de onderliggende data niet klopt.",
  ],
  solution: {
    heading: "Analytics engineering: BI met software engineering-discipline.",
    paragraphs: [
      "Ik bouw een gemodelleerde laag in dbt waarin business metrics één keer worden gedefinieerd — en die door Power BI, Tableau of Looker wordt gebruikt. Zo voorkom je dat dezelfde KPI in vijf tools vijf verschillende waardes heeft.",
      "Het resultaat: dashboards die betrouwbaar zijn, een semantische laag die getest en gedocumenteerd is, en self-service dat daadwerkelijk werkt.",
    ],
  },
  capabilities: [
    {
      title: "Semantic layer in dbt",
      description:
        "Een centrale plek voor metrics, dimensies en relaties — gebruikt door alle BI-tools.",
    },
    {
      title: "Power BI architectuur",
      description:
        "Van losse PBIX-bestanden naar een schaalbare workspace-structuur, met datasets, Apps en row-level security.",
    },
    {
      title: "Tableau & Looker",
      description:
        "Implementatie en optimalisatie van Tableau Server, Tableau Cloud of Looker — inclusief LookML modellering.",
    },
    {
      title: "KPI-definitie & data dictionary",
      description:
        "Werksessies met finance, sales en operations om tot ondubbelzinnige business definities te komen.",
    },
    {
      title: "Self-service enablement",
      description:
        "Trainen van business users zodat ze zelf rapporten kunnen bouwen — zonder de data te corrumperen.",
    },
    {
      title: "Reporting automation",
      description:
        "Wegnemen van handmatige Excel-rapportages. Subscriptions, alerts en geautomatiseerde verspreiding.",
    },
  ],
  process: [
    {
      title: "KPI-inventarisatie",
      description:
        "Welke metrics worden waar gebruikt, en hoe zijn ze gedefinieerd? Vrijwel altijd vinden we tegenstrijdigheden.",
    },
    {
      title: "Semantic model",
      description:
        "Eén gemodelleerde laag in dbt met geteste metrics-definities.",
    },
    {
      title: "BI implementatie",
      description: "Bouwen van dashboards op de gemodelleerde laag.",
    },
    {
      title: "Adoptie & training",
      description: "Workshops, documentatie en een community of practice.",
    },
  ],
  outcomes: [
    "Eén consistente set business metrics in alle dashboards.",
    "Dashboards die de directie daadwerkelijk gebruikt om te sturen.",
    "Geen handmatige Excel-rapportages meer in de maandafsluiting.",
    "Self-service dat schaalt zonder data-chaos.",
  ],
  stack: ["Power BI", "Tableau", "Looker", "dbt", "Snowflake", "Databricks", "Azure Synapse"],
  faqs: [
    {
      q: "Werk je liever met Power BI of Tableau?",
      a: "Allebei prima — ik kies wat past bij de organisatie. In Nederland, en zeker bij financial services, zie ik vaker Power BI vanwege de Microsoft-stack. Voor zware visualisatie en data exploration heeft Tableau historisch een voorsprong.",
    },
    {
      q: "Wat is analytics engineering precies?",
      a: "Het toepassen van software engineering-principes (versiebeheer, testing, CI/CD, modulariteit) op het transformeren en modelleren van data voor analytics. dbt is hierin de standaard geworden.",
    },
    {
      q: "Hoe pak je conflicterende KPI-definities aan?",
      a: "In werksessies met stakeholders. Het gaat zelden om de techniek — het gaat erom dat finance, sales en operations het eens worden over de definitie. Pas dan kunnen we het in code vastleggen.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGE — DATA SCIENCE
// ─────────────────────────────────────────────────────────────────────────────

export const dataSciencePage = {
  slug: "data-science",
  title: "Data Science & AI Consultancy",
  metaTitle: "Data Science Consultancy | AI in productie, niet in PoC-land",
  metaDescription:
    "Data science en AI consultancy gericht op productiewaardige forecasting, churn-, anomaly- en NLP-modellen op een solide dataplatform.",
  hero: {
    eyebrow: "AI in productie",
    heading: "Data science die landt in de operatie — niet alleen in een notebook.",
    subheading:
      "Forecasting, churn prediction en anomaly detection, gebouwd op een dataplatform dat productie aankan en geïntegreerd in jouw bestaande processen.",
  },
  problems: [
    "Notebooks die lokaal draaien maar nergens in productie staan.",
    "Modellen die elke maand handmatig worden hertraind.",
    "Geen monitoring op model drift of data quality issues.",
    "Slechte features omdat de onderliggende data niet getransformeerd is.",
    "Business adoptie blijft uit: het model bestaat, maar wordt niet gebruikt.",
  ],
  solution: {
    heading: "MLOps light: model in productie, business in de lead.",
    paragraphs: [
      "Ik bouw data science oplossingen die direct gekoppeld zijn aan het dataplatform, met versiebeheer, automatische retraining en monitoring. Zo voorkom je dat een model na drie maanden stilletjes irrelevant wordt.",
      "Belangrijker nog: de modellen zijn ontworpen rondom een concrete businessbeslissing. Geen ‘AI-omdat-het-kan’, maar voorspellingen die direct in operationele processen worden gebruikt.",
    ],
  },
  capabilities: [
    {
      title: "Forecasting & demand planning",
      description:
        "Tijdreeksen op basis van historie, seizoenseffecten en externe drivers — voor sales, vraag, voorraad of capaciteit.",
    },
    {
      title: "Churn & retention modeling",
      description:
        "Voorspellen welke klanten gaan vertrekken en welke acties impact hebben, met heldere business logic eromheen.",
    },
    {
      title: "Anomaly detection",
      description:
        "Realtime of batch anomalie-detectie voor fraude, monitoring of operationele incidenten.",
    },
    {
      title: "Classificatie & scoring",
      description:
        "Klantscoring, lead scoring, credit scoring — productie-modellen met explainability.",
    },
    {
      title: "MLOps fundamenten",
      description:
        "Model versioning, automatische retraining, monitoring op drift en performance, en duidelijke incident response.",
    },
    {
      title: "NLP & document intelligence",
      description:
        "Tekstanalyse op klantfeedback, contracten en interne documenten — inclusief moderne LLM-gebaseerde aanpakken waar dat past.",
    },
  ],
  process: [
    { title: "Business case", description: "Welke beslissing moet het model ondersteunen?" },
    { title: "Feature engineering", description: "Modellering vanuit het dataplatform — geen losse exports." },
    { title: "Model & validatie", description: "Iteratief modelleren, met statistisch verantwoorde validatie." },
    { title: "Productie & monitoring", description: "Deployment, monitoring en herhalingsproces." },
  ],
  outcomes: [
    "Concrete businessbeslissingen ondersteund door modellen die werken.",
    "Voorspellingen die niet stilletjes verouderen.",
    "Engineering-discipline rondom data science — niet alleen experimenten.",
    "Een team dat snapt wat het model doet en wanneer je het niet moet vertrouwen.",
  ],
  stack: ["Python", "scikit-learn", "PyTorch", "MLflow", "Databricks", "Azure ML", "dbt"],
  faqs: [
    {
      q: "Wanneer is AI een goede investering, en wanneer niet?",
      a: "AI loont wanneer een beslissing herhaald wordt, voldoende data beschikbaar is en de kosten van een fout te kwantificeren zijn. Zonder die drie ingrediënten is investeren in een goed dataplatform vaak waardevoller.",
    },
    {
      q: "Hoe zit het met generatieve AI / LLM's?",
      a: "Voor klassieke voorspelproblemen (forecasting, churn, scoring) blijven tabulaire ML-modellen vaak superieur. Voor tekstanalyse, document intelligence en chatbots zijn LLM's de juiste keuze. Ik help met de afweging.",
    },
    {
      q: "Moeten we eerst onze data op orde hebben?",
      a: "Voor een PoC niet altijd. Voor productie absoluut. Anders bouw je een model dat constant breekt op datakwaliteit. In de praktijk doe ik vaak parallel: een eerste model én een fundament onder het platform.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGE — MODERN DATA STACK
// ─────────────────────────────────────────────────────────────────────────────

export const modernDataStackPage = {
  slug: "modern-data-stack",
  title: "Modern Data Stack Consultancy",
  metaTitle: "Modern Data Stack Consultancy | Snowflake, dbt, Airflow",
  metaDescription:
    "Implementatie en architectuur van de Modern Data Stack: Snowflake, Databricks, dbt, Airflow, Fivetran en BI — door een senior consultant uit Breda.",
  hero: {
    eyebrow: "Modern Data Stack",
    heading: "De Modern Data Stack — zonder de hype.",
    subheading:
      "Cloud data warehouse, ELT, dbt-modellering, orchestration, BI en governance — als één coherent platform in plaats van als losse tooling.",
  },
  problems: [
    "Tooling-keuzes zijn ad-hoc gemaakt: drie ingestion tools, twee orchestrators.",
    "Snowflake-rekening loopt op omdat queries niet worden geoptimaliseerd.",
    "Geen idee waar data lineage of governance moet landen.",
    "Iedereen heeft een eigen mening, niemand een coherente architectuur.",
  ],
  solution: {
    heading: "Eén samenhangende architectuur — geen verzameling losse onderdelen.",
    paragraphs: [
      "Ik help bij het ontwerpen, implementeren en aanscherpen van een Modern Data Stack die past bij jouw schaal en team. Dat betekent bewuste keuzes: welke ingestion, welk warehouse, hoe transformeren, hoe orchestreren, en hoe governance inrichten.",
      "Bij voorkeur incrementeel: bouwen op wat er al staat, zonder een rip-and-replace van een jaar.",
    ],
  },
  capabilities: [
    { title: "Architectuur-design", description: "End-to-end stack: ingestion, warehouse, transformation, BI, governance." },
    { title: "Tool-selectie", description: "Onafhankelijk advies tussen Snowflake / Databricks / Synapse en tussen Fivetran / Airbyte / custom." },
    { title: "dbt implementatie", description: "Project-structuur, naming conventions, tests, snapshots, exposures." },
    { title: "Orchestration", description: "Airflow, Prefect of Azure Data Factory — pragmatisch ingericht." },
    { title: "Cost management", description: "Resource monitor, query tuning en query tagging — voorkomen dat de Snowflake-rekening explodeert." },
    { title: "Data governance", description: "Unity Catalog, Snowflake Horizon, Microsoft Purview — gekozen op basis van use case." },
  ],
  process: [
    { title: "Stack-assessment", description: "Waar staat de huidige stack? Wat werkt, wat niet?" },
    { title: "Reference architecture", description: "Concrete blueprint passend bij jouw schaal en team." },
    { title: "Incrementele implementatie", description: "Module voor module, geen big bang." },
    { title: "Hand-over & enablement", description: "Documentatie, training en code reviews voor het interne team." },
  ],
  outcomes: [
    "Eén coherente, modulaire architectuur in plaats van een verzameling tools.",
    "Voorspelbare kosten en performance.",
    "Een platform dat schaalt naar nieuwe use cases zonder herontwerp.",
  ],
  stack: ["Snowflake", "Databricks", "dbt", "Airflow", "Fivetran", "Airbyte", "Power BI", "Looker"],
  faqs: [
    {
      q: "Wat is de Modern Data Stack precies?",
      a: "Een term voor een verzameling cloud-native tools die samen een dataplatform vormen: een cloud warehouse (Snowflake/Databricks/BigQuery), een transformatielaag (dbt), ingestion (Fivetran/Airbyte/custom), orchestration (Airflow/Prefect) en BI (Power BI/Looker/Tableau). De gemene deler is: SQL-first, modulair, cloud-only.",
    },
    {
      q: "Is dit alleen voor grote organisaties?",
      a: "Nee. De Modern Data Stack schaalt juist mooi met kleinere organisaties dankzij gebruiksgebaseerde pricing en lage instapdrempels. Wel is het belangrijk om incrementeel te beginnen.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGE — DBT CONSULTANCY
// ─────────────────────────────────────────────────────────────────────────────

export const dbtConsultancyPage = {
  slug: "dbt-consultancy",
  title: "dbt Consultancy",
  metaTitle: "dbt Consultant Nederland | Implementatie & Best Practices",
  metaDescription:
    "Senior dbt consultant uit Breda. Implementatie, project-structuur, tests, CI/CD en analytics engineering best practices voor dbt Core en dbt Cloud.",
  hero: {
    eyebrow: "Analytics engineering",
    heading: "dbt — niet als tool, maar als manier van werken.",
    subheading:
      "Goede dbt-projecten zijn modulair, getest, gedocumenteerd en gekoppeld aan CI/CD. Slechte dbt-projecten zijn een spaghetti van views in een SQL-bestand. Ik bouw het eerste.",
  },
  problems: [
    "dbt is ingevoerd maar er zit geen structuur in: geen tests, geen documentatie.",
    "Eén centrale dbt_project.yml met honderden models en geen folder-structuur.",
    "Geen environment-scheiding tussen dev, staging en productie.",
    "Geen CI/CD: deploys gebeuren handmatig en breken regelmatig.",
    "Macros worden gekopieerd in plaats van hergebruikt.",
  ],
  solution: {
    heading: "Een dbt-project dat als professionele codebase werkt.",
    paragraphs: [
      "Ik implementeer dbt-projecten volgens bewezen best practices: gelaagde modellering (staging, intermediate, marts), naming conventions, geautomatiseerde tests, CI/CD-pipelines en duidelijke documentatie.",
      "Zo wordt dbt geen bottleneck, maar de centrale plek waar business logic getest en gedocumenteerd ligt.",
    ],
  },
  capabilities: [
    { title: "Project bootstrapping", description: "Setup van dbt Core of dbt Cloud, profile management, environment-scheiding." },
    { title: "Modelleer-strategie", description: "Staging → intermediate → marts-aanpak. Sources, snapshots, exposures." },
    { title: "Testing", description: "Generic tests, singular tests, freshness tests, Great Expectations." },
    { title: "CI/CD", description: "GitHub Actions / Azure DevOps pipelines voor build, test en deploy van dbt." },
    { title: "Documentation", description: "dbt docs als interne data catalog, met sources en exposures." },
    { title: "Macros & packages", description: "DRY-modellering met macros, package management." },
    { title: "Performance", description: "Materialisatie-strategie (view / table / incremental / snapshot)." },
    { title: "Migration", description: "Migreren van Looker PDT's, Power BI dataflows of legacy SQL naar dbt." },
  ],
  process: [
    { title: "dbt-audit", description: "Review van bestaande dbt-codebase (indien aanwezig) — wat houden, wat refactoren." },
    { title: "Project setup", description: "Folder-structuur, naming, conventies, sources en tests." },
    { title: "Bouwen", description: "Modellen migreren of opbouwen, met peer review." },
    { title: "Enablement", description: "Workshops voor het interne team — focus op zelfstandig dbt schrijven." },
  ],
  outcomes: [
    "Een dbt-codebase die andere data engineers binnen een week kunnen oppakken.",
    "Automatische tests die regressies voorkomen.",
    "Eén plek voor business metrics — gedocumenteerd en geversioneerd.",
    "Een team dat zelfstandig analytics engineering kan toepassen.",
  ],
  stack: ["dbt Core", "dbt Cloud", "Snowflake", "Databricks", "BigQuery", "Redshift", "GitHub Actions", "Azure DevOps"],
  faqs: [
    {
      q: "dbt Core of dbt Cloud?",
      a: "Voor kleinere teams of teams met beperkte DevOps-capaciteit is dbt Cloud een goede keuze — minder ops, ingebouwde scheduling en IDE. Voor grotere organisaties met een sterke engineering-cultuur is dbt Core (zelf gehost in Airflow/Azure DevOps) vaak goedkoper en flexibeler. Ik help met de afweging.",
    },
    {
      q: "Hoe structureer je een dbt-project goed?",
      a: "De dbt best practice is een gelaagde aanpak: 'staging' (1:1 cleaning per bron), 'intermediate' (herbruikbare berekeningen), 'marts' (business-georiënteerde tabellen). Hou folders per bron en per business domein, gebruik consistente naming en zorg voor tests op iedere mart.",
    },
    {
      q: "Heeft dbt zin als we al een datawarehouse hebben?",
      a: "Vaak juist dan. dbt vervangt geen warehouse — het is de transformatielaag erop. Je krijgt versiebeheer, testing en documentatie, terwijl je bestaande Snowflake, Databricks of Synapse blijft gebruiken.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGE — AZURE DATA ENGINEERING
// ─────────────────────────────────────────────────────────────────────────────

export const azureDataEngineeringPage = {
  slug: "azure-data-engineering",
  title: "Azure Data Engineering Consultancy",
  metaTitle: "Azure Data Engineer Consultant | ADF, Synapse, Databricks, Fabric",
  metaDescription:
    "Senior Azure data engineering consultant. Data Factory, Synapse, Databricks, Fabric en moderne lakehouse-architectuur — voor enterprise Nederlandse opdrachtgevers.",
  hero: {
    eyebrow: "Azure specialisme",
    heading: "Azure data engineering die enterprise-ready is.",
    subheading:
      "Van Azure Data Factory en Synapse tot Microsoft Fabric en Databricks — ik bouw moderne lakehouse-architecturen die governance, security en kosten serieus nemen.",
  },
  problems: [
    "Een Azure Data Factory met honderden pipelines en geen overzicht.",
    "Synapse SQL pools die te duur worden en niet schaalbaar zijn.",
    "Geen scheiding tussen dev, test en productie in Azure.",
    "Slechte integratie tussen ADF, Databricks en Synapse.",
    "Onbekend hoe Microsoft Fabric in te passen in een bestaand landschap.",
  ],
  solution: {
    heading: "Azure-architectuur die werkt voor data en voor de business.",
    paragraphs: [
      "Ik bouw moderne data-architectuur op Azure: een lakehouse op ADLS Gen2 met Databricks of Synapse, ELT via ADF of Fabric, transformaties in dbt of Databricks notebooks en BI via Power BI.",
      "Met aandacht voor Azure-specifieke onderwerpen: managed identities, private endpoints, key vault integratie, Purview voor governance en cost controls.",
    ],
  },
  capabilities: [
    { title: "Azure Data Factory", description: "Pipelines, datasets, linked services, integration runtimes — gestructureerd en herhaalbaar." },
    { title: "Synapse Analytics", description: "Dedicated en serverless SQL pools, Spark pools en pipelines binnen één workspace." },
    { title: "Databricks", description: "Workspaces, clusters, Delta Lake, Unity Catalog en workflows." },
    { title: "Microsoft Fabric", description: "Architectuur en migratie naar Fabric Lakehouse, OneLake en Direct Lake mode in Power BI." },
    { title: "ADLS Gen2 lakehouse", description: "Medallion architecture (bronze / silver / gold), partitionering en optimalisatie." },
    { title: "Infrastructure as Code", description: "Terraform of Bicep voor consistente, herhaalbare Azure-resources." },
    { title: "Power BI integratie", description: "Power BI Premium / Embedded / Fabric, met DirectQuery, Import en Direct Lake." },
    { title: "Security & governance", description: "Managed identities, RBAC, Microsoft Purview en private endpoints." },
  ],
  process: [
    { title: "Azure-assessment", description: "Inventarisatie van bestaande resources, kosten en pijnpunten." },
    { title: "Doelarchitectuur", description: "Concrete blueprint met kostprognose en migratie-pad." },
    { title: "Implementatie", description: "Incrementele bouw, met IaC en CI/CD." },
    { title: "Overdracht", description: "Documentatie en coaching van interne Azure engineers." },
  ],
  outcomes: [
    "Een Azure-platform met overzicht en voorspelbare kosten.",
    "Pipelines die getest en gedeployd worden via CI/CD.",
    "Een lakehouse waar BI, data science en data engineering op samenkomen.",
    "Een team dat zelfstandig op Azure verder kan bouwen.",
  ],
  stack: [
    "Azure Data Factory",
    "Azure Synapse",
    "Azure Databricks",
    "Microsoft Fabric",
    "ADLS Gen2",
    "Azure SQL",
    "Power BI",
    "Microsoft Purview",
    "Terraform / Bicep",
  ],
  faqs: [
    {
      q: "Fabric of Databricks?",
      a: "Microsoft Fabric is sterk verankerd in het Microsoft-ecosysteem en heeft een laagdrempelige UX voor Power BI-gebruikers. Databricks is volwassener in engineering-praktijken (Unity Catalog, MLflow, workflows). Voor Microsoft-shop-only organisaties kan Fabric voldoende zijn; voor organisaties met serieuze data engineering / ML behoefte blijft Databricks vaak de sterkere keuze.",
    },
    {
      q: "Wat is de meerwaarde van ADF naast Databricks?",
      a: "ADF is sterk in connectivity (honderden out-of-the-box connectors) en in orkestratie van pipelines. Databricks is sterker in transformatie en Spark. In veel implementaties gebruik ik ADF voor ingestion en orchestration, Databricks voor zware transformaties.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT PAGE
// ─────────────────────────────────────────────────────────────────────────────

export const aboutPage = {
  metaTitle: "Over Dennis van Burg | Senior Data Engineering Consultant",
  metaDescription:
    "Dennis van Burg is senior data engineering consultant en oprichter van DC Data Consultancy in Breda. Sinds 2016 actief in data, sinds 2021 als zelfstandig consultant.",
  hero: {
    eyebrow: "Over Dennis van Burg",
    heading: "Senior data engineering consultant. Hands-on, business-aware, geen ego.",
    intro:
      "Ik werk sinds 2016 aan data-architectuur en analytics. In 2021 startte ik DC Data Consultancy om opdrachtgevers te kunnen helpen die niet zomaar een paar handjes zoeken, maar een senior die kan ontwerpen, bouwen, vragen stellen en richting geven.",
  },
  story: [
    {
      heading: "Van analytics naar engineering",
      paragraphs: [
        "Mijn carrière begon aan de analytics-kant: rapportages bouwen, KPI's definiëren, dashboards opleveren. Maar bij elke opdracht kwam ik tegen hetzelfde aan: de werkelijke bottleneck zat niet in BI, maar in de fundering eronder.",
        "Pipelines die elke nacht halverwege braken. Datawarehouses zonder structuur. Business logic die in vijf verschillende dashboards op vijf verschillende manieren stond. Dat heeft mijn focus richting data engineering verschoven — want zonder een betrouwbare fundering blijft alles erboven net zo betrouwbaar als die fundering.",
      ],
    },
    {
      heading: "Eigen consultancy sinds 2021",
      paragraphs: [
        "In 2021 ben ik DC Data Consultancy gestart. De drijfveer: ik wilde rechtstreeks bij opdrachtgevers aan tafel kunnen zitten, zonder de overhead van een groot bureau, en met volledige eigenaarschap over de kwaliteit van wat ik oplever.",
        "Sindsdien werk ik vanuit Breda voor opdrachtgevers door heel Nederland — financial services, logistiek, vastgoed, energie, publieke sector. Meestal als senior consultant of lead, vaak op het snijvlak van engineering en business.",
      ],
    },
    {
      heading: "Hoe ik werk",
      paragraphs: [
        "Ik geloof in werkende oplossingen boven powerpoints. Dat betekent: niet eerst zes weken een adviesrapport schrijven om vervolgens te verdwijnen, maar samen met je team meebouwen. Sprint voor sprint, met directe waarde.",
        "Ik praat net zo makkelijk met de CFO over wat de echte business metrics zijn, als met een junior engineer over hoe een dbt-model gestructureerd moet worden. Die brug slaan — tussen techniek en business — is een groot deel van mijn werk.",
      ],
    },
    {
      heading: "Waarom DC Data?",
      paragraphs: [
        "Je krijgt direct een senior aan tafel. Geen team van junioren met een partner op afstand. Geen verkooppraatjes. Eén aanspreekpunt, korte lijnen, en de mogelijkheid om binnen weken een eerste resultaat op te leveren in plaats van na maanden.",
      ],
    },
  ],
  expertise: [
    {
      area: "Data Engineering",
      items: [
        "Data pipeline architectuur (ELT/ETL)",
        "Cloud datawarehousing (Snowflake, Synapse, Databricks)",
        "Data modelling (dimensional, Data Vault, OBT)",
        "Analytics engineering met dbt",
        "Orchestration (Airflow, ADF, Prefect)",
        "Data quality, testing en observability",
        "CI/CD voor data en infrastructure as code",
      ],
    },
    {
      area: "Data Analytics",
      items: [
        "Power BI (modellering, RLS, premium)",
        "Tableau & Looker",
        "Semantic layers in dbt",
        "KPI- en metrics-definitie met stakeholders",
        "Self-service enablement",
      ],
    },
    {
      area: "Data Science",
      items: [
        "Forecasting & demand planning",
        "Churn prediction & customer scoring",
        "Anomaly & fraud detection",
        "MLOps fundamenten (MLflow, retraining, monitoring)",
      ],
    },
    {
      area: "Cloud & Platforms",
      items: ["Microsoft Azure", "AWS", "GCP", "Databricks", "Snowflake"],
    },
  ],
  industries: [
    "Financial services (Rabobank, de Volksbank, Achmea, Obvion)",
    "Logistiek (PostNL, Mileway)",
    "Energie (Gulf)",
    "Publieke sector (Brandweer, ABG)",
    "Vastgoed",
  ],
  values: [
    {
      title: "Senior aan tafel",
      description:
        "Niet een gepensioneerde architect op afstand, ook geen junior in een blauwe trui. Een senior die zowel ontwerpt als zelf bouwt.",
    },
    {
      title: "Business voor techniek",
      description:
        "Techniek is altijd middel, nooit doel. Wat de business kan met de oplossing telt zwaarder dan welke tool we kiezen.",
    },
    {
      title: "Werkende oplossingen",
      description:
        "Liever een eerste werkend resultaat na vier weken dan een perfect plan na vier maanden. Iteratie boven big bang.",
    },
    {
      title: "Geen vendor lock-in",
      description:
        "Ik bouw zo dat jouw team het overneemt. Geen afhankelijkheid van DC Data Consultancy — wel een goede samenwerking als je dat wilt.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// LOCAL SEO PAGE — BREDA
// ─────────────────────────────────────────────────────────────────────────────

export const bredaPage = {
  metaTitle: "Data Consultant Breda | DC Data Consultancy",
  metaDescription:
    "Senior data engineering consultant gevestigd in Breda. Voor opdrachtgevers in Noord-Brabant en heel Nederland. Data pipelines, dataplatforms, Power BI en AI.",
  hero: {
    eyebrow: "Data consultancy in Breda",
    heading: "Senior data engineering consultancy vanuit Breda — voor heel Nederland.",
    intro:
      "DC Data Consultancy is gevestigd in Breda, Noord-Brabant. Ik werk voor opdrachtgevers in de regio West-Brabant, Tilburg, Eindhoven, Rotterdam, maar ook door heel Nederland en remote.",
  },
  whyBreda: {
    heading: "Waarom Breda?",
    paragraphs: [
      "Breda zit strategisch tussen de Randstad en Brabant — uitstekend bereikbaar via de A16, A27 en A58, en op een uur per HSL van Amsterdam, Rotterdam, Antwerpen en Brussel. Voor Brabantse opdrachtgevers (Tilburg, Eindhoven, Den Bosch, Roosendaal) ben ik bovendien lokaal aanspreekbaar.",
      "Een groot deel van mijn opdrachten draait remote of hybride. Voor sessies op locatie — zoals workshops met stakeholders, architectuur-reviews of pair-engineering — ben ik flexibel en kom ik graag langs.",
    ],
  },
  servicesInBreda: {
    heading: "Wat ik voor opdrachtgevers in en rond Breda doe",
    items: [
      "Data engineering en dataplatform-architectuur",
      "dbt-implementatie en analytics engineering",
      "Azure en Databricks data engineering",
      "Power BI architectuur en semantic layers",
      "Data science (forecasting, churn, anomaly detection)",
      "Interim rollen als senior of lead data engineer",
    ],
  },
  regions: {
    heading: "Regio's waar ik veelvuldig werk",
    items: [
      "Breda en West-Brabant",
      "Tilburg en omgeving",
      "Eindhoven (Brainport)",
      "Den Bosch en Midden-Brabant",
      "Rotterdam en de Zuidvleugel",
      "Utrecht en Amsterdam (Randstad)",
      "Remote / heel Nederland",
    ],
  },
  localTrust: {
    heading: "Wat opdrachtgevers in Brabant en daarbuiten waarderen",
    items: [
      "Direct senior aanspreekpunt — geen accountmanager als tussenlaag",
      "Nederlandstalig en in Nederland gevestigd (geen offshoring)",
      "Korte lijnen voor onsite werk of werksessies",
      "Werk volgens Nederlandse standaarden voor privacy en governance (AVG)",
    ],
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDIES
// ─────────────────────────────────────────────────────────────────────────────

export const casesPage = {
  metaTitle: "Cases | DC Data Consultancy",
  metaDescription:
    "Een selectie van geanonimiseerde cases uit financial services, logistiek, vastgoed en energie — van dataplatform-architectuur tot dbt-implementaties.",
  hero: {
    eyebrow: "Cases",
    heading: "Wat ik concreet heb gebouwd.",
    intro:
      "Een greep uit geanonimiseerde opdrachten van de afgelopen jaren. Sommige zijn meerjarige trajecten, andere strakke deelopdrachten met een duidelijk afgebakend doel.",
  },
  cases: [
    {
      slug: "retailbank-dwh",
      industry: "Financial Services — Retailbank",
      role: "Lead data engineer",
      challenge:
        "Versplinterd datalandschap met meerdere legacy datawarehouses, conflicterende klantdefinities en geen vertrouwen in rapportages.",
      approach:
        "Doelarchitectuur op één A4 ontworpen, daarna een Azure Synapse + dbt platform opgezet. Naar binnen toe gewerkt: eerst kritische marts (klant, product, transactie), daarna stap voor stap meer bronnen.",
      outcome:
        "Eén bron van waarheid voor klant- en transactiedata. Dashboards die in plaats van twee weken nu twee dagen kosten. dbt-codebase met 200+ models, getest en gedocumenteerd.",
      tech: ["Azure Synapse", "Azure Data Factory", "dbt Cloud", "Power BI", "GitHub Actions"],
    },
    {
      slug: "logistiek-forecasting",
      industry: "Logistiek — Pakketdistributie",
      role: "Senior data engineer / analytics engineer",
      challenge:
        "Volumes zaten in tientallen Excel-bestanden bij regio-managers, geen consistente forecast op nationaal niveau.",
      approach:
        "Volumes geïntegreerd in het centrale datawarehouse via ADF. dbt-modellering voor business metrics. Daarbovenop een forecasting model gebouwd op Databricks met MLflow.",
      outcome:
        "Wekelijkse nationale volume-forecast met confidence intervals. Planning- en capaciteitskeuzes onderbouwd in plaats van gevoelsmatig. Forecast accuracy verbeterd ten opzichte van de oude regionale schattingen.",
      tech: ["Azure Data Factory", "Databricks", "dbt", "MLflow", "Power BI"],
    },
    {
      slug: "verzekeraar-anomaly",
      industry: "Financial Services — Verzekeraar",
      role: "Senior data engineer",
      challenge:
        "Claims-afdeling wilde verdachte patronen sneller detecteren. Bestaande regels waren statisch en gaven veel false positives.",
      approach:
        "Een streaming-architectuur opgezet voor claims-data. Anomaly detection model gebouwd dat continu wordt hertraind. Resultaten gevoed naar de bestaande case management tooling.",
      outcome:
        "Daling van false positives terwijl detectie van werkelijke verdachte claims toenam. Claims-team kan zich richten op wat er werkelijk toe doet.",
      tech: ["Azure Event Hubs", "Databricks Structured Streaming", "Python", "MLflow"],
    },
    {
      slug: "vastgoed-mds",
      industry: "Vastgoed — Pan-Europees",
      role: "Data platform architect",
      challenge:
        "Snelgroeiende organisatie met data verspreid over tientallen landen-systemen. Wilde een centraal platform voor portfolio-analyse.",
      approach:
        "Modern Data Stack opgezet: Snowflake als centraal warehouse, Fivetran voor ingestion, dbt voor modellering, Power BI als frontend. Governance via Snowflake RBAC en data masking.",
      outcome:
        "Pan-Europese portfolio rapportage in één tool. Lokale analisten kunnen self-service rapporten bouwen op de gemodelleerde laag.",
      tech: ["Snowflake", "Fivetran", "dbt", "Power BI", "Terraform"],
    },
    {
      slug: "energie-platform",
      industry: "Energie — Tankstation-keten",
      role: "Senior data engineer",
      challenge:
        "Transactiedata werd dagelijks in losse exports verwerkt; geen near-realtime inzicht in voorraad of omzet per station.",
      approach:
        "Ingestion herbouwd op basis van event streaming en micro-batch in Azure. Datawarehouse op Synapse, transformaties in dbt, dashboards in Power BI.",
      outcome:
        "Near-realtime inzicht in omzet en voorraad per station. Operations kan dezelfde dag bijsturen in plaats van een week later.",
      tech: ["Azure", "Synapse", "dbt", "Power BI"],
    },
    {
      slug: "publieke-sector-bi",
      industry: "Publieke sector",
      role: "Senior BI consultant",
      challenge:
        "Veel rapporten in losse Excel- en Access-bestanden, met inconsistente definities en handmatige maandelijkse rapportages.",
      approach:
        "Gemodelleerde laag opgezet in dbt op Azure SQL, met geautomatiseerde rapportage via Power BI. Workshops met inhoudelijke afdelingen om definities te harmoniseren.",
      outcome:
        "Geautomatiseerde maandrapportage; uren handmatig Excel-werk per maand bespaard. Definities centraal vastgelegd.",
      tech: ["Azure SQL", "dbt", "Power BI"],
    },
  ],
  disclaimer:
    "Cases zijn geanonimiseerd uit respect voor opdrachtgevers en hun NDA-afspraken. Bij een kennismakingsgesprek kan ik meer context geven.",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// INDUSTRIES PAGE
// ─────────────────────────────────────────────────────────────────────────────

export const industriesPage = {
  metaTitle: "Industrieën | DC Data Consultancy",
  metaDescription:
    "Data consultancy ervaring in financial services, logistiek, vastgoed, energie en publieke sector. Sector-specifieke aanpak voor data engineering en analytics.",
  hero: {
    eyebrow: "Sectoren",
    heading: "Waar mijn ervaring zit.",
    intro:
      "In acht jaar als data consultant heb ik in vijf sectoren gewerkt. Elke sector heeft zijn eigen data-uitdagingen — en zijn eigen patronen die je alleen leert door er meerdere keren te zijn geweest.",
  },
  industries: [
    {
      slug: "financial-services",
      name: "Financial Services",
      summary:
        "Banken, verzekeraars en pensioenfondsen. Strikte governance, regelgeving (DORA, BCBS 239, AVG) en hoge eisen aan auditability en lineage.",
      challenges: [
        "Regelgeving rondom data lineage en data quality",
        "Legacy mainframes / SAS-omgevingen integreren met cloud",
        "Risk reporting waar de directie persoonlijk voor tekent",
        "Customer 360 over silos van product-systemen",
      ],
      experience: ["Rabobank", "de Volksbank", "Achmea", "Obvion"],
    },
    {
      slug: "logistiek",
      name: "Logistiek & Supply Chain",
      summary:
        "Pakketdistributie, fulfilment en supply chain. Hoge volumes, near-realtime informatie en complexe planning.",
      challenges: [
        "Volume forecasting en capaciteitsplanning",
        "Track-and-trace data over meerdere systemen",
        "Optimalisatie van routes en sortering",
        "Integratie met partner-systemen",
      ],
      experience: ["PostNL"],
    },
    {
      slug: "vastgoed",
      name: "Vastgoed",
      summary:
        "Logistiek vastgoed, retail vastgoed en investment management. Pan-Europese portfolios, verschillende rapportage-standaarden.",
      challenges: [
        "Pan-Europese portfolio rapportage",
        "Asset performance en occupancy analytics",
        "Integratie van lokale property management systemen",
        "ESG- en duurzaamheidsrapportage",
      ],
      experience: ["Mileway"],
    },
    {
      slug: "energie",
      name: "Energie",
      summary:
        "Tankstation-ketens, energie-leveranciers en utility. Transactievolumes en operationele KPI's.",
      challenges: [
        "Realtime transactie-analyse",
        "Voorraad- en marge-analyse per locatie",
        "Integratie van POS-systemen",
        "Klant- en loyalty analyse",
      ],
      experience: ["Gulf"],
    },
    {
      slug: "publieke-sector",
      name: "Publieke sector",
      summary:
        "Veiligheid en overheid. Vaak een mix van legacy systemen en behoefte aan moderne BI.",
      challenges: [
        "Standaardisatie van rapportages",
        "Datakwaliteit in lange-doorlooptijd-processen",
        "Werken binnen strikte budgetten en aanbestedingsregels",
      ],
      experience: ["Brandweer", "ABG"],
    },
  ],
} as const;

export const footer = {
  tagline:
    "Senior data engineering consultancy uit Breda — voor organisaties die meer uit hun data willen halen.",
  linkedinUrl: siteConfig.linkedin,
  copyright: siteConfig.copyright,
} as const;
