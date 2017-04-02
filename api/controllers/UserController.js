/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * It will create a new user .
   */
  create: function (req, res) {
   

    let firstName = req.param('first_name'),
        lastName = req.param('last_name'),
        age = req.param('age');

     if(!firstName){
       return res.badRequest({err:'Invalid first_name'});
     }

     if(!lastName){
       return res.badRequest({err:'Invlaid last_name'});
     }

    User.create({
     first_name : firstName,
     last_name : lastName,
     age:age
    })
    .then(_user => {
      if(!_user) return res.serverError({err:'Unable to create user'});
       
       return res.json({
         user:_user
       });
    })
    .catch(err => res.serverError(err.message));
  }
};

