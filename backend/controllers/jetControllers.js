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



/**
 * @method DELETE
 * @route "api/v1/jets/:id"
 * @purpose Delete Jet
 */

export const deleteJet = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedData = await Jets.deleteOne({ _id: id });
    if (deletedData.deletedCount < 1){
        return res.status(400).json({
            status: false,
            message: "Jet Not Found!",
          });
    }
    return res.status(200).json({
        status: true,
        message: "Jet Deleted Sucess!",
      });
  } catch (error) {
    next(error);
  }
};


/**
 * @method PATCH
 * @route "api/v1/jets/:id"
 * @purpose Update Jet
 */

export const updateJet = async (req, res, next) => {
  try {
    const { id } = req.params;


    // chek the jet available
    const jet = await Jets.findById(id)
    if (!jet) next(createError(401, "All Fields Are Required!"));
    
    const updatedUser = await Users.findByIdAndUpdate(id, {
        ...req.body
    });

    return res.status(200).json({
        status: true,
        user : updatedUser,
        message: "Jet Updated!",
      });

  } catch (error) {
    next(error);
  }
};
