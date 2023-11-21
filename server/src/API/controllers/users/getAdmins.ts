
import prisma from '../../DB/prisma';
import { Request, Response } from 'express';




const getAllAdmins = async (req: Request, res: Response) => {

  try {

const admins = await prisma.users.findMany({
  where:{
    is_admin:true
  },
    orderBy:{
        createdAt:'desc'
    }
})

for(const admin of admins){
    admin.password = "##########"
}
    res.status(200).json({ data:admins,message: 'admins fetched successfully' });
  } catch (error:any) {
    console.log(error);
    res.status(500).json({message:error.message, status:500});
  }
};

export default getAllAdmins;
