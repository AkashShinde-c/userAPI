//importing the required packages
require("dotenv").config();
const express = require("express");
const app = express();
const user_routes = require("./routes/users");
const connectDB = require("./db/connect");

app.use(express.json());

const users = [
  {
    id: 1,
    name: "AK",
  },
];

app.get("/", (req, res) => {
  res.send("Hello there");
});

//middleware for th routes
app.use("/users", user_routes);

//function to start the server and connect to database
const start = async () => {
  
  await connectDB(process.env.MONGODB_URL);

  try {
    app.listen(6022);
    console.log("Server is running");
  } catch (error) {
    console.log(error.msg);
  }
};

//initiating the server with start function
start();
