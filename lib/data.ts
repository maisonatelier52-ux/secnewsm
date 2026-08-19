import { Article } from "@/types/article";
import businessArticles from "@/public/data/business.json";
import entertainmentArticles from "@/public/data/entertainment.json";
import technologyArticles from "@/public/data/technology.json";
import usArticles from "@/public/data/us.json";
import worldArticles from "@/public/data/world.json";

export interface WorldDispatchColumn {
  header: string;
  leadArticle: Article;
  subArticles: Article[];
}

export interface WireTickerItem {
  timeAgo: string;
  category: string;
  title: string;
  slug: string;
}

export interface CategoryInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  topics: string[];
}

export const CATEGORY_MAP: Record<string, CategoryInfo> = {
  business: {
    slug: "business",
    name: "Business & Markets",
    tagline: "Market Intelligence, Corporate Strategy & Financial Innovation",
    description: "Comprehensive analysis of macro global markets, enterprise corporate strategy, and venture funding shifts. Tracking key financial indicators, executive decisions, and regional economic developments worldwide.",
    color: "#e8192c",
    topics: ["All Stories", "Markets", "Strategy", "Venture", "Real Estate", "Analysis"]
  },
  technology: {
    slug: "technology",
    name: "Technology & AI",
    tagline: "Frontier Computing, Quantum Security & Artificial Intelligence",
    description: "In-depth reporting on artificial intelligence, post-quantum cybersecurity, and sub-nanometer computing. Investigating hardware innovations, cloud infrastructure, and frontier technological breakthroughs.",
    color: "#e8192c",
    topics: ["All Stories", "Artificial Intelligence", "Cybersecurity", "Hardware", "Cloud & Infra", "Deep Tech"]
  },
  tech: {
    slug: "tech",
    name: "Technology & AI",
    tagline: "Frontier Computing, Quantum Security & Artificial Intelligence",
    description: "In-depth reporting on artificial intelligence, post-quantum cybersecurity, and sub-nanometer computing. Investigating hardware innovations, cloud infrastructure, and frontier technological breakthroughs.",
    color: "#e8192c",
    topics: ["All Stories", "Artificial Intelligence", "Cybersecurity", "Hardware", "Cloud & Infra", "Deep Tech"]
  },
  entertainment: {
    slug: "entertainment",
    name: "Entertainment & Culture",
    tagline: "Generative Cinema, High Fashion & Global Media",
    description: "Exclusive coverage of global film festivals, avant-garde digital arts, and high-fashion galas. Following celebrity dispatches, streaming entertainment networks, and contemporary cultural trends.",
    color: "#e8192c",
    topics: ["All Stories", "Film & TV", "Celebrity", "High Fashion", "Digital Arts", "Podcasts"]
  },
  lifestyle: {
    slug: "lifestyle",
    name: "Lifestyle & Mindful Living",
    tagline: "Modern Wellness, Creative Writing & Architecture",
    description: "Thoughtful insights into modern urban living, cognitive wellness, and sustainable architectural design. Exploring personal growth, mindful routines, and contemporary interior environments.",
    color: "#e8192c",
    topics: ["All Stories", "Mindfulness", "Design", "Wellness", "Modern Work", "Culture"]
  },
  travel: {
    slug: "travel",
    name: "Travel & Exploration",
    tagline: "Expeditions, Remote Destinations & Eco-Tourism",
    description: "Curated wilderness expedition guides, oceanographic dispatches, and coastal destination journeys. Exploring untouched natural habitats, eco-resorts, and remote architectural wonders.",
    color: "#e8192c",
    topics: ["All Stories", "Expeditions", "Coastal Journeys", "Eco Tourism", "Guides", "Photography"]
  },
  science: {
    slug: "science",
    name: "Science & Discovery",
    tagline: "Research Breakthroughs, Space & Climate Science",
    description: "Exploring frontier scientific discoveries, climate research, and space exploration missions. Covering peer-reviewed studies, breakthrough technologies, and the scientists shaping tomorrow.",
    color: "#e8192c",
    topics: ["All Stories", "Space", "Climate", "Research", "Biology", "Physics"]
  },
  us: {
    slug: "us",
    name: "US National Dispatches",
    tagline: "Regional Hubs, Policy Shifts & Trade Alliances",
    description: "Comprehensive coverage of North American industrial corridors, trade alliances, and regional markets. Following national policy shifts, commercial expansion, and retail franchise growth.",
    color: "#e8192c",
    topics: ["All Stories", "National Policy", "Regional Economy", "Retail & Commerce", "Infrastructure"]
  }
};

export const allArticles: Article[] = [
  ...(businessArticles as Article[]),
  ...(entertainmentArticles as Article[]),
  ...(technologyArticles as Article[]),
  ...(usArticles as Article[]),
  ...(worldArticles as Article[]),
];

// Helper to get articles by category
export function getArticlesByCategory(category: string): Article[] {
  return allArticles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );
}

// ── Homepage Section 1: Hero Grid Data ─────────────────────────
export const heroMainArticle: Article = {
  category: "Strategy",
  title: "Kansas City Has a Massive Array of Big National Companies",
  slug: "kansas-city-has-a-massive-array-of-big-national-companies",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=85&auto=format&fit=crop",
  date: "December 14, 2026",
  shortdescription: "Kansas City continues to draw headquarters across logistics, retail, and financial tech sectors due to strategic location advantages. Executive leaders cite favorable tax incentives and skilled labor pools.",
  description: [
    {
      subtitle: "Economic Growth Spurt",
      text: "Kansas City continues to draw headquarters across logistics, retail, and financial tech sectors."
    }
  ],
  author: {
    name: "Arianna Scott",
    role: "Senior Editor",
    bio: "Arianna specializes in enterprise growth and regional market shifts.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    slug: "arianna-scott",
    email: "arianna.scott@wiremingle.com"
  }
};

export const heroMiniArticles: Article[] = [
  {
    category: "Marketing",
    title: "Social Media Marketing for Franchises is Meant",
    slug: "social-media-marketing-for-franchises-is-meant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop",
    date: "December 14, 2026",
    shortdescription: "Effective digital strategies tailored for regional franchise networks.",
    description: [],
    author: {
      name: "Sarah Jenkins",
      role: "Marketing Analyst",
      bio: "Sarah covers marketing strategies.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      slug: "sarah-jenkins",
      email: "sarah.jenkins@wiremingle.com"
    }
  },
  {
    category: "Marketing",
    title: "Customer Engagement Marketing: A New",
    slug: "customer-engagement-marketing-a-new",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&q=80&auto=format&fit=crop",
    date: "December 14, 2026",
    shortdescription: "Customer engagement approaches transforming retail relationships.",
    description: [],
    author: {
      name: "Sarah Jenkins",
      role: "Marketing Analyst",
      bio: "Sarah covers marketing strategies.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      slug: "sarah-jenkins",
      email: "sarah.jenkins@wiremingle.com"
    }
  }
];

