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
    
    from: {
      type: String,
      trim : true
    },
    to: {
      type: String,
      trim : true
    },
    regular_price: {
      type: String,
      trim: true,
    },
    sale_price: {
      type: String,
      trim: true,
    },
    featured_image: {
      type: String,
      trim: true,
    },
    gallery: {
      type: Array,
      default: [],
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
export default mongoose.model("Jets", charterSchema);