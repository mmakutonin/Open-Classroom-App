
/**
 * Login Acti
 * +
 * on
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  friendlyName: 'Login',
  description: 'Logins user.',

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
    }
  },

  exits: {
    success: {
      responseType: 'json',
      status: 200
      
    }
  },

  fn: async function ({usernameid , passwordid}) {

    var user = await User.find({
      where: {username: usernameid}, 
      where: {password: passwordid}
    });
    if(!user) {return{
      userAuthenticated: false
    }}
    return{
      userAuthenticated: true
    };
  }

};
