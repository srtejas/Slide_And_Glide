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
  address: '3rd floor, No 125, S N Arcade, above Bakasura Bandi, Annapoorneshwari Nagar, Nagarbhavi, Bangalore, Karnataka 560091',
  shortAddress: 'No 125, S N Arcade, above Bakasura Bandi, Annapoorneshwari Nagar, Nagarbhavi',
  landmark: 'Above Bakasura Bandi, S N Arcade (3rd Floor)',
  pinCode: '560091',
  whatsappUrl: 'https://wa.me/919538678201?text=Hi%20Slide%20%26%20Glide!%20I%20would%20like%20to%20inquire%20about%20entry%20and%20visiting%20timings.',
  whatsappBirthdayUrl: 'https://wa.me/919538678201?text=Hi%20Slide%20%26%20Glide!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20kids%20birthday%20party%20at%20your%20Nagarabhavi%20arena.',
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
    desc: 'Touchless hand sanitizers installed at the reception check-in, arena gates, and play lounge areas.',
  },
  {
    icon: 'CheckCircle2',
    title: 'Strict Health & Sick Child Policy',
    desc: 'Children showing signs of fever or illness are gently asked to reschedule to safeguard the wellbeing of every visitor.',
  },
];

// Target Services & Experiences for SEO & Parents
export const SERVICES_LIST = [
  {
    id: 'soft-play',
    title: 'Soft Play Area for Kids',
    tag: 'All Ages • Active Play',
    desc: 'A premium, multi-tiered soft play area for kids featuring padded obstacle courses, wave slides, climbing bridges, and sensory tunnels designed for healthy gross motor development.',
    icon: 'Castle',
    badge: 'Popular',
  },
  {
    id: 'toddler-play',
    title: 'Toddler Play Area in Nagarabhavi',
    tag: 'Ages 6 Months – 3 Years',
    desc: 'A dedicated, gently cushioned toddler play area in Nagarabhavi built specifically for babies and toddlers with soft foam blocks, mini ball pools, and sensory tactile toys.',
    icon: 'Baby',
    badge: 'Safe & Gentle',
  },
  {
    id: 'trampoline-play',
    title: 'Trampoline Jump & Sensory Ball Pit',
    tag: 'Boundless Energy • Active Fun',
    desc: 'Experience gravity-defying fun in our netted trampoline arena and dive into colorful, sanitized sensory ball pits engineered for safe balance and laughter.',
    icon: 'Sparkles',
    badge: 'High Energy',
  },
  {
    id: 'weekend-activities',
    title: 'Weekend Activities for Kids in Bangalore',
    tag: 'Open Daily • 11 AM - 9 PM',
    desc: 'Searching for exciting weekend activities for kids in Bangalore? Enjoy unlimited jumping, pretend grocery towns, trampoline games, and screen-free family adventures right here in Nagarabhavi.',
    icon: 'Clock',
    badge: 'Screen-Free',
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
      'Access to multi-level soft play, slides & sensory ball pit',
      'Dedicated celebration space for cake cutting',
      'Lively party music & festive balloon setup',
      'Complimentary pair of grip socks for the birthday child',
      'Dedicated arena team member assisting throughout the event',
    ],
    highlight: 'Ideal for intimate family birthdays, toddler playgroups & first birthdays',
    badge: 'Popular',
  },
  {
    id: 'grand-party',
    name: 'Grand Adventure Party',
    tag: '12–25 Kids • Premium Fun',
    duration: '2 Hours Full Arena Play + 45 Mins Celebration',
    price: 'Custom Enquiries',
    features: [
      'Full access to all zones: Toddler Zone, Trampolines & Soft Play',
      'Reserved party seating with decorated cake table & photo corner',
      'Dedicated party coordinator & fun interactive games assistance',
      'Designated food & refreshment serving zone',
      'Complimentary grip socks for the birthday child & special guest rate',
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
  { title: 'Convenient Nagarbhavi Spot', desc: 'S N Arcade, above Bakasura Bandi with plenty of street parking' },
];

// Frequently Asked Questions including user specific inquiries & high-intent SEO queries
export const SEO_FAQ_ITEMS = [
  {
    question: 'Where is Slide & Glide located?',
    answer: 'Slide & Glide is located in Nagarbhavi, Annapoorneshwari Nagar, Bangalore 560091. Our exact address is 3rd floor, No 125, S N Arcade, above Bakasura Bandi, Annapoorneshwari Nagar, Nagarbhavi, Bangalore, Karnataka 560091.',
  },
  {
    question: 'What ages is the play area suitable for?',
    answer: 'Slide & Glide is suitable for kids aged 1–10 years. We have dedicated safe zones for toddlers (1–3 years) as well as multi-level climbing, jumping trampolines, and slides for kids up to 10 years.',
  },
  {
    question: 'Can I book a birthday party?',
    answer: 'Yes, you can call our number (+91 97397 80837 / +91 99459 58367) or enquire directly at the reception for bookings and celebrations.',
  },
  {
    question: 'Are socks required?',
    answer: 'Yes, socks are required for all children and accompanying adults for safety and cleanliness. You can bring them from home or buy a pair right here at the reception.',
  },
  {
    question: 'Is there parking?',
    answer: 'Yes, there is plenty of free parking in the streets around S N Arcade.',
  },
  {
    question: 'How do I get directions or make a booking?',
    answer: 'Use the Google Maps available in the location section below to navigate directly, or call/WhatsApp us directly at +91 97397 80837 or +91 99459 58367.',
  },
  {
    question: 'What are your operating hours and timings in Nagarabhavi?',
    answer: 'Slide & Glide is open 7 days a week (Monday through Sunday) from 11:00 AM to 9:00 PM. Walk-ins are always welcome!',
  },
  {
    question: 'What kids activities in Nagarabhavi are available at your indoor playground?',
    answer: 'At Slide & Glide, kids enjoy multi-tiered soft play structures, giant ball pits, trampoline jump zones, and pretend play towns in a safe, fully sanitized indoor setting.',
  },
  {
    question: 'What makes Slide & Glide great for weekend activities for kids in Bangalore?',
    answer: 'Slide & Glide offers 100% active, screen-free physical fun. Kids run, jump on trampolines, navigate obstacle courses, and socialize in a hygienic, climate-controlled arena.',
  },
];
