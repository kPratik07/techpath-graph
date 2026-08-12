const recommendationService = require("../services/recommendation.service");

async function testRecommendationService() {
  try {
    const result = await recommendationService.getRecommendations(
      "dev-001",
      "role-frontend"
    );

    console.log(
      JSON.stringify(result, null, 2)
    );
  } catch (error) {
    console.error(
      "Recommendation service failed:",
      error.message
    );
  }
}

testRecommendationService();