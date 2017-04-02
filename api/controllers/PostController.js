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
   * This method will update the post
   */
  update: function (req, res) {
    
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
   * Find all the posts with category and user
   */
  findAll: function (req, res) {
    Post.find()
    .populate('user')
    .populate('category')
    .then(_posts => {

      if(!_posts || _posts.length === 0) {
        throw new Error('No post found');
      }
      return res.json({posts:_posts});

    })
    .catch(err => res.serverError(err));
  },


  /**
   * find single post based on id
   */
  findOne: function (req, res) {

     let postId = req.params.id;
     
      if(!postId ) return res.badRequest({err: 'missing post_id field'});

     Post.findOne({id:postId})
     .populate('category')
     .populate('user')
     .then(_post => {

        if(!_post) return res.notFound({err:'No post found'});
        
        return res.json({post : _post});
     })
     .catch(err => res.serverError(err));
  }
};

