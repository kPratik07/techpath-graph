const express = require("express");
const cors = require("cors");


const recommendationRoutes = require(
  "./routes/recommendation.routes"
);

const developerRoutes = require(
  "./routes/developer.routes"
);

const roleRoutes = require(
  "./routes/role.routes"
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

app.use(
  "/api/developers",
  developerRoutes
);

app.use(
  "/api/roles",
  roleRoutes
);

module.exports = app;