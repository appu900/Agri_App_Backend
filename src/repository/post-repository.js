const Post = require("../models/Post");

class PostRepository {
  async createPost(data) {
    try {
      const post = await Post.create(data);
      return post;
    } catch (error) {
      console.log(error.message);
    }
  }

   async get(id) {
    try {
      const post = await Post.findById(id);
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

   async destroy(id) {
    try {
      const post = await Post.findByIdAndDelete(id);
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
}

module.exports = PostRepository;
