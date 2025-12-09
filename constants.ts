
import { SectionData, SectionId, Persona, FinancialMetric, ProductLine, FundAllocation, Ingredient, NarrativeBeat } from './types';
import { Target, Users, Map, Lightbulb, Zap, Beaker, BarChart, Leaf, Rocket, ClipboardList } from 'lucide-react';

export const HYDRA_CONTEXT = `
You are the Chief Strategy Officer for HydraEdge. 
HydraEdge is a new beverage startup creating "Cognitive Hydration" - bridging sports drinks and nootropics.
Founder: Johnathan Arellano (D1 Athlete).
USP: "Flow State in a Stick".
Lines: Performance (Black Label), Zero (White Label), Kids (Pink/Yellow).
Key Ingredients: Lion's Mane, Cascara Fruit, Magnesium Malate, L-Alanine.
Current status: Ready for launch Feb 2026. Kickstarter goal $150k.
Unit Economics: $0.41 COGS, $1.56 MSRP, 73% Margin.
`;

export const NAVIGATION_ITEMS = [
  { id: 'purpose', label: 'Purpose & Problem', icon: Target },
  { id: 'personas', label: 'Personas & Insights', icon: Users },
  { id: 'stakeholders', label: 'Stakeholder Map', icon: Map },
  { id: 'opportunity', label: 'Opportunity Framing', icon: Lightbulb },
  { id: 'concept', label: 'Concept Summary', icon: Zap },
  { id: 'prototype', label: 'Prototype & Testing', icon: Beaker },
  { id: 'impact', label: 'Impact Dashboard', icon: BarChart },
  { id: 'survey', label: 'Survey Insights', icon: ClipboardList },
  { id: 'sustainability', label: 'Sustainability Plan', icon: Leaf },
  { id: 'market', label: 'Market & Launch', icon: Rocket },
];

export const SURVEY_DATA = {
  total: 834,
  demographics: [
    { name: "Student Athletes", value: 35, fill: "#00ccff" }, // Hydra Blue
    { name: "Manual Labor / Trades", value: 30, fill: "#ccff00" }, // Hydra Green
    { name: "Students/Academics", value: 20, fill: "#ff00cc" }, // Hydra Pink
    { name: "General Fitness", value: 15, fill: "#ffffff" }
  ],
  painPoints: [
    { name: "Sugar Crash", value: 52 },
    { name: "Short Duration", value: 20 },
    { name: "Jitters", value: 18 },
    { name: "Artificial", value: 10 }
  ],
  flavors: [
    { name: "Lemon Lime 🍋", value: 65, rank: 1, type: "classic" },
    { name: "Watermelon Wave 🍉", value: 60, rank: 2, type: "refreshing" },
    { name: "Citrus Splash 🍊", value: 52, rank: 3, type: "classic" },
    { name: "Berry Blitz 🍇", value: 45, rank: 4, type: "sweet" },
    { name: "Tropical Punch 🍍", value: 38, rank: 5, type: "sweet" },
    { name: "Crisp Apple 🍏", value: 30, rank: 6, type: "refreshing" },
    { name: "Strawberry Bananza 🍓🍌", value: 25, rank: 7, type: "sweet" },
    { name: "Peach Mango 🍑", value: 20, rank: 8, type: "sweet" }
  ],
  pricing: [
    { price: "$20.00", percentage: 18 },
    { price: "$25.00 (Target)", percentage: 60 },
    { price: "$30.00+", percentage: 22 }
  ],
  location: [
    { place: "Gas Station", percentage: 65 },
    { place: "Grocery", percentage: 20 },
    { place: "Online", percentage: 15 }
  ]
};

