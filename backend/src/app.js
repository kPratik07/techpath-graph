const express = require("express");
const cors = require("cors");

const recommendationRoutes = require(
  "./routes/recommendation.routes"
);

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://techpath-graph.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

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