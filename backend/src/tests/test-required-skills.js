const driver = require("../config/database");

async function testRequiredSkills() {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (role:Role {id: $roleId})-[:REQUIRES]->(skill:Skill)
      RETURN role.name AS role, skill.name AS skill
      ORDER BY skill.name
      `,
      {
        roleId: "role-frontend"
      }
    );

    console.log("\nFrontend Developer required skills:\n");

    result.records.forEach((record) => {
      console.log(
        `${record.get("role")} → ${record.get("skill")}`
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

testRequiredSkills();