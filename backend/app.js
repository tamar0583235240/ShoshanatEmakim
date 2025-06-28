require("dotenv").config();
const express = require("express");
const cors = require("cors");
const corsOptions = require("./src/config/corsOptions");
const connectDB = require("./src/config/dbConn.js");
const mongoose = require('mongoose');

const productRoutes = require('./src/routes/productRoute.js');
const contactRoutes = require('./src/routes/contact.js');


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

app.use('/product', productRoutes);
app.use('/contact', contactRoutes);
