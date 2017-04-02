/**
 * User.js
 *
 * @description :: Each user can create many posts
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

 tableName:"users",

  attributes: {

    email : { type: 'string',required: true },

    password : { type: 'string', required: true },

    first_name : { type: 'string' },

    last_name : { type: 'string' },

     posts:{
       collection: 'post',
       via:'user'
  
     }
  }
};

