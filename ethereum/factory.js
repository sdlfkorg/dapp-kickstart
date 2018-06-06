import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x1f7F6ab13A6ef779DBe060241af54C2757aBe23F'
);

export default instance;