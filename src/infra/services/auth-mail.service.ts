import { ISendMailAccountConfirmation } from "src/core/interfaces/mail.interfaces";
import AmazonSimpleEmailService from "./aws-mail.service";

class MailService {

    async accountActivation(payload: ISendMailAccountConfirmation): Promise<string> {
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

export default new MailService()