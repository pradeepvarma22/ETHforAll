const { ethers } = require("hardhat")

const networkConfig = {
    3141: {
        name: "hyperspace",
    },
    80001: {
        name: "mumbai",
    },
}

module.exports = {
    networkConfig,
}
