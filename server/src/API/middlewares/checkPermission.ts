// Import necessary modules and types
import { Response, NextFunction } from 'express';
import { apiREQ } from '../types/globals/express.types';

// Middleware function to check user permissions
const checkPermissions = (requiredPermission: string) => {
  return (request: apiREQ, response: Response, next: NextFunction) => {
    // Get the user object from the request
    const user = request.user;

    // Check if user is an admin
    if (user && user.is_admin) {
      // Check if the user has the required permission
      const hasPermission = user.user_roles.some((role: { roles: { role_permissions: any[]; }; }) => {
        return role.roles.role_permissions.some(
          (permission) => permission.name === requiredPermission
        );
      });

      if (hasPermission) {
        // User has the required permission, proceed to the next middleware or route handler
        next();
      } else {
        // User does not have the required permission, send forbidden response
        response.status(403).json({ message: 'Forbidden - Insufficient permissions' ,status:403});
      }
    } else {
      // User is not an admin, send unauthorized response
      response.status(401).json({ message: 'Unauthorized - Admin privileges required', status:403 });
    }
  };
};

export default checkPermissions;
