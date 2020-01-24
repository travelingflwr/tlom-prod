module.exports = {
  env: 'development',

  /**
   * Configuration to allow email sending used on:
   * backend/src/services/shared/email/emailSender.js
   *
   * More info: https://nodemailer.com
   */
  email: {
    from: null,
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  /**
   * Client URL used when sending emails.
   */
  clientUrl: 'https://tlom-prod.firebaseapp.com',

  /**
   * When this email is set, all requests will automatically authenticate using this email.
   * Useful for testing purposes.
   */
  userAutoAuthenticatedEmailForTests:
    null,


};
