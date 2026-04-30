const STORAGE_KEY = "digital-menu-platform-v3";
const LEGACY_KEYS = ["digital-menu-demo-v2", "digital-menu-demo-v1"];
const SUPPORTED_LANGUAGES = ["de", "en"];
const BRAND_COLORS = {
  softGrey: "#eeeeee",
  tealBlue: "#64cac3",
  deepCyan: "#176b85",
  darkNavy: "#053b50",
};
const OPENING_DAYS = [
  { id: "monday", de: "Montag", en: "Monday" },
  { id: "tuesday", de: "Dienstag", en: "Tuesday" },
  { id: "wednesday", de: "Mittwoch", en: "Wednesday" },
  { id: "thursday", de: "Donnerstag", en: "Thursday" },
  { id: "friday", de: "Freitag", en: "Friday" },
  { id: "saturday", de: "Samstag", en: "Saturday" },
  { id: "sunday", de: "Sonntag", en: "Sunday" },
];

const defaultCover =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23053b50'/%3E%3Cstop offset='0.58' stop-color='%23176b85'/%3E%3Cstop offset='1' stop-color='%2364cac3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='700' fill='url(%23g)'/%3E%3Cpath d='M120 500c170-145 320-145 490 0s320 145 490 0v200H120z' fill='%23eeeeee' fill-opacity='0.18'/%3E%3Ccircle cx='230' cy='170' r='110' fill='%23eeeeee' fill-opacity='0.14'/%3E%3Ccircle cx='930' cy='500' r='170' fill='%2364cac3' fill-opacity='0.16'/%3E%3C/svg%3E";

const copy = {
  de: {
    add: "Hinzufügen",
    addCategory: "Kategorie hinzufügen",
    addItem: "Gericht hinzufügen",
    addMenuItem: "Menügericht hinzufügen",
    adminPanel: "Restaurant-Panel",
    backgroundColor: "Hintergrundfarbe",
    brandColors: "Markenfarben",
    buttonColor: "Button-Farbe",
    cancel: "Abbrechen",
    category: "Kategorie",
    categoryCount: "Kategorien",
    categoryStats: "Gerichte pro Kategorie",
    confirmDeleteCategory: "Diese Kategorie und alle zugehörigen Gerichte werden gelöscht.",
    confirmDeleteItem: "Dieses Gericht wird gelöscht.",
    confirmDeleteTitle: "Löschen bestätigen",
    copied: "Kopiert",
    copyLink: "Link kopieren",
    coverPhoto: "Titelbild",
    currentItems: "Aktuelle Gerichte",
    dashboard: "Verwaltung",
    deleteConfirm: "Löschen",
    demoLogin: "Demo-Login",
    email: "E-Mail",
    emptyCategory: "In dieser Kategorie gibt es noch keine Gerichte.",
    edit: "Bearbeiten",
    invalidLogin: "E-Mail oder Passwort ist falsch.",
    itemPhoto: "Gerichtfoto",
    itemTotal: "Gerichte",
    messageCategoryAdded: "Kategorie wurde hinzugefügt.",
    messageDeleted: "Erfolgreich gelöscht.",
    messageItemAdded: "Gericht wurde hinzugefügt.",
    messageItemUpdated: "Gericht wurde aktualisiert.",
    messageLinkCopied: "Link wurde kopiert.",
    messagePasswordReset: "Passwort wurde aktualisiert.",
    messageQrDownloaded: "QR-Code wurde heruntergeladen.",
    messageRestaurantCreated: "Restaurantkonto wurde erstellt.",
    messageRestaurantSaved: "Erfolgreich gespeichert.",
    messageThemeChanged: "Design wurde aktualisiert.",
    login: "Einloggen",
    logoColor: "Logo-Hintergrundfarbe",
    logoPhoto: "Restaurantlogo",
    logout: "Ausloggen",
    noDescription: "Keine Beschreibung hinzugefügt.",
    noItems: "Noch keine Gerichte vorhanden.",
    noResults: "Keine passenden Gerichte gefunden.",
    closed: "Geschlossen",
    openingHours: "Öffnungszeiten",
    password: "Passwort",
    photo: "Foto",
    priceEuro: "Preis (€)",
    restaurantInfo: "Restaurantdaten",
    saveInfo: "Daten speichern",
    searchPlaceholder: "Im Menü suchen",
    textColor: "Textfarbe",
    updateMenu: "Menü aktualisieren",
    updateItem: "Gericht aktualisieren",
    visitorStats: "Besucherstatistik",
    viewsMonth: "Diesen Monat",
    viewsTotal: "Gesamt",
    viewsWeek: "Diese Woche",
  },
  en: {
    add: "Add",
    addCategory: "Add category",
    addItem: "Add item",
    addMenuItem: "Add menu item",
    adminPanel: "Restaurant panel",
    backgroundColor: "Background color",
    brandColors: "Brand colors",
    buttonColor: "Button color",
    cancel: "Cancel",
    category: "Category",
    categoryCount: "Categories",
    categoryStats: "Items per category",
    confirmDeleteCategory: "This category and all related items will be deleted.",
    confirmDeleteItem: "This item will be deleted.",
    confirmDeleteTitle: "Confirm deletion",
    copied: "Copied",
    copyLink: "Copy link",
    coverPhoto: "Cover photo",
    currentItems: "Current items",
    dashboard: "Dashboard",
    deleteConfirm: "Delete",
    demoLogin: "Demo login",
    email: "Email",
    emptyCategory: "This category does not have any items yet.",
    edit: "Edit",
    invalidLogin: "Email or password is incorrect.",
    itemPhoto: "Item photo",
    itemTotal: "Items",
    messageCategoryAdded: "Category added successfully.",
    messageDeleted: "Deleted successfully.",
    messageItemAdded: "Item added successfully.",
    messageItemUpdated: "Item updated successfully.",
    messageLinkCopied: "Link copied.",
    messagePasswordReset: "Password updated successfully.",
    messageQrDownloaded: "QR code downloaded.",
    messageRestaurantCreated: "Restaurant account created.",
    messageRestaurantSaved: "Saved successfully.",
    messageThemeChanged: "Design updated.",
    login: "Log in",
    logoColor: "Logo background color",
    logoPhoto: "Restaurant logo",
    logout: "Log out",
    noDescription: "No description added.",
    noItems: "No items yet.",
    noResults: "No matching items found.",
    closed: "Closed",
    openingHours: "Opening hours",
    password: "Password",
    photo: "Photo",
    priceEuro: "Price (€)",
    restaurantInfo: "Restaurant information",
    saveInfo: "Save information",
    searchPlaceholder: "Search menu",
    textColor: "Text color",
    updateMenu: "Update your menu",
    updateItem: "Update item",
    visitorStats: "Visitor statistics",
    viewsMonth: "This month",
    viewsTotal: "Total",
    viewsWeek: "This week",
  },
};

const translations = {
  "Ana yemekler": { de: "Hauptgerichte", en: "Main dishes" },
  "Başlangıçlar": { de: "Vorspeisen", en: "Starters" },
  "Ev Yapımı Limonata": { de: "Hausgemachte Limonade", en: "Homemade lemonade" },
  "Fırınlanmış Humus": { de: "Gebackener Hummus", en: "Baked hummus" },
  "Izgara Levrek": { de: "Gegrillter Wolfsbarsch", en: "Grilled sea bass" },
  "Kadıköy şubesi": { de: "Filiale Kadiköy", en: "Kadikoy branch" },
  "Modern Akdeniz mutfağı": { de: "Moderne mediterrane Küche", en: "Modern Mediterranean cuisine" },
  "Mevsim yeşillikleri, limon sos ve közlenmiş sebzeler.": {
    de: "Saisonale Kräuter, Zitronensauce und geröstetes Gemüse.",
    en: "Seasonal greens, lemon sauce and roasted vegetables.",
  },
  "Parmesan, taze kekik ve kremamsı arborio pirinci.": {
    de: "Parmesan, frischer Thymian und cremiger Arborio-Reis.",
    en: "Parmesan, fresh thyme and creamy arborio rice.",
  },
  "San Sebastian": { de: "San Sebastian Cheesecake", en: "San Sebastian cheesecake" },
  "Tatlılar": { de: "Desserts", en: "Desserts" },
  "Trüflü Mantarlı Risotto": { de: "Trüffel-Pilz-Risotto", en: "Truffle mushroom risotto" },
  "Yanında kırmızı meyve sosu ile servis edilir.": { de: "Serviert mit roter Beerensauce.", en: "Served with red berry sauce." },
  "Zeytinyağı, çıtır nohut, maydanoz ve sıcak pide ile.": {
    de: "Mit Olivenöl, knusprigen Kichererbsen, Petersilie und warmem Fladenbrot.",
    en: "With olive oil, crispy chickpeas, parsley and warm pita.",
  },
  "İçecekler": { de: "Getränke", en: "Drinks" },
};

