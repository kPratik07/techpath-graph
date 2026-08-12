const driver = require("../config/database");

async function testRelationships() {
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH ()-[r]->()
      RETURN type(r) AS relationship, count(r) AS count
      ORDER BY relationship
    `);

    console.log("\nRelationship counts:");

    result.records.forEach((record) => {
      console.log(
        `${record.get("relationship")}: ${record.get("count").toNumber()}`
      );
    });
  } catch (error) {
    console.error(
      "Relationship verification failed:",
      error.message
    );
  } finally {
    await session.close();
    await driver.close();
  }
}

testRelationships();