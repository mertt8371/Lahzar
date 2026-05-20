import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin, Phone, Clock, Star, Instagram,
  ArrowRight, UtensilsCrossed, Leaf, Coffee, CheckCircle2
} from "lucide-react";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import heroImg from "@/assets/hero.webp";
import aboutImg from "@/assets/about.webp";

// ─── Variant images – replace each file to update the menu photo ───────────
import variantClassicImg from "@/assets/variant-classic.webp";
import variantClassicCheeseImg from "@/assets/variant-classic-cheese.webp";
import variantVeganImg from "@/assets/variant-vegan.webp";
import variantVegetarischImg from "@/assets/variant-vegetarisch.webp";
import variantKebabImg from "@/assets/variant-kebab.webp";
import variantChickenImg from "@/assets/variant-chicken.webp";
import variantAlaTurcaImg from "@/assets/variant-a-la-turca.webp";
import variantLahzarSpecialImg from "@/assets/variant-lahzar-special.webp";
// ──────────────────────────────────────────────────────────────────────────────

// ─── Gallery images – replace each file with your own photos ──────────────────
import gallery01 from "@/assets/gallery-01.webp";
import gallery02 from "@/assets/gallery-02.webp";
import gallery03 from "@/assets/gallery-03.webp";
// ──────────────────────────────────────────────────────────────────────────────

const queryClient = new QueryClient();

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-400 ${
      scrolled
        ? "bg-[#111111]/96 backdrop-blur-md shadow-lg py-3"
        : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-white">
          <span className="text-yellow-400">Lahzar</span>
          <span className="text-primary"></span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-white">
          <a href="#konzept" className="hover:text-white transition-colors">Konzept</a>
          <a href="#menue" className="hover:text-white transition-colors">Menü</a>
          <a href="#bewertungen" className="hover:text-white transition-colors">Bewertungen</a>
          <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Venloer+Str.+223,+50823+Köln"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-foreground hover:bg-primary/90 transition-all shadow-sm"
        >
          <MapPin className="w-4 h-4" /> Route planen
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-foreground">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={heroImg}
          alt="Lahzar Cafe Interior"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="container relative z-20 mx-auto px-4 md:px-8 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="tracking-wide">Jetzt geöffnet bis 21:00 Uhr</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl"
        >
          Lahmacun in eine{" "}
          <span className="text-primary italic">neue Generation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/75 max-w-2xl font-light mb-10"
        >
          Lahmacun, Cafe and More. Modern, kreativ und auch vegan & vegetarisch im Herzen von Köln.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Venloer+Str.+223,+50823+Köln"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full text-base h-14 px-8 bg-primary text-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg"
          >
            Route planen <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+4922142361227"
            className="inline-flex items-center justify-center gap-2 rounded-full text-base h-14 px-8 bg-white/10 text-white border border-white/25 hover:bg-white/20 backdrop-blur-md transition-all font-medium"
          >
            <Phone className="w-5 h-5" /> 0221 42361227
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent z-10" />
    </section>
  );
}

