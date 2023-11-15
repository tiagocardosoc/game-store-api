import { Request, Response } from "express";
import UserService from "../services/auth.service";
import { BaseController } from "./base.controller";

class AuthController extends BaseController {
    async signUp(req: Request, res: Response): Promise<void> {
        try {
            const userData = req.body;

            await UserService.signUp(userData);

            this.ok(res)
        } catch (error) {
            this.generalError(res, 'It was not possible register you, try again later.')
        }
    }
}

export default new AuthController();