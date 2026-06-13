// Blog posts — single source of truth.
// Posts are structured for SEO: each has a slug, metadata, headings and internal links.

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "code"; language: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingMinutes: number;
  intro: string;
  sections: BlogSection[];
  related: string[]; // slugs of related posts
};

export type BlogCategory =
  | "Data Engineering"
  | "Modern Data Stack"
  | "Analytics Engineering"
  | "Data Quality"
  | "Cloud & Azure"
  | "Data Strategy"
  | "AI & Data Science";

export const blogCategories: BlogCategory[] = [
  "Data Engineering",
  "Modern Data Stack",
  "Analytics Engineering",
  "Data Quality",
  "Cloud & Azure",
  "Data Strategy",
  "AI & Data Science",
];

export const blogPosts: BlogPost[] = [
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "etl-vs-elt-wat-werkt-echt-in-2026",
    title: "ETL vs ELT in 2026: waarom de meeste data teams het verkeerd om doen",
    description:
      "ETL was de norm in het on-prem tijdperk. Op moderne cloud-platforms wint ELT bijna altijd. Wanneer, hoe en waarom — met praktische guidelines.",
    metaTitle: "ETL vs ELT: wanneer kies je wat? (2026 guide)",
    metaDescription:
      "Praktische guide tussen ETL en ELT op de Modern Data Stack. Wanneer kies je dbt + warehouse, wanneer klassieke ETL? Door senior data engineering consultant.",
    category: "Data Engineering",
    tags: ["ETL", "ELT", "dbt", "Modern Data Stack"],
    publishedAt: "2026-01-14",
    readingMinutes: 8,
    intro:
      "Vrijwel iedere data architectuur-discussie eindigt vroeg of laat bij dezelfde vraag: kiezen we voor ETL of ELT? In 2026 is het antwoord meestal duidelijk, maar de praktijk laat zien dat veel teams uit gewoonte de verkeerde keuze blijven maken.",
    sections: [
      { type: "heading", text: "De korte definitie" },
      {
        type: "paragraph",
        text:
          "ETL (Extract, Transform, Load) transformeert data vóórdat hij in het datawarehouse landt. ELT (Extract, Load, Transform) laadt de ruwe data eerst en doet de transformatie binnen het warehouse — typisch met SQL en dbt. Dat verschil klinkt subtiel maar heeft grote architectuur-implicaties.",
      },
      { type: "heading", text: "Waarom ELT in 2026 bijna altijd wint" },
      {
        type: "list",
        items: [
          "Opslag is goedkoop, compute is on-demand. Ruwe data parkeren in S3 of ADLS Gen2 kost vrijwel niets.",
          "Cloud warehouses (Snowflake, BigQuery, Databricks) zijn enorm krachtig in SQL-transformaties.",
          "dbt heeft de transformatielaag in code, getest, gedocumenteerd en versie-controlled gemaakt.",
          "Bij wijzigingen kun je transformaties opnieuw draaien zonder de bron opnieuw te laden.",
        ],
      },
      { type: "heading", text: "Wanneer klassieke ETL nog logisch is" },
      {
        type: "paragraph",
        text:
          "Er zijn nog drie situaties waarin ETL te verdedigen is: zware streaming-transformaties die niet goed in SQL te vatten zijn, on-prem omgevingen zonder cloud warehouse, en compliance-eisen waarbij ruwe data nergens mag landen (denk aan strikt geclassificeerde PII).",
      },
      {
        type: "callout",
        title: "Praktijktip",
        text:
          "Begin altijd met ELT als default. Stap pas naar ETL-componenten wanneer een specifieke use case dat dwingt — niet uit gewoonte of omdat de oude tooling het zo deed.",
      },
      { type: "heading", text: "Praktische guidelines" },
      {
        type: "list",
        ordered: true,
        items: [
          "Land ruwe data in een ‘bronze’ laag in je lake of warehouse, zo dicht mogelijk bij de bronstructuur.",
          "Doe alleen lichte conformatie in een ‘silver’ laag (typing, deduplication, joinable keys).",
          "Bouw business logic in een ‘gold’ of marts-laag, gemodelleerd in dbt.",
          "Schrijf tests op iedere laag — niet alleen de gold-laag.",
          "Gebruik incrementele modellen waar volumes dat eisen, maar niet eerder.",
        ],
      },
      { type: "heading", text: "Veelvoorkomende fouten" },
      {
        type: "paragraph",
        text:
          "De meeste teams die ‘ELT doen’ in de praktijk doen alsnog veel transformatie in de ingestion-laag — wat de architectuur het slechtste van beide werelden geeft. Het andere uiterste is alle transformatielogica in één gigantisch SQL-bestand kwakken zonder enige modularisering. Beide leiden binnen een jaar tot een onhoudbare codebase.",
      },
      { type: "heading", text: "Conclusie" },
      {
        type: "paragraph",
        text:
          "In 2026 is ELT op een cloud warehouse de standaard voor de meeste organisaties. Klassieke ETL blijft relevant voor specifieke use cases, maar zou nooit de default mogen zijn. Wie het verkeerd om doet, betaalt de prijs in onderhoudslast en time-to-insight.",
      },
    ],
    related: [
      "dbt-best-practices-projectstructuur",
      "modern-data-stack-uitgelegd",
      "data-pipeline-betrouwbaarheid",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "dbt-best-practices-projectstructuur",
    title: "dbt project-structuur: een blueprint die schaalt",
    description:
      "Hoe je een dbt-project structureert zodat het schaalt van 20 naar 500 models zonder onhoudbaar te worden. Folder-layout, naming, tests en CI/CD.",
    metaTitle: "dbt project-structuur best practices (2026)",
    metaDescription:
      "Senior data engineer deelt de blueprint voor een dbt-project dat schaalt: folder-structuur, naming, tests, materialisatie en CI/CD.",
    category: "Analytics Engineering",
    tags: ["dbt", "analytics engineering", "data modelling"],
    publishedAt: "2026-01-22",
    readingMinutes: 10,
    intro:
      "Een dbt-project van 50 modellen werkt nog wel zonder structuur. Bij 200 modellen is het te laat. In deze post deel ik de project-structuur die ik bij iedere implementatie gebruik — en die binnen drie jaar schaalt tot vele honderden models zonder onhoudbaar te worden.",
    sections: [
      { type: "heading", text: "De drie-lagige aanpak" },
      {
        type: "paragraph",
        text:
          "De officiële dbt best practice volgt een drie-lagige modellering: staging, intermediate en marts. Dat klinkt simpel maar wordt verbazingwekkend vaak fout uitgevoerd.",
      },
      {
        type: "list",
        items: [
          "Staging (stg_*): één-op-één met de bron. Naming, typing en deduplication — verder niets.",
          "Intermediate (int_*): herbruikbare berekeningen die door meerdere marts worden gebruikt.",
          "Marts: business-georiënteerde tabellen, geconsumeerd door BI en data science.",
        ],
      },
      { type: "heading", text: "Folder-structuur" },
      {
        type: "code",
        language: "text",
        text: `models/
  staging/
    salesforce/
      stg_salesforce__accounts.sql
      stg_salesforce__opportunities.sql
      _salesforce__sources.yml
      _salesforce__models.yml
  intermediate/
    sales/
      int_opportunities_pivoted_to_stages.sql
  marts/
    sales/
      fct_opportunities.sql
      dim_accounts.sql
    finance/
      fct_revenue_recognition.sql`,
      },
      { type: "heading", text: "Naming conventions die werken" },
      {
        type: "list",
        items: [
          "Staging: stg_<bron>__<entiteit> (dubbele underscore voor leesbaarheid)",
          "Intermediate: int_<domein>_<beschrijving>",
          "Marts: fct_* voor facts, dim_* voor dimensions",
          "Snapshots: snap_<bron>_<entiteit>",
          "Sources: _<bron>__sources.yml en _<bron>__models.yml in dezelfde folder",
        ],
      },
      { type: "heading", text: "Tests die je echt nodig hebt" },
      {
        type: "paragraph",
        text:
          "Niet ieder model heeft een uniqueness test op zijn primary key nodig — ieder mart-model wel. Generieke tests zoals not_null, unique en accepted_values zijn de baseline. Daarbovenop horen singular tests voor business rules (bv. ‘revenue van afgesloten opportunities moet altijd > 0 zijn’).",
      },
      {
        type: "callout",
        title: "Vuistregel",
        text:
          "Iedere mart heeft minimaal een unique en not_null test op de primary key, en een freshness check op de underlying sources.",
      },
      { type: "heading", text: "Materialisatie-strategie" },
      {
        type: "list",
        items: [
          "View: voor lichte transformaties met lage volumes en frequente bronwijzigingen.",
          "Table: voor herhaaldelijk geraadpleegde, computationeel zware modellen.",
          "Incremental: voor grote feiten-tabellen waar je niet steeds full-refresh wil doen.",
          "Snapshot: voor slowly-changing dimensions die je wil historiseren.",
        ],
      },
      { type: "heading", text: "CI/CD pipeline" },
      {
        type: "paragraph",
        text:
          "Zonder CI/CD is dbt slechts SQL-in-een-folder. Met CI/CD wordt het een professionele codebase. Mijn standaard setup: een pull request triggert een build met SlimCI (alleen gewijzigde modellen + downstream), runt tests op een staging-schema en blokkeert merge bij testfouten. Bij merge naar main draait een productie-deploy.",
      },
      { type: "heading", text: "Documentation als bijproduct" },
      {
        type: "paragraph",
        text:
          "Een goed dbt-project genereert zijn eigen documentatie. Beschrijvingen op modellen en columns, gekoppeld aan exposures (Power BI, Tableau dashboards), maken van dbt docs een interne data catalog. Voor enterprise omgevingen koppel je dit aan een Microsoft Purview of een Unity Catalog.",
      },
    ],
    related: [
      "etl-vs-elt-wat-werkt-echt-in-2026",
      "analytics-engineering-rol-en-impact",
      "dbt-tests-data-quality",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "modern-data-stack-uitgelegd",
    title: "De Modern Data Stack uitgelegd — zonder hype",
    description:
      "Wat is de Modern Data Stack, welke onderdelen heb je echt nodig, en wanneer is het te vroeg? Een nuchtere uitleg voor data leaders.",
    metaTitle: "Modern Data Stack uitgelegd | Wat, waarom en wanneer",
    metaDescription:
      "Heldere uitleg over de Modern Data Stack: warehouse, ELT, dbt, orchestration en BI. Door senior data engineering consultant.",
    category: "Modern Data Stack",
    tags: ["modern data stack", "Snowflake", "dbt", "Fivetran"],
    publishedAt: "2026-01-30",
    readingMinutes: 9,
    intro:
      "De ‘Modern Data Stack’ is geen product, het is een architectuurpatroon. In deze post leg ik uit welke onderdelen het bevat, welke trade-offs erbij horen en wanneer je er klaar voor bent — en wanneer nog niet.",
    sections: [
      { type: "heading", text: "Definitie" },
      {
        type: "paragraph",
        text:
          "De Modern Data Stack is een verzameling cloud-native, SQL-first tools die samen een dataplatform vormen. Kernkenmerken: ELT in plaats van ETL, een cloud warehouse als centrale opslag, dbt voor transformaties, een modulaire opzet en gebruiksgebaseerde pricing.",
      },
      { type: "heading", text: "De vijf lagen" },
      {
        type: "list",
        ordered: true,
        items: [
          "Ingestion — Fivetran, Airbyte, Stitch of custom Python/ADF.",
          "Storage / warehouse — Snowflake, Databricks, BigQuery, Synapse.",
          "Transformatie — dbt Core of dbt Cloud.",
          "Orchestration — Airflow, Prefect, Dagster of warehouse-native.",
          "Activation & BI — Power BI, Looker, Tableau, en reverse-ETL tools zoals Hightouch of Census.",
        ],
      },
      { type: "heading", text: "Wat het oplost" },
      {
        type: "list",
        items: [
          "Snelle setup zonder lange on-prem hardware aanschaf.",
          "Modulariteit: elke laag is vervangbaar zonder de hele stack te vervangen.",
          "Gebruik van SQL als lingua franca — laag instapniveau.",
          "Cloud-native scaling, betalen voor wat je gebruikt.",
        ],
      },
      { type: "heading", text: "Wat het niet oplost" },
      {
        type: "paragraph",
        text:
          "Een Modern Data Stack neemt geen organisatie-vraagstukken weg. Wie geen heldere KPI-definities heeft, krijgt ze er niet uit Snowflake bij geleverd. Wie geen data ownership heeft, krijgt nog steeds rommelige modellen. Tooling lost geen governance op — discipline wel.",
      },
      {
        type: "callout",
        title: "Belangrijke nuance",
        text:
          "Cost management is een actief vak. Snowflake en Databricks zijn enorm krachtig maar ook makkelijk te overdrijven. Zonder query-tagging, resource monitors en code-reviews loopt je rekening sneller op dan je denkt.",
      },
      { type: "heading", text: "Wanneer ben je er klaar voor?" },
      {
        type: "paragraph",
        text:
          "Wanneer je meerdere bronsystemen wil integreren, een team hebt dat SQL kan schrijven en een organisatie die data-gedreven beslissingen wil nemen. Als je nog in single-app rapportages zit (alleen Salesforce dashboards), kan een Modern Data Stack overkill zijn. Maar bij 3+ bronnen en meerdere analytics-vragen per week wordt de business case sterk.",
      },
      { type: "heading", text: "Mijn voorkeuren in 2026" },
      {
        type: "paragraph",
        text:
          "Voor de meeste Nederlandse opdrachtgevers: Snowflake of Databricks als warehouse (afhankelijk van workload), dbt voor transformaties, Azure Data Factory of Airflow voor orchestration en Power BI als BI-tool. Maar de keuzes hangen sterk af van bestaande cloud-strategie en team-skills.",
      },
    ],
    related: [
      "etl-vs-elt-wat-werkt-echt-in-2026",
      "snowflake-vs-databricks-2026",
      "dbt-best-practices-projectstructuur",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "snowflake-vs-databricks-2026",
    title: "Snowflake vs Databricks in 2026: hoe je écht kiest",
    description:
      "Beide platforms convergeren, maar voor 80% van de use cases is er een duidelijk betere keuze. Een eerlijke vergelijking vanuit consultancy-perspectief.",
    metaTitle: "Snowflake vs Databricks 2026 | Welke kies je?",
    metaDescription:
      "Senior data engineering consultancy vergelijkt Snowflake en Databricks: kosten, performance, ecosysteem en governance. Praktische keuze-guide.",
    category: "Modern Data Stack",
    tags: ["Snowflake", "Databricks", "lakehouse", "warehouse"],
    publishedAt: "2026-02-05",
    readingMinutes: 11,
    intro:
      "De vraag ‘Snowflake of Databricks?’ krijg ik bij vrijwel iedere architectuur-opdracht. Beide platforms convergeren in functionaliteit, maar er zijn nog genoeg verschillen om een bewuste keuze te maken. Geen marketing — alleen wat ik in de praktijk zie werken.",
    sections: [
      { type: "heading", text: "Waar ze hetzelfde zijn" },
      {
        type: "paragraph",
        text:
          "Beide bieden een schaalbaar cloud-platform met scheiding van storage en compute, ondersteunen SQL en Python, integreren met dbt, en hebben goede data governance-tooling. Beide draaien op alle drie de hyperscalers.",
      },
      { type: "heading", text: "Waar Snowflake sterker is" },
      {
        type: "list",
        items: [
          "Pure SQL workloads: snel, voorspelbaar en eenvoudig in beheer.",
          "Laagdrempelig voor analytics teams die geen Spark-ervaring hebben.",
          "Sterk in data sharing en marketplace.",
          "Eenvoudige resource monitors en cost controls.",
        ],
      },
      { type: "heading", text: "Waar Databricks sterker is" },
      {
        type: "list",
        items: [
          "Heavy data engineering met grote volumes en complexe transformaties in Spark.",
          "Machine learning en MLOps via Unity Catalog en MLflow.",
          "Streaming-workloads met Structured Streaming.",
          "Open table formats (Delta Lake) en bredere ecosysteem-integratie.",
        ],
      },
      { type: "heading", text: "Keuze-matrix" },
      {
        type: "paragraph",
        text:
          "De simpele vuistregel die ik hanteer: als je primair SQL-analytics doet en geen serieuze data science/ML pipeline hebt, kies Snowflake. Als je data engineering met Spark, machine learning en streaming combineert, kies Databricks. Voor Microsoft-georiënteerde organisaties is Microsoft Fabric (gebouwd op Databricks-fundamenten) een derde overweging.",
      },
      {
        type: "callout",
        title: "Hybride aanpak",
        text:
          "Bij grote organisaties zie ik regelmatig een combinatie: Databricks voor zware engineering en ML, Snowflake voor analytics. Niet ideaal, maar pragmatisch wanneer beide teams hun voorkeur hebben gevestigd.",
      },
      { type: "heading", text: "Kostenrealiteit" },
      {
        type: "paragraph",
        text:
          "Beide zijn niet goedkoop. Snowflake credits kunnen hard oplopen bij slechte query design. Databricks DBU's idem dito bij niet-geoptimaliseerde clusters. Reken in beide gevallen op een rekening die hoger uitvalt dan je eerste calculatie suggereerde — en zet vanaf dag één monitoring op.",
      },
      { type: "heading", text: "Governance & catalog" },
      {
        type: "paragraph",
        text:
          "Snowflake Horizon en Databricks Unity Catalog zijn beide volwassen geworden. Unity Catalog is op dit moment iets sterker in data lineage en cross-workspace governance, Horizon iets sterker in cross-organisatie data sharing.",
      },
      { type: "heading", text: "Hoe ik in opdrachten kies" },
      {
        type: "paragraph",
        text:
          "Vraag één: wat draait er al? Op een organisatie die net Snowflake heeft aangeschaft een Databricks-implementatie pushen is zelden de juiste keuze. Vraag twee: wat is het team? Spark-vaardigheid bepaalt veel. Vraag drie: hoe zwaar zijn de transformatie- en ML-workloads? Dat is de echte differentiator.",
      },
    ],
    related: [
      "modern-data-stack-uitgelegd",
      "azure-data-stack-keuzes",
      "data-platform-architectuur-blueprint",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "data-pipeline-betrouwbaarheid",
    title: "Hoe je data pipelines bouwt waar je echt op kunt vertrouwen",
    description:
      "Betrouwbaarheid is geen toeval. Het is een ontwerpkeuze. Concrete patronen voor idempotentie, alerting, observability en herstel.",
    metaTitle: "Betrouwbare data pipelines bouwen | Engineering best practices",
    metaDescription:
      "Praktische patronen voor betrouwbare data pipelines: idempotentie, alerting, retry-strategie, observability en incident response.",
    category: "Data Engineering",
    tags: ["data pipelines", "reliability", "observability"],
    publishedAt: "2026-02-12",
    readingMinutes: 9,
    intro:
      "Een pipeline die 99% van de tijd loopt is geen betrouwbare pipeline. Het is een tijdbom die op de 1% wacht waarop iedereen vakantie heeft. In deze post: de patronen waarmee ik in de praktijk pipelines bouw waar teams écht op vertrouwen.",
    sections: [
      { type: "heading", text: "Idempotentie als principe" },
      {
        type: "paragraph",
        text:
          "Een pipeline moet veilig opnieuw uitgevoerd kunnen worden zonder dubbele data of corruptie. Dat klinkt vanzelfsprekend, maar in de praktijk zie ik regelmatig ingestion-jobs die bij rerun rijen dupliceren of incrementele jobs die alleen ‘werken’ bij een specifieke runs-volgorde.",
      },
      {
        type: "list",
        items: [
          "Gebruik MERGE/UPSERT in plaats van INSERT bij incrementele loads.",
          "Maak deterministisch keys (geen UUIDs op runtime gegenereerd).",
          "Sla de cut-off (high-watermark) expliciet op in een metadata-tabel.",
        ],
      },
      { type: "heading", text: "Retries — slim, niet stom" },
      {
        type: "paragraph",
        text:
          "Retries zijn nuttig voor transient errors (netwerk, rate limiting), maar gevaarlijk voor data-correctheidsfouten. Configureer retries op transport-niveau (3 retries met exponential backoff), niet op pipeline-niveau. Een mislukte transformatie repareer je eenmalig, niet door blind te herhalen.",
      },
      { type: "heading", text: "Alerting die niet doodloopt in een Slack-kanaal" },
      {
        type: "paragraph",
        text:
          "De meeste teams hebben een #data-alerts kanaal dat na drie weken niemand meer leest. De truc: differentiëer naar urgentie. SLA-pagings (kritieke marts) gaan naar oncall, niet naar Slack. Niet-kritieke meldingen verdwijnen pas in Slack — maar inclusief direct-actionable context.",
      },
      {
        type: "callout",
        title: "Vuistregel",
        text:
          "Iedere alert moet beantwoorden: wat is er stuk, hoe weet je dat zeker, wie is owner, en welke runbook-stap volgt? Anders is het ruis.",
      },
      { type: "heading", text: "Observability als eerste-klas burger" },
      {
        type: "paragraph",
        text:
          "Bouw vanaf dag één metadata-logging in: per run de start- en eindtijd, rijen verwerkt, latency, errors. Een eenvoudige dbt run results-tabel of een Airflow logs-export is genoeg om binnen weken een operations-dashboard te bouwen dat trends en regressies zichtbaar maakt.",
      },
      { type: "heading", text: "Data quality als check, niet als hoop" },
      {
        type: "paragraph",
        text:
          "Idere pipeline-stap eindigt met data tests. Geen tests = je hoopt dat alles goed gaat. dbt tests, Great Expectations of zelfgeschreven assertions — maakt niet zoveel uit. Wat wel uitmaakt: een falende test blokkeert de volgende stap, in plaats van een waarschuwing in een log.",
      },
      { type: "heading", text: "Documentatie van failure modes" },
      {
        type: "paragraph",
        text:
          "Een runbook per kritieke pipeline beschrijft: wat te doen bij welke error, welke commando's je draait, en wanneer je escaleert. Zonder runbook is iedere middernacht-incident een improvisatie.",
      },
    ],
    related: [
      "data-quality-die-business-vertrouwt",
      "dbt-best-practices-projectstructuur",
      "data-incident-response",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "data-quality-die-business-vertrouwt",
    title: "Data quality die de business vertrouwt: voorbij testen",
    description:
      "Data quality is meer dan een paar dbt tests. Een framework om vertrouwen op te bouwen — vanaf bron tot dashboard.",
    metaTitle: "Data Quality Framework | Praktische aanpak voor data teams",
    metaDescription:
      "Een praktisch framework voor data quality: testen op alle lagen, data contracts, monitoring en business validatie.",
    category: "Data Quality",
    tags: ["data quality", "dbt tests", "data contracts"],
    publishedAt: "2026-02-19",
    readingMinutes: 8,
    intro:
      "‘Onze data klopt niet’ is de meest gehoorde klacht in iedere data-organisatie. De oorzaak is bijna nooit één bug — het is een systemisch gebrek aan data quality-discipline. In deze post: een framework dat ik in de praktijk gebruik om dat probleem fundamenteel aan te pakken.",
    sections: [
      { type: "heading", text: "De vier lagen van data quality" },
      {
        type: "list",
        ordered: true,
        items: [
          "Bron: data contracts met producers. Schema en betekenisafspraken die niet zomaar mogen veranderen.",
          "Ingestion: technische validatie (schema, volumes, freshness).",
          "Transformatie: business rules (referentiële integriteit, ranges, joinbaarheid).",
          "Output: semantische validatie tegen externe waarheid (vergelijking met source-of-record).",
        ],
      },
      { type: "heading", text: "Data contracts — de meest verwaarloosde laag" },
      {
        type: "paragraph",
        text:
          "Vrijwel iedere data quality-issue is uiteindelijk te traceren naar een ongedocumenteerde schema-wijziging upstream. Data contracts (formeel of informeel) zijn de manier om dat te voorkomen: producers committen aan een stabiele structuur, consumers aan een verwacht patroon. Tools als Avro, Protocol Buffers of OpenAPI helpen, maar de organisatorische afspraak is belangrijker dan de tool.",
      },
      { type: "heading", text: "dbt tests — wel en niet voldoende" },
      {
        type: "paragraph",
        text:
          "dbt tests dekken structureel data quality goed af: uniqueness, niet-null, referentiële integriteit, accepted values. Wat ze niet kunnen: business-context-checks zoals ‘de totale omzet van vandaag mag niet meer dan 20% afwijken van het zevendaags gemiddelde’. Voor dat soort assertions schrijf je singular tests of integreer je Great Expectations.",
      },
      {
        type: "callout",
        title: "Tip uit de praktijk",
        text:
          "Voeg een ‘reconciliation’ test toe die de kerncijfers van je gold-laag vergelijkt met de bron. Een dagelijkse check ‘omzet in DWH ≈ omzet in bronsysteem’ vangt 80% van de echte issues.",
      },
      { type: "heading", text: "Monitoring en observability" },
      {
        type: "paragraph",
        text:
          "Naast tests heb je continue monitoring nodig. Tools zoals Monte Carlo, Soda en Elementary doen dit automatisch op basis van statistische patronen: ze leren wat ‘normaal’ is en alarmeren bij afwijkingen. Voor organisaties die nog niet zover zijn, is een eenvoudige metadata-tracking met Elementary al een grote stap vooruit.",
      },
      { type: "heading", text: "Wie is eigenaar?" },
      {
        type: "paragraph",
        text:
          "De diepste oorzaak van data quality-problemen is bijna altijd onduidelijk ownership. Wie is verantwoordelijk voor de definitie van ‘actieve klant’? Wie moet ingrijpen als de freshness check faalt? Zonder benoemde data owners verzandt elke kwaliteitsdiscussie in elkaar wegduwen.",
      },
      { type: "heading", text: "Concrete startstappen" },
      {
        type: "list",
        ordered: true,
        items: [
          "Inventariseer je top-10 kritische marts en schrijf voor elk een freshness en uniqueness test.",
          "Maak één reconciliation test per top-3 KPI.",
          "Benoem een data owner per domein (sales, finance, operations).",
          "Implementeer Elementary of Soda op je dbt-project.",
          "Communiceer wekelijks een data quality-score naar stakeholders.",
        ],
      },
    ],
    related: [
      "data-pipeline-betrouwbaarheid",
      "dbt-best-practices-projectstructuur",
      "data-governance-praktisch",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "azure-data-stack-keuzes",
    title: "Azure data engineering in 2026: ADF, Synapse, Fabric of Databricks?",
    description:
      "Microsoft heeft zoveel data-services dat de keuze paralyserend wordt. Een praktische guide door het Azure data-landschap.",
    metaTitle: "Azure Data Engineering | ADF vs Synapse vs Fabric vs Databricks",
    metaDescription:
      "Praktische guide door het Azure data-landschap in 2026. ADF, Synapse, Microsoft Fabric en Databricks — wanneer kies je wat?",
    category: "Cloud & Azure",
    tags: ["Azure", "Data Factory", "Synapse", "Fabric", "Databricks"],
    publishedAt: "2026-02-26",
    readingMinutes: 10,
    intro:
      "Microsoft heeft inmiddels zoveel data-services dat zelfs gespecialiseerde architecten regelmatig de overlap niet meer kunnen uitleggen. In deze post: een guide om in het Azure-landschap snel tot een werkende architectuur te komen.",
    sections: [
      { type: "heading", text: "Het probleem in één zin" },
      {
        type: "paragraph",
        text:
          "Azure heeft inmiddels minstens vier overlappende manieren om data te transformeren: Data Factory mapping data flows, Synapse pipelines, Databricks en (sinds 2024) Microsoft Fabric. Welke kies je?",
      },
      { type: "heading", text: "Azure Data Factory (ADF)" },
      {
        type: "paragraph",
        text:
          "ADF blijft de werkpaard voor ingestion en orchestration. 200+ connectors, copy activities, integration runtimes en pipelines met triggers. Wat ADF niet goed kan: zware transformaties. Voor SQL-zware transformaties verwijs ik naar Synapse, voor Spark-zware naar Databricks.",
      },
      { type: "heading", text: "Synapse Analytics" },
      {
        type: "paragraph",
        text:
          "Synapse is een verzameling van vier producten in één workspace: dedicated SQL pools, serverless SQL, Spark pools en pipelines. Dat is krachtig maar ook verwarrend. In 2026 zie ik Synapse vooral nog draaien bij bestaande implementaties — voor nieuwe greenfield-architecturen op Azure is Microsoft Fabric of Databricks meestal de betere keuze.",
      },
      { type: "heading", text: "Microsoft Fabric" },
      {
        type: "paragraph",
        text:
          "Fabric is Microsofts pogingen om een end-to-end Modern Data Platform te leveren binnen één SKU: OneLake als lakehouse, Notebooks voor Spark, Warehouse voor SQL, Direct Lake voor Power BI. Sterk geïntegreerd met Power BI en Microsoft 365 — minder volwassen op pure engineering-praktijken. Voor Microsoft-shop organisaties met zwaartepunt op Power BI is Fabric inmiddels een serieuze keuze.",
      },
      { type: "heading", text: "Azure Databricks" },
      {
        type: "paragraph",
        text:
          "Voor organisaties met serieuze engineering- en ML-ambities blijft Databricks op Azure de meest volwassen optie. Unity Catalog, MLflow, Delta Live Tables en workflows zijn lichtjaren vóór op wat Fabric levert op die fronten. Voor pure SQL-analytics is Fabric of Synapse vaak goedkoper.",
      },
      {
        type: "callout",
        title: "Mijn vuistregels voor 2026",
        text:
          "Nieuwe greenfield Azure architectuur: Databricks + ADF + Power BI als default. Microsoft-shop met BI als zwaartepunt: Fabric overwegen. Bestaande Synapse-implementatie: niet zonder reden migreren — wel moderniseren binnen Synapse.",
      },
      { type: "heading", text: "Praktische architectuur" },
      {
        type: "paragraph",
        text:
          "De architectuur die ik bij de meeste Azure-opdrachten voorstel: ADLS Gen2 als lake (medallion), ADF voor ingestion en orchestration, Databricks voor transformaties (met dbt erbovenop), Power BI voor BI. Microsoft Purview voor governance. Terraform voor IaC. Werkt voorspelbaar, scales goed en is binnen het Microsoft-ecosysteem aanvaardbaar.",
      },
    ],
    related: [
      "snowflake-vs-databricks-2026",
      "data-platform-architectuur-blueprint",
      "modern-data-stack-uitgelegd",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "data-platform-architectuur-blueprint",
    title: "Een dataplatform-architectuur die jaren meegaat",
    description:
      "Wat is een goed dataplatform anno 2026? Een blueprint met principes, lagen en concrete keuzes — getest in opdrachten bij enterprise organisaties.",
    metaTitle: "Dataplatform architectuur blueprint 2026 | Senior consultancy",
    metaDescription:
      "Concrete blueprint voor een modern dataplatform: lagen, principes, governance, security en kostenbeheer. Door senior data engineering consultant.",
    category: "Data Strategy",
    tags: ["architectuur", "dataplatform", "Strategy"],
    publishedAt: "2026-03-05",
    readingMinutes: 11,
    intro:
      "Een dataplatform bouw je voor minstens 5 jaar. In die tijd verandert bijna alles: data sources, teams, business prioriteiten en zelfs cloud-providers. Een goede architectuur overleeft die veranderingen — een slechte vraagt om herontwerp binnen twee jaar.",
    sections: [
      { type: "heading", text: "De principes die het verschil maken" },
      {
        type: "list",
        ordered: true,
        items: [
          "Scheid storage van compute. Cloud warehouses doen dit natively — gebruik het.",
          "Behandel ruwe data als immutable. Nooit overschrijven, altijd appended.",
          "Modulariseer transformaties. Eén grote SQL = niet onderhoudbaar.",
          "Code over click. Pipelines, modellen en infra in versiebeheer.",
          "Test op iedere laag. Niet alleen aan het eind.",
          "Governance is een ontwerp-eigenschap, niet een afterthought.",
        ],
      },
      { type: "heading", text: "De lagen" },
      {
        type: "paragraph",
        text:
          "Een medallion-architectuur (bronze / silver / gold) is in de praktijk de standaard geworden — en terecht. Bronze: ruwe data, exact zoals geleverd, partitioned op load datum. Silver: gecleaned, getypeerd en gededuplicate. Gold: business-georiënteerde marts in dbt-stijl.",
      },
      { type: "heading", text: "Ingestion" },
      {
        type: "paragraph",
        text:
          "Drie patronen: SaaS-connectors (Fivetran/Airbyte) voor common sources, custom Python/ADF voor on-prem of niet-standaard, streaming via Event Hubs of Kafka voor near-realtime. Idempotentie in alle drie de patronen.",
      },
      { type: "heading", text: "Transformatie" },
      {
        type: "paragraph",
        text:
          "dbt is de standaard. Lichte Spark-transformaties voor unstructured data. Géén transformaties in Power BI of in ad-hoc SQL — alles in code, in versiebeheer.",
      },
      { type: "heading", text: "Orchestration" },
      {
        type: "paragraph",
        text:
          "Airflow, Prefect of Dagster voor complexe DAGs, ADF voor Azure-georiënteerde orchestration, dbt Cloud scheduler voor pure dbt-projecten. Pragmatiek boven dogma.",
      },
      { type: "heading", text: "Governance" },
      {
        type: "paragraph",
        text:
          "Unity Catalog of Snowflake Horizon voor warehouse-level governance, Microsoft Purview of Collibra voor cross-platform catalog, dbt docs voor self-service documentatie. Audit logging als niet-onderhandelbare baseline.",
      },
      { type: "heading", text: "Security" },
      {
        type: "list",
        items: [
          "Managed identities — geen hard-coded keys.",
          "Network isolation via private endpoints.",
          "Encryption at-rest en in-transit (default in cloud warehouses).",
          "Row-level en column-level security voor PII.",
          "Least-privilege access en periodieke access reviews.",
        ],
      },
      { type: "heading", text: "Cost management" },
      {
        type: "paragraph",
        text:
          "Resource monitors, query tagging, scheduled compute pauzes, materialisatie-keuzes en regelmatige cost reviews. De grootste cost-besparingen zitten zelden in de tooling-keuze, vrijwel altijd in slechte queries en niet-opgeschoonde development workloads.",
      },
      {
        type: "callout",
        title: "Wat ik nooit weer doe",
        text:
          "Op één centraal Snowflake-warehouse alles laten draaien zonder warehouse-segregatie per team. Eén ontspoorde query van een data scientist legt dan letterlijk de hele organisatie plat.",
      },
      { type: "heading", text: "Wat je niet hoeft te bouwen" },
      {
        type: "paragraph",
        text:
          "Wat ik regelmatig zie en vrijwel altijd advies om niet te doen: een eigen orchestration framework bouwen (gebruik Airflow), een custom data catalog (gebruik Purview of Unity Catalog), of een eigen testing framework (gebruik dbt of Great Expectations). De buy-vs-build afweging valt anno 2026 bijna altijd in het voordeel van buy uit.",
      },
    ],
    related: [
      "modern-data-stack-uitgelegd",
      "azure-data-stack-keuzes",
      "data-pipeline-betrouwbaarheid",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "analytics-engineering-rol-en-impact",
    title: "De analytics engineer: rol, verantwoordelijkheden en wat het oplevert",
    description:
      "De analytics engineer is geen modegril. Het is de rol die jouw data team van losse rapportjes naar een schaalbare semantic layer brengt.",
    metaTitle: "Analytics Engineer | Wat is het en waarom heb je er één nodig?",
    metaDescription:
      "Wat doet een analytics engineer, hoe verschilt de rol van een data engineer of data analist, en wat levert het op?",
    category: "Analytics Engineering",
    tags: ["analytics engineering", "dbt", "rol"],
    publishedAt: "2026-03-12",
    readingMinutes: 7,
    intro:
      "Vijf jaar geleden was ‘analytics engineer’ een nieuwe titel. In 2026 is het een onmisbare rol in elk volwassen data team. In deze post: wat doet een analytics engineer precies, wat onderscheidt de rol van data engineering en data analytics, en wanneer huur je er een in?",
    sections: [
      { type: "heading", text: "Definitie" },
      {
        type: "paragraph",
        text:
          "Een analytics engineer modelleert data tot business-georiënteerde, betrouwbare tabellen die door BI en data science worden gebruikt. De rol combineert het beste van engineering (versiebeheer, testing, modularisering) met het domeinbegrip van een analist.",
      },
      { type: "heading", text: "Het verschil met andere rollen" },
      {
        type: "list",
        items: [
          "Data engineer: pipelines en infrastructuur (raw → bronze → silver).",
          "Analytics engineer: business modelling (silver → gold), KPI-definitie.",
          "Data analist: insight extraction op de gold-laag, dashboards, ad-hoc analyses.",
          "Data scientist: voorspellende modellen en experimenten.",
        ],
      },
      { type: "heading", text: "Wat een analytics engineer concreet doet" },
      {
        type: "list",
        items: [
          "dbt-projecten bouwen en onderhouden.",
          "Business metrics in code definiëren en testen.",
          "Werken met stakeholders aan KPI-harmonisatie.",
          "Code reviews op data modellen.",
          "Self-service enablement: documentatie, training, governance.",
        ],
      },
      { type: "heading", text: "Wanneer je er één nodig hebt" },
      {
        type: "paragraph",
        text:
          "Zodra je meer dan een handvol dashboards hebt en meerdere stakeholders dezelfde data verschillend interpreteren. Of zodra je BI-rapporten een eigen leven gaan leiden met onderlinge inconsistenties. Een analytics engineer trekt dat recht en bouwt de fundering eronder.",
      },
      {
        type: "callout",
        title: "Vuistregel",
        text:
          "Eén goede analytics engineer bespaart vaak 2–3 data analisten aan onderlinge afstemming en repetitief modelleerwerk.",
      },
      { type: "heading", text: "Wat het oplevert" },
      {
        type: "paragraph",
        text:
          "Dashboards die niet meer hoeven worden uitgelegd. Eén bron van waarheid voor business metrics. Data analisten die zich kunnen richten op insight in plaats van op data wrangling. Een platform dat schaalt naar nieuwe vragen zonder iedere keer het wiel opnieuw uit te vinden.",
      },
    ],
    related: [
      "dbt-best-practices-projectstructuur",
      "data-quality-die-business-vertrouwt",
      "kpi-definitie-met-stakeholders",
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "kpi-definitie-met-stakeholders",
    title: "Heldere KPI-definities: het ongemakkelijke gesprek dat je moet voeren",
    description:
      "Waarom drie dashboards drie verschillende omzetten laten zien — en hoe je tot één afgesproken definitie komt.",
    metaTitle: "KPI-definities harmoniseren | Praktische aanpak voor data teams",
    metaDescription:
      "Hoe je conflicterende KPI-definities tussen finance, sales en operations aanpakt — en vastlegt in code.",
    category: "Data Strategy",
    tags: ["KPI", "metrics", "governance", "stakeholders"],
    publishedAt: "2026-03-19",
    readingMinutes: 7,
    intro:
      "Het meest onderschatte werk in elk data project zit niet in de techniek. Het zit in het uitonderhandelen van wat ‘omzet’, ‘klant’, ‘actief’ of ‘pipeline’ precies betekent. In deze post: hoe je dat ongemakkelijke gesprek voert en vastlegt in code.",
    sections: [
      { type: "heading", text: "Waarom drie dashboards drie omzetten geven" },
      {
        type: "paragraph",
        text:
          "Niet omdat één van de drie ‘fout’ is. Maar omdat finance omzet rapporteert op factuurmoment, sales op contractmoment en operations op leveringsmoment. Dat zijn drie legitieme perspectieven op hetzelfde concept — maar zonder afspraak zien stakeholders alleen de inconsistentie.",
      },
      { type: "heading", text: "De aanpak" },
      {
        type: "list",
        ordered: true,
        items: [
          "Verzamel alle bestaande KPI-definities uit dashboards, decks en Excels.",
          "Identificeer de drie tot vijf belangrijkste metrics waar inconsistenties zitten.",
          "Roep stakeholders bij elkaar — finance, sales, operations en BI-team.",
          "Maak in de werksessie zichtbaar hoe ieder denkt, en wat de impact is van elke keuze.",
          "Spreek per metric één definitie af, met expliciete eigenaar.",
          "Leg het vast in een data dictionary én in code (dbt metrics, glossary).",
        ],
      },
      { type: "heading", text: "Wat je niet moet doen" },
      {
        type: "list",
        items: [
          "Achter een gesloten deur een definitie kiezen — politiek funest.",
          "Alle drie de varianten blijven leveren ‘om iedereen tevreden te houden’.",
          "De business definitie alleen in een PDF vastleggen — die wordt nooit meer gelezen.",
        ],
      },
      {
        type: "callout",
        title: "Sleutelinzicht",
        text:
          "Het is niet jouw werk als data consultant om voor de business te kiezen wat de juiste KPI-definitie is. Het is jouw werk om de keuze inzichtelijk en concreet te maken zodat de business kan kiezen.",
      },
      { type: "heading", text: "Implementatie in code" },
      {
        type: "paragraph",
        text:
          "In dbt leg je de definities vast in een metrics-bestand of een marts-model met heldere comments. De gold-laag bevat de afgesproken definitie; alternatieve perspectieven (factuur vs. levering) als aparte kolommen. Documentatie via dbt docs of Microsoft Purview.",
      },
      { type: "heading", text: "Onderhoud" },
      {
        type: "paragraph",
        text:
          "KPI-definities zijn niet statisch. Bij elk nieuw business model of overname kunnen ze moeten worden bijgesteld. Beleg dat in een data council of een vergelijkbaar forum dat een paar keer per jaar de definities herijkt.",
      },
    ],
    related: [
      "analytics-engineering-rol-en-impact",
      "data-quality-die-business-vertrouwt",
      "data-governance-praktisch",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return post.related
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, 3);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getAllPostsSortedByDate(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
