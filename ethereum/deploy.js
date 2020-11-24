const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const path = require('path');
const fs = require('fs-extra');


const provider = new HDWalletProvider(
  'must sadness chalk increase churn gate anxiety double rule story ugly autumn',
  'https://rinkeby.infura.io/v3/1cd9da5fdf634367bac2d6fe95df1be5'
);
const web3 = new Web3(provider);


const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  // I will modify the Address file to result.options.address...
  const addressPath = path.resolve(__dirname, '..' , 'deploy_Address');
  fs.removeSync(addressPath);
  fs.ensureDirSync(addressPath);
  fs.outputJsonSync(
    path.resolve(addressPath,'ADDRESS.json'),
    {"address": result.options.address}
  );

};
deploy();
