import { Response } from "express";

interface IBaseControllerPayload {
    message: string,
    error?: any,
    data?: any,
}

export class BaseController {

    ok(res: Response, payload?: IBaseControllerPayload): void {
        this.buildResponse(res, 200, payload)
    }

    notFound(res: Response, payload?: IBaseControllerPayload): void {
        this.buildResponse(res, 404, {
            error: 'Required data is not found.'
        })
    }

    validationError(res: Response, payload?: IBaseControllerPayload): void {
        this.buildResponse(res, 400, {
            error: payload.error
        })
    }

    unauthorized(res: Response): void {
        this.buildResponse(res, 200, {
            error: 'User is unauthorized.'
        })
    }

    generalError(res: Response, error: string): void {
        this.buildResponse(res, 500, { error })
    }

    private buildResponse(httpResponse: Response, statusCode: number, body?: any): Response {
        return httpResponse.status(statusCode).json(body);
    }
}