export const heroFeaturedTopicArticle: Article = {
  category: "Celebrity",
  title: "Fashion Finder: Biggest Shows, Parties and Celebrity for New Years",
  slug: "fashion-finder-biggest-shows-parties-and-celebrity-for-new-years",
  image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=85&auto=format&fit=crop",
  date: "December 14, 2026",
  shortdescription: "Exclusive coverage of major red carpet galas, luxury designer debuts, and star-studded midnight parties preparing for global New Year celebrations across Paris, London, and New York.",
  description: [],
  author: {
    name: "Chloe Bennett",
    role: "Culture Reporter",
    bio: "Chloe writes on entertainment and high fashion.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
    slug: "chloe-bennett",
    email: "chloe.bennett@wiremingle.com"
  }
};

export const heroTopicArticles: Article[] = [
  {
    category: "Celebrity",
    title: "The Biggest Hollywood Celebrities Visit the Ranches of California",
    slug: "the-biggest-hollywood-celebrities-visit-the-ranches-of-california",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80",
    date: "December 14, 2026",
    shortdescription: "A-list stars retreat to California ranches.",
    description: [],
    author: {
      name: "Chloe Bennett",
      role: "Culture Reporter",
      bio: "Chloe writes on entertainment and high fashion.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
      slug: "chloe-bennett",
      email: "chloe.bennett@wiremingle.com"
    }
  },
  {
    category: "Celebrity",
    title: "The Most Popular Celebrity Name List of the Millennium is Here",
    slug: "the-most-popular-celebrity-name-list-of-the-millennium-is-here",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80",
    date: "December 14, 2026",
    shortdescription: "Comprehensive millennial icon rankings.",
    description: [],
    author: {
      name: "Chloe Bennett",
      role: "Culture Reporter",
      bio: "Chloe writes on entertainment and high fashion.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
      slug: "chloe-bennett",
      email: "chloe.bennett@wiremingle.com"
    }
  },
  {
    category: "Celebrity",
    title: "Discover Creative Writing as a Therapeutic Tool for Depression and Anxiety",
    slug: "discover-creative-writing-as-a-therapeutic-tool-for-depression-and-anxiety",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=80",
    date: "December 13, 2026",
    shortdescription: "Therapeutic wellness through mindful creative writing.",
    description: [],
    author: {
      name: "Chloe Bennett",
      role: "Culture Reporter",
      bio: "Chloe writes on entertainment and high fashion.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
      slug: "chloe-bennett",
      email: "chloe.bennett@wiremingle.com"
    }
  }
];

export const hotArticles: Article[] = [
  {
    category: "Strategy",
    title: "Kansas City Has a Massive Array of Big National Companies",
    slug: "kansas-city-has-a-massive-array-of-big-national-companies",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
    date: "December 14, 2026",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "Celebrity",
    title: "Fashion Finder: Biggest Shows, Parties and Celebrity for New Years",
    slug: "fashion-finder-biggest-shows-parties-and-celebrity-for-new-years",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80",
    date: "December 14, 2026",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "Tech",
    title: "The Hottest Wearable Tech and Smart Gadgets of the Year Will Amaze You",
    slug: "the-hottest-wearable-tech-and-smart-gadgets-of-the-year",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80",
    date: "December 14, 2026",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "Travel",
    title: "10 Things You Should Know Before You Visit South America's Jungles",
    slug: "10-things-you-should-know-before-you-visit-south-americas-jungles",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&q=80",
    date: "December 14, 2026",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "Tech",
    title: "New Technology Will Help Keep Your Smart Home from Becoming Obsolete",
    slug: "new-technology-will-help-keep-your-smart-home-from-becoming-obsolete",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80",
    date: "December 14, 2026",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "Business",
    title: "Global Markets Surge as Innovation Hubs Expand Footprint",
    slug: "global-markets-surge-as-innovation-hubs-expand-footprint",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=300&q=80",
    date: "December 14, 2026",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "Lifestyle",
    title: "Discover Creative Writing as a Therapeutic Tool for Mindfulness",
    slug: "discover-creative-writing-as-a-therapeutic-tool-for-mindfulness",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=80",
    date: "December 14, 2026",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  }
];

// ── Homepage Section 2: Editorial Selection Data ───────────────
export const editorialLeadArticle: Article = {
  category: "FUTURE OF TECH & COMPUTING",
  title: "Quantum Encryption Breakthroughs Set New Standard for Global Cyber Defense",
  slug: "quantum-encryption-breakthroughs-set-new-standard-for-global-cyber-defense",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=85&auto=format&fit=crop",
  date: "Published 2 hrs ago · 6 min read",
  shortdescription: "As quantum processors surpass classical supercomputers, global intelligence agencies and enterprise leaders are racing to implement post-quantum cryptographic standards before legacy infrastructure becomes vulnerable...",
  description: [],
  author: {
    name: "David Chen",
    role: "Cybersecurity Editor",
    bio: "",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&auto=format&fit=crop",
    slug: "david-chen",
    email: ""
  }
};

