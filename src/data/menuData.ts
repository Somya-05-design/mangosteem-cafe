export interface MenuItem {
  id: string;
  name: string;
  category: 'Coffee' | 'Snacks' | 'Dessert' | 'Cold drinks';
  price: number;
  image: string;
  description?: string;
  rating?: number;
  popular?: boolean;
}

export const POPULAR_FLAVORS: MenuItem[] = [
  {
    id: 'pop-1',
    name: 'Caramel Bliss',
    category: 'Coffee',
    price: 200,
    image: '/images/flavor_caramel.png',
    description: 'Rich caramel & creamy espresso',
    rating: 5,
    popular: true,
  },
  {
    id: 'pop-2',
    name: 'Mocha Delight',
    category: 'Coffee',
    price: 296,
    image: '/images/flavor_mocha.png',
    description: 'Chocolate infused coffee perfection',
    rating: 5,
    popular: true,
  },
  {
    id: 'pop-3',
    name: 'Cappuccino',
    category: 'Coffee',
    price: 199,
    image: '/images/flavor_cappuccino.png',
    description: 'Smooth vanilla with silky milk',
    rating: 5,
    popular: true,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'menu-1',
    name: 'Cappuccino',
    category: 'Coffee',
    price: 400,
    image: '/images/flavor_cappuccino.png',
    description: 'Fresh espresso shot layered with dense textured steamed microfoam.'
  },
  {
    id: 'menu-2',
    name: 'Caramel Latte',
    category: 'Coffee',
    price: 370,
    image: '/images/flavor_caramel.png',
    description: 'Sweet homemade golden caramel drizzled over smooth espresso and milk.'
  },
  {
    id: 'menu-3',
    name: 'Chicken Sandwich',
    category: 'Snacks',
    price: 280,
    image: '/images/fill_c4b3664ef170f1c9ec7c59e82e43042c50dd6c0e.png',
    description: 'Artisan grilled herb chicken, crisp lettuce, sun-dried tomatoes on sourdough.'
  },
  {
    id: 'menu-4',
    name: 'Butter Croissant',
    category: 'Snacks',
    price: 179,
    image: '/images/fill_c4b3664ef170f1c9ec7c59e82e43042c50dd6c0e.png',
    description: 'Golden flaky French pastry baked fresh every morning with pure butter.'
  },
  {
    id: 'menu-5',
    name: 'Iced Americano',
    category: 'Cold drinks',
    price: 190,
    image: '/images/menu_americano.png',
    description: 'Double espresso shots poured over filtered crystal ice and mineral water.'
  },
  {
    id: 'menu-6',
    name: 'Mango Smoothie',
    category: 'Cold drinks',
    price: 199,
    image: '/images/fill_395dbe9e7b1ff12285fd51bde5b961e34149852b.png',
    description: 'Tropical Alphonso mango pulp blended with Greek yogurt and wildflower honey.'
  },
  {
    id: 'menu-7',
    name: 'Chocolate Brownie',
    category: 'Dessert',
    price: 140,
    image: '/images/menu_brownie.png',
    description: 'Fudgy Belgian dark chocolate brownie with walnuts and chocolate ganache.'
  },
  {
    id: 'menu-8',
    name: 'NY Cheesecake',
    category: 'Dessert',
    price: 420,
    image: '/images/menu_cheesecake.png',
    description: 'Classic velvety New York style baked cream cheese cake on graham crust.'
  }
];

export const COFFEE_VARIETIES = [
  {
    id: 'espresso',
    name: 'Espresso',
    title: 'Pure Italian Espresso',
    description: 'Intense, aromatic single shot extracted at 9 bars with a rich hazelnut crema.',
    price: 250,
    image: '/images/hero_1.png'
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    title: 'Espresso Macchiato',
    description: 'Bold double espresso stained with a dollop of velvety steamed milk foam.',
    price: 280,
    image: '/images/hero_3.png'
  },
  {
    id: 'flatwhite',
    name: 'Flatwhite',
    title: 'Artisan Flat White',
    description: 'Double ristretto blended with velvety microfoam for a sweet, silky mouthfeel.',
    price: 340,
    image: '/images/hero_2.png'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    title: 'Golden Cappuccino',
    description: 'Rich Aroma. Silky Texture. Timeless Taste. A carefully crafted cappuccino featuring premium espresso and creamy microfoam, delivering warmth and comfort in every sip.',
    price: 400,
    image: '/images/cappuccino_spotlight.png'
  },
  {
    id: 'latte',
    name: 'Latte',
    title: 'Café Latte Supreme',
    description: 'Smooth espresso balanced with rich steamed milk and a delicate top froth.',
    price: 360,
    image: '/images/flavor_caramel.png'
  },
  {
    id: 'mocha',
    name: 'Mocha',
    title: 'Dark Chocolate Mocha',
    description: 'Decadent dark chocolate melted into espresso, topped with whipped cream.',
    price: 390,
    image: '/images/flavor_mocha.png'
  },
  {
    id: 'americano',
    name: 'Americano',
    title: 'Classic Americano',
    description: 'Fresh espresso diluted with hot spring water for a nuanced, full-bodied cup.',
    price: 220,
    image: '/images/menu_americano.png'
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'David Thompson',
    avatar: '/images/avatar_david.png',
    rating: 5,
    quote: 'The coffee is fresh and perfectly brewed. The cozy atmosphere makes it my favorite spot.',
    featured: false
  },
  {
    id: 'test-2',
    name: 'Sarah Mitchell',
    avatar: '/images/avatar_sarah.png',
    rating: 5,
    quote: "I come here every morning before work. It has become my happy place. I come here every morning before work. It's become my happy place.",
    featured: true
  },
  {
    id: 'test-3',
    name: 'Emma Richardson',
    avatar: '/images/avatar_emma.png',
    rating: 5,
    quote: 'Friendly staff, rapid service, and coffee is always aromatic and velvety.',
    featured: false
  }
];

export const GALLERY_IMAGES = [
  { id: 1, title: 'Friends in Cozy Rustic Cafe', src: '/images/gallery_1.png' },
  { id: 2, title: 'Artisan Coffee & Breakfast Feast', src: '/images/gallery_2.png' },
  { id: 3, title: 'Barista Latte Art Pouring', src: '/images/gallery_3.png' },
  { id: 4, title: 'Fresh Brew & Journal Moments', src: '/images/gallery_4.png' },
  { id: 5, title: 'Lively Gatherings @ The Cafe', src: '/images/gallery_5.png' },
  { id: 6, title: 'Precision Espresso Brewing Machine', src: '/images/gallery_6.png' },
];
