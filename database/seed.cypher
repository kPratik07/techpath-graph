// =============================
// DEVELOPERS
// =============================

MERGE (d:Developer {id: "dev-001"})
SET d.name = "Aarav Sharma",
    d.email = "aarav@example.com",
    d.role = "Full Stack Developer";

MERGE (d:Developer {id: "dev-002"})
SET d.name = "Meera Kapoor",
    d.email = "meera@example.com",
    d.role = "Frontend Developer";

MERGE (d:Developer {id: "dev-003"})
SET d.name = "Rohan Verma",
    d.email = "rohan@example.com",
    d.role = "Backend Developer";

MERGE (d:Developer {id: "dev-004"})
SET d.name = "Pratik Raj",
    d.email = "pratik@example.com",
    d.role = "MERN Stack Developer";

MERGE (d:Developer {id: "dev-005"})
SET d.name = "Neha Malhotra",
    d.email = "neha@example.com",
    d.role = "Frontend Developer";


// =============================
// SKILLS
// =============================

MERGE (s:Skill {id: "skill-javascript"})
SET s.name = "JavaScript",
    s.category = "Programming Language";

MERGE (s:Skill {id: "skill-react"})
SET s.name = "React",
    s.category = "Frontend";

MERGE (s:Skill {id: "skill-typescript"})
SET s.name = "TypeScript",
    s.category = "Programming Language";

MERGE (s:Skill {id: "skill-nextjs"})
SET s.name = "Next.js",
    s.category = "Frontend Framework";

MERGE (s:Skill {id: "skill-nodejs"})
SET s.name = "Node.js",
    s.category = "Backend";

MERGE (s:Skill {id: "skill-express"})
SET s.name = "Express.js",
    s.category = "Backend";

MERGE (s:Skill {id: "skill-mongodb"})
SET s.name = "MongoDB",
    s.category = "Database";

MERGE (s:Skill {id: "skill-docker"})
SET s.name = "Docker",
    s.category = "DevOps";


// =============================
// ROLES
// =============================

MERGE (r:Role {id: "role-frontend"})
SET r.name = "Frontend Developer",
    r.description = "Builds modern and interactive web interfaces.";

MERGE (r:Role {id: "role-backend"})
SET r.name = "Backend Developer",
    r.description = "Builds APIs, backend services and data systems.";

MERGE (r:Role {id: "role-fullstack"})
SET r.name = "Full Stack Developer",
    r.description = "Builds complete applications across frontend and backend.";


// =============================
// RESOURCES
// =============================

MERGE (r:Resource {id: "resource-js"})
SET r.title = "JavaScript Guide",
    r.type = "Documentation",
    r.url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    r.difficulty = "Beginner";

MERGE (r:Resource {id: "resource-react"})
SET r.title = "React Documentation",
    r.type = "Documentation",
    r.url = "https://react.dev/",
    r.difficulty = "Intermediate";

MERGE (r:Resource {id: "resource-typescript"})
SET r.title = "TypeScript Handbook",
    r.type = "Documentation",
    r.url = "https://www.typescriptlang.org/docs/",
    r.difficulty = "Intermediate";

MERGE (r:Resource {id: "resource-nextjs"})
SET r.title = "Next.js Documentation",
    r.type = "Documentation",
    r.url = "https://nextjs.org/docs",
    r.difficulty = "Intermediate";

MERGE (r:Resource {id: "resource-nodejs"})
SET r.title = "Node.js Documentation",
    r.type = "Documentation",
    r.url = "https://nodejs.org/docs/latest/api/",
    r.difficulty = "Intermediate";

MERGE (r:Resource {id: "resource-mongodb"})
SET r.title = "MongoDB Documentation",
    r.type = "Documentation",
    r.url = "https://www.mongodb.com/docs/",
    r.difficulty = "Intermediate";

MERGE (r:Resource {id: "resource-docker"})
SET r.title = "Docker Get Started",
    r.type = "Tutorial",
    r.url = "https://docs.docker.com/get-started/",
    r.difficulty = "Beginner";


// =============================
// TECHNOLOGIES
// =============================

MERGE (t:Technology {id: "tech-react"})
SET t.name = "React",
    t.category = "Frontend";

