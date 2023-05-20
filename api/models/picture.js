const client = require('../database/client');

/**
 * @typedef {object} Picture
 * @property {number} id - Unique identifier, PK of the table
 * @property {string} url - url of the uploaded picture
 * @property {number} user_id - Id of the user who uploaded the picture
 */

/**
 * @typedef {object} Comment_picture
 * @property {number} id - Unique identifier, PK of the table
 * @property {string} content - content of the comment
 * @property {number} user_id - id of the user who commented the post
 * @property {number} picture_id - id of the commented pictures
 */

module.exports = {
  async getAllPictures() {
    const query = {
      text: 'SELECT picture.*, comment_picture.* FROM picture LEFT JOIN comment_picture ON picture_id = comment_picture.picture_id;',
    };
    const result = await client.query(query);
    return result.rows;
  },
  async deletePicture(id) {
    const query = {
      text: 'DELETE FROM picture WHERE id =$1',
      values: [id],
    };
    await client.query(query);
  },
  async createCommentPicture(value) {
    const query = {
      text: 'INSERT INTO "comment_picture"("content","user_id","picture_id") VALUES ($1,$2,$3) RETURNING *;',
      values: [value.content, value.user_id, value.picture_id],
    };
    const result = await client.query(query);
    return result.rows[0];
  },
  async deleteCommentPicture(id) {
    const query = {
      text: 'DELETE FROM comment_picture WHERE id = $1',
      values: [id],
    };
    await client.query(query);
  },
};
