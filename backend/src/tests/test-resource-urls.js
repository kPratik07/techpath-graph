const driver = require("../config/database");

async function testResourceUrls() {
  const session = driver.session();

  try {
    const result = await session.run(`
      MATCH (r:Resource)
      RETURN r.id AS id, r.url AS url
      ORDER BY r.id
    `);

    console.log("\nResource URLs:\n");

    result.records.forEach((record) => {
      console.log(
        `${record.get("id")} → ${record.get("url")}`
      );
    });
  } catch (error) {
    console.error("Resource URL check failed:", error.message);
  } finally {
    await session.close();
    await driver.close();
  }
}

testResourceUrls();