MERGE (t:Technology {id: "tech-nodejs"})
SET t.name = "Node.js",
    t.category = "Backend";

MERGE (t:Technology {id: "tech-mongodb"})
SET t.name = "MongoDB",
    t.category = "Database";

MERGE (t:Technology {id: "tech-nextjs"})
SET t.name = "Next.js",
    t.category = "Frontend Framework";

MERGE (t:Technology {id: "tech-docker"})
SET t.name = "Docker",
    t.category = "DevOps";

MERGE (t:Technology {id: "tech-cognodb"})
SET t.name = "CognoDB",
    t.category = "Graph Database";


// =============================
// PROJECTS
// =============================

MERGE (p:Project {id: "project-finance"})
SET p.name = "Finance Tracker",
    p.description = "A dashboard for tracking personal finances and expenses.",
    p.difficulty = "Intermediate";

MERGE (p:Project {id: "project-ecommerce"})
SET p.name = "E-Commerce Platform",
    p.description = "A full-stack shopping platform with product and order management.",
    p.difficulty = "Advanced";

MERGE (p:Project {id: "project-portfolio"})
SET p.name = "Developer Portfolio",
    p.description = "A personal portfolio showcasing projects and technical skills.",
    p.difficulty = "Beginner";

MERGE (p:Project {id: "project-taskmanager"})
SET p.name = "Task Manager",
    p.description = "A collaborative application for managing tasks and projects.",
    p.difficulty = "Intermediate";

MERGE (p:Project {id: "project-techpath"})
SET p.name = "TechPath Learning Platform",
    p.description = "A graph-based application that identifies developer skill gaps and recommends learning resources.",
    p.difficulty = "Advanced";

MERGE (p:Project {id: "project-dashboard"})
SET p.name = "E-Commerce Dashboard",
    p.description = "A frontend dashboard for monitoring products, orders and business metrics.",
    p.difficulty = "Intermediate";


// =============================
// DEVELOPER → SKILL
// =============================

