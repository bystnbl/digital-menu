import dotenv from "dotenv";
import { connectDatabase } from "../config/db.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import Restaurant from "../models/Restaurant.js";
import VisitLog from "../models/VisitLog.js";

dotenv.config();

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

const restaurants = [
  {
    name: "Luna Bistro",
    slug: "luna-bistro",
    area: { de: "Neue Filiale", en: "New branch" },
    cuisine: { de: "Restaurantküche", en: "Restaurant cuisine" },
    addressLine1: "Robertstr. 1",
    addressLine2: "42107 Wuppertal",
    mapQuery: "Luna Bistro Wuppertal",
    instagram: "https://www.instagram.com/lunabistro",
    facebook: "https://www.facebook.com/lunabistro",
    tiktok: "https://www.tiktok.com/@lunabistro",
  },
  {
    name: "Belchicken",
    slug: "belchicken",
    area: { de: "Wuppertal", en: "Wuppertal" },
    cuisine: { de: "Chicken & Burger", en: "Chicken & burger" },
    addressLine1: "Alte Freiheit 12",
    addressLine2: "42103 Wuppertal",
    mapQuery: "Belchicken Wuppertal",
    instagram: "https://www.instagram.com/belchickenwuppertal",
    facebook: "https://www.facebook.com/belchicken",
    tiktok: "https://www.tiktok.com/@belchicken",
  },
  {
    name: "ND Döner",
    slug: "nd-doner",
    area: { de: "Kadiköy", en: "Kadikoy" },
    cuisine: { de: "Döner & Grill", en: "Doner & grill" },
    addressLine1: "Bahariye Cd. 45",
    addressLine2: "34710 Istanbul",
    mapQuery: "ND Döner Kadiköy",
    instagram: "https://www.instagram.com/nddoner",
    facebook: "https://www.facebook.com/nddoner",
    tiktok: "https://www.tiktok.com/@nddoner",
  },
  {
    name: "Mira Sushi",
    slug: "mira-sushi",
    area: { de: "Innenstadt", en: "City center" },
    cuisine: { de: "Sushi & Bowls", en: "Sushi & bowls" },
    addressLine1: "Schadowstr. 28",
    addressLine2: "40212 Düsseldorf",
    mapQuery: "Mira Sushi Düsseldorf",
    instagram: "https://www.instagram.com/mirasushi",
    facebook: "https://www.facebook.com/mirasushi",
    tiktok: "https://www.tiktok.com/@mirasushi",
  },
  {
    name: "Casa Verde",
    slug: "casa-verde",
    area: { de: "Altstadt", en: "Old town" },
    cuisine: { de: "Italienische Küche", en: "Italian cuisine" },
    addressLine1: "Hauptstr. 8",
    addressLine2: "50667 Köln",
    mapQuery: "Casa Verde Köln",
    instagram: "https://www.instagram.com/casaverde",
    facebook: "https://www.facebook.com/casaverde",
    tiktok: "https://www.tiktok.com/@casaverde",
  },
];

const categoryTemplates = [
  { de: "Kampagnen", en: "Campaigns", system: "campaigns" },
  { de: "Vorspeisen", en: "Starters" },
  { de: "Hauptgerichte", en: "Main dishes" },
  { de: "Desserts", en: "Desserts" },
  { de: "Getränke", en: "Drinks" },
];

const itemTemplates = [
  ["Haus Spezial", "House special", "Frisch zubereitet mit ausgewählten Zutaten.", "Freshly prepared with selected ingredients."],
  ["Chef Empfehlung", "Chef recommendation", "Beliebtes Gericht mit aromatischer Sauce.", "Popular dish with aromatic sauce."],
  ["Klassiker", "Classic", "Traditionell serviert und fein abgeschmeckt.", "Traditionally served and finely seasoned."],
  ["Premium Menü", "Premium menu", "Mit Beilage und hausgemachtem Dip.", "With side dish and homemade dip."],
  ["Deluxe Teller", "Deluxe plate", "Reichhaltig, frisch und sättigend.", "Rich, fresh and satisfying."],
  ["Frische Bowl", "Fresh bowl", "Leicht, bunt und perfekt kombiniert.", "Light, colorful and perfectly balanced."],
  ["Knusprige Auswahl", "Crispy selection", "Goldbraun gebacken und warm serviert.", "Golden baked and served warm."],
  ["Vegetarische Option", "Vegetarian option", "Mit saisonalem Gemüse und Kräutern.", "With seasonal vegetables and herbs."],
  ["Familien Favorit", "Family favorite", "Ideal zum Teilen oder als große Portion.", "Ideal for sharing or as a large portion."],
  ["Signature Gericht", "Signature dish", "Ein besonderes Gericht des Hauses.", "A special house signature dish."],
];

