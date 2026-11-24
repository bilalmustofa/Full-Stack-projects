/**
 * Notes Controller
 * 
 * Handles incoming HTTP requests for personal notes management (CRUD),
 * validates request payloads, and delegates operations to notes services.
 */
import { createNoteService } from "../service/notes.service.js";

/**
 * Controller to create a new note for the authenticated user.
 * 
 * Extracts user ID from the verified JWT payload, validates required title and content,
 * invokes the note creation service, and returns the newly created note record.
 *
 * @param {import('express').Request} req - Express request object containing `{ title, content }` in `req.body` and `req.user`
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} [next] - Express next middleware function
 * @returns {Promise<import('express').Response>}
 */
export const createNotesController = async (req, res, next) => {
    try {
        const { title, content } = req.body || {};

        // Extract user ID from authenticated JWT token payload (stored as `id` in req.user)
        const userId = req.user?.id || req.user?.user_id;

        // Validate required fields
        if (!title || !content || !title.trim() || !content.trim()) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required."
            });
        }

        // Delegate note creation to the service layer
        const note = await createNoteService({
            title: title.trim(),
            content: content.trim(),
            user_id: userId
        });

        // Return 201 Created with the new note data
        return res.status(201).json({
            success: true,
            message: "Note created successfully.",
            data: note
        });

    } catch (error) {
        console.error("createNotesController error:", error);

        return res.status(error.statusCode || 500).json({ 
            success: false,
            message: error.message || "Internal server error"
        });
    }
};