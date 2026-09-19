import bannerImg from '../assets/images/slide_glide_banner_1789753370227.jpg';
import heroImg from '../assets/images/indian_kids_slides_1789843237069.jpg';
import trampolineImg from '../assets/images/indian_kids_trampoline_1789843250432.jpg';
import pretendImg from '../assets/images/indian_kids_pretend_play_1789843293366.jpg';
import partyImg from '../assets/images/indian_kids_birthday_deepika_1789843955986.jpg';
import ballPitImg from '../assets/images/indian_kids_ball_pit_1789843265481.jpg';
import logoImg from '../assets/images/slide_glide_logo_1789843201332.jpg';

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
  hero: heroImg,
  trampoline: trampolineImg,
  pretend: pretendImg,
  party: partyImg,
  ballPit: ballPitImg,
};

export const PHOTOS = [
  {
    id: 'animated-play-area',
    title: 'Animated Play Area & Fun Arena',
    category: 'Arena Overview',
    src: bannerImg,
    description: 'Vibrant indoor arena with soft play slides, trampolines, and rainbow ball pits.',
  },
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
