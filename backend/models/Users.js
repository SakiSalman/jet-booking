import mongoose from "mongoose";

/**
 * User Schema Design
 */
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    order: {
      type: Array,
      default : []
    },
    member: {
      type: Boolean,
      default : false
    },
    active: {
      type: Boolean,
      default : false
    },
    access_token: {
      type: String,
      trim : true
    },
  },
  {
    timestamps: true,
  }
);

// export model
export default mongoose.model("User", userSchema);