const { getAllBags, getBag, postNewBag } = require("./bags.controller");
const express = require("express");

const router = express.Router();

router.get("/", getAllBags);
router.get("/:bagID", getBag);
router.post("/", postNewBag);

module.exports = {
  bagsRoutes: router,
};
