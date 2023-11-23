import { Request, Response } from "express";
import UserService from "../services/auth.service";
import { BaseController } from "./base.controller";
import InputSignUpDTO from "../../core/dtos/auth/input/sign-up.dto";
import InputSignInDTO from "@/core/dtos/auth/input/sign-in.dto";

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
            this.generalError(res, error.message)
        }
    }

    async signIn(req: Request, res: Response): Promise<void> {
        try {
            const userDataInput: InputSignInDTO = req.body;
            const inputData = new InputSignInDTO(userDataInput);
            const validation = await inputData.validateDTO(inputData)

            if (validation.length) {
                this.validationError(res, {
                    message: 'Erro de validação.',
                    error: validation
                })
                return
            }

            const validationToken = await UserService.signIn(inputData);

            this.ok(res, { message: validationToken });
        } catch (error) {
            this.generalError(res, error.message);
        }

    }
}

export default new AuthController(); 