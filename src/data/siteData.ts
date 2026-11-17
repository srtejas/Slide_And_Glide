import bannerImg from '../assets/images/Actual Images/Activities with time and location.png';
import heroImg from '../assets/images/Actual Images/Activities with time and location.png';
import trampolineImg from '../assets/images/Actual Images/Trampoline.jpg';
import pretendImg from '../assets/images/Actual Images/Merrygoround.jpg';
import partyImg from '../assets/images/Actual Images/Party area.jpg';
import ballPitImg from '../assets/images/Actual Images/Ball pit.jpg';
import logoImg from '../assets/images/logo.png';
import whyChooseUsImg from '../assets/images/Actual Images/Reception.jpg';
import slideImg from '../assets/images/Actual Images/Slides.jpg';
import fullAreaImg from '../assets/images/Actual Images/Play area.jpg';
import swingImg from '../assets/images/Actual Images/Swings.jpg';
import boardStickerImg from '../assets/images/Actual Images/Magnetic Sticker and Lego Board.jpg';
import wallClimbingImg from '../assets/images/Actual Images/Wall climbing.jpg';
import birthdayImg from '../assets/images/Actual Images/Birthday.jpg';

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
  youtubeUrl: 'https://youtube.com/@slide_glide_play_party_area?si=_kCAlSf6KQu-eDUN',
  youtubeHandle: '@slide_glide_play_party_area',
  justdialUrl: 'https://jsdl.in/DT-15NQ9K8DCSR',
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
  slide: slideImg,
  fullArea: fullAreaImg,
  swing: swingImg,
  boardSticker: boardStickerImg,
  wallClimbing: wallClimbingImg,
  birthday: birthdayImg,
};

// Real play arena photos for the carousel (no animated slides)
export const PHOTOS = [
  {
    id: 'slides',
    title: 'Multi-Level Slides & Soft Play',
    category: 'Slides & Climbers',
    src: slideImg,
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
    id: 'merry-go-round',
    title: 'Merry-Go-Around & Pretend Town',
    category: 'Creative Play',
    src: pretendImg,
    description: 'Interactive merry-go-round, role-play market, and pretend stations sparking social imagination.',
  },
  {
    id: 'wall-climbing',
    title: 'Soft Wall Climbing Challenge',
    category: 'Climbing & Agility',
    src: wallClimbingImg,
    description: 'Padded wall climbing holds designed to build grip strength, balance, and adventurous confidence.',
  },
  {
    id: 'full-arena',
    title: 'Full Indoor Play Arena',
    category: 'Play Zone',
    src: fullAreaImg,
    description: 'Spacious, clean, air-conditioned play zone with double-layered safety padding.',
  },
  {
    id: 'swing',
    title: 'Toddler Soft Swings & Hammocks',
    category: 'Swings',
    src: swingImg,
    description: 'Padded infant and toddler swings for gentle vestibular stimulation in complete comfort.',
  },
  {
    id: 'board-magnetic',
    title: 'Magnetic Sticker & Lego Board',
    category: 'Cognitive Play',
    src: boardStickerImg,
    description: 'Tactile magnetic puzzle board and lego wall developing fine motor skills and creativity.',
  },
  {
    id: 'party-area',
    title: 'Dedicated Birthday Party Area',
    category: 'Birthday Parties',
    src: partyImg,
    description: 'Vibrant celebration space with decorated cake tables, party music, and cheerful seating.',
  },
  {
    id: 'birthday-celebrations',
    title: 'Kids Birthday Party Venue in Nagarabhavi',
    category: 'Celebrations',
    src: birthdayImg,
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
    desc: 'The entire play arena is cleaned every day and deeply disinfected using child-safe, non-toxic sanitizers before and after sessions.',
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
    tag: 'Ages 1–10 Years • West Bangalore',
    desc: 'Our expansive childrens play zone West Bangalore families trust is built for kids aged 1–10 years. Enjoy joyful slides and swings along with a padded obstacle area, climbing bridges, and sensory crawl tunnels at our indoor playground Nagarabhavi 2nd stage.',
    icon: 'Castle',
    badge: 'Popular',
  },
  {
    id: 'toddler-play',
    title: 'Roleplay Games for Toddlers & Soft Zone',
    tag: 'Dedicated for Ages 1–3 Years',
    desc: 'A specially demarcated toddler zone with engaging roleplay games for toddlers, pretend supermarket & kitchen stations, magnetic lego boards, ultra-soft foam blocks, and mini ball pools safely separated from older kids.',
    icon: 'Baby',
    badge: 'Safe & Gentle (1–3 Yrs)',
  },
  {
    id: 'trampoline-play',
    title: 'Trampoline Jump, Ball Pit & Café Lounge',
    tag: 'Kids Play Zone with Café',
    desc: 'Gravity-defying fun in our netted trampoline arena paired with a sanitized sensory ball pit—plus a relaxing kids play zone with café refreshments and free Wi-Fi seating so parents can unwind while watching their kids play.',
    icon: 'Sparkles',
    badge: 'High Energy + Café',
  },
  {
    id: 'weekday-activities',
    title: 'Affordable Indoor Play Area Package Rates & Memberships',
    tag: 'Open Daily • 11 AM - 9 PM',
    desc: 'Looking for clear indoor play area package rates in Nagarabhavi 2nd Stage & Annapoorneshwari Nagar? Walk in from ₹249 onwards, or choose our membership plans for frequently visiting children and families at highly discounted rates.',
    icon: 'Clock',
    badge: 'From ₹249 + Memberships',
  },
];

