const recommendationRepository = require("../repositories/recommendation.repository");
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

async function getDevelopers(req, res) {
  try {
    const developers = await recommendationRepository.getDevelopers();

    return res.status(200).json(developers);
  } catch (error) {
    console.error("Developers controller error:", error);

    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

async function getRoles(req, res) {
  try {
    const roles = await recommendationRepository.getRoles();

    return res.status(200).json(roles);
  } catch (error) {
    console.error("Roles controller error:", error);

    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

module.exports = {
  getRecommendations,
  getDevelopers,
  getRoles
};