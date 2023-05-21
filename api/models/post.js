const client = require('../database/client');

/**
 * @typedef {object} Post
 * @property {number} id - Unique identifier, PK of the table
 * @property {string} title - title of the post
 * @property {string} subtitle - subtitle of the post
 * @property {string} content - content of the post
 * @property {number} like  - number of likes on the post
 * @property {string} url - link to the url of the picture used in the post
 * @property {number} author_id - id of the author of the post
 */

/**
 * @typedef {object} Comment_post
 * @property {number} id - Unique identifier, PK of the table
 * @property {string} comment_content - content of the comment
 * @property {number} user_id - id of the user who commented the post
 * @property {number} post_id - id of the commented post
 */

module.exports = {
  /**
   * Get all post with comments
   * @returns - All post with their authors, the comments related to the post and their authors
   */
  async getAllPost() {
    const query = {
      text: `SELECT post.*, comment_post.*, "user".username AS author_name, comment_user.username AS comment_username
      FROM post 
      JOIN comment_post ON post.id = comment_post.post_id 
      JOIN "user" ON post.author_id = "user".id 
      JOIN "user" AS comment_user ON comment_post.user_id = comment_user.id;`,
    };
    const result = await client.query(query);
    return result.rows;
  },
  /**
   * Get one post with comments
   * @returns - One post with the author, the comments related to the post and their authors
   */
  async getOnePost(id) {
    const query = {
      text: `SELECT post.*, comment_post.*, "user".username AS author_name, comment_user.username AS comment_username
      FROM post 
      JOIN comment_post ON post.id = comment_post.post_id 
      JOIN "user" ON post.author_id = "user".id 
      JOIN "user" AS comment_user ON comment_post.user_id = comment_user.id WHERE post.id = $1 `,
      values: [id],
    };
    const result = await client.query(query);
    return result.rows[0];
  },

  /**
   * Create a post
   * @param {object} value - an array of the values you want to use in your post
   * @returns - the new post created
   */
  async createPost(value) {
    const query = {
      text: 'INSERT INTO "post"("title","subtitle","content","url","author_id") VALUES ($1,$2,$3,$4,$5) RETURNING *;',
      values: [value.title, value.subtitle, value.content, value.url, value.author_id],
    };
    const result = await client.query(query);
    return result.rows[0];
  },

  /**
   * Delete a post
   * @param {number} id - the id of the post to be deleted
   */
  async deletePost(id) {
    const query = {
      text: 'DELETE FROM post WHERE id = $1',
      values: [id],
    };
    const result = await client.query(query);
  },
  /**
   * Update a post
   * @param {number} id - the id of the post to be updated
   * @param {object} post - an array of values to be updated
   * @returns - the updated post
   */
  async updatePost(id, post) {
    const values = Object.values(post);
    const fields = Object.keys(post).map((column) => `"${column}" = $${Object.keys(post).indexOf(column) + 1}`);

    const updatedPost = await client.query(
      `
      UPDATE post SET ${fields.join(', ')}
      WHERE id = $${Object.keys(post).length + 1}
      RETURNING *
      `,
      [...values, id],
    );

    return updatedPost.rows[0];
  },
  /**
   * Add a comment to a post
   * @param {object} value - an array containing the comment, his author and on which post
   * @returns - the added comment
   */
  async createCommentPost(value) {
    const query = {
      text: 'INSERT INTO "comment_post"("comment_content","user_id","post_id") VALUES ($1,$2,$3) RETURNING *;',
      values: [value.comment_content, value.user_id, value.post_id],
    };
    const result = await client.query(query);
    return result.rows[0];
  },
  /**
   * Delete a comment from a post
   * @param {number} id - id of the comment on the post to be deleted
   */
  async deleteComment(id) {
    const query = {
      text: 'DELETE FROM comment_post WHERE id = $1',
      values: [id],
    };
    const result = await client.query(query);
  },
};
