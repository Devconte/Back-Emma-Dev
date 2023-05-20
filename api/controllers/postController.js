const postDataMapper = require('../models/post');

const postController = {
  test(req, res) {
    res.json({ message: 'Welcome on api EquiFun développer by DevConte' });
  },
  async getAllPosts(_, res) {
    try {
      const allPosts = await postDataMapper.getAllPost();
      res.json({ allPosts });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des messages.' });
    }
  },
  async getOnePost(req, res) {
    const { id } = req.params;
    const onePost = await postDataMapper.getOnePost(id);
    res.json({ onePost });
  },
  async createPost(req, res) {
    const values = req.body;
    const newPost = await postDataMapper.createPost(values);
    res.json({ newPost });
  },
  async updatePost(req, res) {
    const { id } = req.params;
    const post = req.body;

    const updatedPost = await postDataMapper.updatePost(id, post);
    res.status(200).json({ updatedPost });
  },
  // pb de fk comment post;
  async deletePost(req, res) {
    const { id } = req.params;
    await postDataMapper.deletePost(id);
    res.json({ message: 'post was deleted' });
  },
  async addComment(req, res) {
    const values = req.body;
    const newComment = await postDataMapper.createCommentPost(values);
    res.json({ newComment });
  },
  async deleteComment(req, res) {
    const { id } = req.params;
    await postDataMapper.deleteComment(id);
    res.json({ message: 'comment was deleted' });
  },

};

module.exports = postController;
