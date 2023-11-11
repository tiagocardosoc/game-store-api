import AccountConfirmationTemplate from './templates/AccountConfirmation.template'

export const mailTemplates: Array<AWS.SES.CreateTemplateRequest | AWS.SES.UpdateTemplateRequest> = [
    AccountConfirmationTemplate
]