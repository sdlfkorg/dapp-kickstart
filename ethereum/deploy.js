const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('Web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
	'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat',
	'https://rinkeby.infura.io/CpfbQnvdBcZakZJjPoa0'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log(accounts[0]);

	const result = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface))
		.deploy({data: '0x' + compiledFactory.bytecode})
		.send({gas: '1000000', from: accounts[0]});

	console.log(result.options.address);
};

deploy();