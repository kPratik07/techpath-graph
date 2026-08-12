const fs = require("fs");
const path = require("path");

const driver = require("../src/config/database");

async function runSchema() {
  const session = driver.session();

  try {
    const schemaPath = path.join(
      __dirname,
      "../../database/schema.cypher"
    );

    const schema = fs.readFileSync(schemaPath, "utf-8");

    const statements = schema
      .split(";")
      .map((statement) => statement.trim())
      .filter(Boolean);

    for (const statement of statements) {
      console.log(`Running: ${statement.split("\n")[0]}`);

      await session.run(statement);

      console.log("✓ Completed");
    }

    console.log("\nSchema created successfully.");
  } catch (error) {
    console.error("Schema creation failed:", error.message);
  } finally {
    await session.close();
    await driver.close();
  }
}

runSchema();