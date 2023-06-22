/**
 * Config source: https://git.io/JvgAf
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

import { mailConfig } from "@adonisjs/mail/build/config";
import Env from "@ioc:Adonis/Core/Env";

export default mailConfig({
  /*
  |--------------------------------------------------------------------------
  | Default mailer
  |--------------------------------------------------------------------------
  |
  | The following mailer will be used to send emails, when you don't specify
  | a mailer
  |
  */
  mailer: "gmail",

  /*
  |--------------------------------------------------------------------------
  | Mailers
  |--------------------------------------------------------------------------
  |
  | You can define or more mailers to send emails from your application. A
  | single `driver` can be used to define multiple mailers with different
  | config.
  |
  | For example: Postmark driver can be used to have different mailers for
  | sending transactional and promotional emails
  |
  */
  mailers: {
    /*
    |--------------------------------------------------------------------------
    | Gmail
    |--------------------------------------------------------------------------
    |
    | Uses Gmail SMTP service for sending email using OAuth2 authentication.
    |
    */
    gmail: {
      driver: "smtp",
      host: Env.get("SMTP_HOST"),
      port: Env.get("SMTP_PORT"),
      auth: {
        type: "login",
        user: Env.get("SMTP_USERNAME"),
        pass: Env.get("SMTP_PASSWORD"),
      },
    },
  },
});
