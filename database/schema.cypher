// Developer
CREATE CONSTRAINT developer_id_unique
FOR (d:Developer)
REQUIRE d.id IS UNIQUE;

// Skill
CREATE CONSTRAINT skill_id_unique
FOR (s:Skill)
REQUIRE s.id IS UNIQUE;

// Role
CREATE CONSTRAINT role_id_unique
FOR (r:Role)
REQUIRE r.id IS UNIQUE;

// Resource
CREATE CONSTRAINT resource_id_unique
FOR (r:Resource)
REQUIRE r.id IS UNIQUE;

// Project
CREATE CONSTRAINT project_id_unique
FOR (p:Project)
REQUIRE p.id IS UNIQUE;

// Technology
CREATE CONSTRAINT technology_id_unique
FOR (t:Technology)
REQUIRE t.id IS UNIQUE;