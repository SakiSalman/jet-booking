import Users from "../models/Users.js";
import { createError } from "../utility/customError.js";
import { hasPass, verifyPass } from "../utility/hasPassword.js";
import { createToken, verifyToken } from "../utility/token.js";

/**
 * @method GET
 * @route "api/v1/user"
 * @purpose GET ALL USERS
*/

export const users = async (req, res, next) => {
  try {
    const user = await Users.find();
    return res.json(user);
  } catch (error) {
    return next(error);
  }
};

/**
 * @method POST
 * @route "api/v1/user"
 * @purpose Register User
 */

export const registerUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, phone, password } = req.body;

    if ((!first_name, !last_name, !email, !phone, !password))
      return next(createError(401, "All Fields Are Required!"));

    // get user with same email
    const existingUser = await Users.findOne({ email });

    if (existingUser)
      return next(createError(401, "Account Already Exist Please Login!"));

    // Has Password
    const hasPasword = await hasPass(password);

    // Create Unique User
    const user = await Users.create({
      ...req.body,
      password: hasPasword,
    });

    res.status(200).json({
      user: user,
    });
  } catch (error) {
    next(error);
  }
};
/**
 * @method POST
 * @route "api/v1/user/login"
 * @purpose Login User
 */

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if ((!email, !password))
      return next(createError(401, "All Fields Are Required!"));

    // get user with same email
    const existingUser = await Users.findOne({ email });

    if (!existingUser)
      return next(createError(401, "No Account Found Please Register!"));

    // Verify Password
    const verifiedPass = await verifyPass(existingUser.password, password);
    if (!verifiedPass)return next(createError(401, "Wrong Password!"));
    
    // Generate Login Token
    const token = createToken({ email: email }, "360d");

    res.cookie("access_token", token).status(200).json({
      user: existingUser,
    });
  } catch (error) {
    next(error);
  }
};
/**
 * @method GET
 * @route "api/v1/user"
 * @purpose Check Loged in User
 */

export const logedInUser = async (req, res, next) => {
  try {
    res.status(200).json({
      status: true,
      message: "valid User!",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @method DELETE
 * @route "api/v1/user/:id"
 * @purpose Delete User
 */

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedData = await Users.deleteOne({ _id: id });
    if (deletedData.deletedCount < 1){
        return res.status(400).json({
            status: false,
            message: "User Not Found",
          });
    }
    return res.status(200).json({
        status: true,
        message: "User Deleted Sucess!",
      });
  } catch (error) {
    next(error);
  }
};
/**
 * @method PATCH
 * @route "api/v1/user/:id"
 * @purpose Delete User
 */

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const updatedUser = await Users.findByIdAndUpdate(id, {
        ...req.body
    });
    return res.status(200).json({
        status: true,
        user : updatedUser,
        message: "User Updated!",
      });
  } catch (error) {
    next(error);
  }
};
