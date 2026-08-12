const driver = require("../config/database");

async function testDeveloperSkills() {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (developer:Developer {id: $developerId})-[:HAS_SKILL]->(skill:Skill)
      RETURN developer.name AS developer, skill.name AS skill
      ORDER BY skill.name
      `,
      {
        developerId: "dev-001"
      }
    );

    console.log("\nAarav's skills:\n");

    result.records.forEach((record) => {
      console.log(
        `${record.get("developer")} → ${record.get("skill")}`
      );
    });

    console.log(`\nTotal: ${result.records.length}`);
  } catch (error) {
    console.error("Query failed:", error.message);
  } finally {
    await session.close();
    await driver.close();
  }
}

testDeveloperSkills();