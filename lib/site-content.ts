// Central content file — single source of truth for all copy.
// Positioning: Senior Data Engineering Consultancy based in Breda, NL.
// DC Data Consultancy: actief sinds 2021, ervaring sinds 2016.

export const siteConfig = {
  name: "DC Data Consultancy",
  shortName: "DC Data",
  tagline: "Senior Data Consultancy",
  proposition:
    "Freelance senior data specialist. Ik bouw de dataplatforms waar BI, analytics en AI op kunnen vertrouwen, omdat zonder die fundering elke AI-pilot op ruis strandt.",
  url: "https://www.dcdataconsultancy.nl",
  email: "dennis@dcdataconsultancy.nl",
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
    { label: "Analytics Engineering", href: "/diensten/analytics-engineering" },
    { label: "AI-interface (MCP & semantic layer)", href: "/diensten/ai-interface" },
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
    { label: "Data Consultant Randstad", href: "/data-consultant-randstad" },
    { label: "Data Consultant Breda", href: "/data-consultant-breda" },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE
// ─────────────────────────────────────────────────────────────────────────────

export const hero = {
  badge: "SENIOR ANALYTICS ENGINEERING · NL",
  heading: "Een dataplatform dat doet wat het belooft.",
  subheading:
    "Freelance senior data specialist. Al meer dan tien jaar bouw ik datapipelines en platforms waar BI, analytics en AI op kunnen draaien. Hands-on, samen met een team, met het resultaat voor ogen.",
  primaryCta: { label: "Plan een kennismaking", href: "/contact" },
  secondaryCta: { label: "Lees over analytics engineering", href: "/diensten/analytics-engineering" },
  trustBar: {
    label: "Gewerkt voor o.a.",
    clients: ["Rabobank", "de Volksbank", "Achmea", "Obvion", "PostNL", "Mileway", "Gulf", "Brandweer", "ABG"],
  },
} as const;

export const problemSection = {
  sectionId: "uitdagingen",
  eyebrow: "Herkenbaar?",
  heading: "Data zou tijd moeten besparen en belangrijke beslissingen moeten ondersteunen.",
  intro:
    "In de praktijk werkt het vaak andersom. Data kost tijd, cijfers kloppen niet, en zonder die fundering strandt ook elke AI-ambitie op ruis.",
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
        "Een simpele vraag uit de business kost twee weken, terwijl de markt allang verder is.",
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
      title: "AI zonder datafundering",
      description:
        "Een LLM-pilot ziet er indrukwekkend uit in de demo, maar antwoordt op verouderde of inconsistente data. Slechte data wordt niet zichtbaar fout, maar overtuigend fout.",
    },
  ],
} as const;

export const offerSection = {
  sectionId: "aanpak",
  eyebrow: "Wat ik doe",
  heading: "Een dataplatform dat meegroeit met je organisatie.",
  intro:
    "Geen losse projecten, maar een fundering die jaren meegaat. Mijn focus ligt op data/analytics engineering: analytics en AI werken alleen als die basis klopt.",
  pillars: [
    {
      number: "01",
      title: "Data Engineering",
      tagline: "Pipelines en architectuur die je vertrouwt",
      description:
        "Data die op tijd, compleet en betrouwbaar binnenkomt. Geen handmatige fixes meer op maandagochtend. Dezelfde fundering waar BI én AI op moeten kunnen rekenen.",
      href: "/diensten/data-engineering",
      primary: true,
    },
    {
      number: "02",
      title: "Analytics Engineering",
      tagline: "De brug die engineering en analytics verbindt",
      description:
        "Data die niet alleen technisch klopt, maar ook betekenis heeft voor het business. Eén bron van waarheid, getest en gedocumenteerd, zodat mensen én LLM's dezelfde taal spreken.",
      href: "/diensten/analytics-engineering",
      primary: false,
    },
    {
      number: "03",
      title: "Data Analytics",
      tagline: "Business metrics waar de directie op stuurt",
      description:
        "Cijfers waar de hele organisatie op vertrouwt, zonder discussie vooraf over wiens dashboard gelijk heeft.",
      href: "/diensten/data-analytics",
      primary: false,
    },
  ],
} as const;

export const techStack = {
  sectionId: "stack",
  eyebrow: "Modern Data Stack",
  heading: "Technologie in dienst van de business, niet andersom.",
  intro:
    "Ik ben niet met één tool getrouwd en adviseer wat in jouw situatie werkt. Geen hype, geen vendor lock-in zonder goede reden.",
  categories: [
    {
      name: "Cloud platforms",
      items: ["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)"],
    },
    {
      name: "Data warehousing & lakehouse",
      items: ["Snowflake", "Databricks", "Azure Synapse", "BigQuery", "Redshift", "ADLS", "S3", "Delta Lake", "Postgres"],
    },
    {
      name: "Transformation & modelling",
      items: ["dbt Core", "dbt Cloud", "SQL", "Python", "Pyspark", "R"],
    },
    {
      name: "Orchestration",
      items: ["Azure Data Factory", "Apache Airflow", "dbt Cloud"],
    },
    {
      name: "BI & visualisatie",
      items: ["Power BI"],
    },
    {
      name: "Data quality & governance",
      items: ["Great Expectations", "dbt tests", "Unity Catalog"],
    },
    {
      name: "AI & agents",
      items: ["MCP", "Semantic layer / metrics", "RAG & vector search", "Azure OpenAI", "Context engineering"],
    },
  ],
} as const;

export const aboutSection = {
  sectionId: "over-dennis",
  eyebrow: "Wie ben ik",
  heading: "Dennis van Burg, senior data specialist.",
  role: "Eigenaar · Senior Data Specialist",
  bio: [
    "Sinds 2016 werk ik aan datavraagstukken die ertoe doen. In 2021 startte ik DC Data Consultancy, om opdrachtgevers te helpen die niet alleen zoeken naar een paar extra handen, maar naar iemand die ontwerpt, bouwt, de juiste vragen stelt en richting geeft.",
    "Mijn werk zit op het snijvlak van engineering en business. Ik bouw geen pipelines om de pipelines, maar omdat finance op maandag op de cijfers moet kunnen rekenen, omdat marketing wil weten wat werkt, omdat de directie wil sturen op data in plaats van op aannames, en omdat AI alleen werkt als diezelfde cijfers en documenten kloppen.",
    "Ik werk graag over afdelingen heen, met het teamresultaat voor ogen. Daar haal ik energie uit: samen complexe vraagstukken aanpakken en dingen voor elkaar krijgen. Vanuit Breda werk ik door heel Nederland.",
  ],
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
  ],
  profileImage: "/images/profile-dennis.png",
  profileImageAlt: "Dennis van Burg, senior data specialist bij DC Data Consultancy",
  cta: { label: "Lees meer over Dennis", href: "/over-dennis" },
} as const;

export const processSection = {
  sectionId: "proces",
  eyebrow: "Aanpak",
  heading: "Geen powerpoint-strategie, maar werkende oplossingen.",
  intro:
    "Bij mij zijn strategie en uitvoering hetzelfde traject. Ik schrijf geen dik adviesrapport om daarna te verdwijnen, maar ontwerp, bouw, draag over en zorg dat je team het overneemt.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description:
        "Korte intake (1, 2 sessies). We brengen huidige architectuur, pijnpunten, stakeholders en business doelstellingen in kaart.",
    },
    {
      number: "02",
      title: "Architectuur & plan",
      description:
        "Concrete oplossing: doelarchitectuur, fasering, technologiekeuzes en verwacht businessresultaat per fase.",
    },
    {
      number: "03",
      title: "Bouwen",
      description:
        "Hands-on engineering. Iteratief opleveren in sprints met directe waarde, geen big bang na zes maanden.",
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
  attribution: "DENNIS VAN BURG · WERKPRINCIPE",
} as const;

