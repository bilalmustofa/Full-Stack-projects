/**
 * Main API Router Gateway
 * 
 * Central routing hub that aggregates and mounts all feature-specific module routers
 * into a unified routing pipeline mounted under `/api` in `index.js`.
 *
 * Registered Route Modules:
 * - `/api/auth`  -> User authentication, registration, login & password management
 * - `/api/users` -> User profile and user administration operations
 */
import express from "express";
import authRoutes from "./auth/routes/auth.routes.js";
import usersRoutes from "./users/routes/users.routes.js";

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

export default mainRouter;