let orders = require("../data/orders");

// CREATE
exports.createOrder = (req, res) => {
    orders.push(req.body);
    res.json(orders);
};

// READ ALL
exports.getOrders = (req, res) => {
    res.json(orders);
};

// READ ONE
exports.getOrderById = (req, res) => {
    const order = orders.find(
        order => order.id == req.params.id
    );

    if (!order) {
        return res.status(404).json({
            message: "Order Not Found"
        });
    }

    res.json(order);
};

// UPDATE
exports.updateOrder = (req, res) => {
    const index = orders.findIndex(
        order => order.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Order Not Found"
        });
    }

    orders[index] = req.body;

    res.json(orders[index]);
};

// DELETE
exports.deleteOrder = (req, res) => {
    orders = orders.filter(
        order => order.id != req.params.id
    );

    res.json({
        message: "Order Deleted"
    });
};