export const NARRATIVE_BEATS: Record<string, NarrativeBeat> = {
  origin: {
    id: 'origin',
    type: 'founder',
    title: 'The Breaking Point',
    content: "I remember sitting in the film room after a 3-hour practice. My legs were heavy, but my mind was worse—complete fog. I had downed a sports drink for hydration, but the sugar crash hit me right when I needed to study the playbook. I realized then: I was hydrating my muscles but starving my brain.",
    author: "Johnathan Arellano",
    role: "Founder & D1 Athlete"
  },
  parenting: {
    id: 'parenting',
    type: 'testimonial',
    title: 'A Mother’s Relief',
    content: "My son loves sports, but I hate the red dye and the caffeine in everything else. Seeing him drink HydraEdge Kids—knowing he's getting vitamins and calm focus instead of a sugar high—is a massive weight off my shoulders.",
    author: "Maria T.",
    role: "Soccer Mom"
  },
  breakthrough: {
    id: 'breakthrough',
    type: 'testimonial',
    title: 'The "Flow State" Feeling',
    content: "It’s hard to explain, but it’s not 'energy' like coffee. It’s just... clarity. The noise quiets down. I played a full 90 minutes and felt just as sharp in the final minute as I did in the first.",
    author: "Marcus J.",
    role: "Beta Tester / Collegiate Midfielder"
  },
  diabetic: {
    id: 'diabetic',
    type: 'testimonial',
    title: 'Safe Performance',
    content: "For 10 years, I've had to guess with sports drinks. 'Will this spike me?' With HydraEdge Zero, I finally have a performance tool that respects my physiology. I don't feel sick; I feel capable.",
    author: "Sarah L.",
    role: "Type 1 Diabetic CrossFitter"
  },
  vision: {
    id: 'vision',
    type: 'vision',
    title: 'The Future',
    content: "We aren't just filling bottles; we are fueling ambition. In a world of distraction, providing the biological tools for focus is the greatest competitive advantage we can offer.",
    author: "Johnathan Arellano",
    role: "Founder"
  }
};

export const PERSONAS: Persona[] = [
  {
    role: "The D1 Athlete",
    name: "Johnathan",
    quote: "I need to recover physically, but I also need to study film immediately after practice.",
    painPoint: "Sugar crash during film study destroys focus.",
    need: "Recovery + Mental Sharpness.",
    color: "bg-hydra-green"
  },
  {
    role: "The Diabetic Pro",
    name: "Sarah",
    quote: "I can't risk an insulin spike, but I get brain fog around 2 PM.",
    painPoint: "Brain fog from blood sugar fluctuations.",
    need: "Steady focus without glycemic impact.",
    color: "bg-hydra-blue"
  },
  {
    role: "The Soccer Parent",
    name: "Michael",
    quote: "My kids are dehydrated, but I refuse to give them Red dye #40 or caffeine.",
    painPoint: "Hyperactivity from sugar/caffeine in current drinks.",
    need: "Healthy hydration + Calm focus (L-Theanine).",
    color: "bg-hydra-pink"
  }
];

const STANDARD_FLAVORS = [
  "Lemon Lime 🍋",
  "Berry Blitz 🍇",
  "Citrus Splash 🍊",
  "Tropical Punch 🍍",
  "Peach Mango 🍑🥭",
  "Strawberry Bananza 🍓🍌",
  "Watermelon Wave 🍉",
  "Crisp Apple 🍏"
];

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: 'performance',
    title: 'HydraEdge Performance',
    label: 'The Black Label',
    concept: 'Natural Energy',
    keyFeature: '11g Cane Sugar (Rapid Energy) + Cognitive Stack',
    flavors: STANDARD_FLAVORS,
    theme: {
      bg: 'bg-zinc-950',
      text: 'text-white',
      border: 'border-zinc-800',
      accent: 'bg-hydra-green'
    }
  },
  {
    id: 'zero',
    title: 'HydraEdge Zero',
    label: 'The White Label',
    concept: 'Metabolic Focus',
    keyFeature: '0g Sugar (Allulose/Monk Fruit) + Amino Acids',
    flavors: STANDARD_FLAVORS,
    theme: {
      bg: 'bg-gray-100',
      text: 'text-zinc-900',
      border: 'border-white',
      accent: 'bg-hydra-blue'
    }
  },
  {
    id: 'kids',
    title: 'HydraEdge Kids',
    label: 'The Pink/Yellow Label',
    concept: 'Smart Hydration',
    keyFeature: 'Caffeine-Free + Lower Sodium + L-Theanine (Calm Focus)',
    flavors: STANDARD_FLAVORS,
    theme: {
      bg: 'bg-gradient-to-br from-hydra-pink/20 to-yellow-400/20',
      text: 'text-white',
      border: 'border-hydra-pink/30',
      accent: 'bg-hydra-pink'
    }
  },
  {
    id: 'variety',
    title: 'The Variety Packs',
    label: 'The Rainbow',
    concept: 'Entry Point',
    keyFeature: '16 Sticks per pack (2 of each flavor)',
    flavors: [
      "Performance Variety Pack",
      "Zero Variety Pack",
      "Kids Sampler"
    ],
    theme: {
      bg: 'bg-zinc-900',
      text: 'text-gray-200',
      border: 'border-dashed border-zinc-700',
      accent: 'bg-purple-500'
    }
  }
];

