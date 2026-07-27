require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("PaletteTown API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});