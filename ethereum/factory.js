import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x5Da8fA7F36e0db81d05120Bf23156889959D6788'
);

export default instance;