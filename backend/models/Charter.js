import mongoose from "mongoose";

/**
 * User Schema Design
 */
const charterSchema = new mongoose.Schema(
  {
    jet_name: {
      type: String,
      required: true,
      trim: true,
    },
    routes: {
      type: Array,
      default : ''
    },
    regular_price: {
      type: String,
      trim: true,
    },
    sale_price: {
      type: String,
      trim: true,
    },
    seat: {
      type: String,
      trim : true
    }
  },
  {
    timestamps: true,
  }
);

// export model
export default mongoose.model("Charter", charterSchema);