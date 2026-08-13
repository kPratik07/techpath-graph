const express = require("express");

const recommendationController = require(
  "../controllers/recommendation.controller"
);

const router = express.Router();

router.get(
  "/",
  recommendationController.getDevelopers
);

module.exports = router;