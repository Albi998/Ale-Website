export const site = {
  brand: {
    name: "Luna Beauty",
    tagline: "Eleganza quotidiana",
    phone: "+39 347 123 4567",
    email: "info@lunabeauty.it",
    address: "Via Roma 12, Milano",
    socials: {
      instagram: "https://instagram.com/lunabeauty",
      whatsapp: "https://wa.me/393471234567",
    },
  },
  nav: [
    { label: "Home", href: "#home" },

    { label: "Servizi", href: "#services" },
    { label: "Chi siamo", href: "#about" },
    { label: "Contatti", href: "#contact" },
  ],
  hero: {
    title: "Cura. Stile. Fiducia.",
    subtitle: "Trattamenti professionali per capelli e pelle.",
    ctaPrimary: {
      label: "Prenota su WhatsApp",
      href: "https://wa.me/393471234567",
    },
    ctaSecondary: { label: "Scopri i servizi", href: "#services" },
  },
  services: {
    heading: "COSA OFFRIAMO",
    intro:
      "Confortevole centro estetico nel cuore della città. Trattamenti personalizzati per risultati naturali e duraturi.",
    items: [
      {
        id: "cosmetic-tattooing",
        title: "Ricostruzione Unghie",
        excerpt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium unde velit magnam cupiditate iure consequatur.",
        image: "/img/n6.webp",
        ctaLabel: "PRENOTA",
        ctaHref: "#contact",
        theme: "light",
        shape: "circle",
      },
      {
        id: "beauty-therapy",
        title: "Trattamenti Capelli",
        excerpt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium unde velit magnam cupiditate iure consequatur.",
        image: "/img/h3.jpg",
        ctaLabel: "PRENOTA",
        ctaHref: "#contact",
        theme: "taupe",
        shape: "rect",
      },
      {
        id: "brow-lamination",
        title: "Depilazione",
        excerpt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/img/depil.png",
        ctaLabel: "PRENOTA",
        ctaHref: "#contact",
        theme: "light",
        shape: "circle",
      },
      {
        id: "beauty-therapy",
        title: "Ciglia e Sopracciglia",
        excerpt:
          "Facials, peels, and rituals to restore skin health. Plans that improve glow, texture, and hydration.",
        image: "/img/brows.jpg",
        ctaLabel: "PRENOTA",
        ctaHref: "#contact",
        theme: "taupe",
        shape: "rect",
      },
      {
        id: "brow-lamination",
        title: "Brow Lamination",
        excerpt:
          "Fuller, lifted brows in minutes. Shape control and shine for up to 6–8 weeks.",
        image: "/img/nails.jpg",
        ctaLabel: "PRENOTA",
        ctaHref: "#contact",
        theme: "light",
        shape: "circle",
      },
      {
        id: "beauty-therapy",
        title: "Beauty Therapy",
        excerpt:
          "Facials, peels, and rituals to restore skin health. Plans that improve glow, texture, and hydration.",
        image: "/img/m6.jpg",
        ctaLabel: "PRENOTA",
        ctaHref: "#contact",
        theme: "taupe",
        shape: "rect",
      },
    ],
  },
  footer: {
    instagramHandle: "@browstudio",
    menu: [
      { label: "Home", href: "#home" },
      { label: "Chi siamo", href: "#about" },
      { label: "Servizi", href: "#services" },
      { label: "Contatti", href: "#contact" },
    ],
    hours: [
      { label: "Mar – Ven", value: "9 – 18" },
      { label: "Sab", value: "9 - 13" },
      { label: "Dom - Lun", value: "Chiuso" },
    ],
    igPhotos: ["/img/brows.jpg", "/img/n3.webp", "/img/n6.webp", "/img/h3.jpg"],
  },
  about: {
    hero: {
      image: "/img/hairbg.png",
      kicker:
        "Esalta la tua bellezza naturale riducendo il tempo necessario per il trucco",
      cta: { label: "PRENOTA", href: "#contact" },
    },
    title: "Chi Siamo",
    p1: "Aggiungi una breve introduzione su chi sei e su come aiuti i clienti. Condividi la tua storia di trasformazione. Concentrati sugli obiettivi dei clienti e sul modo in cui li aiuti a sentirsi al meglio ogni giorno.",
    p2: "Assistenza di alta qualità, prodotti puliti e protocolli personalizzati. Il nostro team unisce arte e tecnica per ottenere risultati naturali e duraturi.",
    image: "/img/est_uno.webp",
    cta: { label: "Contattaci", href: "#contact" },
  },
};
