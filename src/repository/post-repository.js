const Post = require("../models/Post");
const CrudRepository = require("./crud-repository");

class PostRepository extends CrudRepository {
  constructor() {
    super(Post);
  }

  async create(data) {
    try {
      const post = await Post.create(data);
      return post;
    } catch (error) {
      console.log(error.message);
    }
  }

  async update(id, data) {
    try {
      const post = await Post.findByIdAndUpdate(id, data, { new: true });
      return post;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getPostWithComments(id) {
    try {
      const postWithComments = await Post.findById(id)
        .populate("comments")
        .lean();
      return postWithComments;
    } catch (error) {
      console.log(error);
    }
  }

  // ** pagination with offset and limit **
  async getAll(offset, limit) {
    try {
      const posts = await Post.find().skip(offset).limit(limit);
      return posts;
    } catch (error) {
      console.log(error.message);
    }
  }

  async findByIdAndPopulateLikes(modelId) {
    try {
      const result = await Post.findById(modelId).populate("likes");
    } catch (error) {
      console.log(error.message);
    }
  }

  async find(id){
    try {
       const posts = await Post.findById(id).populate("likes");
       return posts;
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = PostRepository;