export const aiUseCases = {
  sectionId: "ai",
  eyebrow: "AI & LLM",
  heading: "LLM-toepassingen die werken, omdat het dataplatform klopt.",
  intro:
    "Met MCP, een semantische laag en geëngineerde context als fundament worden dit de toepassingen die daadwerkelijk in productie overleven. Data engineering levert de bronnen; analytics engineering levert de betekenis. Zonder die twee krijg je hallucinaties in plaats van antwoorden.",
  cases: [
    {
      title: "RAG & kennisassistenten",
      description:
        "Een LLM die antwoord geeft uit interne documentatie, handleidingen of kennisbanken. Werkt alleen met betrouwbare ingestion, chunking, embeddings en een vector store. Dat is data engineering, niet prompt engineering.",
      icon: "BookOpen",
    },
    {
      title: "Natuurlijke taal over je cijfers",
      description:
        "Medewerkers stellen vragen in gewone taal en krijgen antwoord uit betrouwbare business metrics. Dat vraagt om een geteste gold-laag met duidelijke definities, precies waar analytics engineering voor bedoeld is.",
      icon: "MessageSquare",
    },
    {
      title: "Document intelligence",
      description:
        "Contracten, klachten, compliance-documenten of klantfeedback analyseren op schaal. LLM's kunnen lezen, maar iemand moet de documenten betrouwbaar binnenhalen, structureren en beveiligen. Dat is data engineering.",
      icon: "FileSearch",
    },
    {
      title: "AI-agents met bedrijfscontext",
      description:
        "Agents die niet alleen tekst genereren, maar acties uitvoeren op basis van actuele operationele data. Dat lukt alleen als pipelines tijdig draaien en marts één consistente waarheid leveren.",
      icon: "Bot",
    },
    {
      title: "Interne copilots",
      description:
        "Copilots voor sales, support of finance die productdata, policies en cases kunnen raadplegen. Zonder governance, lineage en actuele gestructureerde data wordt het een speeltje dat je niet kunt vertrouwen.",
      icon: "Sparkles",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE — AI INTERFACE (MCP · SEMANTIC LAYER · CONTEXT ENGINEERING)
// ─────────────────────────────────────────────────────────────────────────────

export const aiInterfaceSection = {
  sectionId: "ai-interface",
  eyebrow: "AI-interface",
  heading: "De interface bouwen waar AI-agents je data door lezen.",
  intro:
    "Een agent kan niet in je warehouse kijken. Hij ziet alleen wat je hem aanreikt: welke tools hij mag aanroepen, welke metrics gedefinieerd zijn en welke context in het venster past. Die interface bouw je niet in een prompt, die bouw je in je dataplatform. Drie lagen doen het werk, en geen ervan is aan één tool gebonden.",
  layers: [
    {
      number: "01",
      title: "MCP",
      subtitle: "Model Context Protocol",
      summary:
        "Eén open protocol waarmee een LLM tools, queries en bronnen aanroept, in plaats van per model een eigen integratie te schrijven.",
      whyDataEngineering:
        "Een MCP-server is niets anders dan een API op je dataplatform, met een agent als gebruiker die zelf kiest wanneer hij hem aanroept. Dat legt elke zwakke plek in je data engineering meteen bloot: een tool zonder access control lekt data naar een chatvenster, een tool zonder freshness-check geeft stilzwijgend cijfers van vorige week, en een tool die ruwe brontabellen exposeert dwingt het model om joins te verzinnen die het niet kan verifiëren. De agent stelt geen vervolgvraag als je pipeline vannacht is gebroken; hij antwoordt gewoon met verouderde data.",
      href: "/diensten/ai-interface#mcp",
    },
    {
      number: "02",
      title: "Semantische laag",
      subtitle: "Metrics als contract",
      summary:
        "Business logic één keer vastleggen en afdwingbaar maken. Dat kan met een echte semantic layer (dbt, Cube, LookML, AtScale, een Power BI-model), maar net zo goed met een strak beheerde gold-laag met tests en documentatie. Het patroon telt, niet het product.",
      whyDataEngineering:
        "Zonder zo'n laag moet een LLM zelf SQL schrijven over ruwe tabellen. Dan raadt hij de business logic: welke orders tellen mee, hoe zit het met annuleringen, welke valuta, welk fiscaal jaar. Het antwoord ziet er overtuigend uit en is stilletjes fout, precies het gevaarlijkste soort fout. Geef je in plaats daarvan een gecureerde set gemodelleerde tabellen of metrics, dan komt hetzelfde cijfer terug als in het directie-dashboard. Analytics engineering is hier de veiligheidsmaatregel: geteste modellen en vastgelegde definities zijn wat een LLM ervan weerhoudt om te improviseren.",
      href: "/diensten/ai-interface#semantic-layer",
    },
    {
      number: "03",
      title: "Context engineering",
      subtitle: "Het venster vullen dat telt",
      summary:
        "Bepalen wat een model wél ziet: welke documenten, welke metadata, welke lineage, in welke volgorde en binnen welk tokenbudget.",
      whyDataEngineering:
        "Context is geen promptkunstje maar een retrieval-probleem, en retrieval is een pipeline: ingestion, deduplicatie, chunking, embeddings, refresh-schema's, permissies per gebruiker en evaluatie of het opgehaalde stuk daadwerkelijk het antwoord bevat. Verouderde of dubbele documenten in de index zijn de directe oorzaak van hallucinaties die niemand kan verklaren. Wie zijn context niet als dataproduct behandelt (met eigenaar, tests en versiebeheer) bouwt een assistent die vandaag indruk maakt en volgend kwartaal niet meer vertrouwd wordt.",
      href: "/diensten/ai-interface#context-engineering",
    },
  ],
  closing:
    "Deze drie lagen delen één fundering: betrouwbare pipelines en geteste, gedocumenteerde metrics. Welke tools je daarvoor gebruikt is een implementatiekeuze. AI verandert niet wát goede data engineering is, het verhoogt alleen de prijs van het weglaten ervan.",
  cta: { label: "Lees hoe ik dit bouw", href: "/diensten/ai-interface" },
} as const;

export const services = {
  sectionId: "diensten",
  heading: "Diensten",
  subheading:
    "Data engineering staat centraal. Analytics engineering bouwt daar betrouwbare metrics op. Op die fundering werken BI en AI.",
  items: [
    {
      title: "Data Engineering",
      tagline: "Hoofdspecialisatie",
      description:
        "Schaalbare data pipelines (ELT/ETL), cloud datawarehouses, dbt gebaseerde modelleerlagen en orchestration. De basis zonder welke BI én AI niet te vertrouwen zijn.",
      icon: "Database",
      href: "/diensten/data-engineering",
      primary: true,
    },
    {
      title: "Analytics Engineering",
      tagline: "Betrouwbare metrics, getest en gedocumenteerd",
      description:
        "Gelaagde modellering, dbt marts en semantic layers. Eén bron van waarheid waar BI, stakeholders én AI-agents op vertrouwen.",
      icon: "GitBranch",
      href: "/diensten/analytics-engineering",
    },
    {
      title: "Data Analytics",
      tagline: "Inzicht met onderbouwing",
      description:
        "Van losse rapporten naar een gemodelleerde semantische laag met heldere business metrics en self service dashboards.",
      icon: "BarChart2",
      href: "/diensten/data-analytics",
    },
    {
      title: "AI-interface",
      tagline: "MCP, semantische laag, context",
      description:
        "De laag waarmee AI-agents je data veilig bevragen: MCP-servers, metrics als contract en context die klopt in plaats van hallucineert.",
      icon: "Plug",
      href: "/diensten/ai-interface",
    },
    {
      title: "Modern Data Stack",
      tagline: "Architectuur voor schaal",
      description:
        "Implementatie van moderne stack componenten (Snowflake, Databricks, dbt, Airflow) inclusief best practices voor governance en CI/CD.",
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
    "Een greep uit de opdrachtgevers van de afgelopen jaren, van retailbanken en verzekeraars tot logistieke en publieke organisaties.",
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
  eyebrow: "Aan de slag",
  heading: "Klaar voor een dataplatform dat staat?",
  intro:
    "Eén aanspreekpunt, korte lijnen en een eerste resultaat binnen weken in plaats van maanden. Of het nu gaat om een review van je architectuur, het opzetten van een dbt project of een interim rol als senior data engineer: neem contact op, dan denk ik vrijblijvend mee.",
  fields: {
    name: { label: "Naam", placeholder: "Voor en achternaam" },
    email: { label: "Zakelijk emailadres", placeholder: "naam@bedrijf.nl" },
    company: { label: "Bedrijf", placeholder: "Bedrijfsnaam" },
    message: {
      label: "Wat is de uitdaging?",
      placeholder: "Vertel kort over je dataomgeving, het probleem en het gewenste resultaat.",
    },
  },
  submitLabel: "Stuur bericht",
  responseTime: "Reageert zo snel mogelijk.",
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
  heading: "Klaar om je datafundering serieus te nemen?",
  subheading:
    "Een kennismaking van 30 minuten: een eerlijke blik op waar je nu staat, wat realistisch haalbaar is, en of je platform klaar is voor analytics én AI.",
  cta: { label: "Plan een kennismaking", href: "/contact" },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGES — DATA ENGINEERING (FLAGSHIP)
// ─────────────────────────────────────────────────────────────────────────────

export const dataEngineeringPage = {
  slug: "data-engineering",
  title: "Data Engineering Consultancy",
  metaTitle: "Data Engineering Consultancy | DC Data Consultancy",
  metaDescription:
    "Senior data engineering consultancy. Schaalbare pipelines, cloud datawarehousing en dbt als fundering voor BI, analytics en AI. Zonder betrouwbare data hallucineren LLM's.",
  hero: {
    eyebrow: "Hoofdspecialisatie",
    heading: "Data engineering die de basis legt voor alles wat erna komt.",
    subheading:
      "Een dashboard is nooit beter dan de pipeline eronder. Een LLM evenmin. Ik bouw schaalbare, betrouwbare data-architectuur waar je BI, analytics en AI op kunt vertrouwen.",
  },
  problems: [
    "Pipelines breken regelmatig en er is geen alerting.",
    "Verschillende teams hanteren verschillende business definities.",
    "Het datawarehouse is een spaghetti van views en stored procedures.",
    "Iedere wijziging duurt weken en niemand durft te refactoren.",
    "Er is geen CI/CD, geen testing en geen documentatie van data lineage.",
    "AI-pilots stranden omdat agents antwoorden op inconsistente of verouderde data.",
  ],
  solution: {
    heading: "Een fundering die schaalt, niet weer een set losse oplossingen.",
    paragraphs: [
      "Ik ontwerp en bouw moderne data-architectuur op basis van bewezen patronen: een gelaagde Medallion-architectuur (bronze, silver, gold), ELT op een cloud datawarehouse, geautomatiseerde tests en monitoring.",
      "De tool maakt me niet zoveel uit. Het patroon eronder wel. Of je nu op Azure, AWS, Snowflake of Databricks zit: een goede laagopbouw, betrouwbare pipelines en heldere business definities zijn belangrijker dan welk logo op de stack staat. Dat geldt dubbel voor AI. Een LLM vult ontbrekende logica zelf in en presenteert het resultaat overtuigend. Slechte data wordt daarmee niet zichtbaar fout, maar onzichtbaar fout.",
      "Dat doe ik al meer dan tien jaar, onder andere bij Rabobank, waar de pipelines miljarden transacties verwerken. Het resultaat is een platform waar pipelines voorspelbaar lopen, business metrics één bron hebben, AI-agents dezelfde waarheid lezen als je dashboards, en je eigen team verder kan bouwen zonder afhankelijk te blijven van consultants.",
    ],
  },
  capabilities: [
    {
      title: "Data pipelines (ELT/ETL)",
      description:
        "Robuuste ingestion en transformatie van bronsystemen naar het datawarehouse, met idempotente runs, retries en alerting.",
    },
    {
      title: "Lakehouse",
      description:
        "Een gelaagde opbouw in bronze, silver en gold, zodat ruwe data, geschoonde data en business-klare modellen netjes gescheiden blijven. Het warehouse zelf is een keuze, het patroon staat vast.",
    },
    {
      title: "Data modelling met Medallion-architectuur",
      description:
        "Een gelaagd model (bronze → silver → gold) met sources, tests, snapshots en documentatie. Eén centrale plek voor business metrics.",
    },
    {
      title: "Orchestration",
      description:
        "DAG-gedreven orchestration met Azure Data Factory, dbt of Airflow, inclusief observability.",
    },
    {
      title: "Data quality & testing",
      description:
        "Automatische data tests (uniqueness, niet null, referentiële integriteit), data contracts en Great Expectations voor zware checks.",
    },
    {
      title: "CI/CD voor data",
      description:
        "Git-gebaseerde workflows, automatische deploys, environment scheiding (dev/prod) en peer review op datamodellen.",
    },
    {
      title: "Documentation & lineage",
      description:
        "Self-service documentatie, end-to-end lineage en heldere business glossaries, zodat nieuwe teamleden binnen een week productief zijn.",
    },
    {
      title: "Cost & performance",
      description:
        "Slimme partitionering, clustering, materialisatiestrategie en monitoring, zodat je dataplatform betaalbaar blijft naarmate volumes groeien.",
    },
  ],
  process: [
    {
      title: "Architectuur-review",
      description:
        "In één of twee sessies brengen we je huidige stack, pijnpunten en doelarchitectuur in kaart.",
    },
    {
      title: "Doel-architectuur",
      description:
        "Concrete blueprint, fasering en technologiekeuze, gericht op meetbare business outcomes.",
    },
    {
      title: "Iteratief bouwen",
      description:
        "Sprints van 2 weken, demo's met stakeholders, vroege oplevering van eerste werkende pipelines.",
    },
    {
      title: "Overdracht",
      description:
        "Documentatie, hands-on coaching en pair engineering met je interne team, zodat je het zelf overneemt.",
    },
  ],
  outcomes: [
    "Eén bron van waarheid voor business metrics, gedefinieerd in code, getest en gedocumenteerd.",
    "Pipelines die voorspelbaar draaien, met alerting en duidelijke ownership.",
    "Verkorte time-to-insight: van weken naar dagen voor nieuwe vragen uit de business.",
    "Een platform dat schaalt naar nieuwe bronnen, nieuwe gebruikers en AI-use cases zonder herontwerp.",
    "AI-agents die dezelfde metrics lezen als je dashboards, omdat de definities vastliggen.",
    "Een intern team dat zelfstandig kan doorbouwen, zonder vendor lock-in op consultants.",
  ],
  stack: [
    "Azure (ADF, Synapse, Fabric, ADLS Gen2)",
    "AWS (Glue, Redshift, Athena, S3, SageMaker)",
    "Google Cloud (BigQuery)",
    "Snowflake",
    "Databricks",
    "Spark & PySpark",
    "dbt Core & dbt Cloud",
    "Airflow",
    "Python, SQL & R",
    "Terraform",
    "GitHub Actions / Azure DevOps",
  ],
  faqs: [
    {
      q: "Wat onderscheidt jouw aanpak van een grote consultancy?",
      a: "Je werkt direct met de persoon die ontwerpt én bouwt. Geen partner op afstand, geen team van junioren achter een accountmanager. Mijn focus ligt op wat de business ermee kan, niet op welke tool het mooiste in een deck staat. We leveren iteratief werkende oplossingen, geen dik rapport dat na drie maanden in een la verdwijnt. En ik bouw bewust zó dat jouw team het zelfstandig kan voortzetten, zonder blijvende afhankelijkheid van DC Data Consultancy.",
    },
    {
      q: "Hoe ziet de start van een opdracht eruit?",
      a: "Eerst stel ik de juiste vragen: waar zit de échte bottleneck, wat moet het opleveren voor finance, marketing of operations? Daarna volgt een korte discovery en een concreet plan op één A4: doelarchitectuur, fasering en verwacht resultaat per fase. Vervolgens ga ik hands-on bouwen in korte sprints. Liever na vier weken een werkende pipeline dan na vier maanden een perfect ontwerp op papier.",
    },
    {
      q: "Kan mijn interne team het platform daarna zelf draaien?",
      a: "Dat is expliciet het doel. Ik documenteer, review code samen met je team, doe pair engineering en geef kennisoverdracht waar dat nodig is. Geen black box, geen vendor lock-in. Als ik klaar ben, moet een ander data engineer het platform kunnen oppakken en blijven uitbreiden zonder mij.",
    },
    {
      q: "Hoe kies je welke technologie past bij onze situatie?",
      a: "Techniek is middel, geen doel. Ik kijk eerst naar jullie bestaande stack, skills in het team, volumes, budget en wat de business concreet nodig heeft. Daarna adviseer ik wat werkt, niet wat het meeste hype heeft. Vaak volg ik de cloudstrategie die er al is (in financial services vaak Azure), en kies ik voor cloud-agnostische tools als Snowflake of dbt waar dat de flexibiliteit vergroot.",
    },
    {
      q: "Wat is het verschil tussen ETL en ELT, en wat raad je aan?",
      a: "Bij klassieke ETL transformeer je data vóórdat hij in het warehouse landt. Bij ELT laad je eerst ruwe data in en transformeer je dáár met SQL en dbt. Voor moderne cloudplatforms is ELT vrijwel altijd de betere keuze: goedkoper, beter testbaar en makkelijker te onderhouden. De keuze hangt altijd af van jullie situatie. Ik leg uit waarom iets past, niet alleen wat de standaard is.",
    },
    {
      q: "Doe je ook interim- of detacheringsrollen?",
      a: "Ja. Naast projecten neem ik interim-rollen aan als senior of lead data engineer, meestal 4 tot 5 dagen per week, voor 3 tot 9 maanden. Dan zit ik midden in het team: bouwen, richting geven en collega's meenemen, zonder een laag consultants eromheen.",
    },
    {
      q: "Hoe zit het met data governance en privacy (AVG/GDPR)?",
      a: "Governance hoort bij het platform, niet ernaast. Ik werk standaard met rolgebaseerde toegang, audit logs, encryptie en data classificatie via tools als Unity Catalog of Microsoft Purview. Voor persoonsgegevens: masking, tokenisatie en strikte access policies. Geen compliance-theater, wel afspraken die in de praktijk werken voor jullie team.",
    },
    {
      q: "Wat als we al een bestaand dataplatform hebben dat niet lekker loopt?",
      a: "Dat is vaker de situatie dan een greenfield. Ik begin met een eerlijke review: wat houden, wat refactoren, wat stoppen. Geen rip-and-replace tenzij dat echt nodig is. Vaak levert gericht opschonen van pipelines, metrics en governance al snel vertrouwen terug, en scheelt het maanden discussie.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGE — DATA ANALYTICS
// ─────────────────────────────────────────────────────────────────────────────

export const dataAnalyticsPage = {
  slug: "data-analytics",
  title: "Data Analytics Consultancy",
  metaTitle: "Data Analytics Consultancy | Power BI & Semantic Layers",
  metaDescription:
    "Data analytics consultancy gericht op heldere business metrics, self service dashboards en analytics engineering met dbt en Power BI.",
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
    heading: "Analytics engineering: BI met software engineering discipline.",
    paragraphs: [
      "Ik bouw een gemodelleerde laag in dbt waarin business metrics één keer worden gedefinieerd, en die door dashboards worden gebruikt. Zo voorkom je dat dezelfde KPI in vijf tools vijf verschillende waardes heeft.",
      "Het resultaat: dashboards die betrouwbaar zijn, een semantische laag die getest en gedocumenteerd is, en self service dat daadwerkelijk werkt.",
    ],
  },
  capabilities: [
    {
      title: "Semantic layer in dbt",
      description:
        "Eén centrale plek voor metrics, dimensies en relaties, gebruikt door alle BI tools.",
    },
    {
      title: "Power BI architectuur",
      description:
        "Van losse PBIX bestanden naar een schaalbare workspace structuur, met datasets, Apps en row level security.",
    },
    {
      title: "Management reporting",
      description:
        "KPI-dashboards voor directie en MT op dezelfde gemodelleerde metrics als operationele rapportages, zodat het board dezelfde cijfers ziet als finance en sales.",
    },
    {
      title: "KPI definitie & data dictionary",
      description:
        "Werksessies met finance, sales en operations om tot ondubbelzinnige business definities te komen.",
    },
    {
      title: "Self-service enablement",
      description:
        "Trainen van business users zodat ze zelf rapporten kunnen bouwen, zonder de data te corrumperen.",
    },
    {
      title: "Reporting automation",
      description:
        "Wegnemen van handmatige Excel rapportages. Subscriptions, alerts en geautomatiseerde verspreiding.",
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
    "Geen handmatige Excel rapportages meer in de maandafsluiting.",
    "Self-service dat schaalt zonder data chaos.",
  ],
  stack: ["Power BI", "dbt", "Snowflake", "Databricks", "Azure Synapse"],
  faqs: [
    {
      q: "Waarom modelleren in dbt vóór je Power BI dashboards bouwt?",
      a: "Omdat business logic dan één keer in code staat (getest, gedocumenteerd en geversioneerd) in plaats van verspreid over tien PBIX-bestanden. Power BI wordt de presentatielaag; dbt is de plek waar je definieert wat omzet, marge of churn precies betekent. Zo voorkom je dat finance en sales elk hun eigen versie van de waarheid hebben.",
    },
    {
      q: "Hoe pak je conflicterende KPI-definities aan?",
      a: "Niet met een tool, maar met mensen. In werksessies met finance, sales en operations brengen we eerst de definities op één lijn: grain, uitsluitingen, timing. Pas als iedereen het eens is, leggen we het vast in dbt. Techniek is zelden het probleem; misverstand over wat een metric betekent wel.",
    },
    {
      q: "We hebben al tientallen Power BI-rapporten. Moet alles opnieuw?",
      a: "Nee. Ik begin met een inventarisatie: welke rapporten worden echt gebruikt, welke metrics zitten erin, en waar conflicteren ze? Vaak is het slim om te starten met één kritieke KPI-set (bijvoorbeeld omzet of pipeline) en daar de semantic layer op te bouwen. Bestaande dashboards migreren we gefaseerd, niet in één big bang.",
    },
    {
      q: "Kunnen business users zelf rapporten maken zonder de data te corrumperen?",
      a: "Ja, mits de onderliggende laag goed is ingericht. Met geteste marts, duidelijke documentatie en row level security kunnen analisten en afdelingen zelfstandig werken, binnen de kaders die we afspreken. Self-service werkt alleen als de fundering klopt; anders krijg je weer losse Excel-varianten.",
    },
    {
      q: "Wat is analytics engineering, en wat levert het ons op?",
      a: "Analytics engineering is data modelleren met de discipline van software engineering: versiebeheer, tests, CI/CD en documentatie. In de praktijk betekent dat: één betrouwbare set business metrics, minder discussie over cijfers, en dashboards waar je op kunt sturen in plaats van alleen mooie visualisaties.",
    },
    {
      q: "Moeten onze data pipelines eerst op orde zijn?",
      a: "Idealiter wel. Analytics op rommelige of onbetrouwbare data levert dashboards op die niemand vertrouwt. Soms pak ik beide parallel aan: de eerste metrics en dashboards voor directe waarde, én gerichte verbeteringen aan de pipelines eronder. Ik ben eerlijk over waar de bottleneck zit. Dat scheelt verrassingen later.",
    },
    {
      q: "Hoe snel zien we iets werkends?",
      a: "Na een korte KPI-inventarisatie en een eerste gemodelleerde laag in dbt kan er binnen enkele weken een dashboard staan dat de directie daadwerkelijk gebruikt. Liever iteratief opleveren dan maanden modelleren zonder iets te tonen. Het eerste resultaat is vaak klein, maar wel betrouwbaar.",
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
    "Senior analytics engineering consultant. dbt modellering, geteste marts en semantic layers: business metrics die BI, stakeholders én AI-agents vertrouwen.",
  hero: {
    eyebrow: "Analytics engineering",
    heading: "Data die niet alleen technisch klopt, maar ook betekenis heeft voor de business.",
    subheading:
      "De brug tussen raw data en betrouwbare business metrics: modulair, getest, gedocumenteerd en klaar voor BI, self-service, analytics én AI-agents die dezelfde definities lezen.",
  },
  problems: [
    "Twee dashboards, twee omzetten, en niemand weet welk cijfer klopt.",
    "SQL-spagetti in losse scripts zonder versiebeheer, tests of documentatie.",
    "Business logic leeft in Power BI of Excel, niet in een gedeelde modellaag.",
    "Data engineers leveren tabellen die analytics niet begrijpt; analytics kopieert data opnieuw.",
    "KPI-definities zitten in hoofden en Slack-threads, niet in code.",
    "AI-tools improviseren over ruwe tabellen omdat metrics nergens vastliggen.",
  ],
  solution: {
    heading: "Analytics engineering als discipline, niet als afterthought.",
    paragraphs: [
      "Ik modelleer data in gelaagde, geteste tabellen volgens de Medallion-architectuur (van bronze via silver naar gold), waar business logic één keer wordt vastgelegd en overal hetzelfde uitkomt.",
      "Met dbt, CI/CD en documentatie krijg je een single source of truth waar finance, marketing, operations én AI-agents op kunnen sturen, zonder elke maand opnieuw te discussiëren over definities. Zonder die laag moet een LLM business logic raden. Dat is precies het gevaarlijkste soort fout: overtuigend én stilzwijgend verkeerd.",
    ],
  },
  capabilities: [
    {
      title: "Metric & KPI modellering",
      description:
        "Business metrics vastleggen in code, met duidelijke definities, grain en aggregatielogica die stakeholders begrijpen.",
    },
    {
      title: "Gelaagde modellering",
      description:
        "Bronze → silver → gold: modulair, herbruikbaar en schaalbaar van tientallen naar honderden modellen.",
    },
    {
      title: "dbt project design",
      description:
        "Projectstructuur, naming conventions, sources, exposures en packages. Een codebase die andere engineers snel oppakken.",
    },
    {
      title: "Testing & data quality",
      description:
        "Generic tests, singular tests, freshness checks en Great Expectations. Regressies vangen voordat ze in BI landen.",
    },
    {
      title: "Semantic layer & BI-aansluiting",
      description:
        "Marts en exposures die naadloos aansluiten op Power BI, Looker of Tableau, zonder dubbele logica in het dashboard.",
    },
    {
      title: "Documentation & lineage",
      description:
        "dbt docs als interne data catalog: waar komt een metric vandaan, wie is de eigenaar, welke downstream rapporten hangen eraan?",
    },
  ],
  process: [
    { title: "Metrics audit", description: "Welke KPI's bestaan er, waar leven ze nu en waar conflicteren ze?" },
    { title: "Modellering & conventies", description: "Folderstructuur, naming, grain en tests: de spelregels voor het team." },
    { title: "Bouwen & migreren", description: "Marts opbouwen of legacy SQL migreren, met peer review en CI/CD." },
    { title: "Enablement", description: "Workshops zodat het interne team zelfstandig analytics engineering toepast." },
  ],
  outcomes: [
    "Eén set cijfers waar de hele organisatie op vertrouwt.",
    "Business logic die getest, geversioneerd en gedocumenteerd is.",
    "Minder tijd aan definities-discussies, meer tijd aan sturen op data.",
    "Een team dat zelfstandig marts en metrics kan uitbreiden.",
  ],
  stack: ["dbt Core", "dbt Cloud", "Snowflake", "Databricks", "BigQuery", "Redshift", "Power BI", "Looker", "Azure Devops", "GitHub Actions"],
  faqs: [
    {
      q: "Wat is analytics engineering precies?",
      a: "Analytics engineering is het transformeren van ruwe data naar betrouwbare, business-georiënteerde tabellen met engineering-discipline: versiebeheer, testing, documentatie en CI/CD. Het is de brug tussen data engineering (pipelines) en data analytics (BI en rapportages).",
    },
    {
      q: "Hoe verschilt dit van dbt consultancy?",
      a: "dbt consultancy richt zich op het dbt-project zelf: structuur, macros, CI/CD. Analytics engineering is breder: metric-definities met stakeholders, modelleringstrategie, BI-aansluiting en het opzetten van analytics engineering als manier van werken in je team. Vaak overlap, want dbt is hiervoor de primaire tool.",
    },
    {
      q: "Hebben we eerst data engineering nodig?",
      a: "Ideaal wel: analytics engineering bouwt op betrouwbare, tijdige data. Zonder solide pipelines en een warehouse wordt modelleren een constant vechten tegen datakwaliteit. In de praktijk pak ik beide vaak in één traject aan.",
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
      "Een agent ziet je bedrijf niet. Hij ziet de tools die je aanbiedt, de metrics die je hebt gedefinieerd en de context die je aanreikt. Die drie dingen zijn data engineering en analytics engineering werk, geen prompt-werk.",
  },
  intro: {
    heading: "Waarom een LLM-project een data-project is.",
    paragraphs: [
      "Bijna elke AI-pilot die vastloopt, loopt vast op hetzelfde punt. Niet op het model, dat is inmiddels een commodity die je per token inkoopt. Het loopt vast op wat het model te zien krijgt: tabellen zonder betekenis, documenten die niemand ververst, definities die alleen in iemands hoofd bestaan en toegangsrechten die niet meereizen naar het chatvenster.",
      "Een dashboard vergeeft slechte data nog enigszins: een mens ziet een raar getal en gaat navragen. Een LLM doet dat niet. Die neemt aan wat hij krijgt, vult ontbrekende logica zelf in en presenteert het resultaat in vloeiende, overtuigende zinnen. Slechte data wordt daarmee niet zichtbaar fout, maar onzichtbaar fout. Dat is precies de reden waarom AI de eisen aan je dataplatform verhoogt in plaats van verlaagt.",
      "De oplossing is geen nieuwe categorie tooling, maar het serieus toepassen van wat data engineering en analytics engineering altijd al deden: betrouwbare pipelines, gelaagde modellering, geteste business metrics, lineage en governance. Alleen is de afnemer nu een agent die honderd keer per dag vragen stelt, in plaats van een analist die één keer per week een rapport opent.",
      "Daarom is dit verhaal bewust tool-neutraal. Een semantische laag kun je bouwen met dbt, Cube, LookML, AtScale of een goed beheerd Power BI-model, maar in veel organisaties is een strak gemodelleerde gold-laag met tests en documentatie ruim voldoende. Retrieval kan op pgvector, Azure AI Search, Databricks Vector Search of Elastic. MCP is een open protocol dat op dat alles past. Ik kijk eerst naar wat je al hebt, en adviseer pas daarna wat er echt bij moet.",
    ],
  },
  pillars: [
    {
      id: "mcp",
      eyebrow: "Laag 01",
      title: "MCP: het stopcontact tussen model en dataplatform",
      lead:
        "Het Model Context Protocol is een open standaard waarmee een LLM tools, queries en bronnen aanroept via één afspraak, in plaats van via een eigen koppeling per model en per applicatie.",
      body: [
        "Voor MCP schreef je per assistent een eigen integratie: een custom functie-definitie hier, een losse API-wrapper daar, allemaal met eigen authenticatie en eigen foutafhandeling. Met MCP publiceer je één server die tools blootstelt (een metric opvragen, een document zoeken, een pipeline-status uitlezen) en die door elke MCP-compatibele client gebruikt kan worden. Je koppelt je dataplatform één keer, niet per AI-tool.",
        "Wat vaak wordt onderschat: zo'n server is geen wrapper maar een productiekoppeling op je warehouse, met een niet-deterministische gebruiker aan de andere kant. De agent kiest zelf welke tool hij aanroept, met welke parameters, hoe vaak en in welke volgorde. Dat betekent dat elke tool zijn eigen contract nodig heeft: strak afgebakende input, voorspelbare output, expliciete foutmeldingen die het model kan interpreteren, en een beschrijving die zó duidelijk is dat het model niet gokt.",
      ],
      whyEngineering: {
        heading: "Waarom dit staat of valt met data engineering",
        points: [
          "Toegangsrechten moeten meereizen. Een MCP-tool die met één service account draait, geeft iedere gebruiker van de chatbot het toegangsniveau van dat account. Row-level security, rolgebaseerde toegang en identity pass-through horen in de laag eronder, niet in de prompt.",
          "Freshness moet onderdeel zijn van het antwoord. Een agent ziet niet dat je nachtelijke load is gebroken. Tools moeten metadata teruggeven over hoe actueel de data is, zodat het model dat kan melden in plaats van verzwijgen.",
          "Ruwe tabellen zijn geen tool-oppervlak. Een tool die de agent vrij laat queryen over honderden brontabellen dwingt hem joins en filters te verzinnen. Exposeer gemodelleerde marts en metrics, niet het rauwe landingsgebied.",
          "Kosten en concurrency worden een architectuurvraag. Agents queryen in loops. Zonder caching, query-limieten en materialisatiestrategie schrijft één enthousiast team in een week een verrassende warehouse-rekening.",
          "Alles moet auditeerbaar zijn. Welke agent, namens welke gebruiker, heeft welke data opgevraagd? In financial services is dat geen nice-to-have maar een randvoorwaarde om überhaupt live te mogen.",
        ],
      },
    },
    {
      id: "semantic-layer",
      eyebrow: "Laag 02",
      title: "De semantische laag: metrics als contract, niet als suggestie",
      lead:
        "Business logic wordt één keer vastgelegd (grain, filters, dimensies, tijdlogica) en is daarna opvraagbaar door BI-tools én door AI-agents. Dezelfde definitie, dezelfde uitkomst, ongeacht wie het vraagt. Of je dat implementeert als een echte semantic layer of als een strak beheerde gold-laag, is een keuze die van je situatie afhangt.",
      body: [
        "De klassieke aanpak voor 'praten met je data' is text-to-SQL: het model krijgt een schema en schrijft zelf een query. Op een demo met vijf tabellen werkt dat prachtig. In een echte omgeving met tweehonderd tabellen, langlopende dimensies, annuleringen, correctieboekingen en drie valuta's raadt het model de business logic. Het antwoord is syntactisch correct, ziet er professioneel uit en is inhoudelijk fout, zonder dat iemand het merkt.",
        "De oplossing is om de vraag te veranderen van 'schrijf SQL over deze tabellen' naar 'vraag deze metric op met deze dimensie en dit tijdvenster'. Het model kiest uit een gecureerde set die door mensen is gedefinieerd en getest. De ruimte om te improviseren is weg, en dat is precies wat je wilt. Een agent die zegt 'die metric bestaat niet' is oneindig veel bruikbaarder dan een agent die er een verzint.",
        "Dat kan op meerdere manieren. Een dedicated semantic layer (dbt, Cube, LookML, AtScale, of het semantische model in Power BI) geeft je metrics als expliciet object, met dimensies en tijdlogica die op het moment van bevragen worden samengesteld. Maar in veel organisaties is een goed gemodelleerde gold-laag genoeg: business-klare tabellen op de juiste grain, met geautomatiseerde tests op uniciteit, niet-null en referentiële integriteit, en documentatie en lineage die machineleesbaar zijn. Je agent bevraagt dan een handvol gecureerde tabellen in plaats van tweehonderd ruwe.",
        "De afweging is niet religieus. Een extra semantic layer voegt vooral waarde toe bij veel metric-varianten, veel BI-tools naast elkaar of zware governance-eisen. Heb je een overzichtelijk aantal duidelijke KPI's, dan is een geteste en gedocumenteerde gold-laag sneller gebouwd, goedkoper in onderhoud en voor een LLM net zo goed te begrijpen. Wat in beide gevallen niet optioneel is: de definities zijn vastgelegd, ze zijn getest en ze zijn gedocumenteerd.",
        "Dit is ook wat AI en BI eindelijk op één lijn brengt. Als het chatvenster en het directie-dashboard uit dezelfde definitie putten, verdwijnt de discussie over welk cijfer klopt. Zonder die laag introduceer je met elke nieuwe AI-toepassing een extra versie van de waarheid, bovenop de versies die je al had.",
      ],
      whyEngineering: {
        heading: "Waarom dit staat of valt met analytics engineering",
        points: [
          "De laag is zo goed als de modellering eronder. Metrics of gold-tabellen bovenop ongeteste, ongedocumenteerde modellen verplaatsen het probleem, ze lossen het niet op.",
          "Definities moeten expliciet zijn gemaakt met de business. Wat telt als actieve klant, wanneer is omzet gerealiseerd, hoe gaan we om met storno's. Die gesprekken zijn het echte werk; het vastleggen in code of YAML is het makkelijke deel.",
          "Tests zijn wat een cijfer betrouwbaar houdt. Uniciteit, niet-null, referentiële integriteit en freshness die bij iedere wijziging meelopen in CI, of dat nu dbt-tests zijn, Great Expectations, Soda of eigen assertions in de pipeline.",
          "Documentatie is niet langer hygiëne, het is modelinput. Beschrijvingen, synoniemen en voorbeeldvragen bij tabellen, kolommen en metrics zijn precies waarmee een LLM de juiste bron kiest. Een catalog die leeg is, laat het model gokken.",
          "Lineage maakt antwoorden verdedigbaar. Als de CFO vraagt waar een cijfer vandaan komt, moet je van het antwoord terug kunnen lopen naar de bron, of die lineage nu uit dbt docs, Unity Catalog, Purview of een eigen catalog komt.",
        ],
      },
    },
    {
      id: "context-engineering",
      eyebrow: "Laag 03",
      title: "Context engineering: bepalen wat het model wél ziet",
      lead:
        "Een contextvenster is eindig en duur. Context engineering is het vak van bepalen welke documenten, metadata, metrics en voorbeelden erin gaan, in welke vorm, in welke volgorde en met welke versheid.",
      body: [
        "Prompt engineering gaat over hoe je de vraag formuleert. Context engineering gaat over wat er naast die vraag in het venster staat, en dat is waar veruit de meeste kwaliteitswinst zit. Een middelmatig prompt met uitstekende context verslaat een briljant prompt met rommelige context, elke keer.",
        "In de praktijk is dat een retrieval-pipeline, en dus gewoon data engineering: bronnen ontsluiten, dedupliceren, versies bijhouden, verstandig chunken op semantische grenzen in plaats van op karakteraantal, embeddings genereren en verversen, permissies per document meenemen in de index en meten of het opgehaalde materiaal het antwoord daadwerkelijk bevat.",
        "Die laatste stap is degene die het vaakst wordt overgeslagen. Zonder evaluatieset weet je niet of een wijziging in je chunking-strategie het systeem beter of slechter maakt; je hebt alleen een onderbuikgevoel en een demo die toevallig goed ging. Ik zet daarom evaluatie op als onderdeel van de pipeline, niet als eenmalige test achteraf.",
        "En context is meer dan documenten. Voor een agent die over je bedrijf redeneert hoort daar structurele context bij: welke metrics bestaan er, wat betekenen ze, welke tabellen zijn actueel, wat is de lineage, wie is eigenaar. Precies de metadata die elk fatsoenlijk beheerd dataplatform al produceert, of dat nu via dbt docs, Unity Catalog, Microsoft Purview, een information schema of een eigen catalog gaat. In de meeste organisaties ligt die metadata er wel, maar wordt hij nooit aan het model gegeven.",
      ],
      whyEngineering: {
        heading: "Waarom dit staat of valt met data engineering",
        points: [
          "Een vector store is een dataproduct. Ingestion, refresh-schema, deduplicatie, ownership en monitoring: dezelfde discipline als bij elke andere pipeline, inclusief alerting als de verversing stilvalt.",
          "Verouderde context is de meest voorkomende oorzaak van hallucinaties. Een index die nog het beleid van vorig jaar bevat, geeft met volle overtuiging een verkeerd antwoord. Freshness is hier een feature, geen detail.",
          "Permissies horen in de index, niet in de prompt. 'Vertel dit niet aan gebruikers zonder rechten' is geen beveiliging. Filteren op autorisatie moet gebeuren vóór het ophalen.",
          "Chunking is modelleerwerk. Waar je knipt bepaalt of een clausule, tabel of procedure heel blijft. Dat is dezelfde afweging als het kiezen van de grain van een tabel, met dezelfde gevolgen als je het fout doet.",
          "Zonder evaluatie is er geen engineering, alleen hoop. Een gouden set vragen met verwachte antwoorden, die meeloopt in CI, maakt van AI-werk iets meetbaars in plaats van een demo-gevoel.",
        ],
      },
    },
  ],
  architecture: {
    eyebrow: "Samenhang",
    heading: "Hoe de drie lagen op elkaar staan.",
    intro:
      "Ze zijn geen alternatieven voor elkaar. Ze stapelen, en elke laag erboven is precies zo betrouwbaar als de laag eronder.",
    layers: [
      {
        label: "Bronnen",
        description: "Systemen, events, documenten. Ruw, ongeschoond en zonder gedeelde betekenis.",
      },
      {
        label: "Pipelines & lakehouse",
        description:
          "Data engineering: betrouwbare ingestion, gelaagde opbouw (bronze, silver, gold), tests en orchestration. Zonder deze laag is al het volgende gokwerk.",
      },
      {
        label: "Gold-laag & metrics",
        description:
          "Analytics engineering: business logic één keer vastgelegd, getest en gedocumenteerd. Dit is wat een LLM ervan weerhoudt zelf definities te verzinnen.",
      },
      {
        label: "Semantische laag & retrieval",
        description:
          "Definities als opvraagbaar contract (via een semantic layer of rechtstreeks op gecureerde gold-tabellen), plus een permissie-bewuste index met documentatie en structurele context.",
      },
      {
        label: "MCP-servers",
        description:
          "Het tool-oppervlak: afgebakend, geauthenticeerd, gelogd en begrijpelijk beschreven voor een model.",
      },
      {
        label: "Agents & copilots",
        description:
          "De toepassing waar de business om vroeg. Het zichtbare stukje, gedragen door alles eronder.",
      },
    ],
  },
  problems: [
    "De AI-pilot gaf indrukwekkende demo's, maar niemand durft de antwoorden in productie te vertrouwen.",
    "De chatbot schrijft zelf SQL en komt met andere cijfers dan het directie-dashboard.",
    "Elke AI-tool krijgt een eigen koppeling op de database; niemand heeft overzicht over wie wat mag opvragen.",
    "De assistent citeert beleid en documentatie die al maanden achterhaald zijn.",
    "Er is geen manier om te meten of een wijziging de antwoordkwaliteit verbetert of verslechtert.",
    "Security en compliance blokkeren de uitrol, omdat rechten niet meereizen naar het chatvenster.",
  ],
  useCases: [
    {
      title: "Praten met je cijfers, zonder verrassingen",
      description:
        "Medewerkers stellen vragen in gewone taal over omzet, marge of volumes. De agent vraagt gedefinieerde metrics of gecureerde gold-tabellen op in plaats van SQL te verzinnen, dus het antwoord is per definitie hetzelfde als in het dashboard. Analytics engineering levert hier de definities; data engineering zorgt dat ze actueel zijn.",
      icon: "MessageSquare",
    },
    {
      title: "Kennisassistenten op interne documentatie",
      description:
        "Beleid, procedures, handleidingen en contracten doorzoekbaar maken voor een LLM. Staat of valt met ingestion, deduplicatie, chunking, permissie-bewuste indexering en verversing. Dat is data engineering, geen prompt engineering.",
      icon: "BookOpen",
    },
    {
      title: "Agents die acties uitvoeren",
      description:
        "Niet alleen antwoorden, maar ook iets doen: een case aanmaken, een run herstarten, een klantstatus bijwerken. Dat vraagt om MCP-tools met strakke contracten, idempotentie en audit logging, bovenop data die aantoonbaar actueel is.",
      icon: "Bot",
    },
    {
      title: "Document intelligence op schaal",
      description:
        "Contracten, klachten of compliance-documenten geautomatiseerd analyseren. Het model kan lezen, maar iemand moet de documenten betrouwbaar binnenhalen, structureren, classificeren en de output weer terug in het warehouse landen zodat je erop kunt rapporteren.",
      icon: "FileSearch",
    },
    {
      title: "Interne copilots per afdeling",
      description:
        "Sales, support en finance die hun eigen data, policies en cases kunnen raadplegen, elk binnen hun eigen rechten. Zonder governance, lineage en actuele gestructureerde data wordt het een speeltje dat niemand vertrouwt.",
      icon: "Sparkles",
    },
    {
      title: "Je dataplatform zelf agent-ready maken",
      description:
        "Catalog-metadata, lineage en modeldocumentatie ontsluiten via MCP (uit dbt docs, Unity Catalog, Purview of je eigen catalog), zodat engineers en analisten hun eigen platform kunnen bevragen: waar komt deze metric vandaan, wat breekt er als ik dit model wijzig, wanneer is deze tabel voor het laatst ververst.",
      icon: "Plug",
    },
  ],
  process: [
    {
      title: "AI-readiness review",
      description:
        "Welke use case, welke data, welke definities en welke rechten? In één of twee sessies wordt duidelijk wat er nu al kan en wat eerst gebouwd moet worden.",
    },
    {
      title: "Fundering op orde",
      description:
        "Gerichte verbeteringen aan pipelines en marts voor precies de data die de use case raakt. Niet het hele platform herbouwen, wel het deel dat de agent gaat gebruiken.",
    },
    {
      title: "Interface bouwen",
      description:
        "Semantic layer, retrieval-pipeline en MCP-server, inclusief authenticatie, logging en een evaluatieset om kwaliteit te meten.",
    },
    {
      title: "Meten, bijsturen, overdragen",
      description:
        "Evaluatie in CI, monitoring op kosten en versheid, en kennisoverdracht zodat je eigen team nieuwe tools en metrics zelfstandig toevoegt.",
    },
  ],
  outcomes: [
    "AI-antwoorden die overeenkomen met wat het dashboard laat zien, omdat ze uit dezelfde definitie komen.",
    "Eén gecontroleerd tool-oppervlak op je dataplatform, in plaats van een koppeling per AI-tool.",
    "Toegangsrechten die meereizen van gebruiker tot antwoord, met een audit trail die compliance overleeft.",
    "Meetbare antwoordkwaliteit via evaluatiesets, zodat verbeteringen aantoonbaar zijn.",
    "Een dataplatform dat de volgende AI-use case aankan zonder opnieuw te beginnen.",
  ],
  stack: [
    "Model Context Protocol (MCP)",
    "dbt Core & dbt Cloud",
    "dbt Semantic Layer",
    "Cube",
    "Power BI semantisch model",
    "Snowflake",
    "Databricks",
    "BigQuery",
    "Azure Synapse & Fabric",
    "Great Expectations",
    "Azure OpenAI",
    "Azure AI Search",
    "pgvector",
    "Python",
    "Airflow",
    "Unity Catalog",
    "Microsoft Purview",
    "GitHub Actions",
  ],
  faqs: [
    {
      q: "Wat is MCP precies, en waarom zou ik er nu iets mee doen?",
      a: "Het Model Context Protocol is een open standaard waarmee een LLM tools en bronnen aanroept via één afspraak, in plaats van via een eigen integratie per model en per applicatie. Praktisch belang: je koppelt je dataplatform één keer en kunt daarna van model of client wisselen zonder alles opnieuw te bouwen. Dat verlaagt de kosten van experimenteren aanzienlijk, en het dwingt je bovendien om expliciet te maken welke data een agent mag zien, wat sowieso een gezonde oefening is.",
    },
    {
      q: "Waarom niet gewoon text-to-SQL op ons warehouse loslaten?",
      a: "Omdat het model dan de business logic moet raden. In een demo met vijf schone tabellen werkt het; in een echte omgeving met annuleringen, correctieboekingen, meerdere valuta's en een fiscaal jaar dat niet gelijkloopt met het kalenderjaar krijg je antwoorden die er professioneel uitzien en fout zijn. Dat is gevaarlijker dan een foutmelding. Laat je het model in plaats daarvan kiezen uit gedefinieerde metrics of een gecureerde set gold-tabellen, dan is de ruimte om te improviseren weg en kan het zeggen dat iets niet bestaat in plaats van het te verzinnen.",
    },
    {
      q: "Hebben we per se een semantic layer nodig, of is onze gold-laag genoeg?",
      a: "Vaak is een goed gemodelleerde gold-laag genoeg, en dat scheelt een tool. Wat je nodig hebt, is business-klare tabellen op de juiste grain, geautomatiseerde tests op uniciteit, niet-null, referentiële integriteit en freshness, plus documentatie en lineage die machineleesbaar zijn. Een agent bevraagt dan een handvol gecureerde tabellen in plaats van tweehonderd ruwe. Een dedicated semantic layer (dbt, Cube, LookML, AtScale of een Power BI-model) betaalt zich vooral terug bij veel metric-varianten, meerdere BI-tools naast elkaar of zware governance-eisen. Ik adviseer op basis van jullie situatie, niet op basis van wat er in de markt populair is.",
    },
    {
      q: "Moeten onze pipelines eerst helemaal op orde zijn voordat we hiermee kunnen beginnen?",
      a: "Niet het hele platform, wel het deel dat de use case raakt. Ik werk liever vanuit één concrete vraag terug naar de data die daarvoor nodig is: welke tabellen, welke definities, welke rechten, welke versheid. Dat levert binnen weken iets werkends op én verbetert precies het stuk fundering dat er toe doet. Een AI-project als aanleiding gebruiken om je datakwaliteit gericht aan te pakken werkt in de praktijk beter dan een apart datakwaliteitsprogramma zonder zichtbaar resultaat.",
    },
    {
      q: "Wat is het verschil tussen prompt engineering en context engineering?",
      a: "Prompt engineering gaat over hoe je de instructie formuleert. Context engineering gaat over wat er verder in het contextvenster staat: welke documenten zijn opgehaald, welke metrics en metadata zijn meegegeven, hoe vers is dat materiaal en in welke volgorde staat het. In de praktijk zit daar veruit de meeste kwaliteitswinst, en het is grotendeels een pipeline-vraagstuk: retrieval, deduplicatie, chunking, verversing en evaluatie. Dus data engineering, geen tekstschrijven.",
    },
    {
      q: "Hoe voorkom je dat een AI-agent data laat zien die iemand niet mag zien?",
      a: "Door autorisatie in de datalaag te regelen, niet in de prompt. Instructies als 'toon dit niet aan gebruikers zonder rechten' zijn geen beveiliging, want ze zijn te omzeilen. Wat wel werkt: identity pass-through zodat de agent queryt namens de ingelogde gebruiker, row-level security in het warehouse, permissie-filters die vóór retrieval worden toegepast en volledige audit logging op elke tool-aanroep. In financial services is dat de voorwaarde om überhaupt live te gaan.",
    },
    {
      q: "Hoe meet je of zo'n AI-toepassing goed werkt?",
      a: "Met een evaluatieset: een verzameling realistische vragen met verwachte antwoorden of verwachte bronnen, die meeloopt in CI. Daarnaast meet ik retrieval-kwaliteit (bevat het opgehaalde materiaal het antwoord überhaupt), versheid van de index en kosten per aanroep. Zonder die metingen weet je bij elke wijziging alleen of de demo toevallig goed ging, en dat is geen basis om iets in productie te zetten.",
    },
    {
      q: "Bouw je ook de AI-applicatie zelf, of alleen de datalaag?",
      a: "Mijn zwaartepunt ligt op de datalaag: pipelines, modellering, metrics, retrieval en MCP-servers. Dat is waar de meeste projecten stuklopen en waar mijn tien jaar ervaring zit. De applicatie eromheen bouw ik mee waar dat handig is, maar ik ben eerlijk over waar mijn toegevoegde waarde het grootst is. Vaak heeft een team al een frontend-ontwikkelaar en ontbreekt juist iemand die de data eronder betrouwbaar krijgt.",
    },
    {
      q: "Wij zitten volledig in het Microsoft-ecosysteem. Past dit daarbij?",
      a: "Ja. MCP is protocol-niveau en modelonafhankelijk; het werkt net zo goed met Azure OpenAI als met andere providers. Aan de datakant sluit ik aan op wat er staat: Fabric, Synapse, Databricks of Azure SQL, met Purview voor governance en Azure AI Search voor retrieval. De semantische laag kan dan prima het Power BI-model of een geteste gold-laag zijn; daar hoeft geen extra tool bij. Het patroon (gelaagde modellering, definities als contract, permissie-bewuste retrieval) is hetzelfde, ongeacht welk logo op de stack staat.",
    },
    {
      q: "Is dit alleen interessant voor grote organisaties?",
      a: "Nee, maar de volgorde verschilt. Een kleinere organisatie heeft vaak minder definitie-chaos en kan sneller bij een werkende toepassing zijn, meestal rechtstreeks op een geteste gold-laag. Grote organisaties hebben meer te winnen bij een expliciete semantische laag, omdat daar de meeste conflicterende definities en de zwaarste governance-eisen liggen. In beide gevallen geldt: begin bij één concrete vraag die iemand nu handmatig beantwoordt, en bouw de interface daaromheen.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE PAGE — MODERN DATA STACK
// ─────────────────────────────────────────────────────────────────────────────

export const modernDataStackPage = {
  slug: "modern-data-stack",
  title: "Modern Data Stack Consultancy",
  metaTitle: "Modern Data Stack Consultancy | Databricks, dbt, Airflow",
  metaDescription:
    "Implementatie en architectuur van de Modern Data Stack door een senior consultant uit Breda.",
  hero: {
    eyebrow: "Modern Data Stack",
    heading: "De Modern Data Stack, zonder de hype.",
    subheading:
      "Cloud data warehouse, ELT, dbt modellering, orchestration, BI en governance, als één coherent platform in plaats van als losse tooling.",
  },
  problems: [
    "Tooling keuzes zijn ad-hoc gemaakt: drie ingestion tools, twee orchestrators.",
    "Databricks rekening loopt op omdat queries niet worden geoptimaliseerd.",
    "Geen idee waar data lineage of governance moet landen.",
    "Iedereen heeft een eigen mening, niemand een coherente architectuur.",
  ],
  solution: {
    heading: "Eén samenhangende architectuur, geen verzameling losse onderdelen.",
    paragraphs: [
      "Ik help bij het ontwerpen, implementeren en aanscherpen van een Modern Data Stack die past bij jouw schaal en team. Dat betekent bewuste keuzes: welke ingestion, welk warehouse, hoe transformeren, hoe orchestreren, en hoe governance inrichten.",
      "Bij voorkeur incrementeel: bouwen op wat er al staat, zonder een rip and replace van een jaar.",
    ],
  },
  capabilities: [
    { title: "Architectuur-design", description: "End-to-end stack: ingestion, warehouse, transformation, BI, governance." },
    { title: "Tool-selectie", description: "Onafhankelijk advies tussen Snowflake / Databricks / Synapse en tussen Fivetran / Airbyte / AWS Glue, databricks autoloader." },
    { title: "dbt implementatie", description: "Project-structuur, naming conventions, tests, snapshots, exposures." },
    { title: "Orchestration", description: "Airflow, dbt cloud, databricks workflows of Azure Data Factory, pragmatisch ingericht." },
    { title: "Cost management", description: "Resource monitors, query tuning en query tagging, om te voorkomen dat de Snowflake-rekening explodeert." },
    { title: "Data governance", description: "Unity Catalog, Snowflake Horizon of Microsoft Purview, gekozen op basis van de use case." },
  ],
  process: [
    { title: "Stack-assessment", description: "Waar staat de huidige stack? Wat werkt, wat niet?" },
    { title: "Reference architecture", description: "Concrete blueprint passend bij jouw schaal en team." },
    { title: "Incrementele implementatie", description: "Module voor module, geen big bang." },
    { title: "Hand over & enablement", description: "Documentatie, training en code reviews voor het interne team." },
  ],
  outcomes: [
    "Eén coherente, modulaire architectuur in plaats van een verzameling tools.",
    "Voorspelbare kosten en performance.",
    "Een platform dat schaalt naar nieuwe use cases zonder herontwerp.",
  ],
  stack: ["Snowflake", "Databricks", "dbt", "Airflow", "Fivetran", "Airbyte", "Power BI"],
  faqs: [
    {
      q: "Wat is de Modern Data Stack precies?",
      a: "Een term voor een verzameling cloud native tools die samen een dataplatform vormen: een cloud warehouse (Snowflake/Databricks/BigQuery), een transformatielaag (dbt), ingestion (Fivetran/Airbyte/custom), orchestration (Airflow/Prefect) en BI (Power BI/Looker/Tableau). De gemene deler is: SQL first, modulair, cloud only.",
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
    "Senior dbt consultant uit Breda. Implementatie, project structuur, tests, CI/CD en analytics engineering best practices voor dbt Core en dbt Cloud.",
  hero: {
    eyebrow: "Analytics engineering",
    heading: "dbt, niet als tool, maar als manier van werken.",
    subheading:
      "Goede dbt projecten zijn modulair, getest, gedocumenteerd en gekoppeld aan CI/CD. Slechte dbt projecten zijn een spaghetti van views in een SQL bestand. Ik bouw het eerste.",
  },
  problems: [
    "dbt is ingevoerd maar er zit geen structuur in: geen tests, geen documentatie.",
    "Eén centrale dbt_project.yml met honderden models en geen folder structuur.",
    "Geen environment scheiding tussen dev, staging en productie.",
    "Geen CI/CD: deploys gebeuren handmatig en breken regelmatig.",
    "Macros worden gekopieerd in plaats van hergebruikt.",
  ],
  solution: {
    heading: "Een dbt project dat als professionele codebase werkt.",
    paragraphs: [
      "Ik implementeer dbt projecten volgens bewezen best practices: een gelaagde modellering volgens de Medallion-architectuur (bronze, silver, gold), naming conventions, geautomatiseerde tests, CI/CD pipelines en duidelijke documentatie.",
      "Welk warehouse eronder ligt maakt niet uit. dbt draait net zo goed op Snowflake, Databricks, BigQuery, Synapse of Redshift. Het gaat om de laagopbouw en de discipline, niet om de tool. Zo wordt dbt geen bottleneck, maar de centrale plek waar business logic getest en gedocumenteerd ligt.",
    ],
  },
  capabilities: [
    { title: "Project bootstrapping", description: "Setup van dbt Core of dbt Cloud, profile management, environment scheiding." },
    { title: "Medallion-modellering", description: "Bronze → silver → gold, met sources, snapshots en exposures." },
    { title: "Testing", description: "Generic tests, singular tests, freshness tests, Great Expectations." },
    { title: "CI/CD", description: "GitHub Actions / Azure DevOps pipelines voor build, test en deploy van dbt." },
    { title: "Documentation", description: "dbt docs als interne data catalog, met sources en exposures." },
    { title: "Macros & packages", description: "DRY modellering met macros, package management." },
    { title: "Performance", description: "Materialisatie strategie (view / table / incremental / snapshot)." },
    { title: "Migration", description: "Migreren van Looker PDT's, Power BI dataflows of legacy SQL naar dbt." },
  ],
  process: [
    { title: "dbt-audit", description: "Review van de bestaande dbt codebase (indien aanwezig): wat houden, wat refactoren." },
    { title: "Project setup", description: "Folder-structuur, naming, conventies, sources en tests." },
    { title: "Bouwen", description: "Modellen migreren of opbouwen, met peer review." },
    { title: "Enablement", description: "Workshops voor het interne team, met focus op zelfstandig dbt schrijven." },
  ],
  outcomes: [
    "Een dbt codebase die andere data engineers binnen een week kunnen oppakken.",
    "Automatische tests die regressies voorkomen.",
    "Eén plek voor business metrics, gedocumenteerd en geversioneerd.",
    "Een team dat zelfstandig analytics engineering kan toepassen.",
  ],
  stack: ["dbt Core", "dbt Cloud", "Snowflake", "Databricks", "BigQuery", "Azure Synapse", "Redshift", "Airflow", "GitHub Actions", "Azure DevOps"],
  faqs: [
    {
      q: "dbt Core of dbt Cloud?",
      a: "Voor kleinere teams of teams met beperkte DevOps-capaciteit is dbt Cloud een goede keuze: minder ops, ingebouwde scheduling en een IDE. Voor grotere organisaties met een sterke engineering-cultuur is dbt Core (zelf gehost in Airflow/Azure DevOps) vaak goedkoper en flexibeler. Ik help met de afweging.",
    },
    {
      q: "Hoe structureer je een dbt project goed?",
      a: "Met een gelaagde aanpak volgens de Medallion-architectuur: bronze (1:1 cleaning per bron), silver (herbruikbare berekeningen) en gold (business-georiënteerde tabellen). Hou folders per bron en per business domein, gebruik consistente naming en zorg voor tests op iedere laag.",
    },
    {
      q: "Heeft dbt zin als we al een datawarehouse hebben?",
      a: "Vaak juist dan. dbt vervangt geen warehouse, het is de transformatielaag erop. Je krijgt versiebeheer, testing en documentatie, terwijl je bestaande Snowflake, Databricks of Synapse blijft gebruiken.",
    },
    {
      q: "Hoe zorg je dat een dbt project betrouwbaar blijft?",
      a: "Met tests die meelopen op iedere run: uniqueness, niet-null, referentiële integriteit en freshness, aangevuld met singular tests op kritieke business logic. Een wijziging die iets stuk maakt, valt door de CI heen en komt niet in productie. Zo blijft het project betrouwbaar, ook als het team groeit.",
    },
    {
      q: "Kun je CI/CD opzetten voor ons dbt project?",
      a: "Ja. Ik richt pipelines in op GitHub Actions of Azure DevOps die bij iedere pull request de modellen bouwen en testen, met aparte omgevingen voor dev en productie bijvoorbeeld. Deploys worden voorspelbaar en herhaalbaar, geen handmatig draaien meer op de productie-database.",
    },
    {
      q: "Kun je een bestaand dbt project overnemen of opschonen?",
      a: "Dat is vaak de situatie. Ik begin met een audit: wat houden, wat refactoren, wat weg. Daarna breng ik structuur, tests en documentatie aan, stap voor stap, zonder dat het team stilvalt. Het doel is dat je eigen mensen er daarna zelfstandig op verder kunnen.",
    },
    {
      q: "Werk je dbt projecten zelf uit of leer je ons team het ook?",
      a: "Allebei. Ik bouw hands-on mee, maar werk bewust zo dat je team het overneemt: pair programming, code reviews en korte workshops over modellering, testing en conventies. Geen afhankelijkheid van mij als ik weer weg ben.",
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
    "Senior Azure data engineering consultant. Data Factory, Synapse, Databricks, Fabric en moderne lakehouse architectuur, voor enterprise Nederlandse opdrachtgevers.",
  hero: {
    eyebrow: "Azure specialisme",
    heading: "Azure data engineering die enterprise ready is.",
    subheading:
      "Van Azure Data Factory en Synapse tot Microsoft Fabric en Databricks. ik bouw moderne lakehouse architecturen die governance, security en kosten serieus nemen.",
  },
  problems: [
    "Een Azure Data Factory met honderden pipelines en geen overzicht.",
    "Synapse SQL pools die te duur worden en niet schaalbaar zijn.",
    "Geen scheiding tussen dev, test en productie in Azure.",
    "Slechte integratie tussen ADF, Databricks en Synapse.",
    "Onbekend hoe Microsoft Fabric in te passen in een bestaand landschap.",
  ],
  solution: {
    heading: "Azure architectuur die werkt voor data en voor de business.",
    paragraphs: [
      "Ik bouw moderne data architectuur op Azure: een lakehouse op ADLS Gen2 met Databricks of Synapse, ELT via ADF of Fabric, transformaties in dbt of Databricks notebooks en BI via Power BI.",
      "Met aandacht voor Azure specifieke onderwerpen: managed identities, private endpoints, key vault integratie, Purview voor governance en cost controls.",
    ],
  },
  capabilities: [
    { title: "Azure Data Factory", description: "Pipelines, datasets, linked services en integration runtimes, gestructureerd en herhaalbaar." },
    { title: "Synapse Analytics", description: "Dedicated en serverless SQL pools, Spark pools en pipelines binnen één workspace." },
    { title: "Databricks", description: "Workspaces, clusters, Delta Lake, Unity Catalog en workflows." },
    { title: "Microsoft Fabric", description: "Architectuur en migratie naar Fabric Lakehouse, OneLake en Direct Lake mode in Power BI." },
    { title: "ADLS Gen2 lakehouse", description: "Medallion architecture (bronze / silver / gold), partitionering en optimalisatie." },
    { title: "Power BI integratie", description: "Power BI Premium / Embedded / Fabric, met DirectQuery, Import en Direct Lake." },
    { title: "Security & governance", description: "Managed identities, RBAC, Microsoft Purview en private endpoints." },
  ],
  process: [
    { title: "Azure-assessment", description: "Inventarisatie van bestaande resources, kosten en pijnpunten." },
    { title: "Doelarchitectuur", description: "Concrete blueprint met kostenprognose en migratie-pad." },
    { title: "Implementatie", description: "Incrementele bouw, met IaC en CI/CD." },
    { title: "Overdracht", description: "Documentatie en coaching van interne Azure engineers." },
  ],
  outcomes: [
    "Een Azure platform met overzicht en voorspelbare kosten.",
    "Pipelines die getest en gedeployd worden via CI/CD.",
    "Een lakehouse waar BI, analytics engineering en data engineering op samenkomen.",
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
  ],
  faqs: [
    {
      q: "Fabric of Databricks?",
      a: "Microsoft Fabric is sterk verankerd in het Microsoft ecosysteem en heeft een laagdrempelige UX voor Power BI-gebruikers. Databricks is volwassener in engineering praktijken (Unity Catalog, MLflow, workflows). Voor Microsoft shop only organisaties kan Fabric voldoende zijn; voor organisaties met serieuze data engineering / ML behoefte blijft Databricks vaak de sterkere keuze.",
    },
    {
      q: "Wat is de meerwaarde van ADF naast Databricks?",
      a: "ADF is sterk in connectivity (honderden out of the box connectors) en in orkestratie van pipelines. Databricks is sterker in transformatie en Spark. In sommige implementaties gebruik ik ADF voor ingestion en orchestration, Databricks voor zware transformaties.",
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
    heading: "Senior data specialist. Hands-on, met oog voor de business en zonder ego.",
    intro:
      "Ik werk sinds 2016 aan data-architectuur en analytics. In 2021 startte ik DC Data Consultancy om opdrachtgevers te helpen die niet alleen zoeken naar een paar extra handen, maar naar een senior die ontwerpt, bouwt, de juiste vragen stelt en richting geeft.",
  },
  story: [
    {
      heading: "Van analytics naar engineering",
      paragraphs: [
        "Mijn carrière begon als Data Scientist: Voorspellende modellen bouwen en dashboards opleveren. Bij elke opdracht liep ik tegen hetzelfde aan: de echte bottleneck zat niet in het doen van analyses, maar in de fundering eronder.",
        "Pipelines die elke nacht halverwege braken. Datawarehouses zonder structuur. Business logic die in vijf dashboards op vijf manieren stond. Dat verschoof mijn focus richting data engineering, want zonder betrouwbare fundering is alles daarboven net zo wankel als die fundering.",
      ],
    },
    {
      heading: "Eigen consultancy sinds 2021",
      paragraphs: [
        "In 2021 startte ik DC Data Consultancy. De drijfveer: rechtstreeks bij opdrachtgevers aan tafel zitten, zonder de overhead van een groot bureau, met volledige eigenaarschap over de kwaliteit van wat ik oplever.",
        "Sindsdien werk ik door heel Nederland: financial services, logistiek, vastgoed, energie en publieke sector. Meestal als senior consultant of lead, vaak op het snijvlak van engineering en business.",
      ],
    },
    {
      heading: "Hoe ik werk",
      paragraphs: [
        "Ik geloof in werkende oplossingen boven powerpoints. Dus niet eerst zes weken een adviesrapport schrijven en dan verdwijnen, maar samen met je team meebouwen. Sprint voor sprint, met directe waarde. Daar haal ik energie uit: dingen voor elkaar krijgen, met het teamresultaat voor ogen.",
        "Techniek is voor mij altijd een middel, nooit een doel. Wat de business met de oplossing kan, telt zwaarder dan welke tool we kiezen. Ik praat net zo makkelijk met de CFO over de echte business metrics als met een junior engineer over de structuur van een dbt model. Die brug slaan tussen techniek en business is een groot deel van mijn werk.",
      ],
    },
    {
      heading: "Waarom DC Data?",
      paragraphs: [
        "Je krijgt direct een senior aan tafel, één aanspreekpunt, korte lijnen, no nonsens en een eerste resultaat binnen weken in plaats van maanden.",
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
        "Orchestration (Airflow, ADF, dbt cloud, databricks workflows)",
        "Data quality, testing en observability",
        "CI/CD voor data en infrastructure as code",
      ],
    },
    {
      area: "Data Analytics",
      items: [
        "Power BI (modellering, RLS, premium)",
        "Semantic layers in dbt",
        "KPI- en metrics-definitie met stakeholders",
        "Self-service enablement",
      ],
    },
    {
      area: "Analytics Engineering",
      items: [
        "dbt modellering (Medallion: bronze, silver, gold)",
        "Metric & KPI definitie met stakeholders",
        "Testing, documentatie en CI/CD",
        "Semantic layers voor Power BI",
        "Data quality en lineage",
      ],
    },
    {
      area: "Cloud & Platforms",
      items: ["Microsoft Azure", "AWS", "GCP", "Databricks", "Snowflake"],
    },
  ],
  industries: [
    "Financial services (Rabobank, de Volksbank, Achmea, Obvion)",
    "Logistiek (PostNL)",
    "Energie (Gulf)",
    "Publieke sector (Brandweer, ABG)",
    "Vastgoed (Mileway)",
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
      title: "Geen vendor lock in",
      description:
        "Ik bouw zo dat jouw team het overneemt. Geen afhankelijkheid van DC Data Consultancy, wel een goede samenwerking als je dat wilt.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// LOCAL SEO PAGE — BREDA
// ─────────────────────────────────────────────────────────────────────────────

export const bredaPage = {
  metaTitle: "Data Consultant Breda | DC Data Consultancy",
  metaDescription:
    "Senior data engineering consultant gevestigd in Breda. Voor opdrachtgevers in Noord Brabant en heel Nederland. Data pipelines, dataplatforms, Power BI en AI.",
  hero: {
    eyebrow: "Data consultancy in Breda",
    heading: "Senior data engineering consultancy vanuit Breda, voor heel Nederland.",
    intro:
      "DC Data Consultancy is gevestigd in Breda, Noord-Brabant. Ik werk voor opdrachtgevers in West-Brabant, Tilburg, Eindhoven en Rotterdam, maar net zo goed door heel Nederland en remote.",
  },
  whyBreda: {
    heading: "Waarom Breda?",
    paragraphs: [
      "Breda zit strategisch tussen de Randstad en Brabant: uitstekend bereikbaar via de A16, A27 en A58, en op een uur per HSL van Amsterdam, Rotterdam, Antwerpen en Brussel. Voor Brabantse opdrachtgevers (Tilburg, Eindhoven, Den Bosch, Roosendaal) ben ik bovendien lokaal aanspreekbaar.",
      "Een groot deel van mijn opdrachten draait remote of hybride. Voor sessies op locatie, zoals workshops met stakeholders, architectuur-reviews of pair engineering, ben ik flexibel en kom ik graag langs.",
    ],
  },
  servicesInBreda: {
    heading: "Wat ik voor opdrachtgevers in en rond Breda doe",
    items: [
      "Data engineering en dataplatform architectuur",
      "dbt implementatie en analytics engineering",
      "Azure en Databricks data engineering",
      "Power BI architectuur en semantic layers",
      "Analytics engineering (dbt, marts, semantic layers)",
      "Interim rollen als senior of lead data engineer",
    ],
  },
  regions: {
    heading: "Regio's waar ik veelvuldig werk",
    items: [
      "Breda en West Brabant",
      "Tilburg en omgeving",
      "Eindhoven (Brainport)",
      "Den Bosch en Midden Brabant",
      "Rotterdam en de Zuidvleugel",
      "Utrecht en Amsterdam (Randstad)",
      "Remote / heel Nederland",
    ],
  },
  localTrust: {
    heading: "Wat opdrachtgevers in Brabant en daarbuiten waarderen",
    items: [
      "Direct een senior aanspreekpunt, geen accountmanager als tussenlaag",
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
    "Een selectie van geanonimiseerde cases uit financial services, logistiek, vastgoed en energie, van dataplatform-architectuur tot dbt-implementaties.",
  hero: {
    eyebrow: "Cases",
    heading: "Wat ik concreet heb gebouwd.",
    intro:
      "Een greep uit geanonimiseerde opdrachten van de afgelopen jaren. Sommige zijn meerjarige trajecten, andere strakke deelopdrachten met een duidelijk afgebakend doel.",
  },
  cases: [
    {
      slug: "retailbank-dwh",
      industry: "Financial Services. Retailbank",
      role: "Lead data engineer",
      challenge:
        "Versplinterd datalandschap met meerdere legacy datawarehouses, conflicterende klantdefinities en geen vertrouwen in rapportages.",
      approach:
        "Doelarchitectuur op één A4 ontworpen, daarna een Azure Synapse + dbt platform opgezet. Naar binnen toe gewerkt: eerst kritische marts (klant, product, transactie), daarna stap voor stap meer bronnen.",
      outcome:
        "Eén bron van waarheid voor klant- en transactiedata. Dashboards die in plaats van twee weken nu twee dagen kosten. dbt codebase met 200+ models, getest en gedocumenteerd.",
      tech: ["Azure Synapse", "Azure Data Factory", "dbt Cloud", "Power BI", "GitHub Actions"],
    },
    {
      slug: "logistiek-forecasting",
      industry: "Logistiek. Pakketdistributie",
      role: "Senior data engineer / analytics engineer",
      challenge:
        "Volumes zaten in tientallen Excel bestanden bij regiomanagers, geen consistente forecast op nationaal niveau.",
      approach:
        "Volumes geïntegreerd in het centrale datawarehouse via ADF. dbt modellering voor business metrics. Daarbovenop een forecasting model gebouwd op Databricks met MLflow.",
      outcome:
        "Wekelijkse nationale volume forecast met confidence intervals. Planning- en capaciteitskeuzes onderbouwd in plaats van gevoelsmatig. Forecast accuracy verbeterd ten opzichte van de oude regionale schattingen.",
      tech: ["Azure Data Factory", "Databricks", "dbt", "MLflow", "Power BI"],
    },
    {
      slug: "verzekeraar-anomaly",
      industry: "Financial Services. Verzekeraar",
      role: "Senior data engineer",
      challenge:
        "Claims-afdeling wilde verdachte patronen sneller detecteren. Bestaande regels waren statisch en gaven veel false positives.",
      approach:
        "Een streaming architectuur opgezet voor claimsdata. Anomaly detection model gebouwd dat continu wordt hertraind. Resultaten gevoed naar de bestaande case management tooling.",
      outcome:
        "Daling van false positives terwijl detectie van werkelijke verdachte claims toenam. Claims-team kan zich richten op wat er werkelijk toe doet.",
      tech: ["Azure Event Hubs", "Databricks Structured Streaming", "Python", "MLflow"],
    },
    {
      slug: "vastgoed-mds",
      industry: "Vastgoed. Pan Europees",
      role: "Data platform architect",
      challenge:
        "Snelgroeiende organisatie met data verspreid over tientallen landensystemen. Wilde een centraal platform voor portfolio analyse.",
      approach:
        "Modern Data Stack opgezet: Snowflake als centraal warehouse, Fivetran voor ingestion, dbt voor modellering, Power BI als frontend. Governance via Snowflake RBAC en data masking.",
      outcome:
        "Pan Europese portfolio rapportage in één tool. Lokale analisten kunnen self service rapporten bouwen op de gemodelleerde laag.",
      tech: ["Snowflake", "Fivetran", "dbt", "Power BI", "Terraform"],
    },
    {
      slug: "energie-platform",
      industry: "Energie. Tankstationketen",
      role: "Senior data engineer",
      challenge:
        "Transactiedata werd dagelijks in losse exports verwerkt; geen near realtime inzicht in voorraad of omzet per station.",
      approach:
        "Ingestion herbouwd op basis van event streaming en micro batch in Azure. Datawarehouse op Synapse, transformaties in dbt, dashboards in Power BI.",
      outcome:
        "Near-realtime inzicht in omzet en voorraad per station. Operations kan dezelfde dag bijsturen in plaats van een week later.",
      tech: ["Azure", "Synapse", "dbt", "Power BI"],
    },
    {
      slug: "publieke-sector-bi",
      industry: "Publieke sector",
      role: "Senior BI consultant",
      challenge:
        "Veel rapporten in losse Excel- en Access bestanden, met inconsistente definities en handmatige maandelijkse rapportages.",
      approach:
        "Gemodelleerde laag opgezet in dbt op Azure SQL, met geautomatiseerde rapportage via Power BI. Workshops met inhoudelijke afdelingen om definities te harmoniseren.",
      outcome:
        "Geautomatiseerde maandrapportage; uren handmatig Excel werk per maand bespaard. Definities centraal vastgelegd.",
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
      "In meer dan tien jaar werk in data heb ik in vijf sectoren ervaring opgebouwd. Elke sector heeft zijn eigen data-uitdagingen en eigen patronen, die je alleen leert kennen door er meerdere keren te zijn geweest.",
  },
  industries: [
    {
      slug: "financial-services",
      name: "Financial Services",
      summary:
        "Banken, verzekeraars en pensioenfondsen. Strikte governance, regelgeving (DORA, BCBS 239, AVG) en hoge eisen aan auditability en lineage.",
      challenges: [
        "Regelgeving rondom data lineage en data quality",
        "Legacy mainframes / SAS omgevingen integreren met cloud",
        "Risk reporting waar de directie persoonlijk voor tekent",
        "Customer 360 over silos van productsystemen",
      ],
      experience: ["Rabobank", "de Volksbank", "Achmea", "Obvion"],
    },
    {
      slug: "logistiek",
      name: "Logistiek & Supply Chain",
      summary:
        "Pakketdistributie, fulfilment en supply chain. Hoge volumes, near realtime informatie en complexe planning.",
      challenges: [
        "Volume forecasting en capaciteitsplanning",
        "Track-and-trace data over meerdere systemen",
        "Optimalisatie van routes en sortering",
        "Integratie met partnersystemen",
      ],
      experience: ["PostNL"],
    },
    {
      slug: "vastgoed",
      name: "Vastgoed",
      summary:
        "Logistiek vastgoed, retail vastgoed en investment management. Pan Europese portfolios, verschillende rapportage standaarden.",
      challenges: [
        "Pan Europese portfolio rapportage",
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
        "Tankstationketens, energieleveranciers en utility. Transactievolumes en operationele KPI's.",
      challenges: [
        "Realtime transactie analyse",
        "Voorraad- en margeanalyse per locatie",
        "Integratie van POS systemen",
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
        "Datakwaliteit in lange doorlooptijd processen",
        "Werken binnen strikte budgetten en aanbestedingsregels",
      ],
      experience: ["Brandweer", "ABG"],
    },
  ],
} as const;

export const footer = {
  tagline:
    "Senior data engineering consultancy uit Breda, voor organisaties die meer uit hun data willen halen.",
  linkedinUrl: siteConfig.linkedin,
  copyright: siteConfig.copyright,
} as const;
