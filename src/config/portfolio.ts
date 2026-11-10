export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string;
  image?: string;
  demoUrl?: string;
}

export interface Reel {
  /** YouTube Shorts id (plays inline); Instagram reels open out */
  youtubeId?: string;
  url: string;
  image: string;
  platform: "YouTube" | "Instagram";
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface Capability {
  title: string;
  badge: string;
  description: string;
  features: string[];
  technologies: string[];
}

export interface StackGroup {
  label: string;
  items: string[];
  copies: number;
  duration: number;
  reverse?: boolean;
}

/** Prefix public/ files with the deploy base (e.g. /vardhan-portfolio/ on GitHub Pages). */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const short = (youtubeId: string): Reel => ({
  youtubeId,
  url: `https://www.youtube.com/shorts/${youtubeId}`,
  image: asset(`shorts/${youtubeId}.jpg`),
  platform: "YouTube",
});
const insta = (code: string, n: number): Reel => ({
  url: `https://www.instagram.com/reel/${code}/`,
  image: asset(`shorts/reel-${n}.jpg`),
  platform: "Instagram",
});

export const PORTFOLIO_CONFIG = {
  profile: {
    name: "Aditya Vardhan",
    firstName: "Aditya",
    lastName: "Vardhan",
    wordmark: "VARDHAN",
    role: {
      bold: "Video",
      light: "Editor",
    },
    tagline: "I cut raw footage into stories people stay for.",
    availability: "Open for Freelance & Retainers",
    location: "India",
    email: "editwithaditya.co@gmail.com",
    phone: "+91 95155 44989",
    phoneHref: "tel:+919515544989",
    portraitUrl: asset("portrait.jpg"),
    socials: {
      instagram: "https://instagram.com/aditya.locked",
    },
  },

  theme: {
    accent: "#e8b547", // warm amber, matches editwithaditya.vercel.app
    accentHover: "#f0c566",
    bg: "#050505",
    bgCard: "#0d0d0d",
    border: "rgba(255, 255, 255, 0.1)",
  },

  metrics: [
    {
      value: "2020",
      label: "Freelancing Since",
      detail: "Independent editor across documentary, devotional and short-form",
    },
    {
      value: "3",
      label: "Newsroom & On-Camera Teams",
      detail: "Local news channel, Sri Lalitha (personal editor), YK TV Network",
    },
    {
      value: "48–72h",
      label: "Short-Form Turnaround",
      detail: "Reels, Shorts and TikToks built around the hook",
    },
    {
      value: "5",
      label: "Core Tools",
      detail: "Premiere Pro, After Effects, Photoshop, DaVinci Resolve, Lightroom",
    },
  ] as Metric[],

  capabilities: [
    {
      title: "Long-Form Edit",
      badge: "SVC.01",
      description:
        "Documentary, brand film, or YouTube essay. From assembly to lock — sound, color, and craft.",
      features: [
        "Story structure, pacing and rhythm from first assembly to final lock",
        "Color grading and sound design in the same pass",
        "Versioning and delivery for every platform",
      ],
      technologies: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    },
    {
      title: "Short-Form Package",
      badge: "SVC.02",
      description:
        "Reels, Shorts, and TikToks built around the hook. Platform-native, retention-tuned.",
      features: [
        "Instagram and YouTube Reels, UGC videos and testimonials",
        "Hook-first cuts tuned for retention",
        "Turnaround in 48–72 hours",
      ],
      technologies: ["Premiere Pro", "After Effects", "Photoshop"],
    },
    {
      title: "Thumbnail Design",
      badge: "SVC.03",
      description:
        "Cover art that earns the click without selling out the story. Series packages available.",
      features: [
        "Click-worthy covers that stay true to the story",
        "Consistent series packages",
        "Turnaround in 24–72 hours",
      ],
      technologies: ["Photoshop", "Lightroom"],
    },
    {
      title: "Devotional & Traditional Song Edits",
      badge: "Music",
      description:
        "Edits for devotional and traditional music, including a full Navaratri 2025 series for singer Sri Lalitha.",
      features: [
        "Day-by-day series edits with consistent look and feel",
        "Title design and motion graphics",
        "Personal editor on retainer since April 2025",
      ],
      technologies: ["Premiere Pro", "After Effects", "Title Design"],
    },
    {
      title: "News & Explainer Content",
      badge: "News & Docs",
      description:
        "Fast, clear edits for news and explainer channels — interviews, mystery explainers and political deep-dives.",
      features: [
        "Newsroom-speed delivery with clean pacing",
        "Interview, explainer and deep-dive formats",
        "Staff editor at YK TV Network since January 2026",
      ],
      technologies: ["Premiere Pro", "After Effects", "Sound Design"],
    },
  ] as Capability[],

  /* Tech stack marquees — one row per layer (About section) */
  stack: [
    {
      label: "Toolkit",
      items: ["Premiere Pro", "After Effects", "Photoshop", "DaVinci Resolve", "Lightroom"],
      copies: 3,
      duration: 46,
    },
    {
      label: "Craft",
      items: [
        "Documentary Editing",
        "Color Grading",
        "Motion Graphics",
        "Sound Design",
        "Story Structure",
        "Pacing & Rhythm",
        "Title Design",
        "Versioning & Delivery",
      ],
      copies: 2,
      duration: 60,
      reverse: true,
    },
    {
      label: "Formats",
      items: [
        "Instagram & YouTube Reels",
        "UGC Videos",
        "Testimonials",
        "Real Estate",
        "Educational Consultancy",
        "Traditional Song Edits",
        "AI Video Generation",
      ],
      copies: 2,
      duration: 54,
    },
  ] as StackGroup[],

  projects: [
    {
      id: "cDnr4r4_i1s",
      title: "BalaTripura Sundari",
      subtitle: "Srilalitha · Navaratri 2025 — Day 1",
      description:
        "Devotional music video edit for the opening day of Sri Lalitha's Navaratri 2025 series.",
      tags: ["Devotional", "Navaratri 2025", "Srilalitha"],
      category: "Devotional",
    },
    {
      id: "r1lAC0d4Nvs",
      title: "West Bengal Political Crisis",
      subtitle: "YK TV Network — Deep Facts",
      description:
        "Long-form political explainer edited for YK TV Network's Deep Facts series.",
      tags: ["News", "Explainer", "YK TV Network"],
      category: "News & Docs",
    },
    {
      id: "HkFv7cVGTiw",
      title: "Sri Lalitha Tripura Sundari",
      subtitle: "Srilalitha · Navaratri 2025 — Day 6",
      description:
        "Devotional music video edit for day six of the Navaratri 2025 series.",
      tags: ["Devotional", "Navaratri 2025", "Srilalitha"],
      category: "Devotional",
    },
    {
      id: "RqWcPC1pLfg",
      title: "UFO Mystery Explained",
      subtitle: "YK TV Network — Mystery",
      description:
        "Mystery explainer cut for YK TV Network, built around pacing and story structure.",
      tags: ["Mystery", "Explainer", "YK TV Network"],
      category: "News & Docs",
    },
    {
      id: "ZK913znru3U",
      title: "Gayatri Devi Ambaam Aavahayami",
      subtitle: "Srilalitha · Navaratri 2025 — Day 2",
      description:
        "Devotional music video edit for day two of the Navaratri 2025 series.",
      tags: ["Devotional", "Navaratri 2025", "Srilalitha"],
      category: "Devotional",
    },
    {
      id: "p32zfOgitps",
      title: "Chit-Chat with Actor Vishwa",
      subtitle: "YK TV Network — Interview",
      description:
        "On-camera interview with actor Vishwa, edited for YK TV Network.",
      tags: ["Interview", "On-Camera", "YK TV Network"],
      category: "News & Docs",
    },
    {
      id: "VJNRI6dLkP4",
      title: "Annapurna Stotram",
      subtitle: "Srilalitha · Navaratri 2025 — Day 3",
      description:
        "Devotional music video edit for day three of the Navaratri 2025 series.",
      tags: ["Devotional", "Navaratri 2025", "Srilalitha"],
      category: "Devotional",
    },
    {
      id: "4sTyTl9aacs",
      title: "Mahishasura Mardini",
      subtitle: "Srilalitha · Navaratri 2025 — Day 10",
      description:
        "Devotional music video edit for day ten of the Navaratri 2025 series.",
      tags: ["Devotional", "Navaratri 2025", "Srilalitha"],
      category: "Devotional",
    },
    {
      id: "gJFMMqsmQSw",
      title: "Sri Maha Chandi Devi",
      subtitle: "Srilalitha · Navaratri 2025 — Day 7",
      description:
        "Devotional music video edit for day seven of the Navaratri 2025 series.",
      tags: ["Devotional", "Navaratri 2025", "Srilalitha"],
      category: "Devotional",
    },
  ].map((p) => ({
    ...p,
    image: asset(`projects/${p.id}.jpg`),
    demoUrl: yt(p.id),
  })) as Project[],

  /* Reels & Shorts — same order as editwithaditya.vercel.app */
  reels: [
    insta("DW6wDTpgc8-", 1),
    short("9RsGHHbgQo8"),
    short("drGGxYcV6mA"),
    insta("DWVOXrxj_5j", 2),
    short("cv-r50u3d4Q"),
    short("EY4vCiwytcc"),
    short("q08MbsKu5Cc"),
    insta("DJ0LL4jT3iw", 3),
    short("x3gPQ_frKxU"),
    short("rUz7kv0uQHs"),
    short("cbXkn8z63vw"),
    insta("DO8KSMjj6EP", 4),
    short("KUMCrKzdxXY"),
    short("ZxLQgyBHXzY"),
    short("EaWYonn-_vQ"),
    short("9lXx1FcGuyU"),
    short("jwkpncHd9tw"),
  ] as Reel[],

  thumbnails: [1, 2, 3, 4, 5].map((n) => asset(`thumbs/${n}.jpg`)),

  breakout: {
    headline: ["CUT TO", "STORY"],
    caption: "Break the barrier. Every frame has a purpose.",
    startingLives: 3,
  },
};
