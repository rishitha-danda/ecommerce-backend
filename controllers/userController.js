let users = require("../data/users");

// CREATE
exports.createUser = (req, res) => {
    users.push(req.body);
    res.json(users);
};

// READ ALL
exports.getUsers = (req, res) => {
    res.json(users);
};

// READ ONE
exports.getUserById = (req, res) => {
    const user = users.find(
        user => user.id == req.params.id
    );

    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    res.json(user);
};

// UPDATE
exports.updateUser = (req, res) => {
    const index = users.findIndex(
        user => user.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    users[index] = req.body;

    res.json(users[index]);
};

// DELETE
exports.deleteUser = (req, res) => {
    users = users.filter(
        user => user.id != req.params.id
    );

    res.json({
        message: "User Deleted"
    });
};