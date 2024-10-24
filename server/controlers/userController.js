import Diplome from "../models/diplome.js"
import User from "../models/user.js"
import bcrypt from "bcrypt"

export const createUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const { Nom, Prenom, Email,cne, Password,diplome,role } = req.body;

        if (!Nom || !Prenom || !Email || !Password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ Email: req.body.email,_id:{$ne : userId} });


        if (existingUser) {
            // const hasDuplicateDiplome = existingUser.diplome.includes(diplome);
            // if (hasDuplicateDiplome) {
            //     return res.status(400).json({ message: "You can't have the same diplome twice" });
            // }
            res.status(400).json({message : "the email is already exist"})
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
            diplome,
            role
        });

        // Save the user
        const savedUser = await newUser.save();

        return res.status(201).json({ message: `The user has been created: ${savedUser}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};


export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Check if the user is trying to add a duplicate diploma
        if (updatedData.diplome) {
            const existingDiplome = user.diplome.find(d => d === updatedData.diplome);

            if (existingDiplome) {
                return res.status(400).json({ message: "You can't add the same diploma twice!" });
            }

            // Append the new diploma to the user's diplomas
            user.diplome.push(updatedData.diplome);
        }

        // Update email if it's not already in use by another user
        if (updatedData.Email) {
            const existingUser = await User.findOne({ Email: updatedData.Email, _id: { $ne: userId } });
            if (existingUser) {
                return res.status(400).json({ message: "This email is already in use by another user." });
            }
        }

        // Hash the password if being updated
        if (updatedData.Password) {
            const salt = await bcrypt.genSalt(10);
            updatedData.Password = await bcrypt.hash(updatedData.Password, salt);
        }

        // Merge the updated data into the user object
        Object.assign(user, updatedData);

        // Save the updated user
        const updatedUser = await user.save();

        return res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error while updating!" });
    }
};




export const deleteUser = async (req, res) => {
    const userId = req.params.id
    try {
        const deletedUser = await User.findOneAndDelete(userId);
        if (!deleteUser) {
            return res.status(400).json({ message: "User not deleted" })
        }
        res.status(200).json({ message: "User have been deleted successfully" })


    } catch (error) {
        console.error(error)
    }
}

export const getAllUsers = async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await User.find({}).populate("diplome")

        // If no users are found
        if (!users.length) {
            return res.status(404).json({ message: "No users found!" });
        }

        // Return the list of users
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving users!" });
    }
};



