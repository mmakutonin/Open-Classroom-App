
/**
 * Create Action
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {


  friendlyName: 'Create',

  description: 'Create user.',


  inputs: {
    usernameid: {
      description: "The unique username of a client",
      type: 'string',
      required: true
    },
    passwordid: {
      description: "The password that verifys the user to allow log in",
      type: 'string',
      required: true
    },
    emailid:{
      description: "The email for the client",
      type: 'string',
      required: true
    }
  },

  exits: {
    success: {
      responseType: 'json',
      status: 200
    }
  },

  fn: async function ({usernameid,passwordid,emailid}) {

    await User.create({
      username: usernameid,
      password: passwordid,
      email: emailid
    });
  }


};