export const MASTER_INGREDIENTS: Ingredient[] = [
  {
    name: "Lion’s Mane Mushroom Extract",
    dosage: "750mg",
    source: "Cultivated on hardwood sawdust substrates (USA/Asia). Dual-extract of fruiting body.",
    activeCompounds: "Hericenones and Erinacines",
    function: "Stimulates production of Nerve Growth Factor (NGF).",
    benefit: "Repairs neurons, improves long-term memory, and supports brain plasticity (learning).",
    category: "Cognitive"
  },
  {
    name: "Cascara Fruit Extract",
    dosage: "100mg",
    source: "Upcycled from sustainable coffee farms in Colombia/Costa Rica. Dried coffee cherry skin.",
    activeCompounds: "Polyphenols and Chlorogenic Acid",
    function: "Increases Brain-Derived Neurotrophic Factor (BDNF) by up to 143%.",
    benefit: "BDNF acts as a 'reset switch' for clarity. Clears brain fog and sharpens focus immediately.",
    category: "Cognitive"
  },
  {
    name: "Pink Himalayan Salt",
    dosage: "800mg - 1200mg",
    source: "Mined from ancient sea salt deposits in Pakistan. Unrefined and hand-extracted.",
    activeCompounds: "Sodium Chloride + 84 trace minerals",
    function: "The primary 'fluid pump.' Helps body retain water.",
    benefit: "Prevents dehydration headaches, maintains blood volume, and supports nerve impulses.",
    category: "Hydration"
  },
  {
    name: "Coconut Water Powder",
    dosage: "1000mg",
    source: "Freeze-dried young green coconuts from Southeast Asia (Philippines/Thailand).",
    activeCompounds: "Potassium, Magnesium, Cytokinins",
    function: "Nature’s electrolyte. Balances sodium to prevent bloating.",
    benefit: "Prevents muscle cramping and provides a smooth, sweet taste without added sugar.",
    category: "Hydration"
  },
  {
    name: "Potassium Citrate",
    dosage: "200mg",
    source: "Derived from fermentation of glucose (corn/beets).",
    function: "Highly bioavailable form of potassium.",
    benefit: "Critical for muscle contraction. Stops 'twitching' and cramping during hard workouts.",
    category: "Hydration"
  },
  {
    name: "Magnesium Malate",
    dosage: "75mg",
    source: "Magnesium bound to Malic Acid (found naturally in apples).",
    function: "The 'Energy' Magnesium. Supports ATP production in the Krebs Cycle.",
    benefit: "Supports cognitive function, reduces anxiety, and helps muscles relax without sedation.",
    category: "Cognitive"
  },
  {
    name: "L-Alanine & L-Glutamine",
    dosage: "200mg",
    source: "Fermented from plant-based sources (corn/beets).",
    function: "Activates the Sodium-Amino Acid Cotransport system in the gut.",
    benefit: "Pulls water into bloodstream instantly, mimicking sugar-based hydration speed without sugar.",
    category: "Fuel"
  },
  {
    name: "Cane Sugar",
    dosage: "11g (Performance Only)",
    source: "Non-GMO sugar cane.",
    function: "Rapid Glycogen replenishment.",
    benefit: "Fuel. Brain and muscles run on glucose during high-intensity anaerobic exercise.",
    category: "Fuel"
  },
  {
    name: "Allulose",
    dosage: "2g (Zero Only)",
    source: "Enzymatic conversion of corn (naturally found in figs).",
    function: "A 'rare sugar' that tastes like sugar but is not metabolized.",
    benefit: "Zero glycemic impact. Lowers blood sugar spikes and may boost GLP-1.",
    category: "Fuel"
  },
  {
    name: "Wellness Shield (Vitamins)",
    source: "Acerola Cherry (Vit C), Zinc Citrate, Lichen (Vit D3), Natural B-Complex.",
    function: "Immune and Metabolic Support.",
    benefit: "Antioxidant defense, testosterone support, mood regulation, and energy conversion.",
    category: "Wellness"
  },
  {
    name: "Flavor System",
    source: "Citric Acid (Citrus), Malic Acid (Apples), Monk Fruit (Luo Han Guo).",
    function: "Natural Flavoring and Sweetening.",
    benefit: "Provides the 'tart' kick and rounds out flavor profile without artificial sweeteners.",
    category: "Flavor"
  }
];

