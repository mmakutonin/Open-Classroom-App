/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  friendlyName: 'login',
   description: '',
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
        
    },
    fn: function (inputs, exits){
        //find one row that has this username and password and return, otherwise return false/failure return
        return exits.success();
    }

};

