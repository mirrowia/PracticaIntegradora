const { Router } = require("express");
const { productModel } = require("../models/product.model");
const router = Router();

//GET
router.get("/", async (req, res) => {
  try {
    let products = await productModel.find();
    res.send({ result: "success", payload: products });
  } catch (error) {}
});

//POST
router.post("/", async (req, res) => {
  let { name, category, price, stock, image } = req.body;
  if (!name || !category || !price || !stock || !image)
    res.send({ status: "error", error: "Missing parameters" });

  let result = await productModel.create({
    name,
    category,
    price,
    stock,
    image,
  });
  res.send({ result: "success", payload: result });
});

//PUT
router.put("/", async (req, res) => {
  let { name, category, price, stock, image } = req.body;
  if (!name || !category || !price || !stock || !image)
    res.send({ status: "error", error: "Missing parameters" });

  let result = await productModel.updateMany({
    name,
    category,
    price,
    stock,
    image,
  });
  res.send({ result: "success", payload: result });
});

//DELETE
router.delete("/", async (req, res) => {
  let { name } = req.body;
  if (!name) res.send({ status: "error", error: "Missing parameters" });

  let result = await productModel.find({ name: name }).deleteOne();
  console.log(result);
  res.send({ result: "success", payload: result });
});

module.exports = router;
