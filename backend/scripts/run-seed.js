const fs = require("fs");
const path = require("path");

const driver = require("../src/config/database");

async function runSeed() {
  const session = driver.session();

  try {
    const seedPath = path.join(
      __dirname,
      "../../database/seed.cypher"
    );

    const seed = fs.readFileSync(seedPath, "utf-8");

    const statements = seed
      .split(";")
      .map((statement) => statement.trim())
      .filter(Boolean);

    console.log(`Executing ${statements.length} seed statements...\n`);

    for (const statement of statements) {
      const firstLine = statement
        .split("\n")
        .find((line) => line.trim() && !line.trim().startsWith("//"));

      console.log(`Running: ${firstLine || "statement"}`);

      await session.run(statement);

      console.log("✓ Completed");
    }

    console.log("\nSeed data created successfully.");
  } catch (error) {
    console.error("Seed execution failed:", error.message);
  } finally {
    await session.close();
    await driver.close();
  }
}

runSeed();