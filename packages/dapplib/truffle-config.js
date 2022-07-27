require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth random company harvest desert flock thumb'; 
let testAccounts = [
"0x3b1ae1c210ae29ba780d926126031e589e4630901c34dca2a2d1a15487d05231",
"0xc539cbee486b2b90e79cfdf864277a5c4f0af16d25a0d0544d53566c1a9833e8",
"0x3a29b36e85ebe64294d0992acb2a7e6a9a97f1f73899549c373171e2bb7037aa",
"0x27bd9790f00da613262a445de198601bedb56b298f84f6873e26e8952561e4c8",
"0x4c6301ff5a58ea398e724b0eec3f8135b706fbeb399cf4db2a6071ba369289d1",
"0xbda28bc5b79f60c3dda6fac1fc6d5bf6d69e19853979bd342cbb9eb5797320c4",
"0x5183795a4d656c6f59a4354f7f0cfae1eb07990a3a1d9e9f44c104340a6774f6",
"0x5f81781944fb398fe85e3f11e34c925f1c442761886365feaa2ad71a784e5a6b",
"0xf62d262050598e2c48ff352d3645294ca163d4c50a9a720f65d8e31fa5e96c40",
"0x1a529829dddb1b02f273427f2a3a89894b3fa4b85d12f2b2269cb6bf01f5afe8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

