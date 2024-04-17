class AdminController {
  admin(req, res, next) {
    res.render("admin", {
      title: "Admin",
    });
  }
}
module.exports = new AdminController();
