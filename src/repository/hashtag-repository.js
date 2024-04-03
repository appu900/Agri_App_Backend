const HashTag = require("../models/hashTags");

class HashTagRepository {
  async createHashTag(data) {
    try {
      const tag = await HashTag.create(data);
      return tag;
    } catch (error) {
      console.log(error.message);
    }
  }

  async get(id) {
    try {
      const tag = await HashTag.findById(id);
      return tag;
    } catch (error) {
      console.log(error.message);
    }
  }

  async destroy(id) {
    try {
      const response = await HashTag.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  async bulkCreate(data) {
    try {
      const tags = await HashTag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error.message);
    }
  }

  async findByName(titleList) {
    try {
      const tags = await HashTag.find({
        title: titleList,
      });
      return tags;
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = HashTagRepository;