function detectLanguage() {
  const browserLanguage = (navigator.language || navigator.userLanguage || "de").toLowerCase();
  return browserLanguage.startsWith("en") ? "en" : "de";
}

const storedLanguage = localStorage.getItem("digital-menu-language");
const startsOnMenuPage = !location.hash.includes("admin") && !location.hash.includes("platform") && !location.pathname.replace(/\/+$/, "").endsWith("/admin");
let language = startsOnMenuPage ? detectLanguage() : storedLanguage || detectLanguage();
if (!SUPPORTED_LANGUAGES.includes(language)) language = "de";

let state = loadState();
let activeCategory = activeRestaurant().categories[0]?.id || "";
let isLoggedIn = false;
let pendingDelete = null;
let menuOpened = location.hash === "#menu";
let activeAdminTab = "dashboard";
let activeMenuItemId = "";
let editingItemId = "";

const $ = (selector) => document.querySelector(selector);

function uid() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

const elements = {
  menuView: $("#menuView"),
  menuLayout: $("#menuLayout"),
  quickActions: $("#quickActions"),
  adminView: $("#adminView"),
  platformView: $("#platformView"),
  languageToggle: $("#languageToggle"),
  showMenu: $("#showMenu"),
  brandMark: $("#brandMark"),
  restaurantNameTop: $("#restaurantNameTop"),
  restaurantAreaTop: $("#restaurantAreaTop"),
  restaurantName: $("#restaurantName"),
  restaurantCuisine: $("#restaurantCuisine"),
  coverImage: $("#coverImage"),
  categoryTabs: $("#categoryTabs"),
  menuContent: $("#menuContent"),
  searchInput: $("#searchInput"),
  menuItemModal: $("#menuItemModal"),
  menuItemDialog: $("#menuItemDialog"),
  mapFrame: $("#mapFrame"),
  footerAddressLine1: $("#footerAddressLine1"),
  footerAddressLine2: $("#footerAddressLine2"),
  footerOpeningHours: $("#footerOpeningHours"),
  loginPanel: $("#loginPanel"),
  dashboardPanel: $("#dashboardPanel"),
  loginForm: $("#loginForm"),
  emailInput: $("#emailInput"),
  passwordInput: $("#passwordInput"),
  loginMessage: $("#loginMessage"),
  logoutButton: $("#logoutButton"),
  dashboardTitle: $("#dashboardTitle"),
  adminStatsGrid: $("#adminStatsGrid"),
  dashboardSummaryGrid: $("#dashboardSummaryGrid"),
  categoryStatsList: $("#categoryStatsList"),
  adminMenu: $("#adminMenu"),
  statusMessage: $("#statusMessage"),
  restaurantForm: $("#restaurantForm"),
  restaurantNameDeInput: $("#restaurantNameDeInput"),
  restaurantNameEnInput: $("#restaurantNameEnInput"),
  restaurantCuisineDeInput: $("#restaurantCuisineDeInput"),
  restaurantCuisineEnInput: $("#restaurantCuisineEnInput"),
  restaurantAreaDeInput: $("#restaurantAreaDeInput"),
  restaurantAreaEnInput: $("#restaurantAreaEnInput"),
  coverInput: $("#coverInput"),
  logoInput: $("#logoInput"),
  logoColorInput: $("#logoColorInput"),
  buttonColorInput: $("#buttonColorInput"),
  backgroundColorInput: $("#backgroundColorInput"),
  textColorInput: $("#textColorInput"),
  logoPreview: $("#logoPreview"),
  googleReviewInput: $("#googleReviewInput"),
  instagramInput: $("#instagramInput"),
  facebookInput: $("#facebookInput"),
  tiktokInput: $("#tiktokInput"),
  wifiInput: $("#wifiInput"),
  addressLine1Input: $("#addressLine1Input"),
  addressLine2Input: $("#addressLine2Input"),
  mapQueryInput: $("#mapQueryInput"),
  openingHoursEditor: $("#openingHoursEditor"),
  termsDeInput: $("#termsDeInput"),
  termsEnInput: $("#termsEnInput"),
  privacyDeInput: $("#privacyDeInput"),
  privacyEnInput: $("#privacyEnInput"),
  imprintDeInput: $("#imprintDeInput"),
  imprintEnInput: $("#imprintEnInput"),
  categoryForm: $("#categoryForm"),
  categoryNameDeInput: $("#categoryNameDeInput"),
  categoryNameEnInput: $("#categoryNameEnInput"),
  categoryAdminList: $("#categoryAdminList"),
  itemForm: $("#itemForm"),
  itemCategoryInput: $("#itemCategoryInput"),
  itemNameDeInput: $("#itemNameDeInput"),
  itemNameEnInput: $("#itemNameEnInput"),
  itemDescriptionDeInput: $("#itemDescriptionDeInput"),
  itemDescriptionEnInput: $("#itemDescriptionEnInput"),
  itemPriceInput: $("#itemPriceInput"),
  itemImageInput: $("#itemImageInput"),
  itemSubmitButton: $("#itemSubmitButton"),
  cancelItemEditButton: $("#cancelItemEditButton"),
  itemAdminList: $("#itemAdminList"),
  platformRestaurantForm: $("#platformRestaurantForm"),
  platformRestaurantNameInput: $("#platformRestaurantNameInput"),
  platformSlugInput: $("#platformSlugInput"),
  platformUsernameInput: $("#platformUsernameInput"),
  platformPasswordInput: $("#platformPasswordInput"),
  platformRestaurantList: $("#platformRestaurantList"),
  confirmModal: $("#confirmModal"),
  confirmMessage: $("#confirmMessage"),
  cancelDeleteButton: $("#cancelDeleteButton"),
  confirmDeleteButton: $("#confirmDeleteButton"),
};

const floatingCategoryTabs = document.createElement("div");
floatingCategoryTabs.className = "floating-category-tabs hidden";
floatingCategoryTabs.setAttribute("aria-label", "Pinned menu categories");
document.body.appendChild(floatingCategoryTabs);

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return normalizePlatformState(JSON.parse(saved));

  for (const key of LEGACY_KEYS) {
    const legacy = localStorage.getItem(key);
    if (legacy) {
      const migrated = migrateLegacyState(JSON.parse(legacy));
      return migrated;
    }
  }

  return normalizePlatformState({
    platform: { domain: "https://menu.example.com" },
    restaurants: [createRestaurantRecord("Luna Bistro", "luna-bistro", "demo@restoran.com", "123456", true)],
  });
}

function migrateLegacyState(source) {
  return normalizePlatformState({
    platform: { domain: "https://menu.example.com" },
    restaurants: [
      {
        id: uid(),
        slug: source.restaurant?.slug || "luna-bistro",
        username: "demo@restoran.com",
        password: "123456",
        restaurant: source.restaurant,
        categories: source.categories,
        items: source.items,
      },
    ],
  });
}

function normalizePlatformState(source) {
  const restaurants = (source.restaurants || []).map((record) => normalizeRestaurantRecord(record));
  if (!restaurants.length) restaurants.push(createRestaurantRecord("Luna Bistro", "luna-bistro", "demo@restoran.com", "123456", true));
  return {
    platform: { domain: source.platform?.domain || "https://menu.example.com" },
    restaurants,
  };
}

