import bannerImg from '../assets/images/slide_glide_banner_1789753370227.jpg';
import heroImg from '../assets/images/indian_kids_slides_1789843237069.jpg';
import trampolineImg from '../assets/images/indian_kids_trampoline_1789843250432.jpg';
import pretendImg from '../assets/images/indian_kids_pretend_play_1789843293366.jpg';
import partyImg from '../assets/images/indian_kids_birthday_deepika_1789843955986.jpg';
import ballPitImg from '../assets/images/indian_kids_ball_pit_1789843265481.jpg';
import logoImg from '../assets/images/logo.png';
import whyChooseUsImg from '../assets/images/why_choose_us_1790530203822.jpg';

export const CONTACT_INFO = {
  primaryPhone: '+91 97397 80837',
  primaryPhoneRaw: '+919739780837',
  secondaryPhone: '+91 99459 58367',
  secondaryPhoneRaw: '+919945958367',
  phone1: '+91 97397 80837',
  phone1Raw: '+919739780837',
  phone2: '+91 99459 58367',
  phone2Raw: '+919945958367',
  phones: [
    { display: '+91 97397 80837', raw: '+919739780837', isPrimary: true },
    { display: '+91 99459 58367', raw: '+919945958367', isPrimary: false },
  ],
  phone: '+91 97397 80837, +91 99459 58367',
  phoneRaw: '+919739780837',
  email: 'slide.glide.0926@gmail.com',
  address: '3rd floor, No 125, S N Arcade, above Bakasura Bandi, Annapoorneshwari Nagar, Nagarabhavi, Bangalore, Karnataka 560091',
  shortAddress: 'No 125, S N Arcade, above Bakasura Bandi, Annapoorneshwari Nagar, Nagarabhavi',
  landmark: 'Above Bakasura Bandi, S N Arcade (3rd Floor)',
  pinCode: '560091',
  whatsappUrl: 'https://wa.me/919538678201?text=Hi%20Slide%20%26%20Glide!%20I%20would%20like%20to%20inquire%20about%20entry%20and%20visiting%20timings.',
  whatsappBirthdayUrl: 'https://wa.me/919538678201?text=Hi%20Slide%20%26%20Glide!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20kids%20birthday%20party%20at%20your%20Nagarabhavi%20arena.',
  instagramUrl: 'https://www.instagram.com/slideandglideplayzone/',
  instagramHandle: '@slideandglideplayzone',
  googleListingUrl: 'https://maps.app.goo.gl/zLi3pC3UZUMYc77M7?g_st=aw',
  googleReviewUrl: 'https://maps.app.goo.gl/zLi3pC3UZUMYc77M7?g_st=aw',
};

export const IMAGES = {
  logo: logoImg,
  banner: bannerImg,
  whyChooseUs: whyChooseUsImg,
  hero: heroImg,
  trampoline: trampolineImg,
  pretend: pretendImg,
  party: partyImg,
  ballPit: ballPitImg,
};

// Real play arena photos for the carousel (no animated slides)
export const PHOTOS = [
  {
    id: 'slides',
    title: 'Multi-Level Slides & Soft Play',
    category: 'Slides & Climbers',
    src: heroImg,
    description: 'Safe, padded slides and crawl tunnels engineered for dynamic motor coordination.',
  },
  {
    id: 'trampoline',
    title: 'Trampoline Jump Zone',
    category: 'Trampolines',
    src: trampolineImg,
    description: 'High-energy padded trampoline beds with safety netting for boundless jumping fun.',
  },
  {
    id: 'ball-pit',
    title: 'Sensory Ball Pit & Obstacles',
    category: 'Sensory Play',
    src: ballPitImg,
    description: 'Thousands of sanitized colorful balls fostering tactile discovery and motor skills.',
  },
  {
    id: 'pretend-play',
    title: 'Pretend Play Town & Mini Market',
    category: 'Creative Play',
    src: pretendImg,
    description: 'Role-play kitchen, grocery stands, and dress-up stations sparking social imagination.',
  },
  {
    id: 'birthday-parties',
    title: 'Kids Birthday Party Venue in Nagarabhavi',
    category: 'Birthday Parties',
    src: partyImg,
    description: 'Joyful birthday celebrations with cake cutting, music, active play, and stress-free hosting.',
  },
];

