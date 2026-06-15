let products = require("../data/products");

// CREATE
exports.createProduct = (req, res) => {
    products.push(req.body);
    res.json(products);
};

// READ ALL
exports.getProducts = (req, res) => {
    res.json(products);
};

// READ ONE
exports.getProductById = (req, res) => {
    const product = products.find(
        product => product.id == req.params.id
    );

    if (!product) {
        return res.status(404).json({
            message: "Product Not Found"
        });
    }

    res.json(product);
};

// UPDATE
exports.updateProduct = (req, res) => {
    const index = products.findIndex(
        product => product.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Product Not Found"
        });
    }

    products[index] = req.body;

    res.json(products[index]);
};

// DELETE
exports.deleteProduct = (req, res) => {
    products = products.filter(
        product => product.id != req.params.id
    );

    res.json({
        message: "Product Deleted"
    });
};