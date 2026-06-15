const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("E-Commerce Backend Running");
});

app.use("/users", require("./routes/userRoutes"));
app.use("/products", require("./routes/productRoutes"));
app.use("/orders", require("./routes/orderRoutes"));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});