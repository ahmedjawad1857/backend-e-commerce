const mongoose = require("mongoose");
const mongooseConnection = async () => {
  try {
    const mongodb = await mongoose.connect(
      "mongodb+srv://ahmedjawad1857:ahmad123@todo-db.sljkn6z.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("mongoose connected!");
  } catch (e) {
    console.log("mongoose connection error", e);
  }
};
const productSchema = {
  description: String,
  image: String,
  title: String,
  quantity: Number,
  price: Number,
  category: String,
};

const product = mongoose.model("Product", productSchema);

exports.mongooseConnection = mongooseConnection();
module.exports = product;
