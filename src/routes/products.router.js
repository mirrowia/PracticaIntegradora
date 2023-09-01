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
  try {
  } catch (error) {}
});

//PUT
router.put("/", async (req, res) => {
  try {
  } catch (error) {}
});

//DELETE
router.delete("/", async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = router;
