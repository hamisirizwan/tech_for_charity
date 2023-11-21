import { Response } from "express";
import prisma from "../../DB/prisma";
import { systemPermissions } from "../../permissions/permissions_list";
import { apiREQ } from "../../types/globals/express.types";

const getSystemPermissions = async(req:apiREQ, res:Response)=>{
    try {
       return res.status(200).json({data:systemPermissions})
    } catch (error:any) {
        console.log(error);
        res.status(500).json({ message: error.message, status: 500 });
    }
}


export default getSystemPermissions