function ensureCampaignCategory(categories) {
  const existing = categories.find((category) => asText(category.name, "en").toLocaleLowerCase("en-US") === "campaigns" || category.system === "campaigns");
  if (existing) {
    existing.name = { de: asText(existing.name, "de") || "Kampagnen", en: asText(existing.name, "en") || "Campaigns" };
    existing.system = "campaigns";
    return [existing, ...categories.filter((category) => category.id !== existing.id)];
  }
  return [{ id: uid(), name: { de: "Kampagnen", en: "Campaigns" }, system: "campaigns" }, ...categories];
}

function normalizeStats(stats = {}) {
  return {
    total: Number(stats.total || 0),
    weekly: stats.weekly || {},
    monthly: stats.monthly || {},
    lastViewedAt: stats.lastViewedAt || "",
  };
}

function weekKey(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  const day = Math.floor((date - start) / 86400000);
  return `${date.getFullYear()}-W${String(Math.ceil((day + start.getDay() + 1) / 7)).padStart(2, "0")}`;
}

function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function trackRestaurantView() {
  if (isAdminRoute() || isPlatformRoute()) return;
  const record = activeRestaurant();
  const now = new Date();
  record.stats = normalizeStats(record.stats);
  record.stats.total += 1;
  record.stats.weekly[weekKey(now)] = (record.stats.weekly[weekKey(now)] || 0) + 1;
  record.stats.monthly[monthKey(now)] = (record.stats.monthly[monthKey(now)] || 0) + 1;
  record.stats.lastViewedAt = now.toISOString();
  saveState();
}

function normalizeRestaurantRecord(record) {
  const restaurant = record.restaurant || {};
  const categories = ensureCampaignCategory((record.categories || []).map((category) => ({
    id: category.id || uid(),
    name: localizeValue(category.name || "Category"),
  })));
  return {
    id: record.id || uid(),
    slug: slugify(record.slug || restaurant.slug || asText(restaurant.name || "restaurant", "en")) || "restaurant",
    username: record.username || "demo@restoran.com",
    password: record.password || "123456",
    restaurant: {
      name: localizeValue(restaurant.name || "Luna Bistro"),
      cuisine: localizeValue(restaurant.cuisine || "Modern Akdeniz mutfağı"),
      area: localizeValue(restaurant.area || "Kadıköy şubesi"),
      cover: restaurant.cover || defaultCover,
      logo: restaurant.logo || "",
      logoColor: normalizeBrandColor(restaurant.logoColor, BRAND_COLORS.deepCyan),
      theme: {
        button: normalizeBrandColor(restaurant.theme?.button || restaurant.logoColor, BRAND_COLORS.deepCyan),
        background: normalizeBrandColor(restaurant.theme?.background, BRAND_COLORS.softGrey),
        text: normalizeBrandColor(restaurant.theme?.text, BRAND_COLORS.darkNavy),
      },
      links: {
        google: restaurant.links?.google || "",
        instagram: restaurant.links?.instagram || "",
        facebook: restaurant.links?.facebook || "",
        tiktok: restaurant.links?.tiktok || "",
        wifi: restaurant.links?.wifi || "",
      },
      location: {
        addressLine1: restaurant.location?.addressLine1 || "",
        addressLine2: restaurant.location?.addressLine2 || "",
        mapQuery: restaurant.location?.mapQuery || "",
        openingHours: normalizeOpeningHours(restaurant.location?.openingHours),
      },
      legal: {
        terms: localizeValue(restaurant.legal?.terms || ""),
        privacy: localizeValue(restaurant.legal?.privacy || ""),
        imprint: localizeValue(restaurant.legal?.imprint || ""),
      },
    },
    stats: normalizeStats(record.stats),
    categories,
    items: (record.items || []).map((item) => ({
      id: item.id || uid(),
      categoryId: item.categoryId,
      name: localizeValue(item.name || "Item"),
      description: localizeValue(item.description || ""),
      price: item.price || "",
      image: item.image || "",
    })),
  };
}

function createRestaurantRecord(name, slug, username, password, withSampleItems = false) {
  const categories = [
    { id: uid(), name: { de: "Kampagnen", en: "Campaigns" }, system: "campaigns" },
    { id: uid(), name: { de: "Vorspeisen", en: "Starters" } },
    { id: uid(), name: { de: "Hauptgerichte", en: "Main dishes" } },
    { id: uid(), name: { de: "Desserts", en: "Desserts" } },
    { id: uid(), name: { de: "Getränke", en: "Drinks" } },
  ];
  const record = {
    id: uid(),
    slug: slugify(slug || name),
    username,
    password,
    restaurant: {
      name: { de: name, en: name },
      cuisine: { de: "Restaurantküche", en: "Restaurant cuisine" },
      area: { de: "Neue Filiale", en: "New branch" },
      cover: defaultCover,
      logo: "",
      logoColor: BRAND_COLORS.deepCyan,
      theme: { button: BRAND_COLORS.deepCyan, background: BRAND_COLORS.softGrey, text: BRAND_COLORS.darkNavy },
      links: { google: "", instagram: "", facebook: "", tiktok: "", wifi: "" },
      location: {
        addressLine1: "",
        addressLine2: "",
        mapQuery: "",
        openingHours: normalizeOpeningHours(),
      },
      legal: {
        terms: { de: "", en: "" },
        privacy: { de: "", en: "" },
        imprint: { de: "", en: "" },
      },
    },
    categories,
    items: [],
    stats: normalizeStats(),
  };
  if (withSampleItems) addSampleItems(record);
  return record;
}

function addSampleItems(record) {
  const [, starter, main, dessert, drinks] = record.categories;
  record.items = [
    {
      id: uid(),
      categoryId: starter.id,
      name: { de: "Gebackener Hummus", en: "Baked hummus" },
      description: { de: "Mit Olivenöl, knusprigen Kichererbsen, Petersilie und warmem Fladenbrot.", en: "With olive oil, crispy chickpeas, parsley and warm pita." },
      price: "8,50",
      image: "",
    },
    {
      id: uid(),
      categoryId: main.id,
      name: { de: "Gegrillter Wolfsbarsch", en: "Grilled sea bass" },
      description: { de: "Saisonale Kräuter, Zitronensauce und geröstetes Gemüse.", en: "Seasonal greens, lemon sauce and roasted vegetables." },
      price: "18,90",
      image: "",
    },
    {
      id: uid(),
      categoryId: dessert.id,
      name: { de: "San Sebastian Cheesecake", en: "San Sebastian cheesecake" },
      description: { de: "Serviert mit roter Beerensauce.", en: "Served with red berry sauce." },
      price: "7,90",
      image: "",
    },
    {
      id: uid(),
      categoryId: drinks.id,
      name: { de: "Hausgemachte Limonade", en: "Homemade lemonade" },
      description: { de: "Kalt serviert mit frischer Minze und Zitronenscheiben.", en: "Served cold with fresh mint and lemon slices." },
      price: "4,50",
      image: "",
    },
  ];
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    LEGACY_KEYS.forEach((key) => localStorage.removeItem(key));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      document.documentElement.dataset.storageWarning = "quota";
    }
  }
}

function activeRestaurant() {
  const slug = getRequestedSlug();
  return state.restaurants.find((record) => record.slug === slug) || state.restaurants[0];
}

function getRequestedSlug() {
  const params = new URLSearchParams(location.search);
  if (params.get("r")) return slugify(params.get("r"));
  const parts = location.pathname.split("/").filter(Boolean);
  const last = parts.at(-1) || "";
  if (!["index.html", "admin", "platform"].includes(last) && !last.includes(".")) return slugify(last);
  return state.restaurants[0]?.slug || "luna-bistro";
}

function localMenuUrl(slug) {
  const base = location.pathname.replace(/\/(admin|platform)\/?$/, "/index.html").replace(/\/index\.html$/, "/index.html");
  return `${location.origin}${base}?r=${encodeURIComponent(slug)}`;
}

