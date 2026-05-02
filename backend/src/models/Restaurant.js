import mongoose from "mongoose";

const localizedTextSchema = new mongoose.Schema(
  {
    de: { type: String, trim: true, default: "" },
    en: { type: String, trim: true, default: "" },
  },
  { _id: false },
);

const openingHourSchema = new mongoose.Schema(
  {
    day: { type: String, trim: true, required: true },
    open: { type: String, trim: true, default: "10:00" },
    close: { type: String, trim: true, default: "23:00" },
    closed: { type: Boolean, default: false },
  },
  { _id: false },
);

const restaurantSchema = new mongoose.Schema(
  {
    slug: { type: String, trim: true, unique: true, index: true, required: true },
    username: { type: String, trim: true, unique: true, sparse: true },
    password: { type: String, trim: true, default: "" },
    license: {
      start: { type: String, trim: true, default: "" },
      end: { type: String, trim: true, default: "" },
    },
    restaurant: {
      name: { type: localizedTextSchema, required: true },
      cuisine: { type: localizedTextSchema, default: () => ({}) },
      area: { type: localizedTextSchema, default: () => ({}) },
      cover: { type: String, default: "" },
      logo: { type: String, default: "" },
      logoColor: { type: String, trim: true, default: "#176b85" },
      theme: {
        button: { type: String, trim: true, default: "#176b85" },
        background: { type: String, trim: true, default: "#eeeeee" },
        text: { type: String, trim: true, default: "#053b50" },
      },
      links: {
        google: { type: String, trim: true, default: "" },
        instagram: { type: String, trim: true, default: "" },
        facebook: { type: String, trim: true, default: "" },
        tiktok: { type: String, trim: true, default: "" },
        wifi: { type: String, trim: true, default: "" },
      },
      location: {
        addressLine1: { type: String, trim: true, default: "" },
        addressLine2: { type: String, trim: true, default: "" },
        mapQuery: { type: String, trim: true, default: "" },
        openingHours: { type: [openingHourSchema], default: [] },
      },
      legal: {
        terms: { type: localizedTextSchema, default: () => ({}) },
        privacy: { type: localizedTextSchema, default: () => ({}) },
        imprint: { type: localizedTextSchema, default: () => ({}) },
      },
    },
    stats: {
      total: { type: Number, default: 0 },
      daily: { type: Map, of: Number, default: {} },
      weekly: { type: Map, of: Number, default: {} },
      monthly: { type: Map, of: Number, default: {} },
      lastViewedAt: { type: String, default: "" },
    },
  },
  { timestamps: true },
);

restaurantSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    if (ret.stats) {
      ret.stats.daily = Object.fromEntries(Object.entries(ret.stats.daily || {}));
      ret.stats.weekly = Object.fromEntries(Object.entries(ret.stats.weekly || {}));
      ret.stats.monthly = Object.fromEntries(Object.entries(ret.stats.monthly || {}));
    }
    return ret;
  },
});

export default mongoose.model("Restaurant", restaurantSchema);
