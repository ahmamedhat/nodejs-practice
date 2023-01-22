const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});

const bags = [
  { id: 0, name: "Tote bag" },
  { id: 1, name: "Beach bag" },
  { id: 2, name: "Sand bag" },
];

app.get("/", (req, res) => {
  res.send(bags).status(200);
});

app.get("/bags/:bagID", (req, res) => {
  const bagID = Number(req.params.bagID);

  const bag = bags[bagID];
  if (bag) {
    res.send(bag);
  } else {
    res
      .send({
        error: "No bag was found",
      })
      .status(404);
  }
});
