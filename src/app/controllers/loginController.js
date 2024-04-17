class LoginController {
  login(req, res, next) {
    res.render("login", {
      title: "login",
    });
  }
}
module.exports = new LoginController();
