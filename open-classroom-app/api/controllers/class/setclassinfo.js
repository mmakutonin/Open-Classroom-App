module.exports = {


  friendlyName: 'Setclassinfo',


  description: 'Setclassinfo class.',


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
    var randomId = '1';
   var classroom = await Class.create({
     roomId: randomId,
     roomURL: roomURL,
     classSizeLimit: classSizeLimit,
     usersRegistered: usersRegistered,
     professor: professor,
     assetsList: assetsList
   })
 }


};
