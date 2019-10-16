/**
 * Class.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        roomId: {
            type: 'string',
            required: true,
            unique: true
        },
        roomURL: {
            type: 'string',
            required: true,
            unique: true
        },
        classSizeLimit: {
            type: 'number',
            required: true,
            unique: true
        },
        usersRegistered: {
            type: 'number',
            required: true,
            unique: true
        },
        professor: {
            type: 'string',
            required: true,
            unique: true
        },
        assetsList: {
            type: 'string',
            required: true,
            unique: true
        },
         history: {
      collection: 'ChatHistory',
      via: 'session'
    },
    customToJSON: function (){}
  };
  
  
