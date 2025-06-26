require("dotenv").config();
const express = require("express");
const cors = require("cors");
const corsOptions = require("./src/config/corsOptions");
const connectDB = require("./src/config/dbConn.js");
const mongoose = require('mongoose');

const productRoutes = require('./src/routes/product.js');

const PORT = process.env.PORT || 5001;
const app = express();
connectDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("this is the home page")
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})
