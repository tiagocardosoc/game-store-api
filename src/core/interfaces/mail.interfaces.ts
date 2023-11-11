export interface ISendMailPayload {
    to: string,
    templateName: string,
    templateData: Object
}

export interface ISendMailAccountConfirmation extends Omit<ISendMailPayload, 'templateName'> {
    templateData: {
        email: string,
        firstName: string,
        activationUrl: string
    }
}