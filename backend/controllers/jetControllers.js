import { createError } from "../utility/customError.js";
import Jets from '../models/Charter.js'
/**
 * @method POST
 * @route "api/v1/jet"
 * @purpose Register New Jet
 */

export const registerJet = async (req, res, next) => {
  try {
    const { jet_name, routes, from, to, regular_price, sale_price, seat, featured_image } =req.body;

    // Check all fields are required
    if ((!jet_name || !routes || !from || !to || !regular_price ||!sale_price || !seat || !featured_image ))
      return next(createError(401, "All Fields Are Required!"));

    // create a database collection for Jets
    const jet = await Jets.create(
      { ...req.body}
    )
    res.status(200).json(jet)
  } catch (error) {
    next(error);
  }
};
