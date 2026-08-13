const express = require("express");

const recommendationController = require(
  "../controllers/recommendation.controller"
);

const router = express.Router();

router.get(
  "/",
  recommendationController.getRoles
);

module.exports = router;