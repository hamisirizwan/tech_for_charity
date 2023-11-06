
import prisma from '../../DB/prisma';
import { Request, Response } from 'express';




const getAllMembers = async (req: Request, res: Response) => {

  try {

const members = await prisma.members.findMany({
    orderBy:{
        createdAt:'desc'
    }
})

for(const member of members){
    member.password = "##########"
}
    res.status(200).json({ data:members,message: 'members fetched successfully' });
  } catch (error:any) {
    console.log(error);
    res.status(500).json({message:error.message, status:500});
  }
};

export default getAllMembers;