function publicMenuUrl(slug) {
  return `${state.platform.domain}/${slug}`;
}

function localizeValue(value) {
  if (value && typeof value === "object") return { de: value.de || value.en || "", en: value.en || value.de || "" };
  const text = String(value || "");
  return translations[text] || { de: text, en: text };
}

function normalizeOpeningHours(value) {
  const rows = Array.isArray(value) ? value : [];
  return OPENING_DAYS.map((day) => {
    const entry = rows.find((row) => row?.day === day.id) || {};
    return {
      day: day.id,
      open: entry.open || "",
      close: entry.close || "",
      closed: Boolean(entry.closed),
    };
  });
}

function normalizeBrandColor(value, fallback) {
  const color = String(value || "").toLowerCase();
  const oldDefaults = ["#ff6b35", "#d9480f", "#f5f7fa", "#1f2933", "#102027", "#2f9e7e"];
  return oldDefaults.includes(color) ? fallback : value || fallback;
}

function asText(value, lang = language) {
  if (value && typeof value === "object") return value[lang] || value.en || value.de || "";
  return localizeValue(value)[lang] || "";
}

function t(key) {
  return copy[language][key] || copy.en[key] || key;
}

let statusTimer = 0;

function showStatus(messageKey) {
  window.clearTimeout(statusTimer);
  elements.statusMessage.textContent = t(messageKey);
  elements.statusMessage.classList.remove("hidden");
  statusTimer = window.setTimeout(() => {
    elements.statusMessage.classList.add("hidden");
  }, 2600);
}

function isAdminRoute() {
  return location.pathname.replace(/\/+$/, "").endsWith("/admin") || location.hash === "#admin" || new URLSearchParams(location.search).has("admin");
}

function isPlatformRoute() {
  return location.pathname.replace(/\/+$/, "").endsWith("/platform") || location.hash === "#platform" || new URLSearchParams(location.search).has("platform");
}

function showRoute() {
  const platform = isPlatformRoute();
  const admin = isAdminRoute();
  elements.platformView.classList.toggle("hidden", !platform);
  elements.adminView.classList.toggle("hidden", !admin || platform);
  elements.menuView.classList.toggle("hidden", admin || platform);
  if (platform) renderPlatform();
  if (admin) renderAdmin();
}

function renderAll() {
  document.documentElement.lang = language;
  applyTheme();
  renderStaticText();
  renderRestaurant();
  renderQuickActions();
  renderMenu();
  renderRestaurantFooter();
  renderAdmin();
  renderPlatform();
  showRoute();
}

function renderStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  elements.searchInput.placeholder = t("searchPlaceholder");
  elements.languageToggle.textContent = language === "de" ? "EN" : "DE";
}

function renderRestaurant() {
  const record = activeRestaurant();
  const restaurant = record.restaurant;
  renderBrandMark();
  elements.restaurantNameTop.textContent = asText(restaurant.name);
  elements.restaurantAreaTop.textContent = asText(restaurant.area) || "QR & NFC";
  elements.restaurantName.textContent = asText(restaurant.name);
  elements.restaurantCuisine.textContent = asText(restaurant.cuisine);
  elements.coverImage.src = restaurant.cover || defaultCover;
  elements.dashboardTitle.textContent = asText(restaurant.name);
  elements.restaurantNameDeInput.value = asText(restaurant.name, "de");
  elements.restaurantNameEnInput.value = asText(restaurant.name, "en");
  elements.restaurantCuisineDeInput.value = asText(restaurant.cuisine, "de");
  elements.restaurantCuisineEnInput.value = asText(restaurant.cuisine, "en");
  elements.restaurantAreaDeInput.value = asText(restaurant.area, "de");
  elements.restaurantAreaEnInput.value = asText(restaurant.area, "en");
  elements.logoColorInput.value = normalizeBrandColor(restaurant.logoColor, BRAND_COLORS.deepCyan);
  elements.buttonColorInput.value = normalizeBrandColor(restaurant.theme?.button, BRAND_COLORS.deepCyan);
  elements.backgroundColorInput.value = normalizeBrandColor(restaurant.theme?.background, BRAND_COLORS.softGrey);
  elements.textColorInput.value = normalizeBrandColor(restaurant.theme?.text, BRAND_COLORS.darkNavy);
  elements.googleReviewInput.value = restaurant.links?.google || "";
  elements.instagramInput.value = restaurant.links?.instagram || "";
  elements.facebookInput.value = restaurant.links?.facebook || "";
  elements.tiktokInput.value = restaurant.links?.tiktok || "";
  elements.wifiInput.value = restaurant.links?.wifi || "";
  elements.addressLine1Input.value = restaurant.location?.addressLine1 || "";
  elements.addressLine2Input.value = restaurant.location?.addressLine2 || "";
  elements.mapQueryInput.value = restaurant.location?.mapQuery || "";
  renderOpeningHoursEditor(restaurant.location?.openingHours);
  elements.termsDeInput.value = asText(restaurant.legal?.terms, "de");
  elements.termsEnInput.value = asText(restaurant.legal?.terms, "en");
  elements.privacyDeInput.value = asText(restaurant.legal?.privacy, "de");
  elements.privacyEnInput.value = asText(restaurant.legal?.privacy, "en");
  elements.imprintDeInput.value = asText(restaurant.legal?.imprint, "de");
  elements.imprintEnInput.value = asText(restaurant.legal?.imprint, "en");
}

function renderOpeningHoursEditor(openingHours) {
  const rows = normalizeOpeningHours(openingHours);
  elements.openingHoursEditor.innerHTML = rows
    .map((row) => {
      const day = OPENING_DAYS.find((entry) => entry.id === row.day);
      return `
        <div class="opening-editor-row" data-opening-day="${row.day}">
          <strong>${day.de} / ${day.en}</strong>
          <label>
            <span>Open</span>
            <input type="time" data-opening-open value="${escapeHtml(row.open)}" ${row.closed ? "disabled" : ""} />
          </label>
          <label>
            <span>Close</span>
            <input type="time" data-opening-close value="${escapeHtml(row.close)}" ${row.closed ? "disabled" : ""} />
          </label>
          <label class="closed-toggle">
            <input type="checkbox" data-opening-closed ${row.closed ? "checked" : ""} />
            <span>${t("closed")}</span>
          </label>
        </div>
      `;
    })
    .join("");
}

function readOpeningHoursEditor() {
  return Array.from(elements.openingHoursEditor.querySelectorAll("[data-opening-day]")).map((row) => ({
    day: row.dataset.openingDay,
    open: row.querySelector("[data-opening-open]").value,
    close: row.querySelector("[data-opening-close]").value,
    closed: row.querySelector("[data-opening-closed]").checked,
  }));
}

function renderOpeningHoursList(openingHours) {
  const rows = normalizeOpeningHours(openingHours);
  const hasAnyValue = rows.some((row) => row.closed || row.open || row.close);
  if (!hasAnyValue) {
    return `<p class="opening-hours-empty">${language === "de" ? "Noch keine Öffnungszeiten hinterlegt." : "No opening hours added yet."}</p>`;
  }
  return rows
    .map((row) => {
      const day = OPENING_DAYS.find((entry) => entry.id === row.day);
      const dayName = day?.[language] || row.day;
      const hours = row.closed
        ? t("closed")
        : row.open && row.close
          ? `${row.open} - ${row.close}`
          : language === "de"
            ? "Nicht angegeben"
            : "Not specified";
      return `
        <div class="opening-hours-line">
          <span>${escapeHtml(dayName)}</span>
          <strong>${escapeHtml(hours)}</strong>
        </div>
      `;
    })
    .join("");
}

function renderRestaurantFooter() {
  const restaurant = activeRestaurant().restaurant;
  const addressLine1 = restaurant.location?.addressLine1 || asText(restaurant.name);
  const addressLine2 = restaurant.location?.addressLine2 || asText(restaurant.area);
  const mapQuery = restaurant.location?.mapQuery || `${addressLine1} ${addressLine2}`;
  const openingHours = renderOpeningHoursList(restaurant.location?.openingHours);
  elements.mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  elements.footerAddressLine1.textContent = addressLine1;
  elements.footerAddressLine2.textContent = addressLine2;
  elements.footerOpeningHours.innerHTML = openingHours;
}

