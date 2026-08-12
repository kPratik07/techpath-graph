# 🚀 TechPath — Graph-Based Developer Learning Path

> **Discover the skills you need. Find the right resources. Build your path.**

TechPath identifies the **skill gaps between a developer's current skills and a target role**, then recommends relevant learning resources.

The application uses **CognoDB** to model relationships between developers, skills, roles, projects, technologies, and learning resources.

---
## ✨ Features

- 👨‍💻 Select a developer and target role
- 🧠 Identify missing skills using graph relationships
- 📚 Recommend learning resources for missing skills
- 🔗 Open resources directly from the application
- ⚡ REST API for skill-gap recommendations
- 🛡️ Loading, empty, error, and retry states
- 📱 Responsive UI

---
## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| 🎨 Frontend | React + Vite |
| 💅 Styling | Tailwind CSS |
| ⚙️ Backend | Node.js + Express.js |
| 🗃️ Database | CognoDB |
| 🧠 Query Language | Cypher |
| 🔌 API | REST |

---
## 🧩 Why a Graph Database?

TechPath is centered around relationships between developers, skills, roles, projects, technologies, and resources.

A graph database makes these relationships natural to model and query.

```text
👨‍💻 Developer
   │
   ├── HAS_SKILL ──────→ 🧠 Skill
   │
   └── BUILT ──────────→ 📦 Project
                              │
                              ├── USES ──────────→ 💻 Technology
                              │
                              └── DEMONSTRATES ──→ 🧠 Skill

🎯 Role
   │
   └── REQUIRES ───────→ 🧠 Skill
                              ↑
                              │
📚 Resource ── TEACHES ──────┘
```

The recommendation engine compares a developer's `HAS_SKILL` relationships with the skills a target role `REQUIRES` and identifies the missing skills.

---
## 🗂️ Data Model

### Nodes

- 👨‍💻 `Developer`
- 🧠 `Skill`
- 🎯 `Role`
- 📚 `Resource`
- 📦 `Project`
- 💻 `Technology`

### Relationships

```text
Developer ──HAS_SKILL──────→ Skill
Role ──────REQUIRES────────→ Skill
Resource ──TEACHES─────────→ Skill
Developer ──BUILT──────────→ Project
Project ───USES────────────→ Technology
Project ───DEMONSTRATES────→ Skill
```

---
# ⚙️ Setup

## 📋 Prerequisites
- Node.js 18+
- npm
- CognoDB database instance
- Git
---
## 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd techpath-graph
```

---
## 2️⃣ Configure the Backend

```bash
cd backend
npm install
```
Create:

```text
backend/.env
```
Configure the database connection:

```env
COGNODB_URI=your-cognodb-uri
COGNODB_USERNAME=your-username
COGNODB_PASSWORD=your-password
PORT=5000
```
> 🔐 Never commit real database credentials.

---
## 3️⃣ Create the Graph Schema

From the `backend` directory:

```bash
node scripts/run-schema.js
```
This creates the required uniqueness constraints for the graph nodes.

---
## 4️⃣ Seed the Database

```bash
node scripts/run-seed.js
```
This creates the sample developers, skills, roles, resources, projects, technologies, and relationships.

---
## 5️⃣ Start the Backend

```bash
node src/server.js
```

The API will run on:

```text
http://localhost:5000
```
Verify it with:

```bash
curl http://localhost:5000/health
```
Expected:

```json
{
  "status": "ok",
  "message": "TechPath API is running"
}
```
---
## 6️⃣ Start the Frontend

Open a new terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```
Open:

```text
http://localhost:5173
```
---

## 🔌 API

### Health Check

```http
GET /health
```
### Skill Gap Recommendations

```http
GET /api/recommendations/:developerId/:roleId
```
Example:

```text
GET /api/recommendations/dev-001/role-frontend
```

The response contains:

- Developer
- Target role
- Missing skills
- Recommended learning resources
---
## 🧪 Testing

Backend tests cover graph data, relationships, skill gaps, resource URLs, developer-role matching, and recommendation API behavior.

Run from `backend`:

```bash
node src/tests/test-graph.js
node src/tests/test-relationships.js
node src/tests/test-skill-gap.js
```
---
## 🔐 Security

Keep database credentials in:

```text
backend/.env
```
The `.env` file should remain excluded from Git.

Use `.env.example` as the configuration template.