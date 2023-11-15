import { Request, Response } from "express";
import UserService from "../services/auth.service";

class AuthController {
    async signUp(req: Request, res: Response): Promise<void> {
        try {

            const userData = req.body;

            const newUser = await UserService.signUp(userData);

            res.status(201).json();

        } catch (error) {
            res.status(500).json({ error: 'Failed to create user' })
        }
    }
}

export default new AuthController();