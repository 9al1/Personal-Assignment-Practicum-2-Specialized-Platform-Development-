const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// GET all products
router.get("/", productController.getProducts);

router.get("/test", (req, res) => {
    res.json({ message: "Test route works" });
});

// GET single product
router.get("/:id", productController.getProductById);

// CREATE product
router.post("/", productController.createProduct);

// UPDATE product
router.put("/:id", productController.updateProduct);

// DELETE product
router.delete("/:id", productController.deleteProduct);

module.exports = router;