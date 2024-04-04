const { PostRepository, HashTagRepository } = require("../repository/index");

class PostService {
  constructor() {
    this.PostRepository = new PostRepository();
    this.HashTagRepository = new HashTagRepository();
  }

  //  ** purose : create a post **
  async create(data) {
    const content = data.content;
    let tags = content.match(/#[a-zA-Z0-9]+/g); // this will return an array of tags
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const post = await this.PostRepository.create(data);
    /*
     1.bulkcreate in mongoose 
     2.filter out of hashtag based on multiple tags
     3.how to add a post id inside all the hashTags
    */
    let alReadyPresentTags = await this.HashTagRepository.findByName(tags);
    let titleOfPresentTags = alReadyPresentTags.map((tag) => tag.title)
    let newTags = tags.filter((tag) => !alReadyPresentTags.includes(tag));
    newTags = newTags.map((tag) => ({ title: tag, posts: [post._id] }));
    const response = await this.HashTagRepository.bulkCreate(newTags);
    alReadyPresentTags.forEach((tag)=>{
        tag.posts.push(post.id);
        tag.save();
    })
    return post;
  }


}

module.exports = PostService;
