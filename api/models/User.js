/**
 * User.js
 *
 * @description :: Each user can create many posts
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

 tableName:"users",

  attributes: {

    first_name : { type: 'string', required: true },

    last_name : { type: 'string', required:true },

    age : { type  : 'integer'},

     posts:{
       collection: 'post',
       via:'user'
  
     }
  }
};

