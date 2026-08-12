const express = require("express");

const recommendationController = require(
  "../controllers/recommendation.controller"
);

const router = express.Router();

router.get(
  "/:developerId/:roleId",
  recommendationController.getRecommendations
);

module.exports = router;