// Play Session Pricing for Walk-ins & Families (Starts from 249 onwards)
export const PLAY_PRICING_PLANS = [
  {
    id: 'session-standard',
    title: 'Standard Play Session',
    duration: 'Full Arena Access',
    price: '₹249',
    rateNote: 'Indoor play area package rates from ₹249',
    tag: 'Starts from 249 onwards',
    suitableFor: 'Entire Arena: 1–10 Years (Dedicated 1–3 Toddler Zone)',
    features: [
      'Full access to slides, swings and multi-level obstacle area',
      'Dedicated roleplay games for toddlers & soft foam zone (ages 1–3)',
      'Trampoline jump zone & sanitized sensory ball pit',
      '1 Accompanying parent/guardian entry included for free',
      'Access to kids play zone with café lounge & free high-speed Wi-Fi',
    ],
    highlight: 'Starts from 249 onwards • Great for after-school weekday fun',
    badge: 'Best Starting Value',
  },
  {
    id: 'session-toddler',
    title: 'Dedicated Toddler & Roleplay Session',
    duration: 'Ages 1–3 Years Soft Play',
    price: '₹249',
    rateNote: 'Indoor play area package rates from ₹249',
    tag: 'Starts from 249 onwards',
    suitableFor: 'Dedicated 1–3 Years Toddler Zone',
    features: [
      'Exclusive soft foam play area & roleplay games for toddlers',
      'Gentle mini foam slides, pretend market, lego wall & soft blocks',
      'Low-height safe sensory ball pond for early steps',
      '1 Accompanying parent/guardian entry included for free',
      'Protected zone safely away from older children running',
    ],
    highlight: 'Starts from 249 onwards • Safe sensory & roleplay development',
    badge: 'Toddler Zone (1–3 yrs)',
  },
  {
    id: 'session-adventure',
    title: 'All-Zone Play & Café Lounge',
    duration: 'Slides, Swings & Obstacles',
    price: '₹249',
    rateNote: 'Indoor play area package rates from ₹249',
    tag: 'Starts from 249 onwards',
    suitableFor: 'Entire Arena: 1–10 Years (Dedicated 1–3 Toddler Zone)',
    features: [
      'Full access to slides, swings, wall climbing & obstacle courses',
      'Role-play town, pretend grocery supermarket & merry-go-round',
      'Gravity-defying trampoline jumps and dive-in ball pit',
      'Comfortable parent café seating & refreshment corner nearby',
      'Membership plans available for frequently visiting kids & families at highly discounted rates',
    ],
    highlight: 'Starts from 249 onwards • Ask about discounted family membership plans',
    badge: 'Most Popular',
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
      'Dedicated toddler zone & roleplay games for little guests (ages 1–3)',
      'Dedicated celebration space for cake cutting & family seating',
      'Lively party music, balloon setup & café refreshment zone',
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
      'Reserved party hall seating with decorated cake table & photo corner',
      'Dedicated party coordinator & fun interactive games assistance',
      'Event venue with catering & customizable food serving zone',
      'Complimentary pair of socks for the birthday child & special guest rate',
      'Digital invitation templates to share with friends & family',
    ],
    highlight: 'Best birthday party hall near Annapoorneshwari Nagar for stress-free hosting',
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
      'Entire childrens play zone reserved only for your invited guests',
      'Full event venue with catering setup, dining area & café counter',
      'Customized music playlist & personalized celebration timeline',
      'Attentive play staff & dedicated hospitality team',
    ],
    highlight: 'VIP private birthday party venue in Nagarabhavi with complete freedom',
    badge: 'VIP Exclusive',
  },
];