// Official 4 Developmental Pillars from Slide & Glide poster
export const DEVELOPMENT_PILLARS = [
  {
    id: 'physical',
    title: 'Physical Development',
    subtitle: 'Move • Climb • Jump • Balance',
    color: 'blue',
    iconColor: 'bg-blue-600',
    lightBg: 'bg-blue-50/70',
    borderColor: 'border-blue-200',
    accentText: 'text-blue-700',
    badgeBg: 'bg-blue-100',
    points: [
      'Builds strength and muscle coordination',
      'Improves balance and body control',
      'Encourages gross motor skills',
      'Encourages active movement and agility',
      'Improves hand-eye and foot-eye coordination',
      'Encourages an active, healthy lifestyle',
    ],
  },
  {
    id: 'cognitive',
    title: 'Cognitive Development',
    subtitle: 'Explore • Imagine • Discover • Solve',
    color: 'purple',
    iconColor: 'bg-purple-600',
    lightBg: 'bg-purple-50/70',
    borderColor: 'border-purple-200',
    accentText: 'text-purple-700',
    badgeBg: 'bg-purple-100',
    points: [
      'Encourages curiosity and exploration',
      'Develops problem-solving skills',
      'Encourages creativity and imagination',
      'Builds memory and attention',
      'Helps children make decisions independently',
      'Supports learning through hands-on experiences',
    ],
  },
  {
    id: 'social',
    title: 'Social Development',
    subtitle: 'Share • Communicate • Cooperate • Connect',
    color: 'pink',
    iconColor: 'bg-pink-600',
    lightBg: 'bg-pink-50/70',
    borderColor: 'border-pink-200',
    accentText: 'text-pink-700',
    badgeBg: 'bg-pink-100',
    points: [
      'Helps children make friends',
      'Encourages sharing and cooperation',
      'Develops communication skills',
      'Teaches taking turns',
      'Builds empathy and consideration for others',
      'Encourages positive interaction with peers',
    ],
  },
  {
    id: 'emotional',
    title: 'Emotional Development',
    subtitle: 'Build Confidence • Express • Enjoy • Grow',
    color: 'emerald',
    iconColor: 'bg-emerald-600',
    lightBg: 'bg-emerald-50/70',
    borderColor: 'border-emerald-200',
    accentText: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    points: [
      'Creates opportunities for joy and positive emotions',
      'Builds confidence and independence',
      'Develops resilience when facing challenges',
      'Helps children express and manage emotions',
      'Encourages a sense of achievement',
      'Supports self-regulation',
    ],
  },
];

// Hygiene & Cleanliness Standards
export const HYGIENE_STANDARDS = [
  {
    icon: 'Sparkles',
    title: 'Cleaned Every Day & Sanitized Daily',
    desc: 'The entire play arena is cleaned every day and deeply disinfected using child-safe, non-toxic hospital-grade sanitizers before and after sessions.',
  },
  {
    icon: 'Video',
    title: '24/7 CCTV Monitored Arena',
    desc: 'Continuous high-definition CCTV camera monitoring across all play zones, entrances, and seating areas for absolute safety and parent peace of mind.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Sanitized Sensory Ball Pit',
    desc: 'Our ball pits undergo regular cleaning and sanitizing routines to keep tens of thousands of balls germ-free and sparkling.',
  },
  {
    icon: 'Footprints',
    title: 'Socks Mandatory Hygiene Policy',
    desc: 'Socks mandatory for all children and accompanying guardians to keep play equipment spotless and hygienic.',
  },
  {
    icon: 'Wind',
    title: 'Purified Air & Climate Control',
    desc: 'Well-ventilated play zone with continuous air circulation and temperature regulation for comfortable, fresh indoor breathing.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Contactless Hand Hygiene Stations',
    desc: 'Touchless hand sanitizers installed at the reception check-in, arena gates, and play lounge areas.',
  },
];

// Target Services & Experiences for SEO & Parents
export const SERVICES_LIST = [
  {
    id: 'soft-play',
    title: 'Soft Play Area & Adventure Zone',
    tag: 'Ages 1–10 Years • Active Physical Play',
    desc: 'Our expansive, multi-tiered soft play arena is built for children aged 1–10 years. On weekdays, kids love experiencing our joyful slides and swings along with the padded obstacle area, climbing bridges, and sensory crawl tunnels for coordination and active play.',
    icon: 'Castle',
    badge: 'Popular',
  },
  {
    id: 'toddler-play',
    title: 'Dedicated Soft Play Area for Toddlers',
    tag: 'Dedicated for Ages 1–3 Years',
    desc: 'A specially demarcated, gently cushioned toddler soft play area curated for 1–3 year-olds. Featuring ultra-soft foam blocks, low-height sensory bridges, mini ball pools, and gentle tactile exploration away from high-energy older kids.',
    icon: 'Baby',
    badge: 'Safe & Gentle (1–3 Yrs)',
  },
  {
    id: 'trampoline-play',
    title: 'Trampoline Jump & Sensory Ball Pit',
    tag: 'Ages 3–10 Years • High-Bounce Fun',
    desc: 'Gravity-defying fun in our netted safety trampoline arena paired with a massive, sanitized sensory ball pit. Perfect for active gross motor exercise, balance, and pure childhood joy.',
    icon: 'Sparkles',
    badge: 'High Energy',
  },
  {
    id: 'weekday-activities',
    title: 'Weekday & Weekend Play in Nagarabhavi',
    tag: 'Open Daily • 11 AM - 9 PM',
    desc: 'Looking for after-school or weekend fun in Nagarabhavi? On weekdays, enjoy unhurried play on our slides and swings along with the obstacle area, role-play town, and jump zones starting from 249 onwards.',
    icon: 'Clock',
    badge: 'From ₹249 onwards',
  },
];

