import { Router } from "express";
import { register } from "../controllers/auth.controller";

const rootRouter:Router = Router();

rootRouter.use("/auth",register)

export default rootRouter;