const driver = require("../config/database");

async function testSkillGap() {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (developer:Developer {id: $developerId})
      MATCH (role:Role {id: $roleId})-[:REQUIRES]->(requiredSkill:Skill)

      OPTIONAL MATCH (developer)-[:HAS_SKILL]->(developerSkill:Skill)

      WITH developer, role, requiredSkill,
           collect(developerSkill.id) AS currentSkillIds

      WHERE NOT requiredSkill.id IN currentSkillIds

      RETURN
        developer.name AS developer,
        role.name AS role,
        requiredSkill.name AS missingSkill
      ORDER BY missingSkill
      `,
      {
        developerId: "dev-001",
        roleId: "role-frontend"
      }
    );

    console.log("\nSkill Gap:\n");

    result.records.forEach((record) => {
      console.log(
        `${record.get("developer")} → ${record.get("role")} → ${record.get("missingSkill")}`
      );
    });

    console.log(`\nTotal missing skills: ${result.records.length}`);
  } catch (error) {
    console.error("Skill gap query failed:", error.message);
  } finally {
    await session.close();
    await driver.close();
  }
}

testSkillGap();