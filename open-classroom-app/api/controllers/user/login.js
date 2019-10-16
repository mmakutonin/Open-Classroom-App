
/**
 * Login Action
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  friendlyName: 'Login',
  description: 'Logins user.',

  inputs: {
    username: {
      description: "The unique username of a client",
      type: 'string',
      required: true
    },
    password: {
      description: "The password that verifys the user to allow log in",
      type: 'string',
      required: true
    }
  },

  exits: {
    success: {
      status: 200
      
    }
  },

  fn: async function ({username , password}) {
    var user = await User.findOne({

      username: username,
      password: password

    });
    if(!user) {
      return{
        userAuthenticated: false
      };
    }
    return{
      userAuthenticated: true
    };
  }

};
