import User from "../../models/user.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const signin = async (req, res, next) => {
  try {
    const { Email, Password,role } = req.body;

    // Check if the user exists
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    console.log("Retrieved user and I'm here:", user);  // Log user object for debugging

    // Compare the password
    const isPasswordCorrect = await bcrypt.compare(Password, user.Password);
    console.log("Is password correct?", isPasswordCorrect);  // Log result of password comparison

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, Email: user.Email,role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Respond with the user ID and JWT token
    res.status(200).json({ userId: user._id,role : user.role ,token });
  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ message: "Something went wrong.", error: error.message });
  }
};


