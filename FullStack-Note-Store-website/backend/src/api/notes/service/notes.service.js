/**
 * Notes Service
 * 
 * Handles business logic, database queries, and data mapping for personal notes.
 */
import crypto from "crypto";
import { safeExecute } from "../../../../db/config.js";

/**
 * Creates a new personal note in the database.
 * 
 * Generates a unique UUID for the note, persists it with user ownership,
 * and retrieves the created note record with database timestamps.
 *
 * @param {object} params
 * @param {string} params.title - Title of the note
 * @param {string} params.content - Body text of the note
 * @param {string} params.user_id - UUID of the owning user
 * @returns {Promise<object>} The newly created note record
 */

export const createNoteService = async ({ title, content, user_id }) => {
    // Generate a unique UUID for the note
    const noteId = crypto.randomUUID();

    const insertSql = "INSERT INTO notes (id, title, content, user_id) VALUES (?, ?, ?, ?)";
    await safeExecute(insertSql, [noteId, title, content, user_id]);

    // Retrieve the newly created record with database timestamps
    const [createdNote] = await safeExecute(
        "SELECT id, title, content, user_id, created_at, updated_at FROM notes WHERE id = ? LIMIT 1",
        [noteId]
    );

    return createdNote;
};