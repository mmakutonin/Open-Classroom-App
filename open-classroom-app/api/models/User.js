/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      username: {
          type: 'string',
          required: true,
          unique: true
      },
      password: {
          type: 'string',
          required: true,
          minLength: 6
      },
      email: {
          type: 'string',
          required: true,
          unique: true
      },
      isAdmin:{
          type: 'boolean',
          defaultsTo: false
      },
      classesList:{
          type: 'string'
      }
  },
  customToJSON: function (){
      return _.omit(this, ['password'])
  }
};

