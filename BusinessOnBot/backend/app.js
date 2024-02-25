import express from "express";
import mongoose from 'mongoose';
import router from "./routers/user-routers";

const app = express();

app.user("/api/user",router) ;
// MongoDB connection
mongoose
  .connect("mongodb+srv://Abarna:abar1712@cluster0.3mwkwvi.mongodb.net/socialmedia", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
    
    // Define routes after successful MongoDB connection
    app.get('/api', (req, res) => {
      res.send('hello');
    });

    // Start the server
    app.listen(5000, () => {
      console.log("Server is listening on localhost:5000");
    });
  })
  .catch((err) => console.log(err));
