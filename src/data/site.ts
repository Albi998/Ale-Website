import { FaLinkedin } from "react-icons/fa";

export const site = {
  brand: {
    name: "Dr. Jane Doe",
    href: "#home",
    logo: "/img/logoa.png",
    address: "Via Esempio 1, Città",
    phone: "+39 333 0000000",
    email: "info@studio.it",
    socials: {
      instagram: "https://instagram.com/...",
      whatsapp: "https://wa.me/...",
    },
  },
  nav: [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Servizi" },
    { href: "#about", label: "Chi Sono" },
    { href: "#contact", label: "Contatti" },
  ],
  hero: {
    image: "/img/al.jpeg",
    imageAlt: "Psicologa nello studio",
    title: "Alessandra Scarsi Psicologa",
    subtitle:
      "Psicologa ad orientamento sistemico relazionale",
    ctaPrimary: {
      href: "https://www.guidapsicologi.it/studio/dottssa-alessandra-scarsi",
      label: "Prenota una consulenza",
    },
  },
  services: {
    heading: "La mia consulenza è utile se vivi…",
    intro:
      "In ambito clinico supporto persone che presentano difficoltà relazionali, ansia, stress, stati depressivi, disturbo da uso di sostanze e dipendenze, conflitti e difficoltà nel rapporto di coppia, famiglie e rapporto con i figli.",
    items: [
      {
        id: "stress",
        tag: "Stress",
        title: "Tensione costante?",
        excerpt:
          "Mi occupo di accompagnare chi vive situazioni di stress acuto o cronico, aiutando a individuare le fonti di pressione e a sviluppare modalità più funzionali per affrontarle. Il mio obiettivo è promuovere equilibrio e benessere psicofisico.",
        theme: "solid",
      },
      {
        id: "anxiety",
        tag: "Disturbi d'ansia",
        title: "Ansia persistente?",
        excerpt:
          "Aiuto le persone a riconoscere e gestire i sintomi dell’ansia, lavorando sulle cause profonde e sulle strategie per affrontarla nella vita quotidiana. Creo uno spazio sicuro dove poter esplorare le proprie paure senza giudizio e costruire nuove risorse interiori.",
        theme: "light",
      },
      {
        id: "rel",
        tag: "Terapia di coppia",
        title: "Conflitti di coppia?",
        excerpt:
          "Accompagno le coppie in difficoltà a migliorare la comunicazione, affrontare conflitti e ritrovare un’intesa più profonda. Attraverso un ascolto attento e neutrale, aiuto a costruire nuove modalità di relazione più sane e consapevoli.",
        theme: "solid",
      },
      {
        id: "depr",
        tag: "Gestione delle emozioni",
        title: "Umore basso?",
        excerpt:
          "Supporto chi vive momenti di tristezza profonda, apatia o sbalzi d’umore, offrendo strumenti per comprendere e regolare le emozioni. Insieme esploriamo vissuti, relazioni e pensieri, alla ricerca di un nuovo equilibrio emotivo.",
        theme: "light",
      },
      {
        id: "self",
        tag: "Trauma",
        title: "Traumi da elaborare?",
        excerpt:
          "Lavoro con persone che hanno vissuto eventi traumatici o esperienze di vita complesse, creando uno spazio protetto in cui elaborare il dolore e trasformarlo in forza. Ogni percorso è pensato per rispettare i tempi e i bisogni individuali.",
        theme: "solid",
      },
      {
        id: "sleep",
        tag: "Terapia familiare",
        title: "Problemi in famiglia?",
        excerpt:
          "Offro uno spazio di dialogo per le famiglie che vivono tensioni o disagi relazionali. Attraverso il confronto guidato, sostengo ogni membro nel comprendere meglio le dinamiche familiari e trovare nuovi equilibri di benessere.",
        theme: "light",
      },
    ],
  },
  about: {
    heading: "Su di me",
    kicker: "Psicologa ad orientamento sistemico relazionale",
    p1: "Sono Alessandra Scarsi, psicologa iscritta alla scuola di specializzazione in psicoterapia ad orientamento sistemico relazionale, Centro Padovano di Terapia della Famiglia. Svolgo l'attività libero professionale in presenza a Pordenone e online, con percorsi di consulenza e di supporto psicologico per giovani, adulti, coppie e famiglie.",
    p2: "Ho conseguito la Laurea in Psicologia di Comunità della Promozione del Benessere e del Cambiamento Sociale presso Università degli studi di Padova e mi sto specializzando in psicoterapia sistemico-relazionale presso Centro Padovano di Terapia della Famiglia. ",
    p3: "Ho maturato, in ambito accademico e lavorativo, esperienza lavorando presso il Dipartimento per le Dipendenze dove ho imparato a lavorare con le difficoltà delle persone che vivono una condizione di dipendenza da alcol, sostanze o comportamentali, e presso il Consultorio Familiare, fornendo supporto psicologico a genitori e coppie nel sostegno alla genitorialità. Successivamente, ho iniziato a lavorare in Cooperativa svolgendo incarichi socio-educativi presso Dipartimento delle Dipendenze e della Salute Mentale.",
    images: ["/img/al.jpeg", "/img/studio.jpg"],
    cta: { href: "#reviews", label: "Leggi le recensioni" },
  },
  contact: {
    heading: "Contatti",
    mapEmbed: "https://www.google.com/maps/embed?...",
  },
  footer: {
    contactTitle: "Contattami",
    map: { lat: 45.957299, lng: 12.664413, zoom: 16 },
    
    contacts: [
      { icon: "map",     label: "Via Fratelli Bandiera, 40 — Pordenone (PN)", href: "https://maps.google.com/?q=Via+Fratelli+Bandiera+40+Pordenone" },
      { icon: "website", label: "Profilo Guida Psicologi", href: "https://www.guidapsicologi.it/..." },
      { icon: "mail",    label: "alessandra.scarsi.psi@gmail.com", href: "mailto:alessandra.scarsi.psi@gmail.com" },
      { icon: "phone",   label: "+39 379 139 3290", href: "tel:+393791393290" },
      { icon: "linkedin",label: "Profilo LinkedIn", href: "https://www.linkedin.com/in/..." },
      { icon: "vat",     label: "Partita IVA: 01969750932" },
      { icon: "order",   label: "Iscrizione Ordine Psicologi FVG", href: "https://www.ordinepsicologifvg.it/..." }
    ]
  }
};
