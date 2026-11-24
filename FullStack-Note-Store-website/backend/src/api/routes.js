/**
 * Main API Router Gateway
 * 
 * Central routing hub that aggregates and mounts all feature-specific module routers
 * into a unified routing pipeline mounted under `/api` in `index.js`.
 *
 * Registered Route Modules:
 * - `/api/auth`  -> User authentication, registration, login & password management
 * - `/api/users` -> User profile and user administration operations
 * - `/api/notes` -> Personal note creation, management, and CRUD operations
 */
import express from "express";
import authRoutes from "./auth/routes/auth.routes.js";
import usersRoutes from "./users/routes/users.routes.js";
import noteRoutes from "./notes/routes/notes.routes.js";

// Initialize the master Express router instance
export const mainRouter = express.Router();

/**
 * Authentication Routes
 * Mounts all authentication endpoints under `/api/auth`
 */
mainRouter.use("/auth", authRoutes);

/**
 * User Management Routes
 * Mounts all user-related endpoints under `/api/users`
 */
mainRouter.use("/users", usersRoutes);

/**
 * Notes Management Routes
 * Mounts all personal note endpoints (CRUD) under `/api/notes`
 */
mainRouter.use("/notes", noteRoutes);

export default mainRouter;