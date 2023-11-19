
import prisma from '../../DB/prisma';
import { Request, Response } from 'express';
import { apiREQ } from '../../types/globals/express.types';
import { dateGenerators } from '../../utilities/dates';




const approveMember = async (req: apiREQ, res: Response) => {

  try {
const {id} = req.params

if(!id){
    return res.status(400).json({message:`member id is required`, status:400});
}

const existingMember = await prisma.users.findUnique({
    where:{
        id:parseInt(id)
    }
})

if(!existingMember){
    return res.status(400).json({message:`member with id ${id} not found`, status:400});
}

//update the member to approved and active
const dataToUpdate = {
    is_active:true,
    is_approved: true,
    approvedBy:req.user?.id,
    approvedAt: dateGenerators.getCurrentTimestamp()
}

const updatedMember = await prisma.users.update({
    data:dataToUpdate,
    where:{
        id:parseInt(id)
    }
})

console.log(updatedMember)
const message = `Hello ${updatedMember.first_name} ${updatedMember.last_name},\nYour membership request to join HUMANITY FIRST HOME has been approved. Welcome to the family. One of our admins will reach out to you for more details\nOne Smile Matters, Humnity Matters`
console.log(message)
    res.status(200).json({ data:{},message: 'member approved successfully' });
  } catch (error:any) {
    console.log(error);
    res.status(500).json({message:error.message, status:500});
  }
};

export default approveMember;
