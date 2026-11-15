// Central content file — single source of truth for all copy.
// Positioning: Senior Data Engineering Consultancy serving all of NL.
// DC Data Consultancy: actief sinds 2021, ervaring sinds 2016.

export const siteConfig = {
  name: "DC Data Consultancy",
  shortName: "DC Data",
  tagline: "Senior Data Consultancy",
  proposition:
    "Freelance senior data specialist. Ik bouw de dataplatforms waar BI, analytics en AI op kunnen vertrouwen, omdat zonder die fundering elke AI-pilot op ruis strandt.",
  url: "https://www.dcdataconsultancy.nl",
  email: "dennis@dcdataconsultancy.nl",
  phone: "06 36 27 70 71",
  phoneHref: "tel:+31636277071",
  linkedin: "https://www.linkedin.com/in/dennisvanburg/",
  city: "Breda",
  country: "Nederland",
  region: "Noord-Brabant",
  postalCode: "4811",
  foundedYear: 2021,
  experienceSince: 2016,
  copyright: `© ${new Date().getFullYear()} DC Data Consultancy. KvK Breda.`,
} as const;

export const navigation = [
  { label: "Diensten", href: "/diensten" },
  { label: "Data Engineering", href: "/diensten/data-engineering" },
  { label: "AI-interface", href: "/diensten/ai-interface" },
  { label: "Over Dennis", href: "/over-dennis" },
  { label: "Contact", href: "/#contact" },
] as const;

