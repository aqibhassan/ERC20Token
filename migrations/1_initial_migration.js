const XETHToken = artifacts.require("XETHToken");

module.exports = function (deployer) {
  deployer.deploy(XETHToken);
 
};
