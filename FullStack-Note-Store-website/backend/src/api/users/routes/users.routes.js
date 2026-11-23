/**
 * User Management Routes Module
 * 
 * Defines HTTP route mappings for user account management, profiles, and admin operations.
 * Base Mount Point: `/api/users` (configured in mainRouter)
 */
import express from "express";
import { authenticateUser } from "../../../middleware/authentication.js"; 
import { requireAdmin } from "../../../middleware/adminMiddleware.js";
import { getAllUsersController, deleteUserController } from "../controller/users.controller.js";

// Initialize an isolated Express router instance for user-related endpoints
export const usersRoutes = express.Router();

/**
 * @route   GET /api/users/admin/user
 * @desc    Retrieve a list of all registered users
 * @access  Private (Admin only)
 */
usersRoutes.get("/admin/user", authenticateUser, requireAdmin, getAllUsersController);

/**
 * @route   DELETE /api/users/admin/user/:userId
 * @desc    Permanently delete a specific user account by ID
 * @access  Private (Admin only)
 */
usersRoutes.delete("/admin/user/:userId", authenticateUser, requireAdmin, deleteUserController);


export default usersRoutes;
