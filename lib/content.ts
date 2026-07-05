// All site copy lives here so it can be updated in one place.
// Two locales: Lithuanian (lt, default) and English (en).

export type Locale = "lt" | "en";

export interface TrustCard {
  icon: string;
  label: string;
}

export interface DogInfo {
  name: string;
  meta: string[]; // e.g. ["Female", "Bullmastiff", "5 years"]
  photoLabel: string;
  traits: string[];
  blurb: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  desc?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContactLink {
  type: "phone" | "whatsapp" | "imessage" | "linkedin";
  label: string;
  value: string;
  href: string;
}

export interface Content {
  nav: {
    about: string;
    dogs: string;
    home: string;
    faq: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoLabel: string;
  };
  trust: {
    heading: string;
    subheading: string;
    cards: TrustCard[];
  };
  about: {
    heading: string;
    subheading: string;
    photoLabel: string;
    paragraphs: string[];
    values: FeatureCard[];
  };
  moving: {
    heading: string;
    subheading: string;
    fromLabel: string;
    from: string;
    toLabel: string;
    to: string;
    reasonLabel: string;
    reason: string;
    body: string[];
  };
  dogs: {
    heading: string;
    subheading: string;
    list: DogInfo[];
  };
  apartment: {
    heading: string;
    subheading: string;
    cards: FeatureCard[];
  };
  care: {
    heading: string;
    subheading: string;
    cards: FeatureCard[];
  };
  timeline: {
    heading: string;
    subheading: string;
    events: TimelineEvent[];
  };
  faq: {
    heading: string;
    subheading: string;
    items: FaqItem[];
  };
  closing: {
    heading: string;
    body: string;
    cta: string;
    photoLabel: string;
  };
  contact: {
    heading: string;
    prompt: string;
    reveal: string;
    note: string;
    links: ContactLink[];
  };
  qr: {
    heading: string;
    body: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  langToggle: {
    label: string;
    lt: string;
    en: string;
  };
}

// ---------------------------------------------------------------------------
// Contact details — edit these to your real details before sharing.
// ---------------------------------------------------------------------------
const CONTACT = {
  phone: "+370 600 00000",
  phoneHref: "tel:+37060000000",
  whatsapp: "+370 600 00000",
  whatsappHref: "https://wa.me/37060000000",
  imessage: "axel@example.com",
  imessageHref: "sms:+37060000000",
  linkedin: "linkedin.com/in/axel",
  linkedinHref: "https://www.linkedin.com/in/axel",
};

export const content: Record<Locale, Content> = {
  // =========================================================================
  // LITHUANIAN (default)
  // =========================================================================
  lt: {
    nav: {
      about: "Apie mane",
      dogs: "Mano šunys",
      home: "Namų priežiūra",
      faq: "D.U.K.",
      contact: "Kontaktai",
    },
    hero: {
      eyebrow: "Būsimas nuomininkas Vilniuje",
      headline: "Ieškote patikimo nuomininko Vilniuje?",
      subheadline:
        "Sveiki, aš Axel — programinės įrangos inžinierius iš Belgijos, persikeliantis iš Šiaulių į Vilnių kartu su dviem gerai išdresuotais šunimis. Sukūriau šį puslapį, kad galėtumėte mus pažinti dar prieš susitinkant.",
      ctaPrimary: "Sužinoti daugiau",
      ctaSecondary: "Susipažinkite su šunimis",
      photoLabel: "Axel su Raava ir Goldas",
    },
    trust: {
      heading: "Trumpai apie mane",
      subheading: "Keletas dalykų, kurie svarbūs nuomotojui.",
      cards: [
        { icon: "briefcase", label: "Stabilus darbas" },
        { icon: "code", label: "Programinės įrangos inžinierius" },
        { icon: "home", label: "Turiu nuosavą būstą" },
        { icon: "shield", label: "Buvęs karys (7+ metai)" },
        { icon: "dog", label: "Du išdresuoti šunys" },
        { icon: "sparkles", label: "Tvarkingas ir organizuotas" },
        { icon: "moon", label: "Ramus gyvenimo būdas" },
        { icon: "star", label: "Rekomendacijos pateikiamos" },
        { icon: "wallet", label: "Stabilios pajamos" },
        { icon: "handshake", label: "Galiu padidinti užstatą" },
      ],
    },
    about: {
      heading: "Apie mane",
      subheading: "Kodėl būtų malonu man išnuomoti būstą.",
      photoLabel: "Axel portretas",
      paragraphs: [
        "Esu belgas, jau kelerius metus gyvenantis Lietuvoje. Dirbu programinės įrangos inžinieriumi ir vertinu ramybę, tvarką bei pagarbą aplinkiniams.",
        "Prieš tapdamas inžinieriumi, daugiau nei septynerius metus tarnavau kariuomenėje. Ši patirtis išmokė mane disciplinos, atsakomybės ir rūpestingumo — savybių, kurias perkeliu ir į kasdienį gyvenimą bei būsto priežiūrą.",
        "Ieškau būsto arčiau darbo Vilniuje. Man svarbu ilgalaikiai, ramūs ir pagarbūs santykiai su nuomotoju — būstą prižiūriu taip, lyg jis būtų mano paties.",
      ],
      values: [
        {
          icon: "shield-check",
          title: "Disciplinuotas",
          desc: "Septynerių metų karinė patirtis suformavo tvarkingą kasdienybę.",
        },
        {
          icon: "heart-handshake",
          title: "Pagarbus",
          desc: "Gerbiu svetimą turtą ir kaimynų ramybę.",
        },
        {
          icon: "sparkles",
          title: "Organizuotas",
          desc: "Švara ir tvarka man yra natūralus įprotis, o ne pastanga.",
        },
        {
          icon: "moon",
          title: "Ramus",
          desc: "Tylus gyvenimo būdas, be triukšmo ir vakarėlių.",
        },
      ],
    },
    moving: {
      heading: "Kodėl persikeliu",
      subheading: "Paprastas ir aiškus paaiškinimas.",
      fromLabel: "Dabartiniai namai",
      from: "Šiauliai",
      toLabel: "Kryptis",
      to: "Vilnius",
      reasonLabel: "Priežastis",
      reason: "Arčiau darbo",
      body: [
        "Šiuo metu gyvenu Šiauliuose nuosavame būste, tačiau mano darbas yra Vilniuje. Noriu sutrumpinti kelionės laiką ir gyventi arčiau kolegų bei kasdienių reikalų.",
        "Kadangi jau turiu nuosavą būstą, prieš priimdamas didesnį sprendimą noriu ramiai pagyventi Vilniuje ir pažinti miestą. Todėl esu patikimas, ilgalaikei nuomai nusiteikęs nuomininkas — ne skubantis ir ne neapsisprendęs.",
      ],
    },
    dogs: {
      heading: "Susipažinkite su mano šunimis",
      subheading:
        "Abu užauginti nuo šuniuko, pripratę gyventi bute ir elgtis ramiai.",
      list: [
        {
          name: "Raava",
          meta: ["Patelė", "Bulmastifas", "5 metai"],
          photoLabel: "Raava",
          traits: [
            "Rami",
            "Patirtis gyvenant bute",
            "Gerai išdresuota",
            "Tyli",
            "Draugiška",
          ],
          blurb:
            "Raavą auginu nuo mažens. Nepaisant įspūdingo dydžio, ji nepaprastai rami ir švelni — dauguma laiko ilsisi savo vietoje. Su žmonėmis ir kitais šunimis elgiasi draugiškai ir nekelia triukšmo.",
        },
        {
          name: "Goldas",
          meta: ["Patinas", "Labradoras", "8 metai"],
          photoLabel: "Goldas",
          traits: [
            "Ramus",
            "Patirtis gyvenant bute",
            "Gerai išdresuotas",
            "Draugiškas",
          ],
          blurb:
            "Goldas — švelnaus būdo labradoras, kurį auginu nuo šuniuko. Per aštuonerius metus jis tapo ramiu ir subalansuotu kompanionu, puikiai jaučiasi bute ir mielai sutinka kiekvieną.",
        },
      ],
    },
    apartment: {
      heading: "Gyvenimas bute",
      subheading: "Kad nuomotojui nekiltų nerimo dėl šunų.",
      cards: [
        { icon: "building", title: "Pripratę prie buto" },
        { icon: "volume-x", title: "Tylūs" },
        { icon: "check-circle", title: "Pripratę prie namų tvarkos" },
        { icon: "footprints", title: "Reguliarūs pasivaikščiojimai" },
        { icon: "shield-check", title: "Nieko negadina" },
        { icon: "users", title: "Gerai socializuoti" },
        { icon: "heart", title: "Auginti nuo šuniukų" },
        { icon: "home", title: "Patyrę buto gyventojai" },
      ],
    },
    care: {
      heading: "Kaip prižiūriu būstą",
      subheading: "Atsakomybę rodau kasdieniais veiksmais.",
      cards: [
        { icon: "footprints", title: "Batus nusiaunu viduje" },
        { icon: "bot", title: "Robotas dulkių siurblys kasdien" },
        { icon: "wind", title: "Valymas garais" },
        { icon: "spray-can", title: "Savaitinis kvapų neutralizavimas" },
        { icon: "home", title: "Gerbiu turtą" },
        { icon: "wrench", title: "Nedelsiant pranešu apie gedimus" },
        { icon: "sparkles", title: "Tvarkausi kasdien" },
        { icon: "shield-check", title: "Elgiuosi atsakingai" },
      ],
    },
    timeline: {
      heading: "Stabilumo laiko juosta",
      subheading: "Nuoseklus kelias, kuriuo einu jau daug metų.",
      events: [
        {
          year: "",
          title: "Karinė tarnyba",
          desc: "7+ metai tarnybos — disciplina ir atsakomybė.",
        },
        {
          year: "",
          title: "Nuosavas būstas",
          desc: "Įsigijau nuosavą būstą — finansinis stabilumas.",
        },
        {
          year: "",
          title: "Programinės įrangos inžinierius",
          desc: "Perėjimas į stabilią, ilgalaikę karjerą.",
        },
        {
          year: "4,5 m.",
          title: "„Edenred Finance“",
          desc: "4,5 metų toje pačioje įmonėje.",
        },
        {
          year: "2026",
          title: "Persikėlimas į Vilnių",
          desc: "Arčiau darbo, ilgalaikei nuomai.",
        },
      ],
    },
    faq: {
      heading: "Dažnai užduodami klausimai",
      subheading: "Atviri ir konkretūs atsakymai.",
      items: [
        {
          q: "Kodėl persikeliate?",
          a: "Mano darbas yra Vilniuje, o gyvenu Šiauliuose. Noriu sutrumpinti kelionės laiką ir gyventi arčiau darbo bei kasdienių reikalų.",
        },
        {
          q: "Kodėl turėčiau rinktis jus?",
          a: "Turiu stabilų darbą ir pajamas, esu tvarkingas, ramus ir pagarbus. Būstą prižiūriu rūpestingai, o mano šunys yra ramūs ir gerai išdresuoti.",
        },
        {
          q: "Ar jūsų šunys loja?",
          a: "Retai. Abu šunys ramūs ir tylūs, pripratę prie gyvenimo bute ir nekelia triukšmo kaimynams.",
        },
        {
          q: "Ar jie gali gyventi bute?",
          a: "Taip. Abu užaugo bute, puikiai jaučiasi uždaroje erdvėje ir turi ilgametę tokio gyvenimo patirtį.",
        },
        {
          q: "Ar jie pripratę prie namų tvarkos?",
          a: "Taip, abu visiškai pripratę prie namų tvarkos ir reguliarių pasivaikščiojimų.",
        },
        {
          q: "Ar jie gali likti vieni?",
          a: "Taip. Šunys ramiai lieka vieni, kol esu darbe, ir nedaro jokios žalos.",
        },
        {
          q: "Ar galite pateikti rekomendacijas?",
          a: "Taip, mielai pateiksiu ankstesnių nuomotojų ir darbdavio rekomendacijas paprašius.",
        },
        {
          q: "Ar galite pateikti darbo pažymą?",
          a: "Taip, galiu pateikti darbo ir pajamų patvirtinimą.",
        },
        {
          q: "Ar padidintumėte užstatą?",
          a: "Taip. Jei tai suteiktų daugiau ramybės, esu pasiruošęs padidinti užstatą.",
        },
        {
          q: "Ar padidintumėte nuomos mokestį?",
          a: "Esu atviras sąžiningam pokalbiui ir ilgalaikiam, abiem pusėms tinkančiam susitarimui.",
        },
      ],
    },
    closing: {
      heading: "Ačiū, kad skyrėte laiko mus pažinti.",
      body: "Nuoširdžiai dėkoju, kad perskaitėte. Mielai atsakysiu į visus klausimus, o rekomendacijas bei dokumentus pateiksiu paprašius. Tikiuosi, netrukus susipažinsime asmeniškai.",
      cta: "Susisiekti",
      photoLabel: "Axel su Raava ir Goldas lauke",
    },
    contact: {
      heading: "Susisiekime",
      prompt: "Norėtumėte išnuomoti man būstą?",
      reveal: "Spustelėkite, kad pamatytumėte kontaktus",
      note: "Kontaktai paslėpti, kad būtų išvengta brukalo. Rekomendacijos ir dokumentai pateikiami paprašius.",
      links: [
        {
          type: "phone",
          label: "Telefonas",
          value: CONTACT.phone,
          href: CONTACT.phoneHref,
        },
        {
          type: "whatsapp",
          label: "WhatsApp",
          value: CONTACT.whatsapp,
          href: CONTACT.whatsappHref,
        },
        {
          type: "imessage",
          label: "iMessage",
          value: CONTACT.imessage,
          href: CONTACT.imessageHref,
        },
        {
          type: "linkedin",
          label: "LinkedIn",
          value: CONTACT.linkedin,
          href: CONTACT.linkedinHref,
        },
      ],
    },
    qr: {
      heading: "Pasidalykite šiuo puslapiu",
      body: "Nuskenuokite QR kodą, kad atidarytumėte šį puslapį telefone arba pridėtumėte prie nuomos paraiškos.",
    },
    footer: {
      tagline: "Patikimas, ramus ir pagarbus nuomininkas Vilniuje.",
      rights: "Sukurta su rūpesčiu.",
    },
    langToggle: {
      label: "Kalba",
      lt: "LT",
      en: "EN",
    },
  },

  // =========================================================================
  // ENGLISH
  // =========================================================================
  en: {
    nav: {
      about: "About",
      dogs: "My Dogs",
      home: "Home Care",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Future tenant in Vilnius",
      headline: "Looking for a reliable tenant in Vilnius?",
      subheadline:
        "Hi, I'm Axel, a Belgian software engineer relocating from Šiauliai to Vilnius together with my two well-trained dogs. I created this page so you can get to know us before we meet.",
      ctaPrimary: "Learn More",
      ctaSecondary: "Meet My Dogs",
      photoLabel: "Axel with Raava & Goldas",
    },
    trust: {
      heading: "A quick snapshot",
      subheading: "A few things that matter to a landlord.",
      cards: [
        { icon: "briefcase", label: "Stable Employment" },
        { icon: "code", label: "Software Engineer" },
        { icon: "home", label: "Homeowner" },
        { icon: "shield", label: "Former Military (7+ years)" },
        { icon: "dog", label: "Two Well-Trained Dogs" },
        { icon: "sparkles", label: "Clean & Organized" },
        { icon: "moon", label: "Quiet Lifestyle" },
        { icon: "star", label: "References Available" },
        { icon: "wallet", label: "Stable Income" },
        { icon: "handshake", label: "Willing to Increase Deposit" },
      ],
    },
    about: {
      heading: "About Me",
      subheading: "Why renting to me is an easy decision.",
      photoLabel: "Portrait of Axel",
      paragraphs: [
        "I'm Belgian and have been living in Lithuania for several years. I work as a software engineer and value calm, order and respect for the people around me.",
        "Before becoming an engineer, I served more than seven years in the military. That experience gave me discipline, responsibility and a caring attitude — qualities I carry into everyday life and into how I look after a home.",
        "I'm looking for a home closer to my work in Vilnius. What matters most to me is a long-term, quiet and respectful relationship with my landlord — I treat a home as if it were my own.",
      ],
      values: [
        {
          icon: "shield-check",
          title: "Disciplined",
          desc: "Seven years of military life shaped an orderly routine.",
        },
        {
          icon: "heart-handshake",
          title: "Respectful",
          desc: "I respect other people's property and my neighbours' peace.",
        },
        {
          icon: "sparkles",
          title: "Organized",
          desc: "Cleanliness is a natural habit for me, not an effort.",
        },
        {
          icon: "moon",
          title: "Quiet",
          desc: "A calm lifestyle — no noise, no parties.",
        },
      ],
    },
    moving: {
      heading: "Why I'm Moving",
      subheading: "A simple, honest explanation.",
      fromLabel: "Current home",
      from: "Šiauliai",
      toLabel: "Destination",
      to: "Vilnius",
      reasonLabel: "Reason",
      reason: "Closer to work",
      body: [
        "I currently live in my own home in Šiauliai, but my work is in Vilnius. I want to shorten my commute and live closer to my colleagues and daily life.",
        "Because I already own property, I'd like to spend some calm time living in Vilnius and getting to know the city before making a larger commitment. That makes me a reliable, long-term-minded tenant — not someone in a rush or unsure of their plans.",
      ],
    },
    dogs: {
      heading: "Meet My Dogs",
      subheading:
        "Both raised since puppies, used to apartment living and calm by nature.",
      list: [
        {
          name: "Raava",
          meta: ["Female", "Bullmastiff", "5 years"],
          photoLabel: "Raava",
          traits: [
            "Calm",
            "Apartment experience",
            "Well trained",
            "Quiet",
            "Friendly",
          ],
          blurb:
            "I've raised Raava since she was a puppy. Despite her impressive size, she is remarkably calm and gentle — she spends most of the day resting in her spot. She's friendly with people and other dogs, and never makes noise.",
        },
        {
          name: "Goldas",
          meta: ["Male", "Labrador", "8 years"],
          photoLabel: "Goldas",
          traits: [
            "Calm",
            "Apartment experience",
            "Well trained",
            "Friendly",
          ],
          blurb:
            "Goldas is a gentle-natured Labrador I've raised from a puppy. Over eight years he's grown into a calm, well-balanced companion who feels completely at home in an apartment and greets everyone warmly.",
        },
      ],
    },
    apartment: {
      heading: "Apartment Living",
      subheading: "So there's nothing to worry about with the dogs.",
      cards: [
        { icon: "building", title: "Apartment Trained" },
        { icon: "volume-x", title: "Quiet" },
        { icon: "check-circle", title: "House Trained" },
        { icon: "footprints", title: "Regular Walks" },
        { icon: "shield-check", title: "No Destructive Behaviour" },
        { icon: "users", title: "Well Socialized" },
        { icon: "heart", title: "Raised Since Puppies" },
        { icon: "home", title: "Experienced Apartment Dogs" },
      ],
    },
    care: {
      heading: "How I Care For A Home",
      subheading: "I show responsibility through everyday actions.",
      cards: [
        { icon: "footprints", title: "Shoes removed indoors" },
        { icon: "bot", title: "Robot vacuum every day" },
        { icon: "wind", title: "Steam cleaning" },
        { icon: "spray-can", title: "Weekly odor treatment" },
        { icon: "home", title: "Respect property" },
        { icon: "wrench", title: "Report maintenance promptly" },
        { icon: "sparkles", title: "Clean daily" },
        { icon: "shield-check", title: "Act responsibly" },
      ],
    },
    timeline: {
      heading: "Stability Over Time",
      subheading: "A consistent path I've followed for many years.",
      events: [
        {
          year: "",
          title: "Military Service",
          desc: "7+ years of service — discipline and responsibility.",
        },
        {
          year: "",
          title: "Home Ownership",
          desc: "Bought my own property — financial stability.",
        },
        {
          year: "",
          title: "Software Engineer",
          desc: "A move into a stable, long-term career.",
        },
        {
          year: "4.5 yrs",
          title: "Edenred Finance",
          desc: "4.5 years at the same company.",
        },
        {
          year: "2026",
          title: "Moving to Vilnius",
          desc: "Closer to work, for the long term.",
        },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      subheading: "Open and concise answers.",
      items: [
        {
          q: "Why are you moving?",
          a: "My work is in Vilnius while I live in Šiauliai. I want to shorten my commute and live closer to work and daily life.",
        },
        {
          q: "Why should I choose you?",
          a: "I have stable employment and income, and I'm tidy, quiet and respectful. I look after a home carefully, and my dogs are calm and well trained.",
        },
        {
          q: "Do your dogs bark?",
          a: "Rarely. Both dogs are calm and quiet, used to apartment living and considerate of the neighbours.",
        },
        {
          q: "Can they live in apartments?",
          a: "Yes. Both were raised in an apartment, feel completely comfortable in enclosed spaces and have years of experience with it.",
        },
        {
          q: "Are they house trained?",
          a: "Yes, both are fully house trained and used to regular walks.",
        },
        {
          q: "Can they stay alone?",
          a: "Yes. The dogs stay calmly on their own while I'm at work and cause no damage.",
        },
        {
          q: "Can you provide references?",
          a: "Yes, I'm happy to provide references from previous landlords and my employer on request.",
        },
        {
          q: "Can you provide employment proof?",
          a: "Yes, I can provide proof of employment and income.",
        },
        {
          q: "Would you increase the deposit?",
          a: "Yes. If it brings extra peace of mind, I'm happy to increase the security deposit.",
        },
        {
          q: "Would you increase the rent?",
          a: "I'm open to an honest conversation and a long-term arrangement that works well for both of us.",
        },
      ],
    },
    closing: {
      heading: "Thank you for taking the time to get to know us.",
      body: "I truly appreciate you reading this far. I'm happy to answer any questions, and references and documentation can be provided on request. I hope we'll get to meet in person soon.",
      cta: "Get In Touch",
      photoLabel: "Axel with Raava & Goldas outdoors",
    },
    contact: {
      heading: "Let's talk",
      prompt: "Interested in renting to me?",
      reveal: "Click to reveal contact details",
      note: "Details are hidden to reduce spam. References and documentation are available on request.",
      links: [
        {
          type: "phone",
          label: "Phone",
          value: CONTACT.phone,
          href: CONTACT.phoneHref,
        },
        {
          type: "whatsapp",
          label: "WhatsApp",
          value: CONTACT.whatsapp,
          href: CONTACT.whatsappHref,
        },
        {
          type: "imessage",
          label: "iMessage",
          value: CONTACT.imessage,
          href: CONTACT.imessageHref,
        },
        {
          type: "linkedin",
          label: "LinkedIn",
          value: CONTACT.linkedin,
          href: CONTACT.linkedinHref,
        },
      ],
    },
    qr: {
      heading: "Share this page",
      body: "Scan the QR code to open this page on your phone or attach it to a rental application.",
    },
    footer: {
      tagline: "A reliable, quiet and respectful tenant in Vilnius.",
      rights: "Made with care.",
    },
    langToggle: {
      label: "Language",
      lt: "LT",
      en: "EN",
    },
  },
};
