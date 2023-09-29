const connectDB = require("./db/connect");
const router = require("./routes/UserRoutes");

const cors = require("cors");

// Sensitive Information
const password = `bibek123`;
const mongoUri = `mongodb+srv://root:${password}@cluster0.szmvgjc.mongodb.net/?retryWrites=true&w=majority`;

// Express Declaration
const express = require("express");
const app = express();
const PORT = 3000;

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/user", router);

// Connection to Database
connectDB(mongoUri)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Example app listening on PORT ${PORT}!`)
    );
  })
  .catch((error) => {
    console.log("database connection failure", error);
  });
