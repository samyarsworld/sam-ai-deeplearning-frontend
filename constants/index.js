// SIDEBAR
export const ITEMS = [
  {
    id: 1,
    name: "Text Summarizer",
    href: "/text-summarizer",
    img: "/rob.svg",
    color: "#8338ec80",
    desc: "A fast NLP model capable of summarizing long documents. Built on an only-encoder model using Transformers.",
  },
  {
    id: 2,
    name: "Language Classifier",
    href: "/language-classifier",
    img: "/language.svg",
    color: "#3a86ff80",
    desc: "An efficient NLP model capable classifying names based on the original language. Built on RNNs and attention mechanism.",
  },
  {
    id: 3,
    name: "Image Segmenter",
    href: "/image-segmenter",
    img: "/medicalseg.svg",
    color: "#0bff5c80",
    desc: "A computer vision model trained to detect anomalies in medical images. Built using a CNNs and a UNET algorithm.",
  },
  {
    id: 4,
    name: "Stock Predictor",
    href: "/stock-prediction",
    img: "/chart.svg",
    color: "#ff595e80",
    desc: "Time series data prediction project. Attention models will be used. Design scope yet to be completed.",
  },
  {
    id: 5,
    name: "Self Driving Town",
    href: "/self-driving-town",
    img: "/street.svg",
    color: "#2ec4b680",
    desc: "An AI city operated only on autonomous vehicles. Data-driven neural networks will be used. In design scope stage.",
  },
];

// FOOTER
export const FOOTER_ITEMS = [
  {
    title: "Learn More",
    items: ["About SamAI", "Articles", "Jobs", "Privacy Policy", "Contact Us"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  items: [
    { label: "Phone", value: "+1(416)-540-5303" },
    { label: "Email", value: "samyarfarjam@outlook.com" },
  ],
};

export const SOCIALS = {
  title: "Socials",
  logos: ["/facebook.svg", "/instagram.svg", "/twitter.svg", "/github.svg"],
  links: [],
};