function renderQuickActions() {
  const links = activeRestaurant().restaurant.links || {};
  const socialActions = [
    links.instagram ? renderSocialButton("Instagram", links.instagram, "instagram") : "",
    links.facebook ? renderSocialButton("Facebook", links.facebook, "facebook") : "",
    links.tiktok ? renderSocialButton("TikTok", links.tiktok, "tiktok") : "",
  ].join("");
  const actions = [
    `<button class="action-button primary-action menu-action" type="button" data-open-menu>${language === "de" ? "Menü" : "Menu"}</button>`,
    links.google ? renderGoogleReviewButton(links.google) : "",
    socialActions ? `<div class="social-tabs">${socialActions}</div>` : "",
    links.wifi ? renderActionButton("WiFi", links.wifi, "wifi") : "",
  ].join("");
  elements.quickActions.innerHTML = actions;
  elements.menuLayout.classList.toggle("hidden", !menuOpened);
}

function renderGoogleReviewButton(rawUrl) {
  const url = normalizeActionUrl(rawUrl);
  if (!url) return "";
  const label = language === "de" ? "Bewerten Sie uns auf" : "Review us on";
  return `
    <a class="action-button review-action google-review-card" href="${escapeHtml(url)}" target="_blank" rel="noopener" data-action-kind="google" data-action-url="${escapeHtml(url)}" aria-label="${escapeHtml(label)} Google">
      <span class="google-review-text">${escapeHtml(label)}</span>
      <span class="google-word" aria-hidden="true">
        <span class="google-blue">G</span><span class="google-red">o</span><span class="google-yellow">o</span><span class="google-blue">g</span><span class="google-green">l</span><span class="google-red">e</span>
      </span>
      <span class="google-stars" aria-hidden="true">★★★★★</span>
    </a>
  `;
}

function renderActionButton(label, rawUrl, kind, extraClass = "") {
  const url = normalizeActionUrl(rawUrl);
  if (!url) return "";
  return `<a class="action-button ${escapeHtml(extraClass)}" href="${escapeHtml(url)}" target="_blank" rel="noopener" data-action-kind="${escapeHtml(kind)}" data-action-url="${escapeHtml(url)}">${label}</a>`;
}

function renderSocialButton(label, rawUrl, kind) {
  const url = normalizeActionUrl(rawUrl);
  if (!url) return "";
  return `<a class="action-button social-tab social-tab-${escapeHtml(kind)}" href="${escapeHtml(url)}" target="_blank" rel="noopener" aria-label="${label}" title="${label}" data-action-kind="${escapeHtml(kind)}" data-action-url="${escapeHtml(url)}">${socialIcon(kind)}</a>`;
}

function socialIcon(kind) {
  const icons = {
    instagram:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5"></rect><circle cx="12" cy="12" r="3.4"></circle><circle cx="17" cy="7" r="1"></circle></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.2h2.4V4.3c-.4-.1-1.9-.3-3.5-.3-3.5 0-5.8 2.1-5.8 6v3.3H3.2v4.4h3.9V24h4.7v-6.3h3.7l.7-4.4h-4.4v-2.9c0-1.3.4-2.2 2.2-2.2Z"></path></svg>',
    tiktok:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.6 3c.4 3 2.1 4.8 5.1 5v4.1c-1.8.1-3.4-.4-5-1.4v6.6c0 8.4-9.2 11-12.9 5-2.4-3.9-.9-10.7 6.7-11v4.4c-.6.1-1.2.2-1.8.5-1.7.8-2.6 2.4-2.1 3.9.9 2.9 5.7 2.2 5.3-1.9V3h4.7Z"></path></svg>',
  };
  return icons[kind] || "";
}

function normalizeActionUrl(rawUrl) {
  const url = String(rawUrl || "").trim();
  if (!url) return "";
  const scheme = url.match(/^([a-z][a-z0-9+.-]*):/i)?.[1]?.toLowerCase();
  if (scheme) return ["http", "https", "mailto", "tel", "wifi"].includes(scheme) ? url : "";
  if (url.startsWith("//")) return `https:${url}`;
  return `https://${url}`;
}

function openExternalAction(url) {
  if (!url) return;
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function openInstagramAction(url) {
  const username = getInstagramUsername(url);
  if (!username) {
    openExternalAction(url);
    return;
  }
  openExternalAction(`instagram://user?username=${encodeURIComponent(username)}`);
  window.setTimeout(() => {
    if (!document.hidden) openExternalAction(url);
  }, 900);
}

function getInstagramUsername(url) {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes("instagram.com")) return "";
    const username = parsed.pathname.split("/").filter(Boolean)[0] || "";
    if (!username || ["p", "reel", "stories", "explore"].includes(username)) return "";
    return username;
  } catch {
    return "";
  }
}

function applyTheme() {
  const theme = activeRestaurant().restaurant.theme || {};
  const root = document.documentElement;
  root.style.setProperty("--accent", normalizeBrandColor(theme.button, BRAND_COLORS.deepCyan));
  root.style.setProperty("--accent-dark", BRAND_COLORS.darkNavy);
  root.style.setProperty("--soft", normalizeBrandColor(theme.background, BRAND_COLORS.softGrey));
  root.style.setProperty("--ink", normalizeBrandColor(theme.text, BRAND_COLORS.darkNavy));
}

function renderBrandMark() {
  const restaurant = activeRestaurant().restaurant;
  const initial = (asText(restaurant.name) || "D").trim().charAt(0) || "D";
  [elements.brandMark, elements.logoPreview].forEach((mark) => {
    mark.textContent = initial;
    mark.style.backgroundColor = normalizeBrandColor(restaurant.logoColor, BRAND_COLORS.deepCyan);
    mark.style.backgroundImage = restaurant.logo ? `url("${restaurant.logo}")` : "";
    mark.classList.toggle("has-logo", Boolean(restaurant.logo));
  });
}

function renderMenu() {
  const record = activeRestaurant();
  const search = elements.searchInput.value.trim().toLocaleLowerCase(language === "de" ? "de-DE" : "en-US");
  if (!record.categories.some((category) => category.id === activeCategory)) activeCategory = record.categories[0]?.id || "";
  elements.categoryTabs.innerHTML = "";
  floatingCategoryTabs.innerHTML = "";
  record.categories.forEach((category) => {
    const count = record.items.filter((item) => item.categoryId === category.id).length;
    elements.categoryTabs.appendChild(createCategoryButton(category, count));
    floatingCategoryTabs.appendChild(createCategoryButton(category, count));
  });
  updateFloatingCategoryTabs();

  const visibleCategories = record.categories
    .map((category) => ({
      ...category,
      items: record.items.filter((item) => {
        const text = `${asText(item.name)} ${asText(item.description)} ${asText(item.name, "en")} ${asText(item.description, "en")} ${asText(item.name, "de")} ${asText(item.description, "de")}`.toLocaleLowerCase(language === "de" ? "de-DE" : "en-US");
        return item.categoryId === category.id && (!search || text.includes(search));
      }),
    }))
    .filter((category) => category.items.length || !search);

  elements.menuContent.innerHTML = "";
  if (!visibleCategories.length) {
    elements.menuContent.innerHTML = `<div class="empty-state">${t("noResults")}</div>`;
    return;
  }
  visibleCategories.forEach((category) => {
    const section = document.createElement("section");
    section.className = "category-section";
    section.dataset.category = category.id;
    const cards = category.items.length ? category.items.map(renderMenuCard).join("") : `<div class="empty-state">${t("emptyCategory")}</div>`;
    section.innerHTML = `<h2>${escapeHtml(asText(category.name))}</h2><div class="item-grid">${cards}</div>`;
    elements.menuContent.appendChild(section);
  });
}

