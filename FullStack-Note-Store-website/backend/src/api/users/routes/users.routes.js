/**
 * User Management Routes Module
 * 
 * Defines HTTP route mappings for user account management, profiles, and admin operations.
 * Base Mount Point: `/api/users` (configured in mainRouter)
 */
import express from "express";
import { authenticateUser } from "../../../middleware/authentication.js"; 
import { requireAdmin } from "../../../middleware/adminMiddleware.js";
import { getAllUsersController } from "../controller/users.controller.js";

// Initialize an isolated Express router instance for user-related endpoints
export const usersRoutes = express.Router();

/**
 * @route   GET /api/users/admin/user
 * @desc    Retrieve a list of all registered users
 * @access  Private (Admin only)
 */
usersRoutes.get("/admin/user", authenticateUser, requireAdmin, getAllUsersController);


export default usersRoutes;
