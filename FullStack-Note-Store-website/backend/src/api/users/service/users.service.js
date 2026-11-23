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