function createCategoryButton(category, count) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `category-tab${category.id === activeCategory ? " active" : ""}`;
  button.innerHTML = `<strong>${escapeHtml(asText(category.name))}</strong><span>${count}</span>`;
  button.addEventListener("click", () => {
    activeCategory = category.id;
    renderMenu();
    updateFloatingCategoryTabs();
    document.querySelector(`[data-category="${category.id}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  return button;
}

function updateFloatingCategoryTabs() {
  const shouldShow =
    menuOpened &&
    !isAdminRoute() &&
    !isPlatformRoute() &&
    !elements.menuLayout.classList.contains("hidden") &&
    elements.categoryTabs.getBoundingClientRect().bottom <= 0;
  floatingCategoryTabs.classList.toggle("hidden", !shouldShow);
  document.body.classList.toggle("floating-categories-visible", Boolean(shouldShow));
}

function renderMenuCard(item) {
  const itemName = asText(item.name);
  const photo = item.image ? `<img class="item-photo" src="${item.image}" alt="${escapeHtml(itemName)}" />` : "";
  return `
    <article class="menu-card${item.image ? " has-photo" : ""}" data-menu-item="${item.id}" role="button" tabindex="0" aria-label="${escapeHtml(itemName)}">
      <div>
        <h3>${escapeHtml(itemName)}</h3>
        <p>${escapeHtml(asText(item.description) || t("noDescription"))}</p>
        <strong class="price">${escapeHtml(item.price)} €</strong>
      </div>
      ${photo}
    </article>
  `;
}

function openMenuItemModal(itemId) {
  const item = activeRestaurant().items.find((entry) => entry.id === itemId);
  if (!item) return;
  activeMenuItemId = itemId;
  const itemName = asText(item.name);
  const description = asText(item.description) || t("noDescription");
  const photo = item.image ? `<img class="menu-item-modal-photo" src="${item.image}" alt="${escapeHtml(itemName)}" />` : "";
  elements.menuItemDialog.innerHTML = `
    <button class="menu-item-close" type="button" aria-label="Close">×</button>
    <div class="menu-item-handle" aria-hidden="true"></div>
    ${photo}
    <div class="menu-item-modal-body">
      <div class="menu-item-modal-title">
        <h2 id="menuItemModalTitle">${escapeHtml(itemName)}</h2>
        <strong>${escapeHtml(item.price)} €</strong>
      </div>
      <p>${escapeHtml(description)}</p>
    </div>
  `;
  elements.menuItemModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeMenuItemModal() {
  activeMenuItemId = "";
  elements.menuItemModal.classList.add("hidden");
  elements.menuItemDialog.innerHTML = "";
  document.body.classList.remove("modal-open");
}

function openLegalModal(kind) {
  const restaurant = activeRestaurant().restaurant;
  const titles = {
    terms: "AGB",
    privacy: "Datenschutzerklärung",
    imprint: "Impressum",
  };
  const content = asText(restaurant.legal?.[kind]) || (language === "de" ? "Noch kein Text hinterlegt." : "No text added yet.");
  activeMenuItemId = "";
  elements.menuItemDialog.innerHTML = `
    <button class="menu-item-close" type="button" aria-label="Close">×</button>
    <div class="menu-item-handle" aria-hidden="true"></div>
    <div class="menu-item-modal-body legal-modal-body">
      <h2 id="menuItemModalTitle">${titles[kind]}</h2>
      <p>${escapeHtml(content)}</p>
    </div>
  `;
  elements.menuItemModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function renderAdmin() {
  const record = activeRestaurant();
  elements.loginPanel.classList.toggle("hidden", isLoggedIn);
  elements.dashboardPanel.classList.toggle("hidden", !isLoggedIn);
  if (!isLoggedIn) return;
  renderAdminTabs();
  renderAdminStats(record);
  renderItemFormMode();

  elements.itemCategoryInput.innerHTML = record.categories
    .map((category) => `<option value="${category.id}">${escapeHtml(asText(category.name, "de"))} / ${escapeHtml(asText(category.name, "en"))}</option>`)
    .join("");

  elements.categoryAdminList.innerHTML =
    record.categories
      .map(
        (category) => `
        <div class="admin-row">
          <div><strong>${escapeHtml(asText(category.name, "de"))}</strong><span>${escapeHtml(asText(category.name, "en"))} · ${record.items.filter((item) => item.categoryId === category.id).length} ${copy.en.currentItems.toLowerCase()}</span></div>
          <button type="button" data-delete-category="${category.id}">Delete</button>
        </div>
      `,
      )
      .join("") || `<div class="empty-state">${t("noItems")}</div>`;

  elements.itemAdminList.innerHTML =
    record.categories
      .map((category) => {
        const items = record.items.filter((item) => item.categoryId === category.id);
        const rows = items.length
          ? items
              .map(
                (item) => `
                  <div class="admin-row">
                    <div><strong>${escapeHtml(asText(item.name, "de"))}</strong><span>${escapeHtml(asText(item.name, "en"))} · ${escapeHtml(item.price)} €</span></div>
                    <div class="row-actions">
                      <button type="button" data-edit-item="${item.id}">${t("edit")}</button>
                      <button type="button" data-delete-item="${item.id}">Delete</button>
                    </div>
                  </div>
                `,
              )
              .join("")
          : `<div class="empty-state compact">${t("emptyCategory")}</div>`;
        return `
          <div class="admin-group">
            <h3>${escapeHtml(asText(category.name))}<span>${items.length}</span></h3>
            ${rows}
          </div>
        `;
      })
      .join("") || `<div class="empty-state">${t("noItems")}</div>`;
}

function renderItemFormMode() {
  const isEditing = Boolean(editingItemId);
  elements.itemSubmitButton.textContent = isEditing ? t("updateItem") : t("addItem");
  elements.cancelItemEditButton.classList.toggle("hidden", !isEditing);
}

function startItemEdit(itemId) {
  const item = activeRestaurant().items.find((entry) => entry.id === itemId);
  if (!item) return;
  editingItemId = itemId;
  activeAdminTab = "items";
  elements.itemCategoryInput.value = item.categoryId;
  elements.itemNameDeInput.value = asText(item.name, "de");
  elements.itemNameEnInput.value = asText(item.name, "en");
  elements.itemDescriptionDeInput.value = asText(item.description, "de");
  elements.itemDescriptionEnInput.value = asText(item.description, "en");
  elements.itemPriceInput.value = item.price;
  elements.itemImageInput.value = "";
  renderItemFormMode();
  renderAdminTabs();
  elements.itemForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetItemForm() {
  editingItemId = "";
  elements.itemForm.reset();
  renderItemFormMode();
}

function renderAdminTabs() {
  document.querySelectorAll("[data-admin-section]").forEach((section) => {
    section.classList.toggle("hidden", section.dataset.adminSection !== activeAdminTab);
  });
  elements.adminMenu.querySelectorAll("[data-admin-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminTab === activeAdminTab);
  });
}

function renderAdminStats(record) {
  const now = new Date();
  const stats = normalizeStats(record.stats);
  const categoryStats = record.categories.map((category) => ({
    name: asText(category.name),
    count: record.items.filter((item) => item.categoryId === category.id).length,
  }));
  elements.adminStatsGrid.innerHTML = `
    <div><strong>${stats.weekly[weekKey(now)] || 0}</strong><span>${t("viewsWeek")}</span></div>
    <div><strong>${stats.monthly[monthKey(now)] || 0}</strong><span>${t("viewsMonth")}</span></div>
    <div><strong>${stats.total}</strong><span>${t("viewsTotal")}</span></div>
  `;
  elements.dashboardSummaryGrid.innerHTML = `
    <div><strong>${record.categories.length}</strong><span>${t("categoryCount")}</span></div>
    <div><strong>${record.items.length}</strong><span>${t("itemTotal")}</span></div>
  `;
  elements.categoryStatsList.innerHTML = `
    <h3>${t("categoryStats")}</h3>
    <div>
      ${categoryStats
        .map((category) => `<span><strong>${escapeHtml(category.name)}</strong><em>${category.count}</em></span>`)
        .join("")}
    </div>
  `;
}

function renderPlatform() {
  const now = new Date();
  const currentWeek = weekKey(now);
  const currentMonth = monthKey(now);
  elements.platformRestaurantList.innerHTML = state.restaurants
    .map((record) => {
      const localUrl = localMenuUrl(record.slug);
      const publicUrl = publicMenuUrl(record.slug);
      const stats = normalizeStats(record.stats);
      return `
        <article class="platform-row">
          <div class="platform-row-main">
            <div>
              <h3>${escapeHtml(asText(record.restaurant.name, "en"))}</h3>
              <span>/${escapeHtml(record.slug)}</span>
            </div>
            <div class="platform-row-actions">
              <a class="primary-link" href="${escapeHtml(localUrl)}">Open restaurant page</a>
              <button class="secondary-button" type="button" data-toggle-details="${record.id}">Details</button>
            </div>
          </div>
          <div class="platform-details hidden" id="details-${record.id}">
            <div class="stats-grid">
              <div><strong>${stats.weekly[currentWeek] || 0}</strong><span>This week</span></div>
              <div><strong>${stats.monthly[currentMonth] || 0}</strong><span>This month</span></div>
              <div><strong>${stats.total}</strong><span>Total views</span></div>
            </div>
            <div class="detail-grid">
              <label>Username <input value="${escapeHtml(record.username)}" readonly /></label>
              <label>Password <input value="${escapeHtml(record.password)}" readonly /></label>
              <label>New password <input data-password-input="${record.id}" placeholder="New password" /></label>
              <button class="secondary-button" type="button" data-reset-password="${record.id}">Reset password</button>
              <label>Live URL <input value="${escapeHtml(publicUrl)}" readonly /></label>
              <label>Local preview <input value="${escapeHtml(localUrl)}" readonly /></label>
            </div>
            <div class="platform-actions">
              <button class="secondary-button" type="button" data-copy-link="${escapeHtml(localUrl)}">Copy NFC link</button>
              <button class="secondary-button" type="button" data-download-qr="${record.id}" data-qr-url="${escapeHtml(publicUrl)}">Download QR PNG</button>
              <a class="text-link" href="${escapeHtml(localUrl)}&admin=1">Open restaurant admin</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function slugify(value) {
  return String(value || "")
    .toLocaleLowerCase("en-US")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    if (!file) return resolve("");
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

function drawQrLikeCode(text, canvas) {
  const ctx = canvas.getContext("2d");
  const size = canvas.width;
  const modules = 21;
  const cell = size / modules;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "#102027";
  let hash = 2166136261;
  for (const char of text) {
    hash ^= char.charCodeAt(0);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  const finder = (x, y) => {
    ctx.fillRect(x * cell, y * cell, 7 * cell, 7 * cell);
    ctx.fillStyle = "#fff";
    ctx.fillRect((x + 1) * cell, (y + 1) * cell, 5 * cell, 5 * cell);
    ctx.fillStyle = "#102027";
    ctx.fillRect((x + 2) * cell, (y + 2) * cell, 3 * cell, 3 * cell);
  };
  finder(1, 1);
  finder(13, 1);
  finder(1, 13);
  for (let y = 0; y < modules; y += 1) {
    for (let x = 0; x < modules; x += 1) {
      const inFinder = (x >= 1 && x <= 7 && y >= 1 && y <= 7) || (x >= 13 && x <= 19 && y >= 1 && y <= 7) || (x >= 1 && x <= 7 && y >= 13 && y <= 19);
      if (inFinder) continue;
      const bit = (hash >> ((x * 3 + y * 5) % 24)) & 1;
      if (bit || (x * y + y + hash) % 7 === 0) ctx.fillRect(x * cell, y * cell, cell, cell);
    }
  }
}

elements.showMenu.addEventListener("click", () => {
  history.pushState(null, "", localMenuUrl(activeRestaurant().slug));
  isLoggedIn = false;
  renderAll();
});

elements.languageToggle.addEventListener("click", () => {
  language = language === "de" ? "en" : "de";
  localStorage.setItem("digital-menu-language", language);
  renderAll();
});

elements.searchInput.addEventListener("input", renderMenu);

elements.menuContent.addEventListener("click", (event) => {
  const card = event.target.closest("[data-menu-item]");
  if (!card) return;
  if (activeMenuItemId === card.dataset.menuItem) {
    closeMenuItemModal();
    return;
  }
  openMenuItemModal(card.dataset.menuItem);
});

elements.menuContent.addEventListener("keydown", (event) => {
  if (!["Enter", " "].includes(event.key)) return;
  const card = event.target.closest("[data-menu-item]");
  if (!card) return;
  event.preventDefault();
  openMenuItemModal(card.dataset.menuItem);
});

elements.menuItemModal.addEventListener("click", (event) => {
  if (event.target === elements.menuItemModal || event.target.closest(".menu-item-close")) closeMenuItemModal();
});

document.querySelector("#restaurantFooter").addEventListener("click", (event) => {
  const legalButton = event.target.closest("[data-legal]");
  if (!legalButton) return;
  openLegalModal(legalButton.dataset.legal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.menuItemModal.classList.contains("hidden")) closeMenuItemModal();
});

elements.quickActions.addEventListener("click", (event) => {
  const menuButton = event.target.closest("[data-open-menu]");
  const actionButton = event.target.closest("[data-action-url]");
  if (menuButton) {
    menuOpened = true;
    elements.menuLayout.classList.remove("hidden");
    elements.menuLayout.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(updateFloatingCategoryTabs, 350);
    return;
  }
  if (actionButton?.tagName === "A") return;
  if (actionButton?.dataset.actionKind === "instagram") {
    openInstagramAction(actionButton.dataset.actionUrl);
    return;
  }
  if (actionButton) openExternalAction(actionButton.dataset.actionUrl);
});

elements.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const record = activeRestaurant();
  const username = elements.emailInput.value.trim();
  const password = elements.passwordInput.value.trim();
  if ((username === record.username && password === record.password) || (username === "demo@restoran.com" && password === "123456")) {
    isLoggedIn = true;
    elements.loginMessage.textContent = "";
    renderAdmin();
    return;
  }
  elements.loginMessage.textContent = t("invalidLogin");
});

elements.logoutButton.addEventListener("click", () => {
  isLoggedIn = false;
  renderAdmin();
});

elements.adminMenu.addEventListener("click", (event) => {
  const button = event.target.closest("[data-admin-tab]");
  if (!button) return;
  activeAdminTab = button.dataset.adminTab;
  renderAdminTabs();
});

elements.openingHoursEditor.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-opening-closed]");
  if (!checkbox) return;
  const row = checkbox.closest("[data-opening-day]");
  row.querySelectorAll("[data-opening-open], [data-opening-close]").forEach((input) => {
    input.disabled = checkbox.checked;
    if (checkbox.checked) input.value = "";
  });
});

