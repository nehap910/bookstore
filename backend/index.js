import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";


import bookRoute  from  "./route/book.route.js"

const app = express();
app.use(cors());
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

// defining routes

app.use("/book",bookRoute)

app.listen(PORT,() =>{
  console.log(`Example app listening on port ${PORT}`);
});