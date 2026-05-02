import crypto from "node:crypto";
import { Router } from "express";
import Restaurant from "../models/Restaurant.js";
import VisitLog from "../models/VisitLog.js";

const router = Router();

function dateKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function startOfDay(offset = 0) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() - offset);
  return date;
}

function hashIp(value = "") {
  return crypto.createHash("sha256").update(`${value}:${process.env.STATS_SALT || "synkard"}`).digest("hex");
}

async function summaryForRestaurant(restaurantSlug) {
  const [today, last7, last30, total] = await Promise.all([
    VisitLog.countDocuments({ restaurantSlug, createdAt: { $gte: startOfDay(0) } }),
    VisitLog.countDocuments({ restaurantSlug, createdAt: { $gte: startOfDay(6) } }),
    VisitLog.countDocuments({ restaurantSlug, createdAt: { $gte: startOfDay(29) } }),
    VisitLog.countDocuments({ restaurantSlug }),
  ]);
  return { today, last7, last30, total };
}

async function allRestaurantSummaries() {
  const restaurants = await Restaurant.find().sort({ createdAt: 1 });
  const perRestaurant = await Promise.all(
    restaurants.map(async (restaurant) => ({
      restaurantId: restaurant.id,
      restaurantSlug: restaurant.slug,
      restaurantName: restaurant.restaurant?.name || {},
      stats: await summaryForRestaurant(restaurant.slug),
    })),
  );
  const totals = perRestaurant.reduce(
    (acc, entry) => ({
      today: acc.today + entry.stats.today,
      last7: acc.last7 + entry.stats.last7,
      last30: acc.last30 + entry.stats.last30,
      total: acc.total + entry.stats.total,
    }),
    { today: 0, last7: 0, last30: 0, total: 0 },
  );
  return { totals, perRestaurant };
}

router.post("/", async (req, res, next) => {
  try {
    const restaurantSlug = req.body.restaurantSlug;
    if (!restaurantSlug) return res.status(400).json({ message: "restaurantSlug is required" });
    const restaurant = await Restaurant.findOne({ slug: restaurantSlug });
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });

    await VisitLog.create({
      restaurantId: restaurant._id,
      restaurantSlug,
      date: dateKey(),
      userAgent: req.get("user-agent") || "",
      ipHash: hashIp(req.ip || req.socket?.remoteAddress || ""),
    });

    res.status(201).json({
      restaurantSlug,
      stats: await summaryForRestaurant(restaurantSlug),
    });
  } catch (error) {
    next(error);
  }
});

router.get("/summary", async (req, res, next) => {
  try {
    if (req.query.restaurantSlug) {
      return res.json({
        restaurantSlug: req.query.restaurantSlug,
        stats: await summaryForRestaurant(req.query.restaurantSlug),
      });
    }
    res.json(await allRestaurantSummaries());
  } catch (error) {
    next(error);
  }
});

export default router;
