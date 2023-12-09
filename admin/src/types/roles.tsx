interface RolePermission {
    module: string;
    permissions: string[];
  }
  
export  interface Role {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    role_permissions: RolePermission[];
  }