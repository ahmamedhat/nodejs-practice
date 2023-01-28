const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connection.once("open", () => {
  console.log("Mongoose database connected successfully");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

mongoose.set("strictQuery", false);

const mongoConnect = async () => {
  await mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const mongoDisconnect = async () => {
  mongoose.disconnect();
};

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