export const FINANCIALS_COGS: FinancialMetric[] = [
  { name: 'Ingredients', value: 0.18, fill: '#333' },
  { name: 'Packaging', value: 0.12, fill: '#555' },
  { name: 'Manufacturing', value: 0.08, fill: '#777' },
  { name: 'Shipping', value: 0.03, fill: '#999' },
];

export const BUDGET_ALLOCATION: FinancialMetric[] = [
  { name: 'Manufacturing', value: 35, fill: '#ccff00' },
  { name: 'Marketing', value: 25, fill: '#00ccff' },
  { name: 'Fulfillment', value: 20, fill: '#ff00cc' },
  { name: 'Operations', value: 12, fill: '#ffffff' },
  { name: 'Fees', value: 8, fill: '#666666' },
];

export const USE_OF_FUNDS_BREAKDOWN: FundAllocation[] = [
  {
    category: "Manufacturing & Inventory",
    percentage: 35,
    amount: "$52,500",
    color: "text-hydra-green",
    items: [
      { label: "Inventory Purchase ($32,000)", detail: "Raw materials (Lion's Mane, Cascara, Electrolytes)" },
      { label: "Production Fees ($12,000)", detail: "Co-packer mixing, filling, and sealing" },
      { label: "Packaging ($8,500)", detail: "Custom-printed film and retail pouches" }
    ]
  },
  {
    category: "Marketing & Growth",
    percentage: 25,
    amount: "$37,500",
    color: "text-hydra-blue",
    items: [
      { label: "Paid Ads ($25,000)", detail: "Facebook/TikTok ads for traffic" },
      { label: "Content Creation ($7,500)", detail: "Video and photo assets" },
      { label: "Influencer Seeding ($5,000)", detail: "Micro-influencer buzz" }
    ]
  },
  {
    category: "Fulfillment & Logistics",
    percentage: 20,
    amount: "$30,000",
    color: "text-hydra-pink",
    items: [
      { label: "Shipping ($22,000)", detail: "Postage for ~3,500 backers" },
      { label: "Warehousing ($5,000)", detail: "Storage and pick & pack labor" },
      { label: "Freight ($3,000)", detail: "Transport from manufacturer" }
    ]
  },
  {
    category: "Operations & Legal",
    percentage: 12,
    amount: "$18,000",
    color: "text-white",
    items: [
      { label: "Legal ($4,000)", detail: "Trademarking and contracts" },
      { label: "R&D ($6,500)", detail: "Finalizing formula with flavor house" },
      { label: "Software/Ins ($5,000)", detail: "Shopify, insurance, tools" },
      { label: "Buffer ($2,500)", detail: "Emergency fund" }
    ]
  },
  {
    category: "Platform Fees",
    percentage: 8,
    amount: "$12,000",
    color: "text-gray-400",
    items: [
      { label: "Kickstarter Fee", detail: "$7,500 (5% of total raised)" },
      { label: "Processing", detail: "$4,500 (Stripe fees)" }
    ]
  }
];

