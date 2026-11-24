/**
 * User Management Service
 * 
 * Encapsulates business logic and database queries for user management,
 * account administrative operations, and profile lookups.
 */
import { safeExecute } from "../../../../db/config.js";

/**
 * Retrieves all registered users from the database.
 * 
 * Queries user accounts while strictly excluding sensitive data like password hashes.
 * Results are sorted chronologically by registration date (newest first).
 *
 * @returns {Promise<Array<{ id: string, email: string, role: string, created_at: string }>>} List of sanitized user records
 */
export const getAllUsersService = async () => {

    // Select only safe user fields, excluding passwords
    const sql = "SELECT id, email, role, created_at FROM users ORDER BY created_at DESC";

    const res = await safeExecute(sql);

    return res;
};

/**
 * Permanently deletes a user from the database by ID.
 * 
 * Cascades deletion to associated records (e.g., user notes) defined by foreign key constraints.
 *
 * @param {string} userId - The unique UUID identifier of the user to delete
 * @returns {Promise<boolean>} Resolves to `true` if a record was deleted, or `false` if user did not exist
 */
export const deleteUserService = async (userId) => {
    const sql = "DELETE FROM users WHERE id = ?";
    
    // Pass query parameters as an array to prevent syntax/binding errors
    const result = await safeExecute(sql, [userId]);

    // Return true if at least one row was affected, indicating successful deletion
    return result.affectedRows > 0;
};