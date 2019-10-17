module.exports = {


  friendlyName: 'Close room',


  description: 'Closes a Twilio chatroom by making the session complete.',


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
      description: "The room SID assigned by Twilio of the room to be closed.",
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

    //Close Room
    ({ACCOUNT_SID, AUTH_TOKEN} = sails.config.custom.twilio)
    await require('twilio')(ACCOUNT_SID, AUTH_TOKEN).video.rooms(roomSid)
            .update({status: 'completed'})
  }


};
