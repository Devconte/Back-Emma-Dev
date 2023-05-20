const pictureDataMapper = require('../models/picture');

const pictureController = {
  async getAll(req, res) {
    const allPictures = await pictureDataMapper.getAllPictures();
    res.json({ allPictures });
  },
  async addComment(req, res) {
    const values = req.body;
    const newComment = await pictureDataMapper.createCommentPicture(values);
    res.json({ newComment });
  },
  async deleteComment(req, res) {
    const { id } = req.params;
    await pictureDataMapper.deleteCommentPicture(id);
    res.json({ message: 'comment was deleted' });
  },
  async deletePicture(req, res) {
    const { id } = req.params;
    const pictureToDelete = await pictureDataMapper.deletePicture(id);
    res.json({ message: 'picture was deleted' });
  },
};

module.exports = pictureController;
