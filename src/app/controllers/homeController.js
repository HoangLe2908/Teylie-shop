class HomeController {
  home(req, res, next) {
    res.render("home", {
      title: "Trang chủ",
    });
  }
  men(req, res, next) {
    res.render("men", {
      title: "Phái nam",
    });
  }
  women(req, res, next) {
    res.render("women", {
      title: "Phái nữ",
    });
  }
}
module.exports = new HomeController();
