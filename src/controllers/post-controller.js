const PostService = require("../service/postService");
console.log(PostService);

const postService = new PostService();

class PostController {
  static async createPost(request, response) {
    try {
      const res = await postService.create(request.body);
      return response.status(201).json({
        success: true,
        message: "Sucessfully created a post",
        data: res,
        err: {},
      });
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: "Internal server error",
        data: {},
        err: error.message,
      });
    }
  }

  // get all posts

  static async getAPost(request, response) {
    try {
      const res = await postService.get(request.params.id);
      console.log(res);
      return response.status(200).json({
        success: true,
        message: "Successfully fetched all posts",
        data: res,
        err: {},
      });
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: "Internal server error",
        data: {},
        err: error.message,
      });
    }
  }
}

module.exports = PostController;
