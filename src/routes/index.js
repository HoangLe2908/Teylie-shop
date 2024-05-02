const homeRouter = require("./home");
const adminRouter = require("./admin");
const loginRouter = require("./login");
const productsRouter = require("./products");
const aboutUsRouter = require("./aboutUs");
const contractRouter = require("./contract");
const settingRouter = require("./setting");

function route(app) {
  app.use("/aboutUs", aboutUsRouter);
  app.use("/contract", contractRouter);
  app.use("/setting", settingRouter);
  app.use("/products", productsRouter);
  app.use("/login", loginRouter);
  app.use("/admin", adminRouter);
  app.use("/", homeRouter);
}

module.exports = route;