elements.restaurantForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const record = activeRestaurant();
  const cover = await readFileAsDataUrl(elements.coverInput.files[0]);
  const logo = await readFileAsDataUrl(elements.logoInput.files[0]);
  record.restaurant = {
    ...record.restaurant,
    name: { de: elements.restaurantNameDeInput.value.trim(), en: elements.restaurantNameEnInput.value.trim() },
    cuisine: { de: elements.restaurantCuisineDeInput.value.trim(), en: elements.restaurantCuisineEnInput.value.trim() },
    area: { de: elements.restaurantAreaDeInput.value.trim(), en: elements.restaurantAreaEnInput.value.trim() },
    cover: cover || record.restaurant.cover,
    logo: logo || record.restaurant.logo,
    logoColor: elements.logoColorInput.value || record.restaurant.logoColor || BRAND_COLORS.deepCyan,
    theme: {
      button: elements.buttonColorInput.value || BRAND_COLORS.deepCyan,
      background: elements.backgroundColorInput.value || BRAND_COLORS.softGrey,
      text: elements.textColorInput.value || BRAND_COLORS.darkNavy,
    },
    links: {
      google: elements.googleReviewInput.value.trim(),
      instagram: elements.instagramInput.value.trim(),
      facebook: elements.facebookInput.value.trim(),
      tiktok: elements.tiktokInput.value.trim(),
      wifi: elements.wifiInput.value.trim(),
    },
    location: {
      addressLine1: elements.addressLine1Input.value.trim(),
      addressLine2: elements.addressLine2Input.value.trim(),
      mapQuery: elements.mapQueryInput.value.trim(),
      openingHours: readOpeningHoursEditor(),
    },
    legal: {
      terms: { de: elements.termsDeInput.value.trim(), en: elements.termsEnInput.value.trim() },
      privacy: { de: elements.privacyDeInput.value.trim(), en: elements.privacyEnInput.value.trim() },
      imprint: { de: elements.imprintDeInput.value.trim(), en: elements.imprintEnInput.value.trim() },
    },
  };
  record.slug = slugify(elements.restaurantNameEnInput.value.trim() || elements.restaurantNameDeInput.value.trim()) || record.slug;
  elements.coverInput.value = "";
  elements.logoInput.value = "";
  saveState();
  renderAll();
  showStatus("messageRestaurantSaved");
});

