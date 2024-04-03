const { PostRepository } = require("../repository/index");

class PostService {

    
  constructor() {
    this.PostRepository = new PostRepository();
  }


  //  ** purose : create a post **
  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9]+/g); // this will return an array of tags
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const post = await this.PostRepository.createPost(data);
    /*
     1.bulkcreate in mongoose 
     2.filter out of hashtag based on multiple tags
     3.how to add a post id inside all the hashTags
    */
    return post;
  }
}

module.exports = PostService;