export const BIRTHDAY_PERKS = [
  { title: '100% Screen-Free Fun', desc: 'Active physical play on safe slides, trampolines & ball pits' },
  { title: 'Catering & Café Zone', desc: 'Flexible event venue with catering & snack serving space' },
  { title: 'Zero Stress for Parents', desc: 'Our team assists with setup and coordination so you relax' },
  { title: 'Prime Nagarabhavi Spot', desc: 'Near Annapoorneshwari Nagar & Nagarabhavi 2nd Stage with parking' },
];

// Frequently Asked Questions including user specific inquiries & high-intent SEO queries
export const SEO_FAQ_ITEMS = [
  {
    question: 'Where is Slide & Glide located in Nagarabhavi & West Bangalore?',
    answer: 'Slide & Glide is a premier childrens play zone in West Bangalore located near Nagarabhavi 2nd Stage and Annapoorneshwari Nagar, Bengaluru 560091. Our exact address is 3rd floor, No 125, S N Arcade, above Bakasura Bandi, Annapoorneshwari Nagar, Nagarabhavi, Bangalore, Karnataka 560091.',
  },
  {
    question: 'What ages is the play area suitable for? Do you have roleplay games for toddlers?',
    answer: 'Our entire indoor playground is designed for children aged 1–10 years, featuring a dedicated soft play foam zone and roleplay games for toddlers (ages 1–3 years) including pretend market stalls, magnetic lego boards, and gentle mini slides.',
  },
  {
    question: 'What are the indoor play area package rates? Do you offer membership plans?',
    answer: 'Indoor play area package rates at Slide & Glide start from ₹249 onwards for walk-in entries, including free entry for 1 accompanying parent and access to our kids play zone with café lounge. We also offer flexible membership plans for frequently visiting children and families at highly discounted rates!',
  },
  {
    question: 'Do you offer birthday party halls near Annapoorneshwari Nagar with catering options?',
    answer: 'Yes! Looking for a premium birthday party hall near Nagarbhavi or birthday party halls near Annapoorneshwari Nagar? Slide & Glide offers customizable, hassle-free birthday party packages for kids up to 10 years old, and works as an event venue with catering and refreshment serving support. Call +91 97397 80837 or message us on WhatsApp to plan your event.',
  },
  {
    question: 'Is Slide & Glide a kids play zone with café and parent seating?',
    answer: 'Yes, we provide a comfortable parent seating lounge and refreshment café corner with free Wi-Fi right beside the play arena so parents can relax, enjoy snacks or beverages, and keep an eye on their children.',
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
    answer: 'Yes, absolutely! Slide & Glide is cleaned every single day and sanitized using child-safe disinfectants. Furthermore, our entire arena is 24/7 CCTV monitored and supervised by trained attendants to ensure complete safety and reassurance for parents.',
  },
  {
    question: 'What are your operating hours and timings in Nagarabhavi?',
    answer: 'Slide & Glide is open 7 days a week (Monday through Sunday) from 11:00 AM to 9:00 PM. Walk-ins are always welcome!',
  },
  {
    question: 'What makes Slide & Glide great for weekend activities for kids in West Bangalore?',
    answer: 'Slide & Glide offers 100% active, screen-free physical fun at our indoor playground near Nagarabhavi 2nd Stage. Kids run, jump on trampolines, explore roleplay games, navigate obstacle courses, and socialize in a hygienic, air-conditioned arena.',
  },
];
