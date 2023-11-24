import prisma from "../../DB/prisma";
import { Request, Response } from "express";
import { apiREQ } from "../../types/globals/express.types";
import { systemPermissions } from "../../permissions/permissions_list";
import { createRoleSchema } from "../../utilities/validators/role_create.validator";
import validateJoiSchema from "../../utilities/helpers/validateJoiSchema";

const createRole = async (req: apiREQ, res: Response) => {
  try {
    const payload = validateJoiSchema(req.body, createRoleSchema, {
      stripUnknown: true,
    });

    const roleName = payload.name

    const existingRoleName = await prisma.roles.findFirst({
        where:{
            title:roleName
        }
    })

    if(existingRoleName){
        return res
        .status(400)
        .json({
          message: `${roleName} already exists`,
          status: 400,
        });
    }
    
    const permissions:string[] = []

    for(const module of payload.modules){
        const formattedModuleName = module.name.trim().replace(/\s+/g, '_');
         for (const permission of module.permissions){
           const formattedPermissionName = permission.trim().replace(/\s+/g, '_');
           permissions.push(`${formattedPermissionName}:${formattedModuleName}`)
         }
    }


    await prisma.$transaction(async (tx) => {
        const createdRole = await tx.roles.create({
            data: {
                title: roleName,
                description: "no comment"
            }
        });
    
        for (const permission of permissions) {
            // Create a role permission
            await tx.role_permissions.create({
                data: {
                    role_id: createdRole.id,
                    name: permission
                }
            });
        }
    })
  
    return res.status(200).json({ message: "Role created successfully"});
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message, status: 500 });
  }
};

export default createRole;
