require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember method hockey enroll flush trick'; 
let testAccounts = [
"0xf207586466919ae57c763a26f02be3dcb001544b69cc7b4e9fe866829326cc6b",
"0x1e12e57f00c9bf1f977b76552edc90bde66659a872b692fe4e0765b5ef7dc69e",
"0x27732806b33083a51b2253bff3b71a7b88d586f9678e23b2824ba39efa8d3840",
"0xbad4edc1fb7affd6b0cc40b9c7416b7cffa0ca4101a81b4ec7c752d300c1ea80",
"0xce2939132238ad3ab4248b3475d0784b4218f1e25ebbadf1d03c7bc0c0fd484d",
"0x98a06617019bce250fa73e4b587e4aebdd3fa4a054be766efd4e5758233aae06",
"0xe330d9525c22a3a5e1c5ccf1d7b5cbaa6e82d78827a0431373a4e382cb11c3f4",
"0x1a7d0d1da54aa223551df96d2e6cad08fda7c04ddd2a1841f68f8a514e0c96d6",
"0x1139062484a12a6a09e28ec93e671db5257555749f9d2e182b64e0ecef10049b",
"0x77380ac7b771b82fd4ec00b093dfb98baecabdd883d7ef574ceb91b10a08ece7"
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

