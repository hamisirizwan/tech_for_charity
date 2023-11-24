import prisma from "../../DB/prisma";
import { Response } from "express";
import { apiREQ } from "../../types/globals/express.types";

const assignUserRole = async (req: apiREQ, res: Response) => {
  const { role_id, user_id } = req.body;
  try {
    if (!role_id || !user_id) {
      return res.status(400).json({
        message: `missing required parameters(role_id || user_id)`,
        status: 400,
      });
    }
    const existingRole = await prisma.roles.findUnique({
      where: {
        id: parseInt(role_id),
      },
    });

    if (!existingRole) {
      return res.status(400).json({
        message: `Role with id ${role_id} does not exist`,
        status: 400,
      });
    }

    const existingUser = await prisma.users.findUnique({
      where: {
        id: parseInt(user_id),
      },
    });

    if (!existingUser) {
      return res.status(400).json({
        message: `User with id ${user_id} does not exist`,
        status: 400,
      });
    }

    if (!existingUser.is_approved) {
      return res.status(400).json({
        message: `User still pending approval`,
        status: 400,
      });
    }

    if (!existingUser.is_active) {
      return res.status(400).json({
        message: `Cannot assign role to an inactive user`,
        status: 400,
      });
    }

    await prisma.$transaction(async (tx) => {
      if (!existingUser.is_admin) {
        //update user to make them admin first

        await tx.users.update({
          data: { is_admin: true },
          where: {
            id: parseInt(user_id),
          },
        });
      }

      // assign the role to the user
      await tx.user_roles.create({
        data: {
          user_id: parseInt(user_id),
          role_id: parseInt(role_id),
        },
      });
    });

    return res.status(200).json({ message: "Role assigned successfully" });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message, status: 500 });
  }
};

export default assignUserRole;
