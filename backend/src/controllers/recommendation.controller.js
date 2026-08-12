const recommendationService = require("../services/recommendation.service");

async function getRecommendations(req, res) {
  try {
    const { developerId, roleId } = req.params;

    if (!developerId || !roleId) {
      return res.status(400).json({
        message: "developerId and roleId are required"
      });
    }

    const recommendations =
      await recommendationService.getRecommendations(
        developerId,
        roleId
      );

    return res.status(200).json(recommendations);
  } catch (error) {
    console.error("Recommendation controller error:", error);

    return res.status(error.statusCode || 500).json({
      message: error.statusCode
        ? error.message
        : "Internal server error"
    });
  }
}

module.exports = {
  getRecommendations
};