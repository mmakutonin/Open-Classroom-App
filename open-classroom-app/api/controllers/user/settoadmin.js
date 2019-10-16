module.exports = {


  friendlyName: 'Settoadmin',


  description: 'Settoadmin user.',


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
    },
    userDoesNotExist: {
      description: "error thrown when user doesnt exist"
    }
  },


  fn: async function ({username, password}) {
    var user = await User.findOne({

      username: username,
      password: password

    });
    if(!user) {
      throw "userDoesNotExist"
    }
    user.isAdmin = true;
    return user.isAdmin;
  }

};
