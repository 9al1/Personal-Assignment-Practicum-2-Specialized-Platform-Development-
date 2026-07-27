const db = require("../config/db");

// Get all products
exports.getProducts = (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
};

// Get product by ID
exports.getProductById = (req, res) => {
    const id = req.params.id;

    db.query(
        "SELECT * FROM products WHERE id = ?",
        [id],
        (err, results) => {
            if (err) {
                return res.status(500).json(err);
            }

            if (results.length === 0) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            res.json(results[0]);
        }
    );
};

// Create product
exports.createProduct = (req, res) => {
    const { name, description, category, price, stock, image } = req.body;

    const sql = `
        INSERT INTO products
        (name, description, category, price, stock, image)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, description, category, price, stock, image],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Product created successfully",
                id: result.insertId
            });
        }
    );
};

// Update product
exports.updateProduct = (req, res) => {
    const id = req.params.id;

    const { name, description, category, price, stock, image } = req.body;

    const sql = `
        UPDATE products
        SET
            name = ?,
            description = ?,
            category = ?,
            price = ?,
            stock = ?,
            image = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [name, description, category, price, stock, image, id],
        (err) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Product updated successfully"
            });
        }
    );
};

// Delete product
exports.deleteProduct = (req, res) => {
    const id = req.params.id;

    db.query(
        "DELETE FROM products WHERE id = ?",
        [id],
        (err) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Product deleted successfully"
            });
        }
    );
};