/**
 * Users Controller
 * 
 * Handles incoming HTTP requests for user management and administration routes,
 * invokes user services, and returns formatted HTTP responses.
 */
import { getAllUsersService, deleteUserService } from "../service/users.service.js";

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
        // Fetch user records from the service layer
        const users = await getAllUsersService();

        // Return successful response with record count and sanitized user list
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

/**
 * Controller to delete a user account by ID.
 * 
 * Validates the UUID route parameter format, guards against self-deletion,
 * invokes the deletion service, and returns an appropriate status.
 *
 * @param {import('express').Request} req - Express request object (contains `req.params.userId` and `req.user`)
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} [next] - Express next middleware function
 * @returns {Promise<import('express').Response>}
 */
export const deleteUserController = async (req, res, next) => {
    try {
        const { userId } = req.params;

        // Validate that the userId param is present and matches standard UUID format
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        if (!userId || !uuidRegex.test(userId.trim())) {
            return res.status(400).json({
                success: false,
                message: "Invalid user UUID format."
            });
        }

        // Prevent administrative self-deletion
        if (req.user && req.user.id === userId) {
            return res.status(400).json({
                success: false,
                message: "Administrators cannot delete their own account."
            });
        }

        // Delegate deletion to the service layer
        const result = await deleteUserService(userId);

        // Check if a record was actually deleted (handles boolean or MySQL affectedRows)
        const isDeleted = typeof result === "object" ? result.affectedRows > 0 : Boolean(result);
        if (!isDeleted) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        // Return success response (200 OK for successful deletion)
        return res.status(200).json({
            success: true,
            message: "User successfully deleted."
        });
        
    } catch (error) {
        console.error("Delete user controller error:", error);

        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
};