elements.logoColorInput.addEventListener("input", () => {
  activeRestaurant().restaurant.logoColor = elements.logoColorInput.value;
  renderBrandMark();
  showStatus("messageThemeChanged");
});

[elements.buttonColorInput, elements.backgroundColorInput, elements.textColorInput].forEach((input) => {
  input.addEventListener("input", () => {
    activeRestaurant().restaurant.theme = {
      button: elements.buttonColorInput.value,
      background: elements.backgroundColorInput.value,
      text: elements.textColorInput.value,
    };
    applyTheme();
    showStatus("messageThemeChanged");
  });
});

elements.categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const de = elements.categoryNameDeInput.value.trim();
  const en = elements.categoryNameEnInput.value.trim();
  if (!de || !en) return;
  const category = { id: uid(), name: { de, en } };
  activeRestaurant().categories.push(category);
  activeCategory = category.id;
  elements.categoryForm.reset();
  saveState();
  renderAll();
  activeAdminTab = "categories";
  renderAdminTabs();
  showStatus("messageCategoryAdded");
});

elements.itemForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const image = await readFileAsDataUrl(elements.itemImageInput.files[0]);
  const record = activeRestaurant();
  const payload = {
    categoryId: elements.itemCategoryInput.value,
    name: { de: elements.itemNameDeInput.value.trim(), en: elements.itemNameEnInput.value.trim() },
    description: { de: elements.itemDescriptionDeInput.value.trim(), en: elements.itemDescriptionEnInput.value.trim() },
    price: elements.itemPriceInput.value.trim(),
  };
  const existingItem = record.items.find((item) => item.id === editingItemId);
  if (existingItem) {
    Object.assign(existingItem, payload, { image: image || existingItem.image || "" });
  } else {
    record.items.push({
      id: uid(),
      ...payload,
      image,
    });
  }
  const wasEditing = Boolean(existingItem);
  resetItemForm();
  saveState();
  renderAll();
  activeAdminTab = "items";
  renderAdminTabs();
  showStatus(wasEditing ? "messageItemUpdated" : "messageItemAdded");
});

elements.cancelItemEditButton.addEventListener("click", () => {
  resetItemForm();
});

elements.platformRestaurantNameInput.addEventListener("input", () => {
  if (!elements.platformSlugInput.dataset.touched) elements.platformSlugInput.value = slugify(elements.platformRestaurantNameInput.value);
});

elements.platformSlugInput.addEventListener("input", () => {
  elements.platformSlugInput.dataset.touched = "true";
  elements.platformSlugInput.value = slugify(elements.platformSlugInput.value);
});

elements.platformRestaurantForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = elements.platformRestaurantNameInput.value.trim();
  const slug = slugify(elements.platformSlugInput.value || name);
  if (!name || !slug || state.restaurants.some((record) => record.slug === slug)) return;
  state.restaurants.push(createRestaurantRecord(name, slug, elements.platformUsernameInput.value.trim(), elements.platformPasswordInput.value.trim()));
  elements.platformRestaurantForm.reset();
  delete elements.platformSlugInput.dataset.touched;
  saveState();
  renderAll();
  showStatus("messageRestaurantCreated");
});

elements.platformRestaurantList.addEventListener("click", async (event) => {
  const toggleId = event.target.dataset.toggleDetails;
  if (toggleId) {
    document.querySelector(`#details-${toggleId}`)?.classList.toggle("hidden");
    return;
  }

  const resetId = event.target.dataset.resetPassword;
  if (resetId) {
    const record = state.restaurants.find((entry) => entry.id === resetId);
    const input = document.querySelector(`[data-password-input="${resetId}"]`);
    const nextPassword = input?.value.trim();
    if (!record || !nextPassword) return;
    record.password = nextPassword;
    saveState();
    renderPlatform();
    showStatus("messagePasswordReset");
    return;
  }

  const qrId = event.target.dataset.downloadQr;
  if (qrId) {
    downloadQrPng(event.target.dataset.qrUrl, `qr-${state.restaurants.find((entry) => entry.id === qrId)?.slug || "restaurant"}.png`);
    showStatus("messageQrDownloaded");
    return;
  }

  const link = event.target.dataset.copyLink;
  if (!link) return;
  await navigator.clipboard.writeText(link);
  event.target.textContent = "Copied";
  showStatus("messageLinkCopied");
  setTimeout(() => {
    event.target.textContent = "Copy NFC link";
  }, 1200);
});

function downloadQrPng(text, filename) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  drawQrLikeCode(text, canvas);
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = filename;
  link.click();
}

elements.categoryAdminList.addEventListener("click", (event) => {
  const id = event.target.dataset.deleteCategory;
  if (!id) return;
  const category = activeRestaurant().categories.find((entry) => entry.id === id);
  openDeleteModal({ type: "category", id, message: `${t("confirmDeleteCategory")} ${category ? asText(category.name) : ""}` });
});

elements.itemAdminList.addEventListener("click", (event) => {
  const editId = event.target.dataset.editItem;
  if (editId) {
    startItemEdit(editId);
    return;
  }
  const id = event.target.dataset.deleteItem;
  if (!id) return;
  const item = activeRestaurant().items.find((entry) => entry.id === id);
  openDeleteModal({ type: "item", id, message: `${t("confirmDeleteItem")} ${item ? asText(item.name) : ""}` });
});

function openDeleteModal(details) {
  pendingDelete = details;
  elements.confirmMessage.textContent = details.message;
  elements.confirmModal.classList.remove("hidden");
}

function closeDeleteModal() {
  pendingDelete = null;
  elements.confirmModal.classList.add("hidden");
}

elements.cancelDeleteButton.addEventListener("click", closeDeleteModal);
elements.confirmModal.addEventListener("click", (event) => {
  if (event.target === elements.confirmModal) closeDeleteModal();
});
elements.confirmDeleteButton.addEventListener("click", () => {
  const record = activeRestaurant();
  if (!pendingDelete) return;
  if (pendingDelete.type === "category") {
    record.categories = record.categories.filter((category) => category.id !== pendingDelete.id);
    record.items = record.items.filter((item) => item.categoryId !== pendingDelete.id);
    if (!record.items.some((item) => item.id === editingItemId)) resetItemForm();
  }
  if (pendingDelete.type === "item") {
    record.items = record.items.filter((item) => item.id !== pendingDelete.id);
    if (editingItemId === pendingDelete.id) resetItemForm();
  }
  closeDeleteModal();
  saveState();
  renderAll();
  showStatus("messageDeleted");
});

window.addEventListener("popstate", renderAll);
window.addEventListener("hashchange", renderAll);
window.addEventListener("scroll", updateFloatingCategoryTabs, { passive: true });
window.addEventListener("resize", updateFloatingCategoryTabs);

trackRestaurantView();
saveState();
renderAll();
