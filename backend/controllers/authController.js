import User from "../models/User.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Apierror } from "../utils/apiError.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Signup Controller
export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new Apierror(400, "User already exists"));
    }

    // Check if file is uploaded
    if (!req.file) {
      return next(new Apierror(400, "Avatar image is required"));
    }

    // Upload avatar to Cloudinary
    const cloudinaryResponse = await uploadOnCloudinary(req.file.path);
    if (!cloudinaryResponse) {
      return next(new Apierror(500, "Failed to upload avatar to Cloudinary"));
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password,
      avatar: cloudinaryResponse.secure_url, // Save Cloudinary URL
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
    });
  } catch (err) {
    next(err);
  }
};
