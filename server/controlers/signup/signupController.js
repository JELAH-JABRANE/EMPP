import User from "../../models/user.js";
import Diplome from "../../models/diplome.js";
import bcrypt from "bcrypt";

export const Signup = async (req, res) => {
  try {
    const { Nom, Prenom, Email, cne, Password,role } = req.body;
    if (!Nom || !Prenom || !Email || !Password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ Email });

    if (existingUser) {
      res.status(400).json({ message: "the email is already exist" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Create a new user
    const newUser = new User({
      Nom,
      Prenom,
      Email,
      cne,
      Password: hashedPassword,
      role
    });

    // Save the user
    const savedUser = await newUser.save();

    return res
      .status(201)
      .json({ message: `The user has been created: ${savedUser}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
