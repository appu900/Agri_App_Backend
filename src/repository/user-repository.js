const User = require("../models/user");
const CrudRepository = require("./crud-repository");

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async findByUserAndLikeable(data) {
    try {
      const response = await Like.findOne(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
