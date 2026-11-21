<div align="center">

# 🌐 Full-Stack Projects

A centralized repository containing a collection of full-stack web applications and architectures.

[![Repository Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)]()
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](https://opensource.org/licenses/ISC)

</div>

---

## 📖 About This Repository

This repository acts as an umbrella workspace for developing, organizing, and maintaining various standalone full-stack web applications that i have learn. 

Each project inside this directory is self-contained with its own client/server architecture, dependencies, configuration files, and dedicated documentation.

---

## 📁 Repository Folder Structure

```plaintext
Full-Stack-projects/
│
├── FullStack-Note-Store-website/       # Full-stack personal note management system
│   ├── backend/                        # Server application (Express, MySQL, JWT, Auth)
│   │   ├── db/                         # Database schema & connection pool
│   │   ├── src/                        # API routes, controllers, services, middleware
│   │   ├── .env.example                # Environment variables template
│   │   └── package.json                # Backend dependencies and scripts
│   └── README.md                       # Project-specific documentation & setup guide
│
├── [Future-Project-Name]/              # Additional full-stack projects added here
│
└── README.md                           # Main repository overview & directory guide (this file)
```

---

## 🗂️ Project Directory

| Project Directory | Description | Documentation |
| :--- | :--- | :--- |
| [**`FullStack-Note-Store-website`**](./FullStack-Note-Store-website/) | A personal note management web application featuring JWT authentication, role management, and MySQL persistence. | [Open Project README](./FullStack-Note-Store-website/README.md) |

> 📌 **Note:** For specific installation steps, API routes, database schemas, and running instructions for an individual project, refer directly to the `README.md` inside that project's folder.

---

## 📐 Project Conventions

Projects added to this workspace follow standard full-stack conventions:

1. **Self-Contained Modules**: Each project manages its own dependencies (`package.json`) and execution scripts.
2. **Environment Isolation**: Private credentials remain isolated within local `.env` files, with safe `.env.example` templates committed for reference.
3. **Dedicated Documentation**: Every project folder contains its own `README.md` describing its features, architecture, database setup, and endpoints.

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bilalmustofa/Full-Stack-projects.git
   cd Full-Stack-projects
   ```

2. **Navigate into the project you want to work on:**
   ```bash
   cd FullStack-Note-Store-website
   ```

3. **Follow the instructions** in that project's local `README.md` to install dependencies and start the app.

---