MATCH (d:Developer {id: "dev-001"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-001"})
MATCH (s:Skill {id: "skill-react"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-001"})
MATCH (s:Skill {id: "skill-nodejs"})
MERGE (d)-[:HAS_SKILL]->(s);


MATCH (d:Developer {id: "dev-002"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-002"})
MATCH (s:Skill {id: "skill-react"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-002"})
MATCH (s:Skill {id: "skill-typescript"})
MERGE (d)-[:HAS_SKILL]->(s);


MATCH (d:Developer {id: "dev-003"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-003"})
MATCH (s:Skill {id: "skill-nodejs"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-003"})
MATCH (s:Skill {id: "skill-express"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-003"})
MATCH (s:Skill {id: "skill-mongodb"})
MERGE (d)-[:HAS_SKILL]->(s);


MATCH (d:Developer {id: "dev-004"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-004"})
MATCH (s:Skill {id: "skill-react"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-004"})
MATCH (s:Skill {id: "skill-nodejs"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-004"})
MATCH (s:Skill {id: "skill-express"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-004"})
MATCH (s:Skill {id: "skill-mongodb"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-004"})
MATCH (s:Skill {id: "skill-typescript"})
MERGE (d)-[:HAS_SKILL]->(s);


MATCH (d:Developer {id: "dev-005"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-005"})
MATCH (s:Skill {id: "skill-react"})
MERGE (d)-[:HAS_SKILL]->(s);

MATCH (d:Developer {id: "dev-005"})
MATCH (s:Skill {id: "skill-typescript"})
MERGE (d)-[:HAS_SKILL]->(s);


// =============================
// ROLE → REQUIRED SKILL
// =============================

MATCH (r:Role {id: "role-frontend"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (r)-[:REQUIRES {importance: "high"}]->(s);

MATCH (r:Role {id: "role-frontend"})
MATCH (s:Skill {id: "skill-react"})
MERGE (r)-[:REQUIRES {importance: "high"}]->(s);

MATCH (r:Role {id: "role-frontend"})
MATCH (s:Skill {id: "skill-typescript"})
MERGE (r)-[:REQUIRES {importance: "medium"}]->(s);

MATCH (r:Role {id: "role-frontend"})
MATCH (s:Skill {id: "skill-nextjs"})
MERGE (r)-[:REQUIRES {importance: "medium"}]->(s);


MATCH (r:Role {id: "role-backend"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (r)-[:REQUIRES {importance: "high"}]->(s);

MATCH (r:Role {id: "role-backend"})
MATCH (s:Skill {id: "skill-nodejs"})
MERGE (r)-[:REQUIRES {importance: "high"}]->(s);

MATCH (r:Role {id: "role-backend"})
MATCH (s:Skill {id: "skill-express"})
MERGE (r)-[:REQUIRES {importance: "high"}]->(s);

MATCH (r:Role {id: "role-backend"})
MATCH (s:Skill {id: "skill-mongodb"})
MERGE (r)-[:REQUIRES {importance: "medium"}]->(s);


MATCH (r:Role {id: "role-fullstack"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (r)-[:REQUIRES {importance: "high"}]->(s);

MATCH (r:Role {id: "role-fullstack"})
MATCH (s:Skill {id: "skill-react"})
MERGE (r)-[:REQUIRES {importance: "high"}]->(s);

MATCH (r:Role {id: "role-fullstack"})
MATCH (s:Skill {id: "skill-nodejs"})
MERGE (r)-[:REQUIRES {importance: "high"}]->(s);

MATCH (r:Role {id: "role-fullstack"})
MATCH (s:Skill {id: "skill-mongodb"})
MERGE (r)-[:REQUIRES {importance: "medium"}]->(s);


// =============================
// RESOURCE → SKILL
// =============================

MATCH (r:Resource {id: "resource-js"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (r)-[:TEACHES]->(s);

MATCH (r:Resource {id: "resource-react"})
MATCH (s:Skill {id: "skill-react"})
MERGE (r)-[:TEACHES]->(s);

MATCH (r:Resource {id: "resource-typescript"})
MATCH (s:Skill {id: "skill-typescript"})
MERGE (r)-[:TEACHES]->(s);

MATCH (r:Resource {id: "resource-nextjs"})
MATCH (s:Skill {id: "skill-nextjs"})
MERGE (r)-[:TEACHES]->(s);

MATCH (r:Resource {id: "resource-nodejs"})
MATCH (s:Skill {id: "skill-nodejs"})
MERGE (r)-[:TEACHES]->(s);

MATCH (r:Resource {id: "resource-mongodb"})
MATCH (s:Skill {id: "skill-mongodb"})
MERGE (r)-[:TEACHES]->(s);

MATCH (r:Resource {id: "resource-docker"})
MATCH (s:Skill {id: "skill-docker"})
MERGE (r)-[:TEACHES]->(s);


// =============================
// DEVELOPER → PROJECT
// =============================

MATCH (d:Developer {id: "dev-001"})
MATCH (p:Project {id: "project-finance"})
MERGE (d)-[:BUILT]->(p);

MATCH (d:Developer {id: "dev-002"})
MATCH (p:Project {id: "project-portfolio"})
MERGE (d)-[:BUILT]->(p);

MATCH (d:Developer {id: "dev-003"})
MATCH (p:Project {id: "project-ecommerce"})
MERGE (d)-[:BUILT]->(p);

MATCH (d:Developer {id: "dev-003"})
MATCH (p:Project {id: "project-taskmanager"})
MERGE (d)-[:BUILT]->(p);

MATCH (d:Developer {id: "dev-004"})
MATCH (p:Project {id: "project-techpath"})
MERGE (d)-[:BUILT]->(p);

MATCH (d:Developer {id: "dev-005"})
MATCH (p:Project {id: "project-dashboard"})
MERGE (d)-[:BUILT]->(p);


// =============================
// PROJECT → TECHNOLOGY
// =============================

MATCH (p:Project {id: "project-finance"})
MATCH (t:Technology {id: "tech-react"})
MERGE (p)-[:USES]->(t);

MATCH (p:Project {id: "project-finance"})
MATCH (t:Technology {id: "tech-nodejs"})
MERGE (p)-[:USES]->(t);

MATCH (p:Project {id: "project-finance"})
MATCH (t:Technology {id: "tech-mongodb"})
MERGE (p)-[:USES]->(t);


MATCH (p:Project {id: "project-ecommerce"})
MATCH (t:Technology {id: "tech-react"})
MERGE (p)-[:USES]->(t);

MATCH (p:Project {id: "project-ecommerce"})
MATCH (t:Technology {id: "tech-nodejs"})
MERGE (p)-[:USES]->(t);

MATCH (p:Project {id: "project-ecommerce"})
MATCH (t:Technology {id: "tech-mongodb"})
MERGE (p)-[:USES]->(t);


MATCH (p:Project {id: "project-portfolio"})
MATCH (t:Technology {id: "tech-nextjs"})
MERGE (p)-[:USES]->(t);


MATCH (p:Project {id: "project-taskmanager"})
MATCH (t:Technology {id: "tech-react"})
MERGE (p)-[:USES]->(t);

MATCH (p:Project {id: "project-taskmanager"})
MATCH (t:Technology {id: "tech-nodejs"})
MERGE (p)-[:USES]->(t);

MATCH (p:Project {id: "project-taskmanager"})
MATCH (t:Technology {id: "tech-docker"})
MERGE (p)-[:USES]->(t);


MATCH (p:Project {id: "project-techpath"})
MATCH (t:Technology {id: "tech-react"})
MERGE (p)-[:USES]->(t);

MATCH (p:Project {id: "project-techpath"})
MATCH (t:Technology {id: "tech-nodejs"})
MERGE (p)-[:USES]->(t);

MATCH (p:Project {id: "project-techpath"})
MATCH (t:Technology {id: "tech-mongodb"})
MERGE (p)-[:USES]->(t);

MATCH (p:Project {id: "project-techpath"})
MATCH (t:Technology {id: "tech-cognodb"})
MERGE (p)-[:USES]->(t);


MATCH (p:Project {id: "project-dashboard"})
MATCH (t:Technology {id: "tech-react"})
MERGE (p)-[:USES]->(t);

MATCH (p:Project {id: "project-dashboard"})
MATCH (t:Technology {id: "tech-nextjs"})
MERGE (p)-[:USES]->(t);


// =============================
// PROJECT → DEMONSTRATED SKILL
// =============================

MATCH (p:Project {id: "project-finance"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-finance"})
MATCH (s:Skill {id: "skill-react"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-finance"})
MATCH (s:Skill {id: "skill-nodejs"})
MERGE (p)-[:DEMONSTRATES]->(s);


MATCH (p:Project {id: "project-ecommerce"})
MATCH (s:Skill {id: "skill-react"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-ecommerce"})
MATCH (s:Skill {id: "skill-nodejs"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-ecommerce"})
MATCH (s:Skill {id: "skill-mongodb"})
MERGE (p)-[:DEMONSTRATES]->(s);


MATCH (p:Project {id: "project-portfolio"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-portfolio"})
MATCH (s:Skill {id: "skill-nextjs"})
MERGE (p)-[:DEMONSTRATES]->(s);


MATCH (p:Project {id: "project-taskmanager"})
MATCH (s:Skill {id: "skill-react"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-taskmanager"})
MATCH (s:Skill {id: "skill-nodejs"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-taskmanager"})
MATCH (s:Skill {id: "skill-docker"})
MERGE (p)-[:DEMONSTRATES]->(s);


MATCH (p:Project {id: "project-techpath"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-techpath"})
MATCH (s:Skill {id: "skill-react"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-techpath"})
MATCH (s:Skill {id: "skill-nodejs"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-techpath"})
MATCH (s:Skill {id: "skill-express"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-techpath"})
MATCH (s:Skill {id: "skill-mongodb"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-techpath"})
MATCH (s:Skill {id: "skill-typescript"})
MERGE (p)-[:DEMONSTRATES]->(s);


MATCH (p:Project {id: "project-dashboard"})
MATCH (s:Skill {id: "skill-javascript"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-dashboard"})
MATCH (s:Skill {id: "skill-react"})
MERGE (p)-[:DEMONSTRATES]->(s);

MATCH (p:Project {id: "project-dashboard"})
MATCH (s:Skill {id: "skill-typescript"})
MERGE (p)-[:DEMONSTRATES]->(s);