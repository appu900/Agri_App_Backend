const { UserRepository } = require("../repository/index");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    const user = this.userRepository.create(data);
    return user;
  }

  async getUserByEmail(email) {
    try {
      const user = await this.userRepository.findBy({ email: email });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
