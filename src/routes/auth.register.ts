import { Router } from "express";
import { register } from "../controllers/auth.controller";

const authRoutes:Router = Router();

authRoutes.get('/auth',register)

export default authRoutes;