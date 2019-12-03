/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // mailgunDomain: 'transactional-mail.example.com',
  // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
  twilio: {
    ACCOUNT_SID: 'AC6b909163703f6acc1575823352165844',
    AUTH_TOKEN: 'b261308029e1a325c6f3a4ccf329308f',
    API_KEY: 'SK63bd6d5abea378bc6635c57d2e90d9cc',
    API_SECRET: 'Eln8cjr2f7F8vNK23UutOD5GeNxUE8R6'
  }
};
