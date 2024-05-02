class ContractController {
  contract(req, res, next) {
    res.render("contract", {
      title: "Contract",
    });
  }
}
module.exports = new ContractController();
