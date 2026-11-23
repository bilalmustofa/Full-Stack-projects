/**
 * Users Controller
 * 
 * Handles incoming HTTP requests for user management and administration routes,
 * invokes user services, and returns formatted HTTP responses.
 */
import { getAllUsersService } from "../service/users.service.js";

/**
 * Controller to retrieve all registered users.
 * 
 * Fetches the user list from the service layer (excluding sensitive data like password hashes)
 * and returns a structured response with total user count and data.
 *
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} [next] - Express next middleware function
 * @returns {Promise<import('express').Response>}
 */
export const getAllUsersController = async (req, res, next) => {
    try {
        // 1. Fetch user records from the service layer
        const users = await getAllUsersService();

        // 2. Return successful response with record count and sanitized user list
        return res.status(200).json({
            success: true,
            count: users ? users.length : 0,
            users: users || []
        });
    } catch (error) {
        console.error("Get all users controller error:", error);

        // Return specific status code from the service or default to 500 Internal Server Error
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
};