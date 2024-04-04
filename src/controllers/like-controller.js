const LikeService = require("../service/like-service");

const likeService = new LikeService();

class LikeController {
  static async toggleLike(request, response) {
    try {
      const result = await likeService.toggelLike(
        request.query.modelId,
        request.query.modelType,
        request.body.userId
      );

      return response.status(200).json({
        success: true,
        data: result,
        err: {},
        message: "like toggled successfully",
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({
        success: false,
        data: {},
        message: "something went wrong",
        err: error.message,
      });
    }
  }
}

module.exports = LikeController;
