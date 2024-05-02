class SettingController {
  setting(req, res, next) {
    res.render("setting", {
      title: "Setting",
    });
  }
}
module.exports = new SettingController();
