const driver = require("../config/database");

async function testGraph() {
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH (n)
      RETURN labels(n) AS labels, count(n) AS count
      ORDER BY labels(n)
    `);

    console.log("\nNode counts:");

    result.records.forEach((record) => {
      console.log(
        `${record.get("labels").join(", ")}: ${record.get("count").toNumber()}`
      );
    });
  } catch (error) {
    console.error("Graph verification failed:", error.message);
  } finally {
    await session.close();
    await driver.close();
  }
}

testGraph();