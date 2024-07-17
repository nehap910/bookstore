import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;


const URI = process.env.MongoDBURI;

// Connect to mongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});



app.listen(PORT,() =>{
  console.log(`Example app listening on port ${PORT}`);
});