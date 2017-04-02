/**
 * PostController
 *
 * @description :: Server-side logic for managing Posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * This method will create a new post for user
   */
  create: function (req, res) {

    let title = req.param('title'),
      content = req.param('content'),
      userId = req.param('user_id'),
      categoryName = req.param('category_name');

    if (!title) return res.badRequest({ err: 'Invalid post title field' });
    if (!content) return res.badRequest({ err: 'Invalid post content field' });
    if (!userId) return res.badRequest({ err: 'Invalid user_id field' });
    if (!categoryName) return res.badRequest({ err: 'Invalid category_name field' });

    Category.findOrCreate({ name: categoryName })
      .then(_category => {

        if (!_category) throw new Error('Unable to create category record');
        return _category;

      })
      .then(_category => {

        return Post.create({
          title,
          content,
          user:userId,
          category : _category.id
        });

      })
      .then(_post => {
        if(!_post) throw new Error('Unable to create new post');
        return res.json({post:_post});
      })
      .catch(err => res.serverError(err.message));


  },


  /**
   * `PostController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `PostController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  },


  /**
   * `PostController.findAll()`
   */
  findAll: function (req, res) {
    return res.json({
      todo: 'findAll() is not implemented yet!'
    });
  },


  /**
   * `PostController.findOne()`
   */
  findOne: function (req, res) {
    return res.json({
      todo: 'findOne() is not implemented yet!'
    });
  }
};

