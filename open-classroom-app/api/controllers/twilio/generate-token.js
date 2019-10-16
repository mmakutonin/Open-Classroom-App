module.exports = {


  friendlyName: 'Generate token',


  description: 'Generates a token for a given user',


  inputs: {
    userid: {
      description: "A user's unique ID.",
      type: 'string',
      required: true
    },
    password: {
      description: "The user's password.",
      type: 'string',
      required: true
    },
    roomSid: {
      description: "The room SID assigned by Twilio that the user wishes to connect to.",
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      status: 200
    },
    forbiddenOperation: {
      responseType: 'forbidden',
      description: 'User operation not allowed due to invalid credentials.'
    }
  },


  fn: async function ({userid, password, roomSid}) {

    //Authenticate user
    const user = await User.findOne({
      username: userid,
      password: password
    });
    if(!user) {
      throw 'forbiddenOperation'
    }

    //Generate Token
    ({ACCOUNT_SID, API_KEY, API_SECRET} = sails.config.custom.twilio)
    const AccessToken = require('twilio').jwt.AccessToken
    const token = new AccessToken(ACCOUNT_SID, API_KEY, API_SECRET)
    token.identity = user.username;
    token.addGrant( new AccessToken.VideoGrant({room: roomSid}))
    console.log(token.toJwt())
    
    return {
      token: token.toJwt()
    };

  }


};
