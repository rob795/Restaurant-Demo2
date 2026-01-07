// Mock data for restaurant website

export const restaurantInfo = {
  name: "La Maison Verte",
  tagline: "Farm-to-Table Excellence",
  description: "Experience the finest culinary journey with locally sourced ingredients and timeless recipes that celebrate the art of fine dining.",
  phone: "(555) 123-4567",
  email: "hello@lamaisonverte.com",
  address: {
    street: "123 Garden Avenue",
    city: "San Francisco",
    state: "CA",
    zip: "94102"
  },
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "5:00 PM - 10:00 PM" },
    { day: "Wednesday", time: "5:00 PM - 10:00 PM" },
    { day: "Thursday", time: "5:00 PM - 10:00 PM" },
    { day: "Friday", time: "5:00 PM - 11:00 PM" },
    { day: "Saturday", time: "12:00 PM - 11:00 PM" },
    { day: "Sunday", time: "12:00 PM - 9:00 PM" }
  ],
  socialLinks: {
    instagram: "#",
    facebook: "#",
    twitter: "#"
  }
};

export const menuCategories = [
  {
    id: "starters",
    name: "Starters",
    description: "Begin your culinary journey"
  },
  {
    id: "mains",
    name: "Main Courses",
    description: "Signature dishes crafted with care"
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet endings to remember"
  },
  {
    id: "drinks",
    name: "Beverages",
    description: "Curated drinks selection"
  }
];

export const menuItems = [
  // Starters
  {
    id: 1,
    category: "starters",
    name: "Garden Burrata",
    description: "Creamy burrata with heirloom tomatoes, fresh basil, and aged balsamic reduction",
    price: 18,
    isVegetarian: true,
    isSignature: true
  },
  {
    id: 2,
    category: "starters",
    name: "Seared Scallops",
    description: "Pan-seared scallops with cauliflower purée, crispy capers, and brown butter",
    price: 24,
    isVegetarian: false,
    isSignature: false
  },
  {
    id: 3,
    category: "starters",
    name: "Wild Mushroom Soup",
    description: "Velvety forest mushroom soup with truffle oil and herb croutons",
    price: 14,
    isVegetarian: true,
    isSignature: false
  },
  {
    id: 4,
    category: "starters",
    name: "Tuna Tartare",
    description: "Fresh ahi tuna with avocado, sesame, and citrus soy dressing",
    price: 22,
    isVegetarian: false,
    isSignature: true
  },
  // Mains
  {
    id: 5,
    category: "mains",
    name: "Herb-Crusted Lamb",
    description: "Tender lamb rack with rosemary jus, roasted vegetables, and potato gratin",
    price: 48,
    isVegetarian: false,
    isSignature: true
  },
  {
    id: 6,
    category: "mains",
    name: "Pan-Roasted Salmon",
    description: "Wild-caught salmon with lemon beurre blanc, asparagus, and wild rice",
    price: 38,
    isVegetarian: false,
    isSignature: false
  },
  {
    id: 7,
    category: "mains",
    name: "Risotto Primavera",
    description: "Creamy arborio rice with seasonal vegetables, parmesan, and fresh herbs",
    price: 32,
    isVegetarian: true,
    isSignature: false
  },
  {
    id: 8,
    category: "mains",
    name: "Filet Mignon",
    description: "8oz prime beef tenderloin with red wine reduction and truffle mashed potatoes",
    price: 56,
    isVegetarian: false,
    isSignature: true
  },
  {
    id: 9,
    category: "mains",
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry gastrique, braised cabbage, and fingerling potatoes",
    price: 42,
    isVegetarian: false,
    isSignature: false
  },
  // Desserts
  {
    id: 10,
    category: "desserts",
    name: "Crème Brûlée",
    description: "Classic vanilla bean custard with caramelized sugar crust",
    price: 12,
    isVegetarian: true,
    isSignature: true
  },
  {
    id: 11,
    category: "desserts",
    name: "Chocolate Fondant",
    description: "Warm chocolate cake with molten center, vanilla ice cream",
    price: 14,
    isVegetarian: true,
    isSignature: false
  },
  {
    id: 12,
    category: "desserts",
    name: "Seasonal Tart",
    description: "Fresh fruit tart with pastry cream and honey glaze",
    price: 11,
    isVegetarian: true,
    isSignature: false
  },
  // Drinks
  {
    id: 13,
    category: "drinks",
    name: "House Wine Selection",
    description: "Ask your server about our curated wine list",
    price: 14,
    isVegetarian: true,
    isSignature: false
  },
  {
    id: 14,
    category: "drinks",
    name: "Signature Cocktails",
    description: "Handcrafted cocktails by our mixologist",
    price: 16,
    isVegetarian: true,
    isSignature: true
  },
  {
    id: 15,
    category: "drinks",
    name: "Artisan Coffee",
    description: "Locally roasted espresso and specialty coffee drinks",
    price: 6,
    isVegetarian: true,
    isSignature: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "An unforgettable dining experience. The lamb was cooked to perfection!",
    rating: 5
  },
  {
    id: 2,
    name: "James L.",
    text: "The ambiance and service are unmatched. This is our go-to spot for special occasions.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily R.",
    text: "Every dish tells a story. The attention to detail is remarkable.",
    rating: 5
  }
];

export const featuredImages = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
  about: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
  interior: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
};
