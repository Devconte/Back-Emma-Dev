const express = require('express');

const pictureController = require('./controllers/pictureController');
const postController = require('./controllers/postController');
const controllerHandler = require('./helpers/controllerHandler');
const { errorsHandler } = require('./middlewares/errors');

const router = express.Router();

router.get('/test', controllerHandler(postController.test));

/**
* GET /picture/all
* @summary Get all pictures
* @tags Picture
* @return {[Picture]} 200 - success response - application/json
 */
router.get('/picture/all', controllerHandler(pictureController.getAll));

/**
 * POST /picture/addComment
 * @summary Add a comment on a picture
 * @tags Comment_picture
 * @return {[Comment_picture]} 200 - success response - application/json
 */
router.post('/picture/addComment', controllerHandler(pictureController.addComment));

/**
* DELETE /picture/:id
* @summary Delete a picture
* @tags Picture
* @return {[Picture]} 200 - success response - application/json
*/
router.delete('/picture/:id', controllerHandler(pictureController.deletePicture));

/**
* DELETE /picture/deleteComment/:id
* @summary Delete a comment on a picture
* @tags Comment_picture
* @return {[Comment_picture]} 200 - success response - application/json
*/
router.delete('/picture/deleteComment/:id', controllerHandler(pictureController.deleteComment));

/**
* GET /post/all
* @summary Get all posts
* @tags Post
* @return {[Post]} 200 - success response - application/json
 */
router.get('/post/all', controllerHandler(postController.getAllPosts));

/**
* GET /post/:id
* @summary Get one post
* @tags Post
* @return {[Post]} 200 - success response - application/json
*/
router.get('/post/:id', controllerHandler(postController.getOnePost));

/**
* POST /post/create
* @summary Create a post
* @tags Post
* @return {[String]} 200 - success response - application/json
*/
router.post('/post/create', controllerHandler(postController.createPost));
/**
* POST /post/addComment
* @summary Add a comment to an existing post
* @tags Comment_post
* @return {[Comment_post]} 200 - success response - application/json
*/
router.post('/post/addComment', controllerHandler(postController.addComment));

/**
 * PATCH /post/update/:id
 * @summary Update an existing post
 * @tags Post
 * @return {[Post]} 200 - success response - application/json
 */
router.patch('/post/update/:id', controllerHandler(postController.updatePost));

/**
* DELETE /post/deletePost/:id
* @summary Delete a post
* @tags Post
* @return {[String]} 200 - success response - application/json
*/
router.delete('/post/deletePost/:id', controllerHandler(postController.deletePost));

/**
* DELETE /post/deleteComment/:id
* @summary Delete a comment from a post
* @tags Comment_post
* @return {[String]} 200 - success response - application/json
*/
router.delete('/post/deleteComment/:id', controllerHandler(postController.deleteComment));

router.use(errorsHandler);

module.exports = router;