export const FORMULA_EVOLUTION = [
  {
    version: "V1.0",
    name: "The MVP",
    status: "Deprecated",
    ingredients: ["Cascara Fruit", "Stevia", "Table Salt"],
    pros: "Clean caffeine source.",
    cons: "Stevia aftertaste. Table salt insufficient for heavy hydration. No cognitive kick.",
    color: "border-gray-600 bg-zinc-900"
  },
  {
    version: "V2.0",
    name: "The Discovery",
    status: "Transitional",
    ingredients: ["Cascara Fruit", "Lion's Mane (Added)", "Pink Himalayan Salt (Upgrade)"],
    pros: "Lion's Mane provided the 'Focus' missing in V1. Pink salt added trace minerals.",
    cons: "Still lacked rapid hydration mechanics for Zero Sugar line.",
    color: "border-hydra-blue bg-hydra-blue/5"
  },
  {
    version: "V3.0",
    name: "The Final Formula",
    status: "Market Ready",
    ingredients: ["Cascara + Lion's Mane", "Allulose (Zero Line)", "L-Alanine + L-Glutamine", "Magnesium Malate"],
    pros: "Allulose protects metabolic health. Amino acids drive rapid hydration. Magnesium prevents cramping.",
    cons: "None. Validated by D1 Athletes.",
    color: "border-hydra-green bg-hydra-green/10"
  }
];

