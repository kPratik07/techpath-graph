const express = require("express");
const cors = require("cors");

const recommendationRoutes = require(
  "./routes/recommendation.routes"
);

const app = express();
app.use(cors());

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "TechPath API is running"
  });
});

app.use(
  "/api/recommendations",
  recommendationRoutes
);

module.exports = app;