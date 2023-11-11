const subject: String = 'Ativação de Conta';

const params = {
    Template: {
        TemplateName: `account_activation`,
        HtmlPart: `
    <body style="margin: 0;">
      <div style="margin: 0px; background-color: #F2F2F2; padding: 30px;">
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
          <tbody>
            <tr>
              <td style="padding: 0px 10px" bgcolor="#F2F2F2" align="center"><table
                  width="600" cellspacing="0" cellpadding="0" border="0">
                  <tbody>
                    <tr>
                      <td style="padding-bottom: 20px;" valign="middle"
                        align="center"><a> <img alt="tcardosoc developer"
                          src="https://tcardosoc developer-assets.s3-us-west-1.amazonaws.com/logo_azul.png"
                          style="display: block" width="160" border="0">
                      </a></td>
                    </tr>
                    <tr>
                      <td bgcolor="#ffffff" align="center"><table width="100%">
                          <tbody>
                            <tr>
                              <td
                                style="font-family: 'Arial', sans-serif; font-size: 14px; line-height: 20px; padding: 30px; color: #000000;"
                                valign="middle" align="left"><p>
                                  <b>Ol&aacute;, {{ firstName }}</b>
                                </p> <br>
                                <p style="font-size: 18px; color: #555;">Obrigado por
                                  criar sua conta no tcardosoc developer.</p>
                                <p style="color: #555;">Clique no bot&atilde;o abaixo
                                  para ativ&aacute;-la e tenha acesso a sua conta.</p> <br>
                                <p>
                                  <a href="{{ activationUrl }}"
                                    style="padding: 12px 18px; border: 2px solid #fb6F7A; border-radius: 5px; background-color: #ff7C86; color: #ffffff; text-decoration: none; font-size: 15px; font-weight: bold; font-family: Helvetica Neue, Helvetica, Arial, sans-serif"
                                    target="_blank" data-saferedirecturl="">Ativar minha
                                    conta</a>
                                </p> <br>
                                <p style="color: #555;">Cordialmente,</p>
                                <p style="color: #222;">
                                  <b>tcardosoc developer</b>
                                </p> <a> <img alt="tcardosoc developer"
                                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fenvri.eu%2Fopen-position-at-icos-carbon-portal-for-a-software-developer%2F&psig=AOvVaw3sfHo_ocYMT7yMi6o6k7BC&ust=1693958712902000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCS2YiVkoEDFQAAAAAdAAAAABAE"
                                  style="display: block;" width="90" border="0">
                              </a></td>
                            </tr>
                          </tbody>
                        </table>
                  </td>
                  </tr>
                  </tbody>
                </table></td>
          </tr>
          <tr>
            <td style="padding: 0px 10px" bgcolor="#F2F2F2" align="center"><table
                width="600" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                  <tr>
                    <td
                      style="font-size: 11px; font-family: Helvetica, Arial, sans-serif; color: #00088F; padding: 15px 36px; border-top: 1px solid #c4c4c4; line-height: 1.8em; letter-spacing: 0.2px"
                      bgcolor="#fff" align="left" width="476" valign="top">Este
                      e-mail foi enviado para <a href="mailto:{{ email }}"
                      style="color: #FF7C86" target="_blank">{{ email }}</a>. Para
                      garantir o correto recebimento de nossos e-mails, adicione-nos
                      &agrave; sua lista de e-mails seguros.<br> <br>
                      <center>&copy; 2019 tcardosoc developer - Todos os direitos
                        reservados.</center>
                    </td>
                  </tr>
                </tbody>
              </table></td>
          </tr>
          </tbody>
        </table>
      </div>
    </body>
    `,
        SubjectPart: subject,
        TextPart: 'Teste',
    },
};

export default <AWS.SES.CreateTemplateRequest | AWS.SES.UpdateTemplateRequest>params;