export const footerNav = {
  diensten: [
    { label: "Data Engineering", href: "/diensten/data-engineering" },
    { label: "Data Analytics", href: "/diensten/data-analytics" },
    { label: "Analytics Engineering", href: "/diensten/analytics-engineering" },
    { label: "AI-interface (MCP & semantic layer)", href: "/diensten/ai-interface" },
  ],
  bedrijf: [
    { label: "Over Dennis", href: "/over-dennis" },
    { label: "Insights", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE
// ─────────────────────────────────────────────────────────────────────────────

export const hero = {
  badge: "SENIOR DATA ENGINEERING & AI · NL",
  heading: "Je data klaar voor AI.",
  subheading:
    "Freelance senior data engineer. Ik zorg ervoor dat jij AI kunt gebruiken op je eigen data.",
  primaryCta: { label: "Plan een kennismaking", href: "/#contact" },
  secondaryCta: { label: "Bekijk de diensten", href: "/diensten" },
  trustBar: {
    label: "Gewerkt voor o.a.",
    clients: ["DrWorker", "Rabobank", "de Volksbank", "Achmea", "Obvion", "PostNL", "Mileway", "Gulf", "Brandweer", "ABG"],
  },
} as const;

export const offerSection = {
  sectionId: "aanpak",
  eyebrow: "Wat ik doe",
  heading: "Een dataplatform dat meegroeit met je organisatie.",
  intro: "Analytics en AI werken alleen als de basis klopt. Daar ligt mijn focus.",
  pillars: [
    {
      number: "01",
      title: "Data Engineering",
      tagline: "Pipelines en architectuur",
      description: "Data die op tijd, compleet en betrouwbaar binnenkomt, zonder handmatige fixes.",
      href: "/diensten/data-engineering",
      primary: true,
    },
    {
      number: "02",
      title: "Analytics Engineering",
      tagline: "Eén bron van waarheid",
      description: "Geteste, gedocumenteerde datamodellen met definities waar business en BI op vertrouwen.",
      href: "/diensten/analytics-engineering",
      primary: false,
    },
    {
      number: "03",
      title: "AI Interface",
      tagline: "AI die je data begrijpt",
      description: "MCP-servers, een semantische laag en context, zodat AI-agents je data correct bevragen.",
      href: "/diensten/ai-interface",
      primary: false,
    },
  ],
} as const;

export const aboutSection = {
  sectionId: "over-dennis",
  eyebrow: "Wie ben ik",
  heading: "Dennis van Burg, senior data specialist.",
  role: "Eigenaar · Senior Data Specialist",
  bio: [
    "Sinds 2016 werk ik in data, sinds 2021 met DC Data Consultancy. Ik ontwerp, bouw en denk mee, samen met je team, door heel Nederland.",
  ],
  // highlights + industries are not shown on the homepage anymore; /over-dennis still renders highlights.
  highlights: [
    { value: "10+", label: "jaar ervaring in data" },
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
    "Retail & e-commerce",
  ],
  profileImage: "/images/profile-dennis.png",
  profileImageAlt: "Dennis van Burg, senior data specialist bij DC Data Consultancy",
  cta: { label: "Lees meer over Dennis", href: "/over-dennis" },
} as const;

export const processSection = {
  sectionId: "proces",
  eyebrow: "Aanpak",
  heading: "Geen powerpoint-strategie, maar werkende oplossingen.",
  intro: "Ik ontwerp, bouw en draag over, zodat je team het zelf verder kan.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description: "Een korte intake over je huidige situatie, knelpunten en doelen.",
    },
    {
      number: "02",
      title: "Architectuur & plan",
      description: "Een doelarchitectuur met fasering en technologiekeuzes.",
    },
    {
      number: "03",
      title: "Bouwen",
      description: "Hands-on, in sprints die elk iets bruikbaars opleveren.",
    },
    {
      number: "04",
      title: "Overdracht",
      description: "Documentatie, code reviews en kennisoverdracht aan je eigen team.",
    },
  ],
} as const;

export const quote = {
  text: "To ask the right question is harder than to answer it.",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE — AI INTERFACE (MCP · SEMANTIC LAYER · CONTEXT ENGINEERING)
// ─────────────────────────────────────────────────────────────────────────────

export const aiInterfaceSection = {
  sectionId: "ai-interface",
  eyebrow: "AI-interface",
  heading: "De interface bouwen waar AI-agents je data door lezen.",
  intro:
    "Een agent ziet alleen wat je hem aanreikt: tools, metrics en context. Die interface bouw je in je dataplatform, niet in een prompt.",
  layers: [
    {
      number: "01",
      title: "MCP",
      subtitle: "Model Context Protocol",
      summary:
        "Eén open protocol waarmee een LLM je data aanroept. Met access control en freshness-checks, zodat de agent geen data lekt of oude cijfers geeft.",
      href: "/diensten/ai-interface#mcp",
    },
    {
      number: "02",
      title: "Semantische laag",
      subtitle: "Metrics als contract",
      summary:
        "Business logic één keer vastleggen, in een semantic layer of een geteste gold-laag. Dan raadt de LLM geen definities en klopt het cijfer met het dashboard.",
      href: "/diensten/ai-interface#semantic-layer",
    },
    {
      number: "03",
      title: "Context engineering",
      subtitle: "Het venster vullen dat telt",
      summary:
        "Bepalen welke documenten en metadata het model ziet. Dat is een retrieval-pipeline met tests en verversing, geen promptkunstje.",
      href: "/diensten/ai-interface#context-engineering",
    },
  ],
  closing:
    "Alle drie draaien op betrouwbare pipelines en geteste metrics. AI verandert niet wat goede data engineering is, het maakt weglaten alleen duurder.",
  cta: { label: "Lees hoe ik dit bouw", href: "/diensten/ai-interface" },
} as const;

export const projects = {
  sectionId: "projecten",
  eyebrow: "Track record",
  heading: "Gewerkt voor partijen die data serieus nemen.",
  intro: "Van banken en verzekeraars tot logistiek en publieke sector.",
  clients: [
    { name: "DrWorker", logo: "/images/logo-drworker.png" },
    { name: "Gulf", logo: "/images/logo-gulf.png" },
    { name: "de Volksbank", logo: "/images/logo-volksbank.png" },
    { name: "Mileway", logo: "/images/logo-mileway.png" },
    { name: "PostNL", logo: "/images/logo-postnl.png" },
    { name: "Rabobank", logo: "/images/logo-rabobank.png" },
    { name: "Achmea", logo: "/images/logo-achmea.png" },
    { name: "Obvion", logo: "/images/logo-obvion.png" },
    { name: "Brandweer", logo: "/images/logo-brandweer.png" },
    { name: "ABG", logo: "/images/logo-abg.png" },
  ],
} as const;

export const testimonialsSection = {
  eyebrow: "Wat opdrachtgevers zeggen",
  heading: "Senior, hands-on en met oog voor de business.",
  intro:
    "Aanbevelingen van opdrachtgevers.",
  quotes: [
    {
      text: "Dennis is energiek, onderzoekend en een volwaardig sparringpartner die snel kan schakelen en oplossingen levert. De combinatie van analytische vaardigheden en conceptueel denkvermogen stelt hem in staat om complexe data uitdagingen met gemak aan te pakken. Als teamplayer blinkt hij uit door zijn social skills en heldere communicatie. Dennis is stressbestendig en pragmatisch wat hem slagvaardig maakt, zelfs onder de druk. Ik ben er zeker van dat Dennis een waardevolle aanwinst is voor ieder team dat op zoek is naar data expertise.",
      role: "Product Manager, financial services",
    },
    {
      text: "De afgelopen periode heb ik met veel plezier met Dennis samengewerkt. Samen hebben we een automatische document tagging systeem ontwikkeld dat gebruik maakt van AI. Dit systeem heeft ons in staat gesteld om documenten sneller en efficiënter te taggen, waardoor we onze processen konden versnellen en de nauwkeurigheid van onze data konden verhogen. Dennis is zeer ervaren in het gebruik van AI technologie en heeft veel kennis op het gebied van data analyse. Hij is een goede teamspeler die altijd bereid is om te helpen en te ondersteunen. Ik kan hem van harte aanbevelen aan iedereen die op zoek is naar een data analist met ervaring in AI technologie.",
      role: "Product Owner, vastgoed",
    },
    {
      text: "I worked with Dennis on a complicated data migration project. Dennis showed good communication skills and he looks at problems from different angles. I enjoyed working together with Dennis, he is a real teamplayer. Also, I gained more programming experience because of his good explanations. Highly recommend Dennis in any fast-paced environment!",
      role: "Collega, data engineering",
    },
    {
      text: "Dennis heeft 1,5 jaar voor ons gewerkt als Data Scientist in een hoog complexe, zeer dynamische omgeving. Hij is extreem kundig, communicatief sterk, denkt in oplossingen, neemt het team mee vooruit en zorgt zelf dat zijn werk er op tijd ligt. Als je de kans krijgt om Dennis in te huren als Data Scientist, en je laat die kans lopen ben je gek (in mijn ogen).",
      role: "Program manager, financial services",
    },
  ],
} as const;

export const contactSection = {
  sectionId: "contact",
  eyebrow: "Plan een kennismaking",
  heading: "Bel of mail me.",
  intro: "Vertel kort waar je staat. Dan kijken we samen of en hoe ik kan helpen.",
} as const;

export const finalCta = {
  heading: "Klaar om serieus met Data en AI aan de slag te gaan?",
  subheading: "Een kennismaking van 30 minuten: waar sta je nu en wat is realistisch haalbaar.",
  cta: { label: "Plan een kennismaking", href: "/#contact" },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGES — DATA ENGINEERING (FLAGSHIP)
// ─────────────────────────────────────────────────────────────────────────────

export const dataEngineeringPage = {
  slug: "data-engineering",
  title: "Data Engineering Consultancy",
  metaTitle: "Data Engineering Consultancy | DC Data Consultancy",
  metaDescription:
    "Senior data engineering consultancy. Schaalbare pipelines, cloud datawarehousing en geteste datamodellen als fundering voor BI, analytics en AI. Zonder betrouwbare data hallucineren LLM's.",
  hero: {
    eyebrow: "Hoofdspecialisatie",
    heading: "Data engineering die de basis legt voor alles wat erna komt.",
    subheading:
      "Een dashboard of LLM is nooit beter dan de pipeline eronder. Ik bouw data-architectuur waar BI, analytics en AI op kunnen vertrouwen.",
  },
  problems: [
    "Pipelines breken regelmatig en niemand krijgt een alert.",
    "Het datawarehouse is een spaghetti van views en stored procedures.",
    "Geen CI/CD, geen tests, geen lineage. Iedere wijziging duurt weken.",
    "AI-pilots stranden op inconsistente of verouderde data.",
  ],
  solution: {
    heading: "Een fundering die schaalt, niet weer een set losse oplossingen.",
    paragraphs: [
      "Ik bouw op bewezen patronen: een Medallion-architectuur (bronze, silver, gold), ELT op een cloud datawarehouse, tests en monitoring. Welk platform je gebruikt maakt weinig uit, het patroon eronder wel. Dat doe ik al meer dan tien jaar, onder andere bij Rabobank, waar pipelines miljarden transacties verwerken.",
    ],
  },
  capabilities: [
    {
      title: "Data pipelines (ELT/ETL)",
      description: "Ingestion en transformatie van bronsystemen naar het warehouse, met idempotente runs, retries en alerting.",
    },
    {
      title: "Lakehouse & Medallion",
      description: "Ruwe, geschoonde en business-klare data netjes gescheiden in bronze, silver en gold.",
    },
    {
      title: "Orchestration",
      description: "Geplande en afhankelijke runs met heldere status, retries en observability.",
    },
    {
      title: "Data quality & CI/CD",
      description: "Automatische tests, data contracts, Git-workflows en gescheiden dev- en prod-omgevingen.",
    },
    {
      title: "Cost & performance",
      description: "Partitionering, clustering en monitoring, zodat het platform betaalbaar blijft als volumes groeien.",
    },
  ],
  process: [
    {
      title: "Architectuur-review",
      description: "In één of twee sessies brengen we je stack, pijnpunten en doelarchitectuur in kaart.",
    },
    {
      title: "Iteratief bouwen",
      description: "Sprints van twee weken met demo's, zodat de eerste pipelines snel werken.",
    },
    {
      title: "Overdracht",
      description: "Documentatie, coaching en pair engineering, zodat je team het zelf overneemt.",
    },
  ],
  outcomes: [
    "Eén bron van waarheid voor business metrics, in code, getest en gedocumenteerd.",
    "Pipelines die voorspelbaar draaien, met alerting en duidelijke ownership.",
    "AI-agents die dezelfde metrics lezen als je dashboards.",
    "Een intern team dat zelfstandig doorbouwt, zonder afhankelijkheid van consultants.",
  ],
  faqs: [
    {
      q: "Wat onderscheidt jouw aanpak van een grote consultancy?",
      a: "Je werkt direct met de persoon die ontwerpt én bouwt, zonder accountmanager en team van junioren. Ik lever iteratief werkende oplossingen, geen dik rapport. En ik bouw zo dat je team het zelf kan voortzetten.",
    },
    {
      q: "We hebben al een dataplatform dat niet lekker loopt. Wat dan?",
      a: "Ik begin met een eerlijke review: wat houden, wat refactoren, wat stoppen. Geen rip-and-replace tenzij het echt nodig is. Gericht opschonen levert vaak snel vertrouwen terug.",
    },
    {
      q: "Hoe kies je welke technologie past?",
      a: "Ik kijk eerst naar je bestaande stack, de skills in het team, volumes en budget. Vaak volg ik de cloudstrategie die er al is en kies ik waar mogelijk voor oplossingen die je niet aan één leverancier binden.",
    },
    {
      q: "Doe je ook interim-rollen?",
      a: "Ja, als senior of lead data engineer, meestal voor 3 tot 9 maanden. Dan zit ik midden in het team: bouwen, richting geven en collega's meenemen.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGE — DATA ANALYTICS
// ─────────────────────────────────────────────────────────────────────────────

export const dataAnalyticsPage = {
  slug: "data-analytics",
  title: "Data Analytics Consultancy",
  metaTitle: "Data Analytics Consultancy | Dashboards & Semantic Layers",
  metaDescription:
    "Data analytics consultancy gericht op heldere business metrics, self service dashboards en analytics engineering op één gemodelleerde laag.",
  hero: {
    eyebrow: "Analytics dat staat",
    heading: "Van losse rapporten naar één betrouwbare bron van waarheid.",
    subheading:
      "Dashboards waarvan iedereen de cijfers vertrouwt, gebouwd op één set heldere business definities.",
  },
  problems: [
    "Drie afdelingen, drie verschillende omzetdefinities.",
    "Rapportbestanden die niemand meer durft aan te raken.",
    "Rapporten die elke maand handmatig worden bijgewerkt.",
    "Self-service is een ramp omdat de onderliggende data niet klopt.",
  ],
  solution: {
    heading: "Dashboards en rapportage waar de directie op kan sturen.",
    paragraphs: [
      "Eerst brengen we met finance, sales en operations de KPI-definities op één lijn. Daarna bouw ik dashboards op één gemodelleerde laag, zodat dezelfde KPI overal dezelfde waarde heeft. Handmatige spreadsheetrapportages verdwijnen en self-service gaat eindelijk werken.",
    ],
  },
  capabilities: [
    {
      title: "KPI-definitie & data dictionary",
      description: "Werksessies met finance, sales en operations om tot ondubbelzinnige business definities te komen.",
    },
    {
      title: "BI-architectuur",
      description: "Van losse rapportbestanden naar een schaalbare structuur met gedeelde datasets en row level security.",
    },
    {
      title: "Management reporting",
      description: "KPI-dashboards voor directie en MT op dezelfde metrics als finance en sales.",
    },
    {
      title: "Reporting automation",
      description: "Handmatige spreadsheetrapportages vervangen door subscriptions, alerts en automatische verspreiding.",
    },
    {
      title: "Self-service enablement",
      description: "Business users trainen zodat ze zelf rapporten bouwen zonder de data te corrumperen.",
    },
  ],
  process: [
    {
      title: "KPI-inventarisatie",
      description: "Welke metrics worden waar gebruikt en hoe zijn ze gedefinieerd? Bijna altijd vinden we tegenstrijdigheden.",
    },
    {
      title: "BI implementatie",
      description: "Dashboards bouwen op één gemodelleerde laag met geteste definities.",
    },
    {
      title: "Adoptie & training",
      description: "Workshops en documentatie, zodat het gebruik niet stopt na oplevering.",
    },
  ],
  outcomes: [
    "Eén consistente set business metrics in alle dashboards.",
    "Dashboards die de directie daadwerkelijk gebruikt om te sturen.",
    "Geen handmatige spreadsheetrapportages meer in de maandafsluiting.",
    "Self-service dat schaalt zonder data chaos.",
  ],
  faqs: [
    {
      q: "Hoe pak je conflicterende KPI-definities aan?",
      a: "Met mensen, niet met een tool. In werksessies brengen we grain, uitsluitingen en timing op één lijn, en pas daarna leggen we het vast.",
    },
    {
      q: "We hebben al tientallen rapporten. Moet alles opnieuw?",
      a: "Nee. Ik inventariseer welke rapporten echt gebruikt worden en start met één kritieke KPI-set, bijvoorbeeld omzet. Bestaande dashboards migreren we gefaseerd, niet in één big bang.",
    },
    {
      q: "Kunnen business users zelf rapporten maken?",
      a: "Ja, mits de laag eronder goed is ingericht met geteste data, documentatie en row level security. Anders krijg je weer losse spreadsheetvarianten.",
    },
    {
      q: "Hoe snel zien we iets werkends?",
      a: "Binnen enkele weken kan er een dashboard staan dat de directie gebruikt. Het eerste resultaat is vaak klein, maar wel betrouwbaar.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGE — ANALYTICS ENGINEERING
// ─────────────────────────────────────────────────────────────────────────────

export const analyticsEngineeringPage = {
  slug: "analytics-engineering",
  title: "Analytics Engineering Consultancy",
  metaTitle: "Analytics Engineering Consultancy | Betrouwbare metrics en marts",
  metaDescription:
    "Senior analytics engineering consultant. Datamodellering, geteste marts en semantic layers: business metrics die BI, stakeholders én AI-agents vertrouwen.",
  hero: {
    eyebrow: "Analytics engineering",
    heading: "Data die niet alleen technisch klopt, maar ook betekenis heeft voor de business.",
    subheading:
      "De brug tussen ruwe data en betrouwbare business metrics. Getest, gedocumenteerd en klaar voor BI én AI-agents.",
  },
  problems: [
    "Twee dashboards, twee omzetten, en niemand weet welk cijfer klopt.",
    "SQL-spaghetti in losse scripts zonder versiebeheer, tests of documentatie.",
    "Business logic leeft in losse rapporten en spreadsheets, niet in een gedeelde modellaag.",
    "AI-tools improviseren over ruwe tabellen omdat metrics nergens vastliggen.",
  ],
  solution: {
    heading: "Analytics engineering als discipline, niet als afterthought.",
    paragraphs: [
      "Ik modelleer data in gelaagde, geteste tabellen (bronze, silver, gold), waar business logic één keer wordt vastgelegd. Met CI/CD en documentatie krijgen finance, marketing, operations én AI-agents dezelfde cijfers. Zonder die laag moet een LLM business logic raden, en dat gaat overtuigend én stilzwijgend fout.",
    ],
  },
  capabilities: [
    {
      title: "Metric & KPI modellering",
      description: "Business metrics in code, met duidelijke definities, grain en aggregatielogica.",
    },
    {
      title: "Project design",
      description: "Structuur, naming conventions, sources en packages in een codebase die andere engineers snel oppakken.",
    },
    {
      title: "Testing & data quality",
      description: "Tests en freshness checks die regressies vangen voordat ze in BI landen.",
    },
    {
      title: "Semantic layer & BI-aansluiting",
      description: "Marts die aansluiten op elke BI-tool, zonder dubbele logica in het dashboard.",
    },
    {
      title: "Documentation & lineage",
      description: "Documentatie als data catalog: waar komt een metric vandaan en welke rapporten hangen eraan?",
    },
  ],
  process: [
    { title: "Metrics audit", description: "Welke KPI's bestaan er, waar leven ze nu en waar conflicteren ze?" },
    { title: "Bouwen & migreren", description: "Marts opbouwen of legacy SQL migreren, met conventies, peer review en CI/CD." },
    { title: "Enablement", description: "Workshops zodat het interne team zelfstandig verder modelleert." },
  ],
  outcomes: [
    "Eén set cijfers waar de hele organisatie op vertrouwt.",
    "Business logic die getest, geversioneerd en gedocumenteerd is.",
    "Minder discussie over definities, meer sturen op data.",
    "Een team dat zelfstandig marts en metrics uitbreidt.",
  ],
  faqs: [
    {
      q: "Wat is analytics engineering precies?",
      a: "Ruwe data omzetten naar betrouwbare, business-gerichte tabellen met versiebeheer, tests, documentatie en CI/CD. Het is de brug tussen data engineering (pipelines) en data analytics (BI en rapportages).",
    },
    {
      q: "Gaat dit vooral over een tool?",
      a: "Nee. Analytics engineering gaat over metric-definities met stakeholders, modelleringsstrategie, BI-aansluiting en een manier van werken in je team. De tooling volgt daaruit.",
    },
    {
      q: "Hebben we eerst data engineering nodig?",
      a: "Idealiter wel, want modelleren op onbetrouwbare data is vechten tegen datakwaliteit. In de praktijk pak ik beide vaak in één traject aan.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGE — AI INTERFACE (MCP · SEMANTISCHE LAAG · CONTEXT ENGINEERING)
// ─────────────────────────────────────────────────────────────────────────────

export const aiInterfacePage = {
  slug: "ai-interface",
  title: "De interface voor AI-agents",
  metaTitle: "MCP, semantic layer & context engineering | DC Data Consultancy",
  metaDescription:
    "De datalaag waar AI-agents op draaien: MCP-servers, een semantische laag (semantic layer of geteste gold-laag) en context engineering. Tool-neutraal, want LLM-toepassingen staan of vallen met data engineering en analytics engineering.",
  hero: {
    eyebrow: "AI-interface",
    heading: "De interface bouwen waar AI-agents je organisatie door lezen.",
    subheading:
      "Een agent ziet alleen de tools, metrics en context die je hem geeft. Dat is data engineering, geen prompt-werk.",
  },
  pillars: [
    {
      id: "mcp",
      eyebrow: "Laag 01",
      title: "MCP: het stopcontact tussen model en dataplatform",
      lead:
        "Een open standaard waarmee een LLM tools en bronnen aanroept. Je koppelt je dataplatform één keer, niet per AI-tool.",
      body: [
        "Zo'n server is een productiekoppeling op je warehouse, met een agent die zelf kiest wat hij aanroept. Elke tool heeft dus een strak contract nodig: afgebakende input, voorspelbare output, duidelijke foutmeldingen.",
      ],
      whyEngineering: {
        heading: "Waar het op aankomt",
        points: [
          "Toegangsrechten reizen mee: row-level security en identity pass-through in de datalaag, niet in de prompt.",
          "Tools geven aan hoe actueel de data is, zodat een gebroken load niet verzwegen wordt.",
          "Exposeer gemodelleerde marts en metrics, geen ruwe brontabellen.",
          "Elke aanroep is gelogd: welke agent, namens wie, welke data.",
        ],
      },
    },
    {
      id: "semantic-layer",
      eyebrow: "Laag 02",
      title: "De semantische laag: metrics als contract",
      lead:
        "Business logic één keer vastleggen, zodat dashboard en agent hetzelfde cijfer geven. Met een semantic layer of een geteste gold-laag.",
      body: [
        "Laat je een model zelf SQL schrijven over ruwe tabellen, dan raadt het de business logic en klinkt een fout antwoord overtuigend. Laat het kiezen uit gedefinieerde metrics, dan zegt het 'bestaat niet' in plaats van iets te verzinnen.",
      ],
      whyEngineering: {
        heading: "Waar het op aankomt",
        points: [
          "Definities zijn met de business afgesproken: wat telt als omzet, hoe gaan we om met storno's.",
          "Tests op uniciteit, niet-null, integriteit en freshness lopen mee in CI.",
          "Documentatie en lineage zijn machineleesbaar, zodat het model de juiste bron kiest.",
        ],
      },
    },
    {
      id: "context-engineering",
      eyebrow: "Laag 03",
      title: "Context engineering: bepalen wat het model wél ziet",
      lead:
        "Welke documenten, metadata en metrics gaan het contextvenster in, en hoe vers zijn ze. Daar zit de meeste kwaliteitswinst, niet in de prompt.",
      body: [
        "In de praktijk is dat een retrieval-pipeline: ontsluiten, dedupliceren, chunken, embeddings verversen en permissies meenemen. Met een evaluatieset meet je of een wijziging het beter of slechter maakt.",
      ],
      whyEngineering: {
        heading: "Waar het op aankomt",
        points: [
          "Een vector store is een dataproduct, met eigenaar, verversing en monitoring.",
          "Verouderde context is de meest voorkomende bron van hallucinaties.",
          "Filteren op autorisatie gebeurt vóór het ophalen, niet in de prompt.",
          "Een gouden set vragen in CI maakt kwaliteit meetbaar.",
        ],
      },
    },
  ],
  problems: [
    "Indrukwekkende demo's, maar niemand vertrouwt de antwoorden in productie.",
    "De chatbot schrijft zelf SQL en geeft andere cijfers dan het dashboard.",
    "De assistent citeert documentatie die al maanden achterhaald is.",
    "Security blokkeert de uitrol omdat rechten niet meereizen.",
  ],
  useCases: [
    {
      title: "Praten met je cijfers",
      description:
        "Vragen in gewone taal over omzet of marge, beantwoord uit dezelfde definities als het dashboard.",
      icon: "MessageSquare",
    },
    {
      title: "Kennisassistent op interne documenten",
      description:
        "Beleid, procedures en contracten doorzoekbaar voor een LLM, actueel en binnen ieders rechten.",
      icon: "BookOpen",
    },
    {
      title: "Agents die acties uitvoeren",
      description:
        "Een case aanmaken of een run herstarten, via MCP-tools met strakke contracten en audit logging.",
      icon: "Bot",
    },
    {
      title: "Je dataplatform zelf bevraagbaar",
      description:
        "Catalog, lineage en documentatie via MCP ontsluiten: waar komt deze metric vandaan, wat breekt er als ik dit wijzig.",
      icon: "Plug",
    },
  ],
  process: [
    {
      title: "AI-readiness review",
      description: "Welke use case, data, definities en rechten? In één of twee sessies helder wat er al kan.",
    },
    {
      title: "Fundering op orde",
      description: "Pipelines en marts verbeteren voor precies de data die de use case raakt.",
    },
    {
      title: "Interface bouwen",
      description: "Semantische laag, retrieval en MCP-server, met authenticatie, logging en evaluatie.",
    },
    {
      title: "Meten en overdragen",
      description: "Monitoring op kwaliteit, kosten en versheid. Je team breidt daarna zelf uit.",
    },
  ],
  faqs: [
    {
      q: "Waarom niet gewoon text-to-SQL op ons warehouse?",
      a: "Dan moet het model de business logic raden: annuleringen, valuta, fiscaal jaar. Het antwoord ziet er goed uit en is fout. Met gedefinieerde metrics of gecureerde gold-tabellen is die gokruimte weg.",
    },
    {
      q: "Hebben we een semantic layer nodig, of is onze gold-laag genoeg?",
      a: "Vaak is een geteste, gedocumenteerde gold-laag genoeg. Een aparte semantic layer loont vooral bij veel metric-varianten, meerdere BI-tools of zware governance-eisen.",
    },
    {
      q: "Moeten onze pipelines eerst helemaal op orde zijn?",
      a: "Nee, alleen het deel dat de use case raakt. Ik werk vanuit één concrete vraag terug naar de data die daarvoor nodig is.",
    },
    {
      q: "Hoe voorkom je dat een agent data laat zien die iemand niet mag zien?",
      a: "Door autorisatie in de datalaag te regelen, niet in de prompt. Identity pass-through, row-level security, permissiefilters vóór retrieval en audit logging op elke aanroep.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT PAGE
// ─────────────────────────────────────────────────────────────────────────────

export const aboutPage = {
  metaTitle: "Over Dennis van Burg | Senior Data Engineering Consultant",
  metaDescription:
    "Dennis van Burg is senior data engineering consultant en oprichter van DC Data Consultancy. Sinds 2016 actief in data, sinds 2021 als zelfstandig consultant.",
  hero: {
    eyebrow: "Over Dennis van Burg",
    heading: "Senior data specialist. Hands-on, met oog voor de business.",
    intro:
      "Sinds 2016 werk ik in data, sinds 2021 met DC Data Consultancy. Ik ontwerp, bouw en denk mee over wat de business nodig heeft.",
  },
  story: [
    {
      heading: "Van analytics naar engineering",
      paragraphs: [
        "Ik begon als Data Scientist en liep steeds tegen hetzelfde aan: de fundering onder de analyses was niet betrouwbaar. Daarom verschoof mijn focus naar data engineering.",
      ],
    },
    {
      heading: "Eigen consultancy sinds 2021",
      paragraphs: [
        "Ik werk rechtstreeks voor opdrachtgevers, zonder bureau ertussen. Meestal als senior consultant of lead, op het snijvlak van engineering en business.",
      ],
    },
    {
      heading: "Hoe ik werk",
      paragraphs: [
        "Meebouwen met je team in plaats van een adviesrapport schrijven. Techniek is een middel; wat de business ermee kan, telt.",
      ],
    },
  ],
  expertise: [
    {
      area: "Data Engineering",
      items: [
        "Pipelines en orchestration",
        "Datawarehousing en lakehouses",
        "Data modelling (dimensional, Data Vault)",
        "CI/CD, testing en data quality",
      ],
    },
    {
      area: "Analytics Engineering & BI",
      items: [
        "Medallion-architectuur: bronze, silver, gold",
        "BI en semantic layers",
        "KPI-definitie met stakeholders",
      ],
    },
  ],
  industries: [
    "Financial services (Rabobank, de Volksbank, Achmea, Obvion)",
    "Logistiek (PostNL)",
    "Energie (Gulf)",
    "Publieke sector (Brandweer, ABG)",
    "Vastgoed (Mileway)",
    "Retail & e-commerce (DrWorker)",
  ],
  values: [
    {
      title: "Senior aan tafel",
      description: "Eén senior die ontwerpt en zelf bouwt, met korte lijnen.",
    },
    {
      title: "Werkende oplossingen",
      description: "Liever snel een eerste werkend resultaat dan een perfect plan na maanden.",
    },
    {
      title: "Geen vendor lock-in",
      description: "Ik bouw zo dat jouw team het zelf kan overnemen.",
    },
  ],
} as const;

export const footer = {
  tagline:
    "Senior data engineering consultancy voor organisaties in heel Nederland die meer uit hun data willen halen.",
  linkedinUrl: siteConfig.linkedin,
  copyright: siteConfig.copyright,
} as const;
