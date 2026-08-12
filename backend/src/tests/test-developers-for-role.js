const recommendationRepository = require(
  "../repositories/recommendation.repository"
);

async function testDevelopersForRole() {
  try {
    const result =
      await recommendationRepository.getDevelopersForRole(
        "role-frontend"
      );

    console.log("\nDevelopers for Frontend Developer:\n");

    result.forEach((developer) => {
      console.log(
        `${developer.developerName} → ` +
        `${developer.missingSkills} missing of ` +
        `${developer.totalRequiredSkills}`
      );

      console.log(
        `Missing skills: ${
          developer.missingSkillIds.join(", ") || "None"
        }`
      );

      console.log();
    });
  } catch (error) {
    console.error(
      "Developers-for-role test failed:",
      error.message
    );
  }
}

testDevelopersForRole();