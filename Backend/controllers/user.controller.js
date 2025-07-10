import expess from "express";
import {User} from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
        success: false,
      });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }
    // Create new user
    const newUser = new User({
      email,
      password,
      firstName: req.body.firstName || "",
      lastName: req.body.lastName || "",
      image: req.body.image || "",
      color: req.body.color || 0,
      profileSetup: false,
    });
    await newUser.save();
    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
        success: false,
      });
    }

    // Find user by email
    let existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    // Check password
    const isMatch = await existingUser.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    const tokenData = {
      id: existingUser._id,
    };

   const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    existingUser = {
      id: existingUser._id,
      email: existingUser.email,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      image: existingUser.image,
      color: existingUser.color,
      profileSetup: existingUser.profileSetup,
    };

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        maxage: 2 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .json({
        message: "Login successful",
        success: true,
        existingUser,
      });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export const logoutUser = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", {
        httpOnly: true,
        maxage: 0,
      })
      .json({
        message: "Logout successful",
        success: true,
    });
  } catch (error) {
    console.error("Error in logoutUser:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
}

export const updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, color } = req.body;
    const {userId} = req.id; // Assuming user ID is available in req.user
    if (!firstName || !lastName || !color ) {
      return res.status(400).json({
        message: "First name, last name, and color are required",
        success: false,
      });
    }

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
        success: false,
      });
    }

    // Find user by ID and update
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        firstName,
        lastName,
        color,
        profileSetup: true, // Assuming profile setup is completed
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "User updated successfully",
      success: true,
      updatedUser,
    });
    
  } catch (error) {
    console.error("Error in updateUser:", error);
    res.status(500).json({ message: "Internal server error", success: false });
    
  }
} 

export const getUser = async (req, res) => {
  try {
    const { userId } = req.id; // Assuming user ID is available in req.user
    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
        success: false,
      });
    }

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "User retrieved successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error in getUser:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
