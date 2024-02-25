import express from "express";
import userRoutes from "./routes/user-routes.js"; // Adjust the path accordingly

const app = express();

// Use user routes
app.use("/api/user", userRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