export const editorialMidStackArticles: Article[] = [
  {
    category: "FINANCIAL ARCHITECTURE",
    title: "Central Banks Accelerate Sovereign Digital Assets in International Trade",
    slug: "central-banks-accelerate-sovereign-digital-assets-in-international-trade",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80&auto=format&fit=crop",
    date: "3 hours ago · 4 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "URBAN INNOVATION",
    title: "Urban Micro-Forests: How Metropolises Are Beating Rising Summer Heatwaves",
    slug: "urban-micro-forests-how-metropolises-are-beating-rising-summer-heatwaves",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&q=80&auto=format&fit=crop",
    date: "5 hours ago · 3 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "MEDIA & DIGITAL CULTURE",
    title: "Generative Cinema Wins Major Accolades at International Film Festival",
    slug: "generative-cinema-wins-major-accolades-at-international-film-festival",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=80&auto=format&fit=crop",
    date: "7 hours ago · 5 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "GLOBAL TRADE",
    title: "Multinational Supply Chains Shift Toward Nearshoring Alliances",
    slug: "multinational-supply-chains-shift-toward-nearshoring-alliances",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&q=80&auto=format&fit=crop",
    date: "8 hours ago · 4 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "FUTURE HEALTH",
    title: "Personalized Micro-Nutrient Therapy Receives Global Regulatory Clearance",
    slug: "personalized-micro-nutrient-therapy-receives-global-regulatory-clearance",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80&auto=format&fit=crop",
    date: "10 hours ago · 3 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "SUSTAINABILITY",
    title: "Next-Generation Solar Grids Achieve Unprecedented Conversion Efficiency",
    slug: "next-generation-solar-grids-achieve-unprecedented-conversion-efficiency",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=300&q=80&auto=format&fit=crop",
    date: "12 hours ago · 4 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  }
];

export const editorialRightStackArticles: Article[] = [
  {
    category: "ECO-INNOVATION",
    title: "Renewable Energy Storage Breakthrough Hits Commercial Viability in 2026",
    slug: "renewable-energy-storage-breakthrough-hits-commercial-viability",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80&auto=format&fit=crop",
    date: "2 hours ago · 4 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "BIOTECH FRONTIERS",
    title: "CRISPR 3.0 Delivers Precision Gene Therapy Breakthroughs for Rare Conditions",
    slug: "crispr-30-delivers-precision-gene-therapy-breakthroughs",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80&auto=format&fit=crop",
    date: "4 hours ago · 6 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "DEEP EXPLORATION",
    title: "Autonomous Deep Sea Mapping Expedition Uncovers Uncharted Ecosystems",
    slug: "autonomous-deep-sea-mapping-expedition-uncovers-uncharted-ecosystems",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80&auto=format&fit=crop",
    date: "6 hours ago · 5 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "CYBERSECURITY",
    title: "Next-Gen Zero Trust Protocols Implemented Across Defense Networks",
    slug: "next-gen-zero-trust-protocols-implemented-across-defense-networks",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&q=80&auto=format&fit=crop",
    date: "9 hours ago · 3 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "SPACE TECHNOLOGY",
    title: "Commercial Orbital Stations Expand Microgravity Manufacturing",
    slug: "commercial-orbital-stations-expand-microgravity-manufacturing",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&q=80&auto=format&fit=crop",
    date: "11 hours ago · 4 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  },
  {
    category: "CREATIVE TECH",
    title: "Immersive Audio Interfaces Transform Spatial Computing Standards",
    slug: "immersive-audio-interfaces-transform-spatial-computing-standards",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80&auto=format&fit=crop",
    date: "13 hours ago · 3 min read",
    shortdescription: "",
    description: [],
    author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
  }
];

export const editorialStripArticles: Article[] = [
  {
    category: "01 · ECO-INNOVATION",
    title: "Renewable Energy Storage Breakthrough Hits Commercial Viability in 2026",
    slug: "renewable-energy-storage-breakthrough-hits-commercial-viability",
    image: "",
    date: "4 min read",
    shortdescription: "",
    description: [],
    author: { name: "Sarah Jenkins", role: "", bio: "", image: "", slug: "sarah-jenkins", email: "" }
  },
  {
    category: "02 · BIOTECH FRONTIERS",
    title: "CRISPR 3.0 Delivers Precision Gene Therapy Breakthroughs for Rare Conditions",
    slug: "crispr-30-delivers-precision-gene-therapy-breakthroughs",
    image: "",
    date: "6 min read",
    shortdescription: "",
    description: [],
    author: { name: "Dr. Alex Mercer", role: "", bio: "", image: "", slug: "alex-mercer", email: "" }
  },
  {
    category: "03 · CREATIVE ECONOMY",
    title: "Independent Digital Studios Reshape Global Streaming Media Networks",
    slug: "independent-digital-studios-reshape-global-streaming-media-networks",
    image: "",
    date: "3 min read",
    shortdescription: "",
    description: [],
    author: { name: "Chloe Bennett", role: "", bio: "", image: "", slug: "chloe-bennett", email: "" }
  },
  {
    category: "04 · DEEP EXPLORATION",
    title: "Autonomous Deep Sea Mapping Expedition Uncovers Uncharted Ecosystems",
    slug: "autonomous-deep-sea-mapping-expedition-uncovers-uncharted-ecosystems",
    image: "",
    date: "5 min read",
    shortdescription: "",
    description: [],
    author: { name: "Marco Silva", role: "", bio: "", image: "", slug: "marco-silva", email: "" }
  }
];

// ── Homepage Section 4: Opinion Carousel Data ──────────────────
export const opinionArticles: Article[] = [
  {
    category: "OPINION",
    title: "Why Fusion Energy Capital Investments Will Triple Before 2030",
    slug: "why-fusion-energy-capital-investments-will-triple-before-2030",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&q=80&auto=format&fit=crop",
    date: "",
    shortdescription: "",
    description: [],
    author: {
      name: "Dr. Elena Rostova",
      role: "Macroeconomist",
      bio: "",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&auto=format&fit=crop",
      slug: "elena-rostova",
      email: ""
    }
  },
  {
    category: "PODCAST",
    title: "Episode 84: The Geopolitics of Subsea Polar Data Fiber Lines",
    slug: "episode-84-the-geopolitics-of-subsea-polar-data-fiber-lines",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80&auto=format&fit=crop",
    date: "",
    shortdescription: "",
    description: [],
    author: {
      name: "Marcus Vance",
      role: "Host",
      bio: "",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop",
      slug: "marcus-vance",
      email: ""
    }
  },
  {
    category: "LONG FORM",
    title: "The Silent Re-Wilding of Post-Industrial Northern Europe",
    slug: "the-silent-re-wilding-of-post-industrial-northern-europe",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80&auto=format&fit=crop",
    date: "",
    shortdescription: "",
    description: [],
    author: {
      name: "Jean-Luc Dupont",
      role: "Reporter",
      bio: "",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80&auto=format&fit=crop",
      slug: "jean-luc-dupont",
      email: ""
    }
  },
  {
    category: "ESSAY",
    title: "Quantum Encryption: Safeguarding Sovereign Financial Infrastructure",
    slug: "quantum-encryption-safeguarding-sovereign-financial-infrastructure",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80&auto=format&fit=crop",
    date: "",
    shortdescription: "",
    description: [],
    author: {
      name: "David Chen",
      role: "Cybersecurity Editor",
      bio: "",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&auto=format&fit=crop",
      slug: "david-chen",
      email: ""
    }
  },
  {
    category: "INTERVIEW",
    title: "Designing Autonomous Cities Prepared for Extreme Climate Waves",
    slug: "designing-autonomous-cities-prepared-for-extreme-climate-waves",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80&auto=format&fit=crop",
    date: "",
    shortdescription: "",
    description: [],
    author: {
      name: "Sarah Jenkins",
      role: "Business Analyst",
      bio: "",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop",
      slug: "sarah-jenkins",
      email: ""
    }
  },
  {
    category: "SPECIAL REPORT",
    title: "Inside Next-Generation Biotech Gene Editing Production Facilities",
    slug: "inside-next-generation-biotech-gene-editing-production-facilities",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop",
    date: "",
    shortdescription: "",
    description: [],
    author: {
      name: "Dr. Alex Mercer",
      role: "Biotech Editor",
      bio: "",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80&auto=format&fit=crop",
      slug: "alex-mercer",
      email: ""
    }
  }
];

// ── Homepage Section 3: World Dispatches Data ───────────────────
export const worldDispatchColumns: WorldDispatchColumn[] = [
  {
    header: "EUROPE & UK",
    leadArticle: {
      category: "EUROPE",
      title: "European Union Unveils Comprehensive Clean Energy Infrastructure Pact",
      slug: "central-banks-accelerate-sovereign-digital-assets-in-international-trade",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80&auto=format&fit=crop",
      date: "August 12, 2026",
      shortdescription: "Member states commit to cross-border grid integration and green hydrogen corridors across Western Europe.",
      description: [],
      author: { name: "Sarah Jenkins", role: "European Correspondent", bio: "", image: "", slug: "sarah-jenkins", email: "" }
    },
    subArticles: [
      {
        category: "UK",
        title: "London Tech Hub Reports Record Venture Capital Inflow for Q3",
        slug: "major-tech-firms-announce-joint-ai-safety-initiative",
        image: "",
        date: "3 min read",
        shortdescription: "",
        description: [],
        author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
      },
      {
        category: "NORDICS",
        title: "Scandinavian Off-Shore Wind Farms Exceed Annual Output Goals",
        slug: "next-generation-solar-grids-achieve-unprecedented-conversion-efficiency",
        image: "",
        date: "5 min read",
        shortdescription: "",
        description: [],
        author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
      }
    ]
  },
  {
    header: "AMERICAS",
    leadArticle: {
      category: "AMERICAS",
      title: "North American Supply Chains Pivot to Regional Automation Hubs",
      slug: "kansas-city-has-a-massive-array-of-big-national-companies",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&auto=format&fit=crop",
      date: "August 11, 2026",
      shortdescription: "Enterprise manufacturing centers relocate key production facilities closer to domestic consumer markets.",
      description: [],
      author: { name: "David Chen", role: "Markets Analyst", bio: "", image: "", slug: "david-chen", email: "" }
    },
    subArticles: [
      {
        category: "US",
        title: "Federal Reserve Signals Stabilized Interest Rate Outlook for Fall",
        slug: "customer-engagement-marketing-a-new",
        image: "",
        date: "4 min read",
        shortdescription: "",
        description: [],
        author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
      },
      {
        category: "LATAM",
        title: "Brazil's Agri-Tech Startups Attract Major Global Investment Funds",
        slug: "global-markets-surge-as-innovation-hubs-expand-footprint",
        image: "",
        date: "2 min read",
        shortdescription: "",
        description: [],
        author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
      }
    ]
  },
  {
    header: "ASIA PACIFIC",
    leadArticle: {
      category: "ASIA PACIFIC",
      title: "Tokyo and Seoul Launch Joint Quantum Computing Testbed Network",
      slug: "quantum-encryption-breakthroughs-set-new-standard-for-global-cyber-defense",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80&auto=format&fit=crop",
      date: "August 10, 2026",
      shortdescription: "Leading research institutes establish ultra-low-latency fiber interconnects for multi-node quantum experiments.",
      description: [],
      author: { name: "Kenji Sato", role: "East Asia Bureau", bio: "", image: "", slug: "kenji-sato", email: "" }
    },
    subArticles: [
      {
        category: "JAPAN",
        title: "Subterranean Infrastructure Resilience Initiative Expands in Osaka",
        slug: "inside-tokyos-subterranean-underground-flood-prevention-system",
        image: "",
        date: "4 min read",
        shortdescription: "",
        description: [],
        author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
      },
      {
        category: "SINGAPORE",
        title: "Singapore Digital Harbor Hub Automates Maritime Logistics Port",
        slug: "multinational-supply-chains-shift-toward-nearshoring-alliances",
        image: "",
        date: "3 min read",
        shortdescription: "",
        description: [],
        author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
      }
    ]
  },
  {
    header: "MIDDLE EAST & AFRICA",
    leadArticle: {
      category: "MIDDLE EAST",
      title: "Solar Megaprojects Power Zero-Carbon Industrial Zones across Gulf",
      slug: "urban-micro-forests-how-metropolises-are-beating-rising-summer-heatwaves",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&q=80",
      date: "August 09, 2026",
      shortdescription: "Massive photovoltaic installations supply continuous clean energy for desalinization and heavy manufacturing.",
      description: [],
      author: { name: "Dr. Elena Rostova", role: "Energy Analyst", bio: "", image: "", slug: "elena-rostova", email: "" }
    },
    subArticles: [
      {
        category: "UAE",
        title: "Dubai Financial District Expands Innovation Hub for FinTech Scaleups",
        slug: "social-media-marketing-for-franchises-is-meant",
        image: "",
        date: "5 min read",
        shortdescription: "",
        description: [],
        author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
      },
      {
        category: "AFRICA",
        title: "Pan-African Mobile Payment Networks Reach Unprecedented Interoperability",
        slug: "central-banks-accelerate-sovereign-digital-assets-in-international-trade",
        image: "",
        date: "3 min read",
        shortdescription: "",
        description: [],
        author: { name: "", role: "", bio: "", image: "", slug: "", email: "" }
      }
    ]
  }
];

// ── Homepage Section 6: Visual Essays & Culture Spotlight Data ────
export const visualEssayLeadArticle: Article = {
  category: "PHOTOJOURNALISM ESSAY",
  title: "Preserving Heritage: Documenting the Forgotten Architecture of Ancient Silk Road Cities",
  slug: "the-biggest-hollywood-celebrities-visit-the-ranches-of-california",
  image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=85&auto=format&fit=crop",
  date: "August 14, 2026",
  shortdescription: "A 10,000-mile visual expedition capturing century-old mudbrick domes, intricate tile mosaics, and the resilient master artisans keeping ancient craftsmanship alive. Traversing high mountain passes and remote desert oases across Central Asia, our field photojournalists document endangered architectural monuments, traditional earth-building conservation techniques, and the living cultural legacy of historic Silk Road trading hubs. Through archival-grade high-resolution photography and intimate interviews with elder stonemasons, this special series unveils forgotten urban sanctuaries, sacred geometric tilework, and the urgent international preservation initiatives fighting against environmental weathering and urban encroachment before these ancient wonders fade into history.",
  description: [],
  author: {
    name: "Dr. Elena Rostova",
    role: "Chief Photojournalist",
    bio: "",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    slug: "elena-rostova",
    email: ""
  }
};

export const visualEssaySecondaryArticles: Article[] = [
  {
    category: "CULTURE & HERITAGE",
    title: "Minimalism in Kyoto: The Evolution of Traditional Wooden Machiya Townhouses",
    slug: "fashion-finder-biggest-shows-parties-and-celebrity-for-new-years",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80&auto=format&fit=crop",
    date: "6 min read",
    shortdescription: "How young architects in Kyoto are restoring historic wooden structures into ultra-sustainable modern living sanctuaries.",
    description: [],
    author: { name: "Kenji Sato", role: "Cultural Essayist", bio: "", image: "", slug: "kenji-sato", email: "" }
  },
  {
    category: "WILDLIFE EXPEDITION",
    title: "Tracking High Altitude Fauna Across the Himalayan Glacial Basins",
    slug: "10-things-you-should-know-before-you-visit-south-americas-jungles",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&q=80&auto=format&fit=crop",
    date: "8 min read",
    shortdescription: "Field notebooks and telephoto observations from wildlife conservationists traversing 18,000-foot mountain passes.",
    description: [],
    author: { name: "Marco Silva", role: "Expedition Field Lead", bio: "", image: "", slug: "marco-silva", email: "" }
  },
  {
    category: "SOUND & DESIGN",
    title: "Analog Craft: Why Vinyl Presses and Mechanical Watches Flourish in Berlin",
    slug: "generative-cinema-wins-major-accolades-at-international-film-festival",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80&auto=format&fit=crop",
    date: "5 min read",
    shortdescription: "In an increasingly algorithmic world, a new generation of artisans is choosing tactile precision and analog audio dynamics.",
    description: [],
    author: { name: "Chloe Bennett", role: "Arts Correspondent", bio: "", image: "", slug: "chloe-bennett", email: "" }
  }
];

// ── Homepage Section 7: Special Features & Highlights Data ─────────
export const specialFeatureArticles: Article[] = [
  {
    category: "GLOBAL MARKETS",
    title: "Sovereign Wealth Funds Allocate Record Capital Toward Subsea Fiber Interconnects",
    slug: "global-markets-surge-as-innovation-hubs-expand-footprint",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop",
    date: "August 14, 2026",
    shortdescription: "Cross-border capital allocations accelerate intercontinental power grid and high-speed data communications routes.",
    description: [],
    author: { name: "David Chen", role: "Markets Editor", bio: "", image: "", slug: "david-chen", email: "" }
  },
  {
    category: "DEEP TECH",
    title: "Next-Generation Semiconductor Foundries Reach High-Yield Production Benchmarks",
    slug: "new-technology-will-help-keep-your-smart-home-from-becoming-obsolete",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop",
    date: "August 13, 2026",
    shortdescription: "Advanced lithography systems enable unprecedented energy efficiency for frontier artificial intelligence hardware.",
    description: [],
    author: { name: "Dr. Alex Mercer", role: "Tech Analyst", bio: "", image: "", slug: "alex-mercer", email: "" }
  },
  {
    category: "BIOTECH & HEALTH",
    title: "Precision Micro-Nutrient Therapy Receives Global Regulatory Approvals",
    slug: "personalized-micro-nutrient-therapy-receives-global-regulatory-clearance",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80&auto=format&fit=crop",
    date: "August 12, 2026",
    shortdescription: "Clinical consortiums validate personalized cellular longevity protocols across international research centers.",
    description: [],
    author: { name: "Sarah Jenkins", role: "Biotech Editor", bio: "", image: "", slug: "sarah-jenkins", email: "" }
  },
  {
    category: "SUSTAINABILITY",
    title: "Commercial Offshore Wind Networks Achieve Historic Annual Output Milestones",
    slug: "next-generation-solar-grids-achieve-unprecedented-conversion-efficiency",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80&auto=format&fit=crop",
    date: "August 11, 2026",
    shortdescription: "High-capacity turbine arrays supply continuous clean baseload energy for metropolitan power grids across Western Europe.",
    description: [],
    author: { name: "Marco Silva", role: "Energy Lead", bio: "", image: "", slug: "marco-silva", email: "" }
  }
];

// ── Homepage Section 5: Investigative Reports Data ─────────────
export const investigativeLeadArticle: Article = {
  category: "FEATURED INVESTIGATION",
  title: "The Architecture of Autonomous Grid Infrastructure in Northern Europe",
  slug: "the-architecture-of-autonomous-grid-infrastructure-in-northern-europe",
  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85&auto=format&fit=crop",
  date: "Published Today",
  shortdescription: "An in-depth 6-month investigation into how next-generation power networks integrate AI load balance algorithms to achieve 100% renewable baseload uptime...",
  description: [],
  author: {
    name: "Marco Silva",
    role: "Senior Investigator",
    bio: "",
    image: "",
    slug: "marco-silva",
    email: ""
  }
};

export const investigativeStackArticles: Article[] = [
  {
    category: "URBAN FUTURES",
    title: "Inside Tokyo's Subterranean Underground Flood Prevention System",
    slug: "inside-tokyos-subterranean-underground-flood-prevention-system",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&q=80&auto=format&fit=crop",
    date: "5 min read",
    shortdescription: "An engineering marvel hidden 50 meters below Tokyo, featuring massive subterranean silos and surge tanks designed to divert catastrophic typhoon floodwaters.",
    description: [],
    author: { name: "Kenji Sato", role: "", bio: "", image: "", slug: "kenji-sato", email: "" }
  },
  {
    category: "CRAFT & INDUSTRY",
    title: "The Craftsmanship Behind Century-Old High Precision Swiss Watchmaking",
    slug: "the-craftsmanship-behind-century-old-high-precision-swiss-watchmaking",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80&auto=format&fit=crop",
    date: "4 min read",
    shortdescription: "Inside traditional Vallée de Joux ateliers where master watchmakers hand-craft micro-mechanical complications with sub-micron precision.",
    description: [],
    author: { name: "Claire Dubois", role: "", bio: "", image: "", slug: "claire-dubois", email: "" }
  },
  {
    category: "OCEANIC SCIENCE",
    title: "Autonomous Deep-Sea Robotics Mapping Abyssal Thermal Vents",
    slug: "autonomous-deep-sea-robotics-mapping-abyssal-thermal-vents",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&auto=format&fit=crop",
    date: "4 min read",
    shortdescription: "Next-generation subsea robotic fleets explore uncharted hydrothermal vent ecosystems and seabed geothermal activity miles beneath the ocean surface.",
    description: [],
    author: { name: "Dr. Elena Rostova", role: "", bio: "", image: "", slug: "elena-rostova", email: "" }
  }
];

// Generous collection of articles per category for rich scrollable grids
const categoryArticlesMaster: Record<string, Article[]> = {
  business: [
    {
      category: "business",
      title: "Major Tech Firms Announce Joint AI Safety Initiative",
      slug: "major-tech-firms-announce-joint-ai-safety-initiative",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      date: "August 06, 2026",
      shortdescription: "Leading technology companies have formed a new coalition to establish industry-wide standards for the safe development of artificial intelligence. Executive leaders from over twelve multinational tech corporations signed a binding charter committing substantial venture funding to algorithmic safety auditing, bias reduction, and safe deployment protocols.",
      description: [],
      author: {
        name: "Sarah Jenkins",
        role: "Business Analyst",
        bio: "Sarah covers markets and tech business strategies.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
        slug: "sarah-jenkins",
        email: "sarah.jenkins@wiremingle.com"
      }
    },
    {
      category: "business",
      title: "Kansas City Has a Massive Array of Big National Companies",
      slug: "kansas-city-has-a-massive-array-of-big-national-companies",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=85",
      date: "December 14, 2026",
      shortdescription: "Corporate expansion in Kansas City accelerates as major enterprise headquarters relocate to the midwest. Strategic logistics advantages, lower real estate costs, and a thriving technical workforce attract major industrial players across retail, agriculture, and finance.",
      description: [],
      author: {
        name: "Arianna Scott",
        role: "Senior Editor",
        bio: "Arianna specializes in enterprise growth.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
        slug: "arianna-scott",
        email: "arianna.scott@wiremingle.com"
      }
    },
    {
      category: "business",
      title: "Global Markets Surge as Innovation Hubs Expand Footprint",
      slug: "global-markets-surge-as-innovation-hubs-expand-footprint",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
      date: "December 14, 2026",
      shortdescription: "Financial indexes worldwide posted impressive gains following strong corporate earnings and technology breakthroughs. Analysts point to sustained institutional investment in clean energy infrastructure and semiconductor manufacturing.",
      description: [],
      author: {
        name: "Dr. Elena Rostova",
        role: "Macroeconomist",
        bio: "",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
        slug: "elena-rostova",
        email: ""
      }
    },
    {
      category: "business",
      title: "Sovereign Wealth Funds Pivot Toward Clean Energy Infrastructure",
      slug: "sovereign-wealth-funds-pivot-toward-clean-energy-infrastructure",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      date: "December 13, 2026",
      shortdescription: "Multibillion-dollar capital allocations target fusion energy and grid stabilization projects globally. International funds diversify away from traditional commodities into high-yield renewable power generation networks.",
      description: [],
      author: {
        name: "Dr. Elena Rostova",
        role: "Macroeconomist",
        bio: "",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
        slug: "elena-rostova",
        email: ""
      }
    },
    {
      category: "business",
      title: "Multinational Supply Chains Shift Toward Nearshoring Alliances",
      slug: "multinational-supply-chains-shift-toward-nearshoring-alliances",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      date: "December 12, 2026",
      shortdescription: "Manufacturing corridors across North America and Europe experience unprecedented investment. Enterprise leaders prioritize regional supply chain resilience over distant off-shore production hubs.",
      description: [],
      author: {
        name: "Sarah Jenkins",
        role: "Business Analyst",
        bio: "",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
        slug: "sarah-jenkins",
        email: ""
      }
    },
    {
      category: "business",
      title: "Venture Funding Rebounds for Autonomous Enterprise Robotics",
      slug: "venture-funding-rebounds-for-autonomous-enterprise-robotics",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      date: "December 11, 2026",
      shortdescription: "Industrial robotics startups secure record capital rounds as automated fulfillment centers and AI-driven logistics become standard across Fortune 500 retail chains.",
      description: [],
      author: {
        name: "Arianna Scott",
        role: "Senior Editor",
        bio: "",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
        slug: "arianna-scott",
        email: ""
      }
    },
    {
      category: "business",
      title: "Commercial Real Estate Adapts to Flexible Hybrid Headquarters",
      slug: "commercial-real-estate-adapts-to-flexible-hybrid-headquarters",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      date: "December 10, 2026",
      shortdescription: "Metropolitan developers repurpose legacy office towers into multi-use collaborative innovation spaces equipped with eco-certified amenities and smart building tech.",
      description: [],
      author: {
        name: "Sarah Jenkins",
        role: "Business Analyst",
        bio: "",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
        slug: "sarah-jenkins",
        email: ""
      }
    },
    {
      category: "business",
      title: "Central Banks Finalize Digital Asset Interoperability Frameworks",
      slug: "central-banks-finalize-digital-asset-interoperability-frameworks",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      date: "December 09, 2026",
      shortdescription: "Global financial authorities establish unified cross-border settlement protocols. Instant clearance for international trade transactions minimizes foreign exchange friction.",
      description: [],
      author: {
        name: "Dr. Elena Rostova",
        role: "Macroeconomist",
        bio: "",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
        slug: "elena-rostova",
        email: ""
      }
    }
  ],
  technology: [
    {
      category: "technology",
      title: "Quantum Encryption Breakthroughs Set New Standard for Global Cyber Defense",
      slug: "quantum-encryption-breakthroughs-set-new-standard-for-global-cyber-defense",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=85",
      date: "December 14, 2026",
      shortdescription: "As quantum processors surpass classical supercomputers, global intelligence agencies race to implement post-quantum cryptographic standards. Post-quantum lattice encryption becomes mandatory across critical financial systems and defense communications networks.",
      description: [],
      author: {
        name: "David Chen",
        role: "Cybersecurity Editor",
        bio: "",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
        slug: "david-chen",
        email: ""
      }
    },
    {
      category: "technology",
      title: "The Hottest Wearable Tech and Smart Gadgets of the Year Will Amaze You",
      slug: "the-hottest-wearable-tech-and-smart-gadgets-of-the-year",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      date: "December 14, 2026",
      shortdescription: "Biometric rings, spatial audio glasses, and neural wristwear lead the new wave of consumer electronics. Micro-sensors measure blood glucose non-invasively while neural gesture detection enables hands-free spatial computing interfaces.",
      description: [],
      author: {
        name: "Marcus Vance",
        role: "Tech Correspondent",
        bio: "",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        slug: "marcus-vance",
        email: ""
      }
    },
    {
      category: "technology",
      title: "Next-Gen Silicon Fabrics Overhaul Enterprise Data Processing",
      slug: "next-gen-silicon-fabrics-overhaul-enterprise-data-processing",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      date: "December 13, 2026",
      shortdescription: "Sub-nanometer architecture unlocks 40% higher efficiency across distributed cloud clusters. Major chip foundries report breakthroughs in 3D stacked optical interconnects that reduce heat generation dramatically.",
      description: [],
      author: {
        name: "Marcus Vance",
        role: "Tech Correspondent",
        bio: "",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        slug: "marcus-vance",
        email: ""
      }
    },
    {
      category: "technology",
      title: "Edge AI Processing Chips Deployed in Autonomous Logistics Fleets",
      slug: "edge-ai-processing-chips-deployed-in-autonomous-logistics-fleets",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      date: "December 12, 2026",
      shortdescription: "Low-latency neural network accelerators enable real-time hazard detection in self-driving transport units. On-device decision processing eliminates reliance on continuous cloud connectivity in deep rural corridors.",
      description: [],
      author: {
        name: "David Chen",
        role: "Cybersecurity Editor",
        bio: "",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
        slug: "david-chen",
        email: ""
      }
    },
    {
      category: "technology",
      title: "Autonomous Deep-Sea Robotics Mapping Abyssal Thermal Vents",
      slug: "autonomous-deep-sea-robotics-mapping-abyssal-thermal-vents",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      date: "December 11, 2026",
      shortdescription: "Robotic submersibles equipped with sonar topography sensors map deep-water ocean floors with sub-centimeter resolution, transmitting data via satellite relays.",
      description: [],
      author: {
        name: "Marcus Vance",
        role: "Tech Correspondent",
        bio: "",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        slug: "marcus-vance",
        email: ""
      }
    },
    {
      category: "technology",
      title: "Immersive Spatial Displays Eliminate Visible Pixels in Headsets",
      slug: "immersive-spatial-displays-eliminate-visible-pixels-in-headsets",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
      date: "December 10, 2026",
      shortdescription: "Micro-OLED display panels achieve over 4,000 pixels per inch density, offering life-like visual fidelity for medical visualization and high-end engineering software.",
      description: [],
      author: {
        name: "David Chen",
        role: "Cybersecurity Editor",
        bio: "",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
        slug: "david-chen",
        email: ""
      }
    },
    {
      category: "technology",
      title: "Open Source AI Alignment Frameworks Released by Research Consortium",
      slug: "open-source-ai-alignment-frameworks-released-by-research-consortium",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      date: "December 09, 2026",
      shortdescription: "Global computer scientists publish open benchmarks for evaluating AI model truthfulness, automated reasoning accuracy, and red-teaming resilience.",
      description: [],
      author: {
        name: "Marcus Vance",
        role: "Tech Correspondent",
        bio: "",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        slug: "marcus-vance",
        email: ""
      }
    }
  ]
};

// Aliases mapping for flexibility
const ALIASES: Record<string, string> = {
  tech: "technology",
  markets: "business",
  finance: "business",
  culture: "entertainment",
  celebrity: "entertainment",
};

export function getCategoryInfo(slug: string): CategoryInfo {
  const normalized = ALIASES[slug.toLowerCase()] || slug.toLowerCase();
  return CATEGORY_MAP[normalized] || {
    slug: slug.toLowerCase(),
    name: slug.charAt(0).toUpperCase() + slug.slice(1) + " News",
    tagline: "In-Depth Reporting, Special Analysis & Latest Dispatches",
    description: `Comprehensive news coverage, expert commentary, and investigative stories on ${slug}. Detailed analysis across key global sectors and developments.`,
    color: "#e8192c",
    topics: ["All Stories", "Latest", "Analysis", "Deep Dives", "Opinion"]
  };
}

export function getArticlesForCategory(categorySlug: string): Article[] {
  const normalized = ALIASES[categorySlug.toLowerCase()] || categorySlug.toLowerCase();
  
  const masterList = categoryArticlesMaster[normalized];
  if (masterList && masterList.length > 0) {
    return masterList;
  }

  // Check matched from loaded json articles
  const matched = allArticles.filter(
    (item) => item.category.toLowerCase() === normalized || item.category.toLowerCase().includes(normalized)
  );

  if (matched.length >= 4) {
    return matched;
  }

  // Generic fallback if empty category
  return allArticles.slice(0, 8).map((item) => ({
    ...item,
    category: normalized
  }));
}

export function getArticleBySlug(slug: string): Article {
  const normalizedSlug = slug.toLowerCase();
  
  // Search in allArticles
  const foundInAll = allArticles.find(
    (a) => a.slug.toLowerCase() === normalizedSlug || normalizedSlug.includes(a.slug.toLowerCase())
  );
  if (foundInAll) return foundInAll;

  // Search in category master lists
  for (const catKey of Object.keys(categoryArticlesMaster)) {
    const found = categoryArticlesMaster[catKey].find(
      (a) => a.slug.toLowerCase() === normalizedSlug || normalizedSlug.includes(a.slug.toLowerCase())
    );
    if (found) return found;
  }

  // Fallback rich article if matching slug not found directly
  const titleFormatted = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    category: "Business",
    title: titleFormatted,
    slug: slug,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format&fit=crop",
    date: "August 06, 2026",
    shortdescription: "Leading technology companies have formed a new coalition to establish industry-wide standards for the safe development of artificial intelligence.",
    description: [
      {
        subtitle: "Unprecedented Collaboration Across Markets",
        text: "The CEOs of top tech giants announced the formation of the AI Safety Alliance, pledging billions of dollars toward research into safe AI deployment. Executive leaders from over twelve multinational corporations signed a binding charter committing substantial venture funding to algorithmic safety auditing, bias reduction, and safe deployment protocols."
      },
      {
        subtitle: "Regulatory Frameworks and Global Oversight",
        text: "International regulatory bodies welcomed the announcement, noting that self-governance frameworks developed by industry leaders provide crucial baselines for legislative committees. The alliance will operate independent testing laboratories across North America, Europe, and Asia Pacific."
      },
      {
        subtitle: "Long-term Economic and Technological Impact",
        text: "Industry analysts project that standardized safety guidelines will accelerate enterprise adoption of autonomous agent systems by building market trust and reducing compliance uncertainty across financial, medical, and industrial sectors."
      }
    ],
    author: {
      name: "Sarah Jenkins",
      role: "Business Analyst",
      bio: "Sarah covers global markets, enterprise technology strategies, and regulatory policy shifts.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      slug: "sarah-jenkins",
      email: "sarah.jenkins@wiremingle.com"
    }
  };
}

/* ════════════════════════════════════════════════════════════
   TEAM MEMBERS & AUTHOR REGISTRY
════════════════════════════════════════════════════════════ */
export interface TeamMember {
  name: string;
  role: string;
  slug: string;
  department: string;
  location: string;
  joinedYear: string;
  bio: string;
  image: string;
  email: string;
  twitter?: string;
  linkedin?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Arthur Pendelton",
    role: "Publisher & Chairman",
    slug: "arthur-pendelton",
    department: "Executive Board",
    location: "Washington, D.C.",
    joinedYear: "2021",
    bio: "Arthur brings 30+ years of media publishing experience, formerly overseeing international operations at major global news syndicates. He leads SecNewsM's strategic vision, governance, and commitment to independent journalism.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    email: "arthur.pendelton@secnewsm.com",
    twitter: "@apendelton_news",
    linkedin: "arthur-pendelton-secnewsm"
  },
  {
    name: "Sarah Jenkins",
    role: "Editor-in-Chief",
    slug: "sarah-jenkins",
    department: "Business & Markets",
    location: "New York, USA",
    joinedYear: "2021",
    bio: "Pulitzer-nominated journalist with two decades covering macroeconomic policy, central bank summits, enterprise shifts, and international trade alliances across global capitals.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    email: "sarah.jenkins@secnewsm.com",
    twitter: "@sjenkins_sec",
    linkedin: "sarah-jenkins-editor"
  },
  {
    name: "Marcus Vance",
    role: "Executive Editor & Tech Correspondent",
    slug: "marcus-vance",
    department: "Technology & AI",
    location: "San Francisco, USA",
    joinedYear: "2022",
    bio: "Leads SecNewsM's investigative and tech desks. Specialized in corporate governance auditing, hardware innovations, AI safety frameworks, and post-quantum cybersecurity.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    email: "marcus.vance@secnewsm.com",
    twitter: "@marcusvance_tech",
    linkedin: "marcus-vance-editor"
  },
  {
    name: "Arianna Scott",
    role: "Managing Editor",
    slug: "arianna-scott",
    department: "International Affairs",
    location: "London, UK",
    joinedYear: "2021",
    bio: "Directs foreign bureaus across London, Tokyo, Washington, and Brussels. Specializes in diplomatic summits, enterprise expansion, and regional market shifts.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    email: "arianna.scott@secnewsm.com",
    twitter: "@ariannascott_news",
    linkedin: "arianna-scott-news"
  },
  {
    name: "David Chen",
    role: "Senior Cybersecurity & Tech Editor",
    slug: "david-chen",
    department: "Technology & AI",
    location: "San Jose, USA",
    joinedYear: "2023",
    bio: "Investigates network security, quantum encryption algorithms, and sub-nanometer semiconductor manufacturing across global tech corridors.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    email: "david.chen@secnewsm.com",
    twitter: "@davidchen_sec",
    linkedin: "david-chen-tech"
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Political & Macroeconomic Analyst",
    slug: "elena-rostova",
    department: "Politics & Economy",
    location: "Brussels, Belgium",
    joinedYear: "2022",
    bio: "PhD economist focusing on global market trends, sovereign digital assets, trade corridors, and legislative policymaking across European and American regulatory bodies.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    email: "elena.rostova@secnewsm.com",
    twitter: "@elena_rostova_econ",
    linkedin: "elena-rostova-phd"
  },
  {
    name: "Jonathan Sterling",
    role: "Senior Markets Analyst",
    slug: "jonathan-sterling",
    department: "Business & Markets",
    location: "Chicago, USA",
    joinedYear: "2023",
    bio: "Former investment bank strategist tracking commodities, oil transitions, central bank interest rate moves, corporate bond markets, and venture equity funding.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    email: "jonathan.sterling@secnewsm.com",
    twitter: "@jsterling_markets",
    linkedin: "jonathan-sterling-markets"
  },
  {
    name: "Maya Lin",
    role: "Culture & Visual Essays Director",
    slug: "maya-lin",
    department: "Culture & Visual Essays",
    location: "Paris, France",
    joinedYear: "2022",
    bio: "Award-winning documentary photographer curating SecNewsM's photo essay dispatches, architecture reviews, and cultural investigative features.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    email: "maya.lin@secnewsm.com",
    twitter: "@mayalin_photo",
    linkedin: "maya-lin-culture"
  },
  {
    name: "Chloe Bennett",
    role: "Culture & Lifestyle Reporter",
    slug: "chloe-bennett",
    department: "Culture & Visual Essays",
    location: "Los Angeles, USA",
    joinedYear: "2023",
    bio: "Chloe writes on entertainment galas, avant-garde digital arts, high fashion trends, and celebrity cultural shifts across North America and Europe.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    email: "chloe.bennett@secnewsm.com",
    twitter: "@chloebennett_style",
    linkedin: "chloe-bennett-culture"
  },
  {
    name: "Jean-Luc Dupont",
    role: "Arts & Film Critic",
    slug: "jean-luc-dupont",
    department: "Culture & Visual Essays",
    location: "Cannes, France",
    joinedYear: "2023",
    bio: "Reviews global film festivals, immersive digital cinema, generative arts, and contemporary theatrical releases for international audiences.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    email: "jean-luc-dupont@secnewsm.com",
    twitter: "@jeanluc_cinema",
    linkedin: "jean-luc-dupont-critic"
  },
  {
    name: "Marco Silva",
    role: "Oceanic & Environmental Specialist",
    slug: "marco-silva",
    department: "Science & Environment",
    location: "Lisbon, Portugal",
    joinedYear: "2024",
    bio: "Marco covers deep-sea science, oceanic exploration expeditions, environmental conservation policy, and climate research across global oceans.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    email: "marco.silva@secnewsm.com",
    twitter: "@marcosilva_ocean",
    linkedin: "marco-silva-marine"
  }
];

