const express = require("express");
const app = express();
app.use(express.json());

var cartProducts = [];

app.get("/api/products/hits/", (req, res, next) => {
  const hits = require('./products/hits');
  res.json(hits);
});

app.get("/api/products/jackets/", (req, res, next) => {
  const jackets = require('./products/jackets');
  res.json(jackets);
});

app.get("/api/products/pants/", (req, res, next) => {
  const pants = require('./products/pants');
  res.json(pants);
});

app.get("/api/products/suits/", (req, res, next) => {
  const suits = require('./products/suits');
  res.json(suits);
});

app.get("/api/products/tshirts/", (req, res, next) => {
  const tshirts = require('./products/tshirts');
  res.json(tshirts);
});

app.get("/api/products/sweatshirts/", (req, res, next) => {
  const sweatshirts = require('./products/sweatshirts');
  res.json(sweatshirts);
});

app.get("/api/products/accessories/", (req, res, next) => {
  const accessories = require('./products/accessories');
  res.json(accessories);
});

app.get("/api/products/:type/:id", (req, res, next) => {
  const id = req.params.id;
  const type = req.params.type;
  const product = require(`./products/${type}`);
  res.json(product[id]);
});

app.get("/api/products/cart", (req, res, next) => {
  console.log("get");
  res.json(cartProducts);
});


app.post("/api/products/add", (req, res) => {
  console.log("add");
  cartProducts.push(req.body);
  res.json(req.body);
});

app.post("/api/products/delFromCart", (req, res) => {
  console.log("del");
  console.log(cartProducts.filter((prd) => {
    let item = req.body;
    return prd.id == item.id && prd.type == item.type;
  }));
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
