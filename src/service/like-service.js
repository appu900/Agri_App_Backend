const { LikeRepository, PostRepository, CommentRepository } = require("../repository/index");

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.PostRepository = new PostRepository();
    this.CommentRepository = new CommentRepository();
  }

  // /api/v1/like/toggle?id=modelid&type=PostorComment
  // 1. check if the like is already present or not
  // 2. if present then remove it
  // 3. if not present then add it
  async toggelLike(modelId, modelType, userId) {
    if (modelType === "Post" || modelType === "post") {
      var likeable = await this.PostRepository.find(modelId);
      console.log("this is likeble", likeable);  
    } else if (modelType === "Comment") {
      //   var likeable = this.CommentRepository.get(modelId);
      var likeable = await this.CommentRepository.get(modelId);
      console.log("this is likeable comment", likeable);
    
    } else {
      throw new Error("Invalid model type");
    }

    const exists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,  
      likeable: modelId,
    });

    console.log("exists", exists);

    if (exists) {
      //    todo: remove the like
      likeable.likes.pull(exists.id);
      await likeable.save();
      await this.likeRepository.destroy(exists.id);
        
      var isAdded = false;
    } else {
      // todo: add the like
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      var isAdded = true;  
    }

    return isAdded;
  }
}

module.exports = LikeService;
