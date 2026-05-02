import { Router } from "express";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import Restaurant from "../models/Restaurant.js";
import VisitLog from "../models/VisitLog.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const restaurants = await Restaurant.find().sort({ createdAt: 1 });
    res.json(restaurants);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    res.json(restaurant);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json(restaurant);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const previous = await Restaurant.findById(req.params.id);
    if (!previous) return res.status(404).json({ message: "Restaurant not found" });
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (previous.slug !== restaurant.slug) {
      await Promise.all([
        Category.updateMany({ restaurantSlug: previous.slug }, { restaurantSlug: restaurant.slug }),
        Product.updateMany({ restaurantSlug: previous.slug }, { restaurantSlug: restaurant.slug }),
      ]);
    }
    res.json(restaurant);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    await Promise.all([
      Category.deleteMany({ restaurantSlug: restaurant.slug }),
      Product.deleteMany({ restaurantSlug: restaurant.slug }),
      VisitLog.deleteMany({ restaurantSlug: restaurant.slug }),
    ]);
    res.json({ id: restaurant.id, slug: restaurant.slug });
  } catch (error) {
    next(error);
  }
});

export default router;
