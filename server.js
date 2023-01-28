const app = require("./src/app");
const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const { mongoConnect } = require("./src/services/mongo");

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log("listening on port " + PORT);
  });
}

startServer();
