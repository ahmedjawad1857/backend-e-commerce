const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const main = require("./config/mongooseConfig");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const product = require("./config/mongooseConfig");
const { log } = require("console");
// const saltRounds = 10;
// const privateKey = "qwertyuiopw";
const app = express();
const port = 8020;
app.use(cors());
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const category = req.body.category;
    const image = req.body.image;
    const newProduct = new product({
      title: title,
      description: description,
      quantity: quantity,
      price: price,
      category: category,
      image: image,
    });
    const savedProducts = await newProduct.save();
    console.log("product", savedProducts);
    console.log("newProduct", newProduct);
    res.status(200).send("product is saved");
  } catch (e) {
    console.log("adding error", e);
  }
});

app.get("/get", async (req, res) => {
  try {
    const findedData = await product.find();
    console.log("findedData", findedData);
    res.status(200).json({ message: "product is got", findedData });
  } catch (e) {
    console.log("getting data error", e);
  }
});
app.post("/id", async (req, res) => {
  try {
    const id = req.body.id;
    console.log("id", id);      
    const findedObj = await product.findOne({ _id: id });
    console.log("findedObj", findedObj);
    res.json({ findedObj: findedObj });
  } catch (e) {
    console.log(`sending id object error ${e}`);
  }
});
app.listen(port, () => {
  console.log("port", port);
});
