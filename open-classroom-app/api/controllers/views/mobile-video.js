module.exports = {


    friendlyName: 'Loads mobile video view',
  
  
    description: 'Loads a mobile-viewable video view given several authentication parameters.',
  
  
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
      token: {
          description: "The user's Twilio connection token.",
          type: 'string',
          required: true
      },
      roomSid: {
        description: "The Twilio SID of the room to connect.",
        type: 'string',
        required: true
      },
      roomName: {
        description: "The name of the room to connect.",
        type: 'string',
        required: true
      }
  
    },
  
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/mobile',

      },
      forbiddenOperation: {
        responseType: 'forbidden',
        description: 'User operation not allowed due to invalid credentials.'
      }
    },
  
  
    fn: async function ({userid, password, token, roomSid, roomName}) {
  
      //Authenticate user
      const user = await User.findOne({
        username: userid,
        password: password
      });
      if(!user) {
        throw 'forbiddenOperation'
      }
      
      return {
        userid,
        password,
        token,
        roomSid,
        roomName
      }
  
    }
  
  
  };
  