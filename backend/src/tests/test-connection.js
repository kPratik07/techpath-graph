const driver = require("../config/database");

async function testConnection() {
  const session = driver.session();

  try {
    const result = await session.run(
      'RETURN "CognoDB connected successfully" AS message'
    );

    console.log(result.records[0].get("message"));
  } catch (error) {
    console.error("Database connection failed:", error.message);
  } finally {
    await session.close();
    await driver.close();
  }
}

testConnection();