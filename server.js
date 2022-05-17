var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var productAPI = require("./controllers/product.controller");
app.use("/api/products", productAPI);

app.listen(3001);
console.log("server up and running on port 3001");
