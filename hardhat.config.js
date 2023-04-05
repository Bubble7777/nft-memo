require('@nomicfoundation/hardhat-toolbox');
//npx hardhat run scripts/deploy.js --network testnet

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  networks: {
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      chainId: 97,
      //gasPrice: 20000000000,
      accounts: {
        mnemonic: '',
      },
    },
    // mainnetBinance: {
    //   url: 'https://bsc-dataseed1.binance.org/',
    //   chainId: 56,
    //   gasPrice: 20000000000,
    //   accounts: {
    //     mnemonic: '',
    //   },
    // },
  },
};
//0x7c50477a04EEF19A8E836C42c507d837ec19AE0C contract address
