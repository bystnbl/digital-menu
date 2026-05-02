import { Router } from "express";
import Product from "../models/Product.js";

const router = Router();

function productFilter(query = {}) {
  const filter = { restaurantSlug: query.restaurantSlug || "default" };
  if (query.categoryId) filter.categoryId = query.categoryId;
  return filter;
}

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find(productFilter(req.query)).sort({ createdAt: 1 });
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const product = await Product.create({
      restaurantSlug: req.body.restaurantSlug || "default",
      categoryId: req.body.categoryId,
      name: req.body.name,
      description: req.body.description || {},
      price: req.body.price || "",
      image: req.body.image || "",
    });
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        restaurantSlug: req.body.restaurantSlug || "default",
        categoryId: req.body.categoryId,
        name: req.body.name,
        description: req.body.description || {},
        price: req.body.price || "",
        image: req.body.image || "",
      },
      { new: true, runValidators: true },
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ id: product.id });
  } catch (error) {
    next(error);
  }
});

export default router;
