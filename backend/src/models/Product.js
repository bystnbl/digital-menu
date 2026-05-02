import mongoose from "mongoose";

const localizedTextSchema = new mongoose.Schema(
  {
    de: { type: String, trim: true, default: "" },
    en: { type: String, trim: true, default: "" },
  },
  { _id: false },
);

const productSchema = new mongoose.Schema(
  {
    restaurantSlug: { type: String, trim: true, index: true, default: "default" },
    categoryId: { type: String, trim: true, index: true, required: true },
    name: { type: localizedTextSchema, required: true },
    description: { type: localizedTextSchema, default: () => ({}) },
    price: { type: String, trim: true, default: "" },
    image: { type: String, default: "" },
  },
  { timestamps: true },
);

productSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    return ret;
  },
});

export default mongoose.model("Product", productSchema);
