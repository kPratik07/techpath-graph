const recommendationRepository = require("../repositories/recommendation.repository");

async function getRecommendations(developerId, roleId) {
  const existence =
    await recommendationRepository.checkDeveloperAndRole(
      developerId,
      roleId
    );

  if (!existence.developerExists) {
    const error = new Error("Developer not found");
    error.statusCode = 404;
    throw error;
  }

  if (!existence.roleExists) {
    const error = new Error("Role not found");
    error.statusCode = 404;
    throw error;
  }

  const skillGaps = await recommendationRepository.getSkillGap(
    developerId,
    roleId
  );

  if (skillGaps.length === 0) {
    return {
      developer: {
        id: developerId,
        name: null
      },
      role: {
        id: roleId,
        name: null
      },
      missingSkills: []
    };
  }

  const skillIds = skillGaps.map((skill) => skill.skillId);

  const resources =
    await recommendationRepository.getResourcesForSkills(skillIds);

  const resourcesBySkill = resources.reduce((grouped, item) => {
    if (!grouped[item.skillId]) {
      grouped[item.skillId] = [];
    }

    grouped[item.skillId].push(item.resource);

    return grouped;
  }, {});

  return {
    developer: {
      id: skillGaps[0].developerId,
      name: skillGaps[0].developerName
    },
    role: {
      id: skillGaps[0].roleId,
      name: skillGaps[0].roleName
    },
    missingSkills: skillGaps.map((skill) => ({
      id: skill.skillId,
      name: skill.skillName,
      resources: resourcesBySkill[skill.skillId] || []
    }))
  };
}

module.exports = {
  getRecommendations
};