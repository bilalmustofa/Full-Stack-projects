/**
 * User Management Routes Module
 * 
 * Defines HTTP route mappings for user account management, profiles, and admin operations.
 * Base Mount Point: `/api/users` (configured in mainRouter)
 */
import express from "express";

// Initialize an isolated Express router instance for user-related endpoints
export const usersRoutes = express.Router();


export default usersRoutes;
