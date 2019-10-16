
/**
 * Create Action
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {


    friendlyName: 'setClassroom',
  
    description: 'sets classroom information',
  
  
    inputs: {
        roomURL: {
            descrition: 'the URL for the classroom',
            type: 'string',
            required: true
        },
        classSizeLimit: {
            description: 'setting a size limit for the classroom',
            type: 'number',
            required: true,
        },
        usersRegistered: {
            description: 'sets the number of users that are registered',
            type: 'number',
            required: true
        },
        professor: {
            description: 'who is teaching the class',
            type: 'string',
            required: true
        },
        assetsList: {
            description: 'list of assets for the class',
            type: 'string',
            required: true
        }
    },
  
    exits: {
      success: {
        status: 200
      }
    },
  
    fn: async function ({roomURL, classSizeLimit, usersRegistered, professor, assetsList}) {
        var randomId = () => {
            //creates a random id for the classroom
            return 1;
        }
      var user = await User.create({
        roomId: randomId,
        roomURL: roomURL,
        classSizeLimit: classSizeLimit,
        usersRegistered: usersRegistered,
        professor: professor,
        assetsList: assetsList
      })
    }
  };
  