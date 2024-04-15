const UserService = require("../service/user-service");

const userService = new UserService();

class AuthController {
  static async signUp(request, response) {
    try {
      const res = await userService.signup({
        email: request.body.email,
        password: request.body.password,
        phoneNumber: request.body.phoneNumber,
        name: request.body.name,
      });

      return response.status(201).json({
        success: true,
        data: res,
        error: {},
        message: "user created sucessfully",
      });
    } catch (error) {
      console.log(error.message);
      return response.status(500).json({
        success: false,
        data: {},
        error: error,
        message: "something went wrong",
      });
    }
  }
}

module.exports = AuthController;
