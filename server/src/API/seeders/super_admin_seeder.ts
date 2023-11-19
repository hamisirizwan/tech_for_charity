import prisma from "../DB/prisma";
import bcrypt from 'bcryptjs';
import { systemPermissions } from "../permissions/permissions_list";
import { env } from "../../../env";
import generateUserPermissionString from "../utilities/helpers/generateUserRole";

const { ADMIN_FIRST_NAME, ADMIN_LAST_NAME, ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_PHONE_NUMBER, ADMIN_COUNTRY, ADMIN_CITY } = env;

const seedSuperAdmin = async () => {
    try {
        await prisma.$transaction(async (tx) => {
            const existingUser = await tx.users.findFirst({
                where: {
                    phone_number: ADMIN_PHONE_NUMBER
                }
            });

            if (existingUser) {
                console.log(`User with phone number ${ADMIN_PHONE_NUMBER} already exists`);
                return;
            }

            const existingSuperAdmin = await tx.roles.findFirst({
                where: {
                    title: "SYSTEM ADMIN"
                }
            });

            if (existingSuperAdmin) {
                console.log("Super admin user already exists");
                return;
            }

            // Read all modules and create a super admin role
            const permissions: string[] = [];
            for (const module of systemPermissions) {
                for (const permission of module.permissions) {
                    const userPermission = generateUserPermissionString(module.name, permission);
                    permissions.push(userPermission.toString());
                }
            }

            // Create a role and assign all role permissions
            const systemAdminRole = await tx.roles.create({
                data: {
                    title: "SYSTEM ADMIN",
                    description: "sudo user with all privileges"
                }
            });

            for (const permission of permissions) {
                // Create a role permission
                await tx.role_permissions.create({
                    data: {
                        role_id: systemAdminRole.id,
                        name: permission
                    }
                });
            }

            // Hash admin password
            const hashedPass = await bcrypt.hash(ADMIN_PASSWORD, 10);

            // Create an admin user
            const createdUser = await tx.users.create({
                data: {
                    first_name: ADMIN_FIRST_NAME,
                    last_name: ADMIN_LAST_NAME,
                    email: ADMIN_EMAIL,
                    country: ADMIN_COUNTRY,
                    phone_number: ADMIN_PHONE_NUMBER,
                    city: ADMIN_CITY,
                    password: hashedPass
                }
            });

            // Assign the role to the user
            await tx.user_roles.create({
                data: {
                    user_id: createdUser.id,
                    role_id: systemAdminRole.id
                }
            });

            console.log("Super admin user seeded successfully");
        });
    } catch (error) {
        console.error("Error seeding super admin:", error);
    }
};

seedSuperAdmin();