function openingHours() {
  return days.map((day) => ({
    day,
    open: day === "sunday" ? "11:00" : "10:00",
    close: ["friday", "saturday"].includes(day) ? "00:00" : "23:00",
    closed: false,
  }));
}

function visitDate(daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date;
}

function visitDateKey(date) {
  return date.toISOString().slice(0, 10);
}

function restaurantPayload(entry, index) {
  const today = new Date();
  const start = today.toISOString().slice(0, 10);
  const end = new Date(today);
  end.setFullYear(today.getFullYear() + 1);
  return {
    slug: entry.slug,
    username: `${entry.slug}@synkard.demo`,
    password: "123456",
    license: { start, end: end.toISOString().slice(0, 10) },
    restaurant: {
      name: { de: entry.name, en: entry.name },
      cuisine: entry.cuisine,
      area: entry.area,
      cover: "",
      logo: "",
      logoColor: ["#176b85", "#053b50", "#64cac3", "#0d5c75", "#12606f"][index],
      theme: {
        button: ["#176b85", "#053b50", "#0d7f78", "#0d5c75", "#12606f"][index],
        background: "#eeeeee",
        text: "#053b50",
      },
      links: {
        google: `https://www.google.com/search?q=${encodeURIComponent(`${entry.name} review`)}`,
        instagram: entry.instagram,
        facebook: entry.facebook,
        tiktok: entry.tiktok,
        wifi: `https://wifi.synkard.demo/${entry.slug}`,
      },
      location: {
        addressLine1: entry.addressLine1,
        addressLine2: entry.addressLine2,
        mapQuery: entry.mapQuery,
        openingHours: openingHours(),
      },
      legal: {
        terms: { de: `${entry.name} AGB Beispieltext.`, en: `${entry.name} terms sample text.` },
        privacy: { de: `${entry.name} Datenschutzerklärung Beispieltext.`, en: `${entry.name} privacy policy sample text.` },
        imprint: { de: `${entry.name} Impressum Beispieltext.`, en: `${entry.name} imprint sample text.` },
      },
    },
    stats: {
      total: 0,
      daily: {},
      weekly: {},
      monthly: {},
      lastViewedAt: "",
    },
  };
}

async function seed() {
  await connectDatabase();
  await Promise.all([Restaurant.deleteMany({}), Category.deleteMany({}), Product.deleteMany({}), VisitLog.deleteMany({})]);

  for (const [restaurantIndex, entry] of restaurants.entries()) {
    await Restaurant.create(restaurantPayload(entry, restaurantIndex));
    const categories = [];

    for (const [categoryIndex, template] of categoryTemplates.entries()) {
      const category = await Category.create({
        restaurantSlug: entry.slug,
        name: { de: template.de, en: template.en },
        system: template.system || "",
        sortOrder: categoryIndex,
      });
      categories.push(category);
    }

    for (const [categoryIndex, category] of categories.entries()) {
      for (const [itemIndex, item] of itemTemplates.entries()) {
        await Product.create({
          restaurantSlug: entry.slug,
          categoryId: category.id,
          name: {
            de: `${item[0]} ${itemIndex + 1}`,
            en: `${item[1]} ${itemIndex + 1}`,
          },
          description: {
            de: `${item[2]} ${categoryTemplates[categoryIndex].de}.`,
            en: `${item[3]} ${categoryTemplates[categoryIndex].en}.`,
          },
          price: `${(4.5 + categoryIndex * 2 + itemIndex * 0.7).toFixed(2).replace(".", ",")}`,
          image: "",
        });
      }
    }

    const visits = [];
    const visitCount = 25 + restaurantIndex * 14;
    for (let index = 0; index < visitCount; index += 1) {
      const createdAt = visitDate(index % 35);
      visits.push({
        restaurantSlug: entry.slug,
        date: visitDateKey(createdAt),
        userAgent: "Seed data",
        ipHash: `seed-${entry.slug}-${index}`,
        createdAt,
        updatedAt: createdAt,
      });
    }
    await VisitLog.insertMany(visits);
  }

  console.log("Seed completed: 5 restaurants, 25 categories, 250 products and sample visit logs.");
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
