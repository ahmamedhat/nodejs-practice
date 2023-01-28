const app = require("./src/app");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connection.once("open", () => {
  console.log("Mongoose database connected successfully");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

mongoose.set("strictQuery", false);

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
