require('babel-register');
require('babel-polyfill');

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        dev: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id
            gas: 7000000
        },
    },
    mocha: {
        useColors: true
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
};
