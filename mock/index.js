const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());

var cartProducts = [];

function filter_data(prods, filter) {
  return prods.filter((p) => {
    return p.name.toLowerCase().includes(filter.toLowerCase());
  });
}

function isEmpty(body) {
  return Object.keys(body).length === 0
}

app.post("/api/products/hits", bodyParser.text(), (req, res, next) => {
  let hits = require('./products/hits');
  if (!isEmpty(req.body))
    hits = filter_data(hits, req.body);
  res.json(hits);
});

app.post("/api/products/jackets", bodyParser.text(), (req, res, next) => {
  let jackets = require('./products/jackets');
  if (!isEmpty(req.body))
    jackets = filter_data(jackets, req.body);
  res.json(jackets);
});

app.post("/api/products/pants",bodyParser.text(), (req, res, next) => {
  let pants = require('./products/pants');
  if (!isEmpty(req.body))
    pants = filter_data(pants, req.body);
  res.json(pants);
});

app.post("/api/products/suits",bodyParser.text(), (req, res, next) => {
  let suits = require('./products/suits');
  if (!isEmpty(req.body))
    suits = filter_data(suits, req.body);
  res.json(suits);
});

app.post("/api/products/tshirts",bodyParser.text(), (req, res, next) => {
  let tshirts = require('./products/tshirts');
  if (!isEmpty(req.body))
    tshirts = filter_data(tshirts, req.body);
  res.json(tshirts);
});

app.post("/api/products/sweatshirts",bodyParser.text(), (req, res, next) => {
  let sweatshirts = require('./products/sweatshirts');
  if (!isEmpty(req.body))
    sweatshirts = filter_data(sweatshirts, req.body);
  res.json(sweatshirts);
});

app.post("/api/products/accessories",bodyParser.text(), (req, res, next) => {
  let accessories = require('./products/accessories');
  if (!isEmpty(req.body))
    filter_data(accessories, req.body);
  res.json(accessories);
});

app.get("/api/products/:type/:id", (req, res, next) => {
  const id = req.params.id;
  const type = req.params.type;
  const product = require(`./products/${type}`);
  res.json(product[id]);
});

app.get("/api/products/cart", (req, res, next) => {
  res.json(cartProducts);
});

app.post("/api/products/add", (req, res) => {
  cartProducts.push(req.body);
  res.json(req.body);
});

app.post("/api/products/delFromCart", (req, res) => {
  cartProducts.splice(cartProducts.findIndex(p =>
    p.id === req.body.id &&
    p.type === req.body.type), 1);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
