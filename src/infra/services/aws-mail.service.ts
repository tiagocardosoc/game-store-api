import { mailTemplates } from "../../core/mail";
import { aws } from "../../config/aws.config";
import AWS from 'aws-sdk';
import { ISendMailPayload } from "src/core/interfaces/mail.interfaces";

class AmazonSimpleEmailService {
    static async createOrUpdateTemplates() {
        mailTemplates.map((template) => {
            aws.updateTemplate(template)
                .promise()
                .then(
                    () => console.log(`--- TEMPLATE DE EMAIL ${template.Template.TemplateName} ATUALIZADO ---`),
                    async (err: AWS.AWSError) => {
                        if (err.code = 'TemplateDoesNotExist') {
                            await aws.createTemplate(template).promise().then(
                                () => console.log(`--- TEMPLATE DE EMAIL ${template.Template.TemplateName} CRIADO ---`),
                                (err: AWS.AWSError) => console.log(err, err.stack)

                            )
                        }
                    }
                )
        })
    }

    static async sendEmail(payload: ISendMailPayload) {
        const mailParams: AWS.SES.SendTemplatedEmailRequest = {
            Destination: {
                ToAddresses: [
                    payload.to
                ]
            },
            Source: '"tcardosoc" <tcardosoc.dev@gmail.com>',
            Template: payload.templateName,
            TemplateData: JSON.stringify(payload.templateData)
        }

        return await aws.sendTemplatedEmail(mailParams).promise()
    }

    static async getTemplates() {
        const allTemplates = aws.listTemplates({ MaxItems: 99 })

        return allTemplates;
    }

}

export default AmazonSimpleEmailService