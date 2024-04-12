const { CommentRepository, PostRepository } = require("../repository/index");

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
    this.postRepository = new PostRepository();
  }

  async create(modelId, modelType, userId, content) {
    if (modelType === "Post") {
      var commentable = await this.postRepository.get(modelId);
    } else if (modelType === "Comment") {
      var commentable = await this.commentRepository.get(modelId);
    } else {  
      throw new Error("invalid model type");
    }

    const comment = await this.commentRepository.create({
      content: content,
      userId: userId,
      onModel: modelType,
      commentable: modelId,
      comments: [], // empty array to store replies
    });

    console.log(comment);

    

    commentable.comments.push(comment);
    await commentable.save();
    return comment;
  }
}

module.exports = CommentService;
