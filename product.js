// products.js

const products = {
  // 📚 Books (10 items)
  b1: { id: "b1", title: "Engineering Mathematics", price: "₦2500", image: "https://picsum.photos/200?1", category: "books", description: "Essential math textbook for engineering students." },
  b2: { id: "b2", title: "Discrete Mathematics", price: "₦3000", image: "https://picsum.photos/200?2", category: "books", description: "Foundation for computer science." },
  b3: { id: "b3", title: "Physics Textbook", price: "₦2200", image: "https://picsum.photos/200?3", category: "books", description: "Complete physics reference for undergraduates." },
  b4: { id: "b4", title: "Chemistry Made Easy", price: "₦2800", image: "https://picsum.photos/200?4", category: "books", description: "Simplified chemistry concepts for students." },
  b5: { id: "b5", title: "Introduction to Programming", price: "₦3500", image: "https://picsum.photos/200?5", category: "books", description: "Beginner-friendly programming guide." },
  b6: { id: "b6", title: "African Literature", price: "₦2000", image: "https://picsum.photos/200?6", category: "books", description: "Collection of African literary works." },
  b7: { id: "b7", title: "Law of Contract", price: "₦4000", image: "https://picsum.photos/200?7", category: "books", description: "Important reference for law students." },
  b8: { id: "b8", title: "Microbiology Handbook", price: "₦3200", image: "https://picsum.photos/200?8", category: "books", description: "Detailed microbiology reference." },
  b9: { id: "b9", title: "Statistics for Beginners", price: "₦2700", image: "https://picsum.photos/200?9", category: "books", description: "Statistics concepts simplified." },
  b10: { id: "b10", title: "Economics 101", price: "₦3100", image: "https://picsum.photos/200?10", category: "books", description: "Intro to economics for first-year students." },

  // 👕 Fashion (10 items)
  f1: { id: "f1", title: "Campus Hoodie", price: "₦5000", image: "https://picsum.photos/200?11", category: "fashion", description: "Comfortable hoodie for students." },
  f2: { id: "f2", title: "Sneakers", price: "₦8000", image: "https://picsum.photos/200?12", category: "fashion", description: "Trendy sneakers for everyday wear." },
  f3: { id: "f3", title: "Graphic T-Shirt", price: "₦2500", image: "https://picsum.photos/200?13", category: "fashion", description: "Stylish and comfortable T-shirt." },
  f4: { id: "f4", title: "Backpack", price: "₦6000", image: "https://picsum.photos/200?14", category: "fashion", description: "Durable backpack for campus life." },
  f5: { id: "f5", title: "Baseball Cap", price: "₦2000", image: "https://picsum.photos/200?15", category: "fashion", description: "Cool cap for sun protection." },
  f6: { id: "f6", title: "Jeans", price: "₦7000", image: "https://picsum.photos/200?16", category: "fashion", description: "Classic denim jeans." },
  f7: { id: "f7", title: "Wrist Watch", price: "₦4500", image: "https://picsum.photos/200?17", category: "fashion", description: "Affordable student wristwatch." },
  f8: { id: "f8", title: "Sunglasses", price: "₦3000", image: "https://picsum.photos/200?18", category: "fashion", description: "Trendy shades for hot days." },
  f9: { id: "f9", title: "Traditional Wear", price: "₦9000", image: "https://picsum.photos/200?19", category: "fashion", description: "Stylish native outfit." },
  f10: { id: "f10", title: "Winter Jacket", price: "₦10000", image: "https://picsum.photos/200?20", category: "fashion", description: "Warm jacket for rainy days." },

  // 💻 Electronics (10 items)
  e1: { id: "e1", title: "Bluetooth Earbuds", price: "₦7000", image: "https://picsum.photos/200?21", category: "electronics", description: "Wireless earbuds with clear sound." },
  e2: { id: "e2", title: "Smartphone Charger", price: "₦2500", image: "https://picsum.photos/200?22", category: "electronics", description: "Fast-charging USB adapter." },
  e3: { id: "e3", title: "Power Bank 10000mAh", price: "₦8500", image: "https://picsum.photos/200?23", category: "electronics", description: "Portable power for your devices." },
  e4: { id: "e4", title: "Laptop Cooling Pad", price: "₦5000", image: "https://picsum.photos/200?24", category: "electronics", description: "Keep your laptop cool while studying." },
  e5: { id: "e5", title: "Flash Drive 32GB", price: "₦3500", image: "https://picsum.photos/200?25", category: "electronics", description: "Store and transfer your files." },
  e6: { id: "e6", title: "Wireless Mouse", price: "₦4000", image: "https://picsum.photos/200?26", category: "electronics", description: "Ergonomic and smooth response." },
  e7: { id: "e7", title: "Headphones", price: "₦6000", image: "https://picsum.photos/200?27", category: "electronics", description: "Over-ear headphones with bass." },
  e8: { id: "e8", title: "Smartwatch", price: "₦12000", image: "https://picsum.photos/200?28", category: "electronics", description: "Affordable smartwatch with fitness tracking." },
  e9: { id: "e9", title: "Portable Speaker", price: "₦7500", image: "https://picsum.photos/200?29", category: "electronics", description: "Loud and clear Bluetooth speaker." },
  e10: { id: "e10", title: "Laptop Bag", price: "₦5500", image: "https://picsum.photos/200?30", category: "electronics", description: "Protective laptop carrying bag." },

  // 🍔 Food (10 items)
  fo1: { id: "fo1", title: "Fried Rice & Chicken", price: "₦2500", image: "https://picsum.photos/200?31", category: "food", description: "Delicious Nigerian fried rice with chicken." },
  fo2: { id: "fo2", title: "Shawarma", price: "₦1500", image: "https://picsum.photos/200?32", category: "food", description: "Tasty chicken shawarma." },
  fo3: { id: "fo3", title: "Pizza Slice", price: "₦1000", image: "https://picsum.photos/200?33", category: "food", description: "Cheesy pizza slice." },
  fo4: { id: "fo4", title: "Burger & Fries", price: "₦2000", image: "https://picsum.photos/200?34", category: "food", description: "Classic burger meal." },
  fo5: { id: "fo5", title: "Meat Pie", price: "₦800", image: "https://picsum.photos/200?35", category: "food", description: "Freshly baked meat pie." },
  fo6: { id: "fo6", title: "Suya (Beef Kebab)", price: "₦1200", image: "https://picsum.photos/200?36", category: "food", description: "Spicy grilled beef suya." },
  fo7: { id: "fo7", title: "Jollof Rice", price: "₦1800", image: "https://picsum.photos/200?37", category: "food", description: "Nigerian party Jollof rice." },
  fo8: { id: "fo8", title: "Spaghetti & Turkey", price: "₦2200", image: "https://picsum.photos/200?38", category: "food", description: "Spaghetti with turkey sauce." },
  fo9: { id: "fo9", title: "Chin Chin (Snack)", price: "₦500", image: "https://picsum.photos/200?39", category: "food", description: "Crispy chin chin snack." },
  fo10: { id: "fo10", title: "Fruit Salad", price: "₦1500", image: "https://picsum.photos/200?40", category: "food", description: "Healthy mix of fresh fruits." }
};
