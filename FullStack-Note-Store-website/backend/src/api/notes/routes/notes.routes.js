/**
 * Notes Management Routes Module
 * 
 * Defines HTTP route mappings for personal note operations (CRUD).
 * Base Mount Point: `/api/notes` (configured in mainRouter)
 */
import express from "express";
import { authenticateUser } from "../../../middleware/authentication.js";
import { requireAdmin } from "../../../middleware/adminMiddleware.js";
import { createNotesController } from "../controller/notes.controller.js";

// Initialize an isolated Express router instance for note endpoints
export const noteRoutes = express.Router();

/**
 * @route   POST /api/notes/createNotes
 * @desc    Create a new personal note for the authenticated user
 * @access  Private (Authenticated users)
 */
noteRoutes.post("/createNotes", authenticateUser, createNotesController);


export default noteRoutes;