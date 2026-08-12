const driver = require("../config/database");

async function checkDeveloperAndRole(developerId, roleId) {
  const session = driver.session();

  try {
    const developerResult = await session.run(
      `
      MATCH (developer:Developer {id: $developerId})
      RETURN count(developer) AS count
      `,
      {
        developerId
      }
    );

    const roleResult = await session.run(
      `
      MATCH (role:Role {id: $roleId})
      RETURN count(role) AS count
      `,
      {
        roleId
      }
    );

    return {
      developerExists: developerResult.records[0].get("count").toNumber() > 0,
      roleExists: roleResult.records[0].get("count").toNumber() > 0
    };
  } finally {
    await session.close();
  }
}

async function getSkillGap(developerId, roleId) {
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
        developer.id AS developerId,
        developer.name AS developerName,
        role.id AS roleId,
        role.name AS roleName,
        requiredSkill.id AS skillId,
        requiredSkill.name AS skillName

      ORDER BY skillName
      `,
      {
        developerId,
        roleId
      }
    );

    return result.records.map((record) => ({
      developerId: record.get("developerId"),
      developerName: record.get("developerName"),
      roleId: record.get("roleId"),
      roleName: record.get("roleName"),
      skillId: record.get("skillId"),
      skillName: record.get("skillName")
    }));
  } finally {
    await session.close();
  }
}

async function getResourcesForSkills(skillIds) {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (resource:Resource)-[:TEACHES]->(skill:Skill)
      WHERE skill.id IN $skillIds

      RETURN
        skill.id AS skillId,
        skill.name AS skillName,
        resource.id AS resourceId,
        resource.title AS resourceTitle,
        resource.type AS resourceType,
        resource.url AS resourceUrl,
        resource.difficulty AS difficulty

      ORDER BY skillName, resourceTitle
      `,
      {
        skillIds
      }
    );

    return result.records.map((record) => ({
      skillId: record.get("skillId"),
      skillName: record.get("skillName"),
      resource: {
        id: record.get("resourceId"),
        title: record.get("resourceTitle"),
        type: record.get("resourceType"),
        url: record.get("resourceUrl"),
        difficulty: record.get("difficulty")
      }
    }));
  } finally {
    await session.close();
  }
}
async function getDeveloperTechnologies(developerId) {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (developer:Developer {id: $developerId})
            -[:BUILT]->(project:Project)
            -[:USES]->(technology:Technology)

      RETURN
        developer.id AS developerId,
        developer.name AS developerName,
        project.id AS projectId,
        project.name AS projectName,
        technology.id AS technologyId,
        technology.name AS technologyName

      ORDER BY technologyName
      `,
      {
        developerId
      }
    );

    return result.records.map((record) => ({
      developerId: record.get("developerId"),
      developerName: record.get("developerName"),
      projectId: record.get("projectId"),
      projectName: record.get("projectName"),
      technologyId: record.get("technologyId"),
      technologyName: record.get("technologyName")
    }));
  } finally {
    await session.close();
  }
}
async function getDevelopersForRole(roleId) {
  const session = driver.session();

  try {
    const result = await session.run(
      `
      MATCH (role:Role {id: $roleId})
            -[:REQUIRES]->(requiredSkill:Skill)

      MATCH (developer:Developer)

      OPTIONAL MATCH (developer)-[:HAS_SKILL]->(developerSkill:Skill)

      WITH
        developer,
        role,
        collect(DISTINCT requiredSkill.id) AS requiredSkillIds,
        collect(DISTINCT developerSkill.id) AS developerSkillIds

      WITH
        developer,
        role,
        requiredSkillIds,
        developerSkillIds,
        [skillId IN requiredSkillIds
         WHERE NOT skillId IN developerSkillIds] AS missingSkillIds

      RETURN
        developer.id AS developerId,
        developer.name AS developerName,
        role.id AS roleId,
        role.name AS roleName,
        size(requiredSkillIds) AS totalRequiredSkills,
        size(missingSkillIds) AS missingSkills,
        missingSkillIds

      ORDER BY missingSkills ASC, developerName
      `,
      {
        roleId
      }
    );

    return result.records.map((record) => ({
      developerId: record.get("developerId"),
      developerName: record.get("developerName"),
      roleId: record.get("roleId"),
      roleName: record.get("roleName"),
      totalRequiredSkills: record
        .get("totalRequiredSkills")
        .toNumber(),
      missingSkills: record
        .get("missingSkills")
        .toNumber(),
      missingSkillIds: record.get("missingSkillIds")
    }));
  } finally {
    await session.close();
  }
}

module.exports = {
  checkDeveloperAndRole,
  getSkillGap,
  getResourcesForSkills,
  getDeveloperTechnologies,
  getDevelopersForRole
};