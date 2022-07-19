var ERC20Token = artifacts.require("./ERC20Token.sol");

module.exports = (deployer, network, accounts) => {
    deployer.then(async() => {
        try {
            const ownerAddress = accounts[0];
            await deployer.deploy(ERC20Token, "MyERC20Token", "MTK", ownerAddress, "100000000000000000000");
        }
        catch(err) {
            console.log("Failed to deploy contracts", err);
        }
    });
};
