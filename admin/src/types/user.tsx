export interface User {
    id: number;
    first_name: string;
    last_name: string;
    country: string;
    city: string;
    is_active: boolean;
    is_admin: boolean;
    is_approved: boolean;
    approvedBy: number | null;
    deactivatedBy: number | null;
    phone_number: string;
    email: string;
    password: string;
    createdAt: string;
    approvedAt: string | null;
    user_roles: UserRole[];
}

interface UserRole {
    id: number;
    user_id: number;
    role_id: number;
    createdAt: string;
    roles: {
        id: number;
        title: string;
        description: string;
        createdAt: string;
        role_permissions: RolePermission[];
    };
}

interface RolePermission {
    id: number;
    name: string;
    role_id: number;
    createdAt: string;
}
