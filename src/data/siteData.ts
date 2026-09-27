import bannerImg from '../assets/images/slide_glide_banner_1789753370227.jpg';
import heroImg from '../assets/images/indian_kids_slides_1789843237069.jpg';
import trampolineImg from '../assets/images/indian_kids_trampoline_1789843250432.jpg';
import pretendImg from '../assets/images/indian_kids_pretend_play_1789843293366.jpg';
import partyImg from '../assets/images/indian_kids_birthday_deepika_1789843955986.jpg';
import ballPitImg from '../assets/images/indian_kids_ball_pit_1789843265481.jpg';
import logoImg from '../assets/images/slide_glide_logo_1789843201332.jpg';
import whyChooseUsImg from '../assets/images/why_choose_us_1790530203822.jpg';

export const CONTACT_INFO = {
  phone1: '+91 97397 80837',
  phone1Raw: '+919739780837',
  phone2: '+91 99459 58367',
  phone2Raw: '+919945958367',
  phones: [
    { display: '+91 97397 80837', raw: '+919739780837' },
    { display: '+91 99459 58367', raw: '+919945958367' },
  ],
  phone: '+91 97397 80837, +91 99459 58367',
  phoneRaw: '+919739780837',
  email: 'slide.glide.0926@gmail.com',
  // WhatsApp remains unchanged as requested
  whatsappUrl: 'https://wa.me/919538678201?text=Hi%20Slide%20%26%20Glide!%20I%20would%20like%20to%20inquire%20about%20visiting%20and%20birthday%20parties.',
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
    id: 'birthday-party',
    title: 'Birthday Celebrations & Party Zone',
    category: 'Birthday Parties',
    src: partyImg,
    description: 'Private celebration suites with custom themes, cake cutting, and dedicated party hosts.',
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
    title: 'Daily Multi-Cycle Sanitization',
    desc: 'All slides, climbing frames, foam pads, and surfaces are disinfected daily with child-safe, non-toxic hospital-grade sanitizers.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Sanitized Sensory Ball Pit',
    desc: 'Our ball pits undergo regular cleaning and sanitizing routines to keep tens of thousands of balls germ-free and sparkling.',
  },
  {
    icon: 'Footprints',
    title: '100% Grip Socks Hygiene Policy',
    desc: 'Mandatory anti-slip grip socks for children and clean socks for accompanying guardians to keep play equipment spotless.',
  },
  {
    icon: 'Wind',
    title: 'Purified Air & Climate Control',
    desc: 'Well-ventilated play zone with continuous air circulation and temperature regulation for comfortable, fresh indoor breathing.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Contactless Hand Hygiene Stations',
    desc: 'Touchless hand sanitizers installed at the reception check-in, arena gates, and party lounge areas.',
  },
  {
    icon: 'CheckCircle2',
    title: 'Strict Health & Sick Child Policy',
    desc: 'Children showing signs of fever or illness are gently asked to reschedule to safeguard the wellbeing of every visitor.',
  },
];
