import { Request, Response } from "express";
import UserService from "../services/auth.service";
import { BaseController } from "./base.controller";
import InputSignUpDTO from "../../core/dtos/auth/input/sign-up.dto";

class AuthController extends BaseController {
    async signUp(req: Request, res: Response): Promise<void> {
        try {
            const userDataInput: InputSignUpDTO = req.body;

            const inputData = new InputSignUpDTO(userDataInput)

            const validation = await inputData.validateDTO(inputData)

            if (validation.length) {
                this.validationError(res, {
                    message: 'Erro de validação.',
                    error: validation
                })
                return
            }

            await UserService.signUp(inputData);

            this.ok(res)
        } catch (error) {
            this.generalError(res, 'It was not possible register you, try again later.')
        }
    }
}

export default new AuthController(); 