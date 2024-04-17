class ProductController {
  product(req, res, next) {
    res.render("product", {
      title: "Product",
    });
  }
}
module.exports = new ProductController();
