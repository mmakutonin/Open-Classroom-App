module.exports = {


  friendlyName: 'Getclassinfo',


  description: 'Getclassinfo class.',


  inputs: {
    roomId: {
      description: 'the id of the classroom',
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      status: 200
    },
    roomNotFound: {
      description: "error thrown when room doesnt exist"

    }
  },


  fn: async function ({roomId}) {
    var classroom = await Class.findOne({
      roomId: roomId
    });
    if(!classroom) {
      throw "roomNotFound"
    }
    return classroom;

  }


};
