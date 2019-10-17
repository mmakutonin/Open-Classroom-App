module.exports = {


  friendlyName: 'Create chatroom',


  description: 'Creates a Twilio chatroom and returns the room SID and name.',


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
    roomName: {
      description: "The desired room name.",
      type: 'string',
      required: false
    }
  },


  exits: {
    success: {
      status: 200
    },
    forbiddenOperation: {
      responseType: 'forbidden',
      description: 'User operation not allowed due to invalid credentials.'
    },
    roomCreationFailed: {
      description: 'The room could not be created as given. PLease check that the name given is unique.'
    }
  },


  fn: async function ({userid, password, roomName}) {

    //Authenticate user
    const user = await User.findOne({
      username: userid,
      password: password
    });
    if(!user) {
      throw 'forbiddenOperation'
    }

    //Create Room Configuration
    ({ACCOUNT_SID, AUTH_TOKEN} = sails.config.custom.twilio)
    let roomCreateObj = {
      recordParticipantsOnConnect: true
    };
    if(roomName) {
      roomCreateObj.uniqueName = roomName
    }

    //Create Room
    const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN)
    const room = await client.video.rooms.create(roomCreateObj)
      .catch(err => {console.log(err); throw 'roomCreationFailed'})
    return {
      roomSid: room.sid,
      roomName: room.uniqueName
    };

  }


};
