const homeRouter = require("./home");
const adminRouter = require("./admin");
const loginRouter = require("./login");
const productsRouter = require("./products");

function route(app) {
  app.use("/products", productsRouter);
  app.use("/login", loginRouter);
  app.use("/admin", adminRouter);
  app.use("/", homeRouter);
}

module.exports = route;
