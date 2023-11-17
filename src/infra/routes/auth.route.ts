import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const route = Router();

route.post(
    '/auth/sign-up',
    AuthController.signUp.bind(AuthController)
)

export default route;