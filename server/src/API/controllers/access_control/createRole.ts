import prisma from '../../DB/prisma';
import { Request, Response } from 'express';
import { apiREQ } from '../../types/globals/express.types';
import { systemPermissions } from '../../permissions/permissions_list';


const createRole = async (req:apiREQ , res:Response) => {

    const payload = req.body

    try {
        
    } catch (error:any) {
        console.log(error);
        res.status(500).json({ message: error.message, status: 500 });
    }
}

export default createRole