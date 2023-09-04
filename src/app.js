const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.router");
const productRouter = require("./routes/products.router");
const app = express();
const PORT = 8080;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://lestian:9YTv2ykS57hAUrxa2Yh5@e-commerce.d6j4ttl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Mongo Atlas DB");
  })
  .catch((error) => {
    console.log("Error!", error);
  });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
