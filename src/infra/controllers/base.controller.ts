import { Response } from "express";

interface IBaseControllerPayload {
    message: string,
    data?: any,
}

export abstract class BaseController {
    ok(res: Response, payload?: IBaseControllerPayload): void {
        res.status(200).json(payload)
    }

    notFound(res: Response, errorMessage: string): void {
        res.status(404).json({ error: errorMessage })
    }

    unauthorized(res: Response): void {
        res.status(404).json({
            error: 'User is not authorized to access this endpoint.'
        })
    }

    generalError(res: Response, errorMessage: string): void {
        res.status(500).json({
            error: errorMessage
        })
    }
}