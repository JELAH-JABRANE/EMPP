import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import diplomeRoute from './routes/diplomeRoute.js';
import signupRoute from "./routes/signup/signupRoute.js";
import loginRoute from "./routes/signin/signin.js"; // Consistent naming
import dotenv from "dotenv";
import cors from "cors"; // Added CORS for handling requests from frontend

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: true,  credentials: true,  // If sending cookies, etc.
}));

// Connect to MongoDB with recommended options
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// User routes
app.use("/api/users", userRoute);

// Diplome route
app.use("/api/diplome", diplomeRoute);

// Signup route
app.use("/api/connexion", signupRoute);

// Login route
app.use("/api/login", loginRoute);

// Handle 404 errors (not found)
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler (for catching any unhandled errors)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