// Play Session Pricing for Walk-ins & Families (Starts from 249 onwards)
export const PLAY_PRICING_PLANS = [
  {
    id: 'session-standard',
    title: 'Standard Play Session',
    duration: 'Full Arena Access',
    price: '₹249',
    rateNote: 'Starts from 249 onwards',
    tag: 'Starts from 249 onwards',
    suitableFor: 'Entire Arena: 1–10 Years (Dedicated 1–3 Toddler Zone)',
    features: [
      'Full access to slides, swings and multi-level obstacle area',
      'Dedicated safe soft play foam zone for toddlers (ages 1–3)',
      'Trampoline jump zone & sanitized sensory ball pit',
      '1 Accompanying parent/guardian entry included for free',
      'Free high-speed Wi-Fi & parent lounge with work/rest seating',
    ],
    highlight: 'Starts from 249 onwards • Great for after-school weekday fun',
    badge: 'Starting Rate',
  },
  {
    id: 'session-toddler',
    title: 'Dedicated Toddler Play Session',
    duration: 'Ages 1–3 Years Soft Play',
    price: '₹249',
    rateNote: 'Starts from 249 onwards',
    tag: 'Starts from 249 onwards',
    suitableFor: 'Dedicated 1–3 Years Toddler Zone',
    features: [
      'Exclusive soft foam play area curated specifically for toddlers',
      'Gentle mini foam slides, tactile sensory wall toys & soft blocks',
      'Low-height safe sensory ball pond for early steps',
      '1 Accompanying parent/guardian entry included for free',
      'Protected zone safely away from older children running',
    ],
    highlight: 'Starts from 249 onwards • Safe sensory development for early learners',
    badge: 'Toddler Zone (1–3 yrs)',
  },
  {
    id: 'session-adventure',
    title: 'All-Zone Play Session',
    duration: 'Slides, Swings & Obstacles',
    price: '₹249',
    rateNote: 'Starts from 249 onwards',
    tag: 'Starts from 249 onwards',
    suitableFor: 'Entire Arena: 1–10 Years (Dedicated 1–3 Toddler Zone)',
    features: [
      'Full access to slides, swings, and multi-tier obstacle courses',
      'Role-play town, pretend grocery supermarket & sensory games',
      'Gravity-defying trampoline jumps and dive-in ball pit',
      '1 Accompanying parent/guardian entry included for free',
      'Socks mandatory for clean, hygienic play environment',
    ],
    highlight: 'Starts from 249 onwards • 100% active screen-free childhood fun',
    badge: 'All-Zone Play',
  },
];

// Birthday Party Packages for Kids & Celebrations in Nagarabhavi
export const BIRTHDAY_PACKAGES = [
  {
    id: 'starter-party',
    name: 'Joyful Play Party',
    tag: 'Up to 12 Kids • Most Popular',
    duration: '90 Mins Play + 30 Mins Celebration',
    price: 'Custom Enquiries',
    features: [
      'Access to multi-level soft play, slides, swings & sensory ball pit',
      'Dedicated safe soft play area for little guests (ages 1–3)',
      'Dedicated celebration space for cake cutting',
      'Lively party music & festive balloon setup',
      'Complimentary pair of socks for the birthday child',
      'Dedicated arena team member assisting throughout the event',
    ],
    highlight: 'Ideal for intimate family birthdays, toddler playgroups & first birthdays',
    badge: 'Popular',
  },
  {
    id: 'grand-party',
    name: 'Grand Adventure Party',
    tag: '12–25 Kids • Extended Celebration',
    duration: '2 Hours Full Arena Play + 45 Mins Celebration',
    price: 'Custom Enquiries',
    features: [
      'Full access to all zones: Toddler Zone (1–3 yrs), Trampolines, Slides & Obstacles',
      'Reserved party seating with decorated cake table & photo corner',
      'Dedicated party coordinator & fun interactive games assistance',
      'Designated food & refreshment serving zone',
      'Complimentary pair of socks for the birthday child & special guest rate',
      'Digital invitation templates to share with friends & family',
    ],
    highlight: 'Hassle-free, high-energy party experience loved by parents and kids',
    badge: 'Best Value',
  },
  {
    id: 'exclusive-party',
    name: 'Exclusive Arena Hire',
    tag: 'Private Venue Hire',
    duration: 'Custom Duration • Complete Privacy',
    price: 'Custom Enquiries',
    features: [
      '100% private, exclusive access to the complete indoor arena',
      'Entire facility reserved only for your invited guests and children',
      'Customized music playlist & personalized celebration timeline',
      'Full team of trained safety marshals & dedicated hospitality staff',
      'Ideal for milestone birthdays, school playgroups & large celebrations',
    ],
    highlight: 'VIP private experience with maximum freedom, privacy, and fun',
    badge: 'VIP Exclusive',
  },
];

