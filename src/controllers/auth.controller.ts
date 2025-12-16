
import { Request,Response} from "express";
import prisma from "../prisma/client";

export const register=async (req:Request,res:Response)=>{
   const {email,password,phone }= req.body;
}


