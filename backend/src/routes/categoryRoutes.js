import { Router } from "express";
import Category from "../models/Category.js";

const router = Router();

function restaurantFilter(query) {
  return { restaurantSlug: query.restaurantSlug || "default" };
}

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.find(restaurantFilter(req.query)).sort({ sortOrder: 1, createdAt: 1 });
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const category = await Category.create({
      restaurantSlug: req.body.restaurantSlug || "default",
      name: req.body.name,
      system: req.body.system || "",
      sortOrder: req.body.sortOrder || 0,
    });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json({ id: category.id });
  } catch (error) {
    next(error);
  }
});

export default router;
