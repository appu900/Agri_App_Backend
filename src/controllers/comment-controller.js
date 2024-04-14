const CommentService = require("../service/comment-service");
const commentService = new CommentService();

class CommentController {
  static async createComment(request, response) {
    try {
      const result = await commentService.create(
        request.query.modelId,
        request.query.modelType,
        request.body.userId,
        request.body.content
      );
      return response.status(200).json({
        success: true,
        data: result,
        err: {},
        message: "comment created successfully",
      });
    } catch (error) {
      console.log(error.message);
      return response.status(500).json({
        success: false,
        data: {},
        message: "something went wrong",
        err: error.message,
      });
    }
  }
}

module.exports = CommentController;







