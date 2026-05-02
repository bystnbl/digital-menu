import mongoose from "mongoose";

const localizedTextSchema = new mongoose.Schema(
  {
    de: { type: String, trim: true, default: "" },
    en: { type: String, trim: true, default: "" },
  },
  { _id: false },
);

const categorySchema = new mongoose.Schema(
  {
    restaurantSlug: { type: String, trim: true, index: true, default: "default" },
    name: { type: localizedTextSchema, required: true },
    system: { type: String, trim: true, default: "" },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true },
);

categorySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    return ret;
  },
});

export default mongoose.model("Category", categorySchema);
