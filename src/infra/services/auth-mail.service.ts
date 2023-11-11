import { ISendMailAccountConfirmation } from "src/core/interfaces/mail.interfaces";
import AmazonSimpleEmailService from "./aws-mail.service";

export class MailService {

    async AccountActivation(payload: ISendMailAccountConfirmation): Promise<string> {
        try {
            const response: AWS.SES.SendTemplatedEmailResponse = await AmazonSimpleEmailService.sendEmail(
                {
                    ...payload,
                    templateName: 'account_activation'
                }
            )

            return response.MessageId
        } catch (error) {
            throw new Error(error.message)
        }
    }
}