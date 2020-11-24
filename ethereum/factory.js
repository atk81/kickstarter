import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
// import Address from './../deploy_Address/ADDRESS.json';
// console.log
var Address = require("./../deploy_Address/ADDRESS.json");

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  Address.address
);

export default instance;