export const PROTOCOL_SECTIONS: SectionData[] = [
  {
    id: SectionId.FOUNDATION,
    title: "The Foundation",
    description: "Weeks 1-4: Human-Centered Design & Ecosystem Mapping",
    weeks: [
      {
        week: 1,
        title: "Intro to HCD",
        activity: "Observational Journaling",
        output: "Identified the 'Crash Cycle' of energy drinks and wastefulness of coffee industry (discarding Cascara).",
        tags: ["Double-Diamond", "Discovery"]
      },
      {
        week: 2,
        title: "Purpose Definition",
        activity: "Defining Core Need",
        output: "Problem Statement: Modern performers forced to choose between physical hydration (Gatorade) and mental energy (Red Bull). Need 'Flow State' solution.",
        tags: ["Problem Statement"]
      },
      {
        week: 3,
        title: "Empathy & Research",
        activity: "User Personas",
        output: "Developed 3 Key Personas: D1 Athlete, Diabetic Professional, Soccer Parent.",
        tags: ["User Research", "Personas"]
      },
      {
        week: 4,
        title: "Stakeholder Mapping",
        activity: "Ecosystem Map",
        output: "Mapped entire value chain from Sustainable Farmers (Cascara) to End Consumer via NIL Athletes.",
        tags: ["Supply Chain", "D3 Visualization"]
      }
    ]
  },
  {
    id: SectionId.CONCEPT,
    title: "The Concept",
    description: "Weeks 5-8: Ideation, Feasibility & Economics",
    weeks: [
      {
        week: 5,
        title: "Opportunity Framing",
        activity: "How Might We?",
        output: "HMW create a beverage that hydrates like an IV but sharpens like a nootropic without artificial ingredients?",
        tags: ["Synthesis"]
      },
      {
        week: 6,
        title: "Ideation Techniques",
        activity: "Brainstorming",
        output: "Selected Powdered Stick Packs. Discarded Gummies/Chews. Benefits: Portability, Potency, Eco-friendly.",
        tags: ["Brainstorming"]
      },
      {
        week: 7,
        title: "Concept Development",
        activity: "Feasibility/Viability",
        output: "Partnered with US Co-packer (50k unit cap). Unit Economics: $0.41 COGS vs $1.56 MSRP = 73% Margin.",
        tags: ["Financials", "Unit Economics"]
      },
      {
        week: 8,
        title: "Narrowing & Brief",
        activity: "Project Brief",
        output: "Defined 3 distinct product lines: Performance (Black), Zero (White), Kids (Pink/Yellow) + Variety Packs.",
        tags: ["SKU Definition", "Product Design"]
      }
    ]
  },
  {
    id: SectionId.PROTOTYPE,
    title: "The Prototype",
    description: "Weeks 9-11: Testing, Feedback & Iteration",
    weeks: [
      {
        week: 9,
        title: "Prototyping",
        activity: "Looks-Like / Works-Like",
        output: "Used 'Prop' packaging for video assets. Simulated solubility with Crystal Light for 'pour shots'.",
        tags: ["MVP", "Mockups"]
      },
      {
        week: 10,
        title: "User Testing",
        activity: "Beta Testing",
        output: "20 D1 Athletes tested. 'Energy feels cleaner than coffee.' Issue: Zero sugar version lacked 'hydration feel'.",
        tags: ["Feedback Loop"]
      },
      {
        week: 11,
        title: "Iteration (The Pivot)",
        activity: "Formula Refinement",
        output: "Added L-Alanine & L-Glutamine (200mg) to Zero formula to restore rapid hydration mechanism without sugar.",
        tags: ["Refinement", "Chemistry"]
      }
    ]
  },
  {
    id: SectionId.LAUNCH,
    title: "Impact & Launch",
    description: "Weeks 12-16: Sustainability, GTM & Conclusion",
    weeks: [
      {
        week: 12,
        title: "Impact Metrics",
        activity: "Social/Env Goals",
        output: "Upcycling Cascara (Env). Safe Focus for Kids (Social). Metabolic Health support (Health).",
        tags: ["ESG", "Impact"]
      },
      {
        week: 13,
        title: "Lifecycle Stewardship",
        activity: "Sustainability Plan",
        output: "Roadmap to compostable films (Year 3). Digital printing for small batches to reduce waste.",
        tags: ["Sustainability"]
      },
      {
        week: 14,
        title: "Market Fit",
        activity: "Value Proposition",
        output: "'We aren't selling a drink. We are selling Neuro-Resilience.'",
        tags: ["Storytelling"]
      },
      {
        week: 15,
        title: "Implementation",
        activity: "GTM Strategy",
        output: "Kickstarter -> Shopify DTC -> Retail (Gyms/Amazon). Detailed budget breakdown.",
        tags: ["GTM", "Budget"]
      },
      {
        week: 16,
        title: "Final Protocol",
        activity: "Conclusion",
        output: "HydraEdge is market-ready, scientifically validated, and financially viable. Launch Feb 2026.",
        tags: ["Summary"]
      }
    ]
  }
];

export const WHY_IT_MATTERS: Record<string, string> = {
  purpose: "If we don't understand the physiological pain of our users, we are just selling flavored water.",
  personas: "We aren't designing for demographics; we are designing for mindsets. Each persona represents a specific biological need.",
  stakeholders: "Sustainability isn't a marketing gimmick; it's a supply chain requirement. Upcycling Cascara creates value from waste.",
  opportunity: "The gap in the market is huge: 'Functional Hydration' is growing, but no one owns 'Cognitive Hydration' yet.",
  concept: "This isn't just a drink; it's a formula. Every ingredient has a job. No fillers, no dyes, no BS.",
  prototype: "Ideas are cheap. Execution is everything. We pivoted based on data, not ego.",
  impact: "Profit is the result, not the goal. Our goal is human performance and environmental stewardship.",
  survey: "We aren't just selling to the gym. We are selling to the job site. The 'Industrial Athlete' is our hidden giant.",
  sustainability: "We are responsible for the end-of-life of our packaging. We plan for the future now.",
  market: "A great product without a strategy is a hobby. We have a clear path to $1M in revenue."
};
