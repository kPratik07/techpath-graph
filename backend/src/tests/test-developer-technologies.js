const recommendationRepository = require(
  "../repositories/recommendation.repository"
);

async function testDeveloperTechnologies() {
  try {
    const result =
      await recommendationRepository.getDeveloperTechnologies(
        "dev-001"
      );

    console.log("\nDeveloper Technologies:\n");

    result.forEach((item) => {
      console.log(
        `${item.developerName} → ${item.projectName} → ${item.technologyName}`
      );
    });

    console.log(`\nTotal: ${result.length}`);
  } catch (error) {
    console.error(
      "Developer technologies test failed:",
      error.message
    );
  }
}

testDeveloperTechnologies();