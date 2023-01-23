const bags = require("../models/bags.model");

function getAllBags(req, res) {
  res.send(bags).status(200);
}

function getBag(req, res) {
  const bagID = Number(req.params.bagID);

  const bag = bags[bagID];
  if (bag) {
    res.send(bag);
  } else {
    res.status(404).send({
      error: "No bag was found",
    });
  }
}

function postNewBag(req, res) {
  const bagName = req.body.name;
  if (!bagName) {
    res.status(400).send({
      error: "Missing key name",
    });
  } else {
    const newBag = {
      id: bags.length,
      name: bagName,
    };
    bags.push(newBag);
    console.log("Bags are", bags);
    res.send("Bag added successfully").status(200);
  }
}

module.exports = {
  getAllBags,
  getBag,
  postNewBag,
};
