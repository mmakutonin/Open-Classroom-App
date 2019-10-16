
/**
 * Getting the information of the Class
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    friendlyName: 'getClassInfo',
    description: 'Gets the info related to a class',
  
    inputs: {
        roomId: {
            type: 'string',
            required: true,
            unique: true
        }
    },
  
    exits: {
      success: {
        status: 200
        
      }
    },
  
    fn: async function ({roomId}) {
      var classroom = await Class.findOne({
        roomId: roomId
      });
      if(!classroom) {
        return{
         roomExists: false
        };
      }
      return{
        roomExists: true,
        roomUrl: roomUrl, 
        classSizeLimit: classSizeLimit,
        usersRegistered: usersRegistered,
        professor: professor
      };
    }
  
  };
  