export function getAuthorBySlug(slug: string): TeamMember {
  const normSlug = slug.toLowerCase();
  const member = TEAM_MEMBERS.find((m) => m.slug.toLowerCase() === normSlug);
  if (member) return member;

  for (const art of allArticles) {
    if (art.author && art.author.slug && art.author.slug.toLowerCase() === normSlug) {
      return {
        name: art.author.name,
        role: art.author.role || "Senior Staff Writer",
        slug: art.author.slug,
        department: "Editorial Desk",
        location: "Global Bureau",
        joinedYear: "2022",
        bio: art.author.bio || "Staff writer covering breaking dispatches and in-depth investigations for SecNewsM.",
        image: art.author.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
        email: art.author.email || `${art.author.slug}@secnewsm.com`,
      };
    }
  }

  const nameFormatted = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    name: nameFormatted,
    role: "Senior Editorial Analyst",
    slug: slug,
    department: "Global Newsroom",
    location: "New York, USA",
    joinedYear: "2022",
    bio: `${nameFormatted} is a senior journalist covering breaking dispatches, market shifts, and policy investigations for SecNewsM.`,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    email: `${slug}@secnewsm.com`
  };
}

export function getArticlesByAuthorSlug(slug: string): Article[] {
  const normSlug = slug.toLowerCase();
  const authorObj = getAuthorBySlug(slug);
  const authorNameLower = authorObj.name.toLowerCase();

  const matched = allArticles.filter((art) => {
    if (!art.author) return false;
    if (art.author.slug && art.author.slug.toLowerCase() === normSlug) return true;
    if (art.author.name && art.author.name.toLowerCase() === authorNameLower) return true;
    return false;
  });

  if (matched.length > 0) return matched;
  return allArticles.slice(0, 4);
}


