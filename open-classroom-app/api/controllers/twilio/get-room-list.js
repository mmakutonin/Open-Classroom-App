module.exports = {


  friendlyName: 'Get room list',


  description: 'Gets list of active or completed rooms.',


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
    filterCompletedRooms: {
      description: "If true, returns only completed or closed rooms. By default, returns only active rooms.",
      type: 'boolean',
      required: false
    },
    roomName: {
      description: "If included, only returns rooms with the unique name passed into the function.",
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
    }
  },


  fn: async function ({userid, password, filterCompletedRooms, roomName}) {

    //Authenticate user
    const user = await User.findOne({
      username: userid,
      password: password
    });
    if(!user) {
      throw 'forbiddenOperation'
    }

    //Return list configuration
    ({ACCOUNT_SID, AUTH_TOKEN} = sails.config.custom.twilio)
    let roomSearchObj = {}
    if(filterCompletedRooms) {
      roomSearchObj.status = 'completed'
    }
    if(roomName) {
      roomSearchObj.uniqueName = roomName
    }
    const rooms = await require('twilio')(ACCOUNT_SID, AUTH_TOKEN).video.rooms.list(roomSearchObj)

    //Once we know the use cases for this endpoint, should map rooms data and only return necessary attributes.
    return rooms;

  }


};