function QuickInfo() {
  return (
    <section className="bg-[#111111] py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          <div className="flex flex-col items-center text-center px-4">
            <div className="flex items-center text-primary mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="font-bold text-lg text-white">5.0 / 5</p>
            <p className="text-sm text-white/40 mt-1">350 Google Bewertungen</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <MapPin className="w-5 h-5 text-white/50 mb-3" />
            <p className="font-semibold text-white">Venloer Str. 223</p>
            <p className="text-sm text-white/40 mt-1">50823 Köln</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <Clock className="w-5 h-5 text-white/50 mb-3" />
            <p className="font-semibold text-white">Bis 21:00 Uhr geöffnet</p>
            <p className="text-sm text-white/40 mt-1">Türkisches Café</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <UtensilsCrossed className="w-5 h-5 text-white/50 mb-3" />
            <p className="font-semibold text-white">1–10 € p.P.</p>
            <p className="text-sm text-white/40 mt-1">Preiswert & Frisch</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Concept() {
  return (
    <section id="konzept" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:w-1/2"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-5">
              Tradition trifft Moderne
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-6 leading-tight">
              Handgemacht.<br />Frisch gebacken.<br />
              <span className="text-primary italic">Für dich zubereitet.</span>
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed mb-8">
              Bei Lahzar feiern wir das klassische Lahmacun – aber wir denken es neu. Unser Teig wird täglich frisch vor Ort gebacken und direkt an der Theke vor deinen Augen belegt.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Frisch gebacken im Steinofen",
                "Klassisch, modern oder komplett vegan",
                "Gemütliche Café-Atmosphäre im Veedel"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-[#111111] font-medium">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#menue"
              className="inline-flex items-center gap-2 rounded-full h-12 px-8 bg-[#111111] text-white font-semibold hover:bg-[#222222] transition-all"
            >
              Unser Menü ansehen <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Lahmacun im Steinofen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/15 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DarkBanner() {
  return (
    <div className="bg-[#111111] py-5 overflow-hidden border-y border-white/5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 whitespace-nowrap"
      >
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-white/60 font-serif font-medium text-xl tracking-wide flex items-center gap-8">
            Lahmacun & Cafe
            <span className="text-primary text-sm">✦</span>
            Modern & Kreativ
            <span className="text-primary text-sm">✦</span>
            Vegan & Vegetarisch
            <span className="text-primary text-sm">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Menu() {
  const variants = [
    {
      title: "Classic",
      tag: "Klassiker",
      tagStyle: "bg-stone-100 text-stone-600",
      description: "Dünner Teig mit gewürztem Hackfleisch, frischem Salat, Tomaten, Gurken und hausgemachter Sauce.",
      img: variantClassicImg,
      price: "6,50 €",
    },
    {
      title: "Classic Cheese",
      tag: "Beliebt",
      tagStyle: "bg-amber-50 text-amber-700",
      description: "Tomatensauce mit Käse, Hühnchen, Pilzen und Paprika – cremiger und sättigender.",
      img: variantClassicCheeseImg,
      price: "8,00 €",
    },
    {
      title: "Vegan",
      tag: "Pflanzlich",
      tagStyle: "bg-emerald-50 text-emerald-700",
      description: "Veganer Käse, Spinat, Paprika, rote Zwiebeln und Kichererbsen – 100% pflanzlich.",
      img: variantVeganImg,
      price: "9,00 €",
    },
    {
      title: "Vegetarisch",
      tag: "Vegetarisch",
      tagStyle: "bg-emerald-50 text-emerald-700",
      description: "Tomatensauce mit Käse, Spinat und Feta – cremig und würzig ohne Fleisch.",
      img: variantVegetarischImg,
      price: "8,00 €",
    },
    {
      title: "Kebab",
      tag: "Signature",
      tagStyle: "bg-stone-800 text-white",
      description: "Dünn geschnittenes Lammfleisch, rote Zwiebeln, Paprika und Cheddar-Käse.",
      img: variantKebabImg,
      price: "9,50 €",
    },
    {
      title: "Chicken",
      tag: "Mild",
      tagStyle: "bg-stone-100 text-stone-600",
      description: "Zartes Hähnchen mit Tomatensauce, Käse, Pilzen und Paprika – saftig und leicht.",
      img: variantChickenImg,
      price: "8,50 €",
    },
    {
      title: "A la Turca",
      tag: "Traditionell",
      tagStyle: "bg-stone-800 text-white",
      description: "Die puristische Version: extra dünn, extra knusprig, traditionell gewürzt.",
      img: variantAlaTurcaImg,
      price: "9,00 €",
    },
    {
      title: "LAHZAR Special",
      tag: "Chef's Choice",
      tagStyle: "bg-primary text-foreground",
      description: "Auberginenpaste, Walnüsse, frischer Salat und Granatapfelsirup – unser Signature-Stück.",
      img: variantLahzarSpecialImg,
      price: "9,50 €",
    },
  ];

  
    const extras = [
      {
        title: "Getränke",
        icon: <Coffee className="w-4 h-4" />,
        items: [
          "Klassische Cola",
          "Fritz-Kola Spezialitäten",
          "Frische Limonaden",
          "Uludağ",
          "Ayran",
          "Wasser",
          "Kaffee",
          "Tee",
          "Säfte"
        ],
      },
      {
        title: "Beilagen & Extras",
        icon: <UtensilsCrossed className="w-4 h-4" />,
        items: [
          "Salat",
          "knoplauch Sauce",
          "Scharfe Sauce",
          "Sumak",
          "Pide"
        ],
      },
      {
        title: "Süßes",
        icon: <Leaf className="w-4 h-4" />,
        items: ["Baklava", "Kadayif"],
      },
    ];
  

  return (
    <section id="menue" className="py-24 bg-[#f9f6f1]">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Speisekarte
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-4">
            Unsere Lahmacun-Varianten
          </h2>
          <p className="text-stone-500 leading-relaxed">
            Acht Varianten, ein Grundprinzip: dünner knuspriger Teig, frische Zutaten, hausgemachte Saucen.
          </p>
        </motion.div>

        {/* 8 variant cards – each with own image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {variants.map((v, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-stone-100"
            >
              {/* Image – replace src/assets/variant-*.png to swap */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={v.img}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif font-bold text-[#111111] text-base leading-tight">{v.title}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${v.tagStyle}`}>
                    {v.tag}
                  </span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed mb-3">{v.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-[#111111]">{v.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extras: Getränke, Beilagen, Süßes */}
        <div className="border-t border-stone-200 pt-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-primary text-center mb-8"
          >
            Auch bei uns
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-6"
          >
            {extras.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-full bg-[#111111] text-white flex items-center justify-center flex-shrink-0">
                    {cat.icon}
                  </div>
                  <h3 className="font-serif font-bold text-[#111111]">{cat.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-500">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function Gallery() {
  const photos = [
    { src: gallery01, alt: "Lahmacun Speisekarte" },
    { src: gallery02, alt: "Getränkekarte" },
    { src: gallery03, alt: "Dessert & Suppe" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Einblicke
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111111]">
            Bei uns im Laden
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="overflow-hidden rounded-2xl bg-stone-100 group shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Mert Tuna",
      rating: 5,
      text: "Ich war heute zum ersten Mal bei LAHZAR Lahmacun Laden und bin wirklich begeistert. Man merkt sofort, dass hier mit Leidenschaft gearbeitet wird."
    },
    {
      name: "Ela Klütsch",
      rating: 5,
      text: "Mit viel Liebe und Herz wird hier sehr leckeres Lahmacun zubereitet. In gemütlicher Atmosphäre habe ich heute das Lahmacun Kebap probiert. Gute Portion, mit viel Liebe zubereitet."
    },
    {
      name: "Tim Lagerpusch",
      rating: 5,
      text: "Richtig tolles neues Lahmacun/Café Konzept. Das Lahmacun wird vor Ort selbst gebacken und dann vorne an der Theke frisch zubereitet."
    },
    {
      name: "Murat Mucuk",
      rating: 5,
      text: "Hier trifft Tradition auf Moderne – einfach köstlich und sehr empfehlenswert!"
    }
  ];

  return (
    <section id="bewertungen" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Von euch geliebt</h2>
          <p className="text-white/45">
            Mit 5.0 Sternen auf Google gehören wir zu den bestbewerteten Adressen der Stadt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/4 border border-white/8 p-6 rounded-2xl flex flex-col h-full hover:border-white/20 hover:bg-white/7 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/65 text-sm italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
              <div className="font-medium text-white/80 text-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs text-foreground font-bold">
                  {review.name.charAt(0)}
                </div>
                {review.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:w-1/3"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-5">
              Komm vorbei
            </span>
            <h2 className="text-4xl font-serif font-bold text-[#111111] mb-8">Besuch uns</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f4f4f4] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#111111]" />
                </div>
                <div>
                  <p className="font-semibold text-[#111111]">Adresse</p>
                  <p className="text-stone-500 text-sm mt-0.5">Venloer Str. 223, 50823 Köln</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f4f4f4] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#111111]" />
                </div>
                <div>
                  <p className="font-semibold text-[#111111]">Öffnungszeiten</p>
                  <div className="text-stone-500 text-sm mt-0.5 space-y-0.5">
                    <p>Mo–Fr: 11:00 – 21:00</p>
                    <p>Sa–So: 11lahmacun in :00 – 21:00</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f4f4f4] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#111111]" />
                </div>
                <div>
        
                 <p className="font-semibold text-[#111111]">Telefon</p>
                  <a href="tel:+4922142361227" className="text-stone-500 text-sm mt-0.5 hover:text-[#111111] transition-colors">
                    0221 42361227
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Venloer+Str.+223,+50823+Köln"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-7 bg-primary text-foreground font-semibold hover:bg-primary/90 transition-all text-sm"
              >
                <MapPin className="w-4 h-4" /> Route planen
              </a>
              <a
                href="tel:+4922142361227"
                className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-7 bg-[#111111] text-white font-semibold hover:bg-[#222222] transition-all text-sm"
              >
                <Phone className="w-4 h-4" /> Anrufen
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-2/3"
          >
            <div className="rounded-3xl overflow-hidden h-[420px] shadow-lg border border-stone-100">
              <iframe
                title="Lahzar Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.8!2d6.9153!3d50.9451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf24a3a4a34a59%3A0x5a9d03ab63b57e4c!2sVenloer+Str.+223%2C+50823+K%C3%B6ln!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111111] py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <div className="text-2xl font-serif font-bold text-white mb-2">
              Lahzar<span className="text-primary">.</span>
            </div>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Lahmacun in eine neue Generation – modern, kreativ und auch vegan & vegetarisch.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/40">
            <p className="font-medium text-white/60 mb-1">Links</p>
            <a href="#konzept" className="hover:text-white/70 transition-colors">Konzept</a>
            <a href="#menue" className="hover:text-white/70 transition-colors">Menü</a>
            <a href="#bewertungen" className="hover:text-white/70 transition-colors">Bewertungen</a>
            <a href="#kontakt" className="hover:text-white/70 transition-colors">Kontakt</a>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/40">
            <p className="font-medium text-white/60 mb-1">Kontakt</p>
            <p>Venloer Str. 223, 50823 Köln</p>
            <a href="tel:+4922142361227" className="hover:text-white/70 transition-colors">0221 42361227</a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.instagram.com/lahzarcafe?igsh=NXVxb25lNDFqbGs="
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full h-10 px-5 bg-white/6 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a
              href="https://www.tiktok.com/@lahzar.cafe?_r=1&_t=ZG-96IRmfvNTMW"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full h-10 px-5 bg-white/6 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/25">
          <p>© 2025 Lahzar Lahmacun & Cafe. Alle Rechte vorbehalten.</p>
          <p>Venloer Str. 223, 50823 Köln</p>
        </div>
      </div>
    </footer>
  );
}

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lahzar_cookie");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  function rejectCookies() {
    localStorage.setItem("lahzar_cookie", JSON.stringify({ analytics: false }));
    setShowBanner(false);
  }

  function saveCookiePreferences() {
    localStorage.setItem("lahzar_cookie", JSON.stringify({ analytics }));
    setShowBanner(false);
  }

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-end justify-center p-5">
      <div className="w-full max-w-2xl rounded-[30px] border border-yellow-500/20 bg-[#16110d] p-8 shadow-2xl">
        <span className="text-yellow-400 tracking-[4px] text-xs uppercase">
          Lahzar Privacy
        </span>
        <h2 className="text-3xl font-serif font-bold text-white mt-4 mb-4">
          Cookie-Einstellungen
        </h2>
        <p className="text-white/65 leading-7 mb-8">
          Wir verwenden Cookies, um die Funktionalität unserer Webseite
          sicherzustellen und Ihr Nutzererlebnis zu verbessern.
        </p>
        <div className="space-y-4 mb-8">
          <label className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
            <input type="checkbox" checked disabled className="mt-1" />
            <div>
              <p className="text-white font-medium">Notwendige Cookies</p>
              <p className="text-white/50 text-sm">Erforderlich für den sicheren Betrieb der Webseite.</p>
            </div>
          </label>
          <label className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="mt-1"
            />
            <div>
              <p className="text-white font-medium">Analyse-Cookies</p>
              <p className="text-white/50 text-sm">Helfen uns, die Webseite zu verbessern.</p>
            </div>
          </label>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={rejectCookies}
            className="h-12 px-6 rounded-full border border-white/15 text-white hover:bg-white/10 transition-all"
          >
            Nur notwendige
          </button>
          <button
            onClick={saveCookiePreferences}
            className="h-12 px-6 rounded-full bg-yellow-400 text-black font-semibold hover:opacity-90 transition-all"
          >
            Auswahl speichern
          </button>
        </div>
      </div>
    </div>
  );
}

function LahzarCafe() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero />
      <QuickInfo />
      <Concept />
      <DarkBanner />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <section className="bg-[#111111] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-yellow-400 uppercase tracking-[4px] text-xs font-semibold">
            Lahzar
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-10">
            Impressum
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">Angaben gemäß § 5 DDG</h3>
                <p className="text-white/70 leading-7">
                  Lahzar<br />
                  Venloer Straße 223<br />
                  50823 Köln<br />
                  Deutschland
                </p>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">Vertreten durch</h3>
                <p className="text-white/70">Murat Toraman</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">Kontakt</h3>
                <p className="text-white/70 leading-7">
                  Telefon: 0221 42361227<br />
                  E-Mail:
                  <a href="mailto:lahzarcafe@gmail.com" className="text-yellow-400 ml-1 hover:underline">
                    lahzarcafe@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">Registereintrag</h3>
                <p className="text-white/70 leading-7">
                  Registergericht: Amtsgericht Köln<br />
                  Handelsregisternummer: HRB 125351
                </p>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">Umsatzsteuer-ID</h3>
                <p className="text-white/70">DE461249915</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <Switch>
            <Route path="/" component={LahzarCafe} />
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );

}
