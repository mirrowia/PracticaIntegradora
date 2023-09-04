const { Router } = require("express");
const { userModel } = require("../models/user.model");

const router = Router();

//GET
router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    res.send({ result: "success", payload: users });
  } catch (error) {
    console.log("Error:", error);
  }
});

//POST
router.post("/", async (req, res) => {
  let { name, email } = req.body;
  if (!name || !email)
    res.send({ status: "error", error: "Missing parameters" });

  let result = await userModel.create({ name, email });
  res.send({ result: "success", payload: result });
});

//PUT
router.put("/", async (req, res) => {
  let { name, email } = req.body;
  if (!name || !email)
    res.send({ status: "error", error: "Missing parameters" });

  let result = await userModel.updateMany({ name, email });
  res.send({ result: "success", payload: result });
});

//DELETE
router.delete("/", async (req, res) => {
  let { email } = req.body;
  if (!email) res.send({ status: "error", error: "Missing parameters" });

  let result = await userModel.find({ email: email }).deleteOne();
  console.log(result);
  res.send({ result: "success", payload: result });
});

module.exports = router;
