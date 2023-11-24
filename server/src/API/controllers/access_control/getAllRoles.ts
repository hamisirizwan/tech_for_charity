import prisma from '../../DB/prisma';
import { Request, Response } from 'express';
import { apiREQ } from '../../types/globals/express.types';


interface GroupedPermission {
    module: string;
    permissions: string[];
}

interface ModifiedRole {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    role_permissions: GroupedPermission[];
}

function groupPermissionsByModule(role_permissions: any[]): GroupedPermission[] {
    const groupedPermissions: Record<string, GroupedPermission> = {};

    role_permissions.forEach(permission => {
        const [action, module] = permission.name.split(':');
        const moduleName = module.toUpperCase();

        if (!groupedPermissions[moduleName]) {
            groupedPermissions[moduleName] = {
                module: moduleName.split('_').join(' '),
                permissions: [],
            };
        }

        groupedPermissions[moduleName].permissions.push(action.split('_').join(' '));
    });

    return Object.values(groupedPermissions);
}

const getAllRoles = async (req: apiREQ, res: Response) => {
    try {
        const roles = await prisma.roles.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                role_permissions: true,
            },
        });

        const modifiedRoles: ModifiedRole[] = roles.map(role => ({
            id: role.id,
            title: role.title,
            description: role.description,
            createdAt: role.createdAt,
            role_permissions: groupPermissionsByModule(role.role_permissions),
        }));

        res.status(200).json({ data: modifiedRoles, message: 'Roles fetched successfully' });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: error.message, status: 500 });
    }
};

export default getAllRoles;
