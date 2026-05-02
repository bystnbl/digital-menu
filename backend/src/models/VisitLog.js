import mongoose from "mongoose";

const visitLogSchema = new mongoose.Schema(
  {
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", index: true },
    restaurantSlug: { type: String, trim: true, index: true, required: true },
    date: { type: String, trim: true, index: true, required: true },
    userAgent: { type: String, default: "" },
    ipHash: { type: String, default: "" },
  },
  { timestamps: true },
);

visitLogSchema.index({ restaurantSlug: 1, createdAt: -1 });

visitLogSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    return ret;
  },
});

export default mongoose.model("VisitLog", visitLogSchema);
