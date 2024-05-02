class AboutUsController {
  aboutUs(req, res, next) {
    res.render("aboutUs", {
      title: "AboutUs",
    });
  }
}
module.exports = new AboutUsController();
