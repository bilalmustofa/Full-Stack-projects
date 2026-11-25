/**
 * Notes Service
 * 
 * Handles business logic, database queries, and data mapping for personal notes.
 */

import { safeExecute } from "../../../../db/config.js";

/**
 * Creates a new personal note in the database.
 * 
 * Persists the note with user ownership and retrieves the newly 
 * created record including its auto-generated ID and database timestamps.
 *
 * @param {object} params
 * @param {string} params.title - Title of the note
 * @param {string} params.content - Body text of the note
 * @param {string|number} params.user_id - ID of the owning user
 * @returns {Promise<object>} The newly created note record
 */

export const createNoteService = async ({ title, content, user_id }) => {

    const insertSql = "INSERT INTO notes (title, content, user_id) VALUES (?, ?, ?)";
    const result = await safeExecute(insertSql, [title, content, user_id]);

    // Retrieve the newly created record with database timestamps
    const [createdNote] = await safeExecute(
        "SELECT id, title, content, user_id, created_at, updated_at FROM notes WHERE id = ? LIMIT 1",
        [result.insertId]
    );

    return createdNote;
};