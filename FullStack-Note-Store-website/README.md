<div align="center">

# 📝 Note Store Application

A secure, production-grade personal note management system with JWT authentication and MySQL persistence.

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-Secure%20Auth-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

</div>

---

## 📌 Features

- **Personal Note Management**: Create, view, update, and delete personal notes independently.
- **User Data Isolation**: User-specific notes secured by foreign keys and authentication middleware.
- **Authentication & RBAC**: JWT bearer tokens, bcrypt password hashing, and role checks (`USER` / `ADMIN`).
- **Safe SQL Execution**: Connection pooling and parameterized queries with `mysql2/promise`.

---
### 🛠️ Tech Stack

#### **Backend**
| Technology | Description |
| :--- | :--- |
| **Node.js** | Server-side JavaScript runtime (ES Modules) |
| **Express 5** | High-performance, minimalist web application framework |
| **MySQL2** | Fast MySQL driver with native Promises and connection pooling |
| **Bcrypt** | Industry-standard cryptographic salt hashing for passwords |
| **JSONWebToken** | Stateless, signed bearer token authentication |
| **Dotenv** | Isolated, secure environment variable management |

---


### 🔌 API Endpoints Reference

Base URL: `http://localhost:4000/api`

#### **Health Check**
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/checker` | Verify server responsiveness and status | Public |

#### **Authentication (`/api/auth`)**
| Method | Endpoint | Description | Access | Headers |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user account | Public | — |
| `POST` | `/api/auth/login` | Authenticate credentials & receive JWT | Public | — |
| `POST` | `/api/auth/logout` | Invalidate current user session | Authenticated | `Authorization: Bearer <token>` |
| `POST` | `/api/auth/passwordReset`| Submit password reset request | Public | — |

---

## 🚀 Quick Start (Backend)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bilalmustofa/Full-Stack-projects.git
   cd Full-Stack-projects/FullStack-Note-Store-website/backend
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

---

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```
Fill in your database credentials and `JWT_SECRET` in `.env`.

### 3. Initialize Database
Execute `backend/db/schema.sql` in your MySQL database:
```bash
mysql -u root -p < db/schema.sql
```

### 4. Run Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

---
## 🚦 Getting Started

### Prerequisites

Ensure you have the following installed on your local environment:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/) (v8.0+)

---

* **Production mode**:
  ```bash
  npm start
  ```

The server will output:
```text
Server running on port http://localhost:4000
MySQL database connected successfully.
```

---

