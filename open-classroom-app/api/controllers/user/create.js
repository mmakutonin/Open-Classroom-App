
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
    username: {
      description: "The unique username of a client",
      type: 'string',
      required: true
    },
    password: {
      description: "The password that verifys the user to allow log in",
      type: 'string',
      required: true
    },
    email:{
      description: "The email for the client",
      type: 'string',
      required: true
    }
  },

  exits: {
    success: {
      status: 200
    }
  },

  fn: async function ({username,password,email}) {
    var user = await User.create({
      username: username,
      password: password,
      email: email
    })
  }


};