export const BIRTHDAY_PERKS = [
  { title: '100% Screen-Free Fun', desc: 'Active physical play on safe slides, trampolines & ball pits' },
  { title: 'Hygienic & Sanitized', desc: 'Air-conditioned, sparkling clean indoor arena sanitized daily' },
  { title: 'Zero Stress for Parents', desc: 'Our team assists with setup and coordination so you relax' },
  { title: 'Convenient Nagarabhavi Spot', desc: 'S N Arcade, above Bakasura Bandi with plenty of street parking' },
];

// Frequently Asked Questions including user specific inquiries & high-intent SEO queries
export const SEO_FAQ_ITEMS = [
  {
    question: 'Where is Slide & Glide located?',
    answer: 'Slide & Glide is located in Nagarabhavi, Annapoorneshwari Nagar, Bangalore 560091. Our exact address is 3rd floor, No 125, S N Arcade, above Bakasura Bandi, Annapoorneshwari Nagar, Nagarabhavi, Bangalore, Karnataka 560091.',
  },
  {
    question: 'What ages is the play area suitable for?',
    answer: 'Our entire play arena is designed for children aged 1–10 years, with a dedicated toddler soft play foam area curated specifically for ages 1–3 years.',
  },
  {
    question: 'What is the entry price for play sessions?',
    answer: 'Play sessions at Slide & Glide start from 249 onwards for walk-in entries. This includes full arena access for the child, free entry for 1 accompanying adult guardian, and access to our parents lounge with free Wi-Fi.',
  },
  {
    question: 'Can I book a birthday party?',
    answer: 'Yes! We offer Joyful Play, Grand Adventure, and Exclusive Arena birthday packages. You can submit our online party enquiry form, call our primary contact at +91 97397 80837 (or +91 99459 58367), or message us on WhatsApp.',
  },
  {
    question: 'Are socks required?',
    answer: 'Yes, socks are mandatory for all children and accompanying adults for hygiene and safety. You may bring your own or purchase a pair at our reception counter.',
  },
  {
    question: 'Is there parking?',
    answer: 'Yes, there is ample free street parking in the quiet avenues around S N Arcade, along with easy lift and stroller access.',
  },
  {
    question: 'How do I get directions or make a booking?',
    answer: 'Use the Google Maps link in our location section, or call our primary line directly at +91 97397 80837 (secondary: +91 99459 58367) or chat with us on WhatsApp.',
  },
  {
    question: 'Is the play area safe and hygienic? Is it CCTV monitored and cleaned every day?',
    answer: 'Yes, absolutely! Slide & Glide is cleaned every single day and sanitized using child-safe hospital-grade disinfectants. Furthermore, our entire arena is 24/7 CCTV monitored and supervised by trained attendants to ensure complete safety and reassurance for parents.',
  },
  {
    question: 'What are your operating hours and timings in Nagarabhavi?',
    answer: 'Slide & Glide is open 7 days a week (Monday through Sunday) from 11:00 AM to 9:00 PM. Walk-ins are always welcome!',
  },
  {
    question: 'What play features are available on weekdays?',
    answer: 'On weekdays, kids enjoy unhurried access to our colorful slides and swings along with the multi-level obstacle area, role-play town, and jump zones starting from 249 onwards.',
  },
  {
    question: 'What makes Slide & Glide great for weekend activities for kids in Bangalore?',
    answer: 'Slide & Glide offers 100% active, screen-free physical fun. Kids run, jump on trampolines, navigate obstacle courses, and socialize in a hygienic, climate-controlled arena.',
  },
];
