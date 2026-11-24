/**
 * Notes Management Routes Module
 * 
 * Defines HTTP route mappings for personal note operations (CRUD).
 * Base Mount Point: `/api/notes` (configured in mainRouter)
 */
import express from "express";

// Initialize an isolated Express router instance for note endpoints
export const noteRoutes = express.Router();


export default noteRoutes;