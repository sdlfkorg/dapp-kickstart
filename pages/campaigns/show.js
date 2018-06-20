import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

class CampaignShow extends Component {
	static async getInitialProps(props){
		console.log(props.query.address);
		const campaign = Campaign(props.query.address);
		const summary = await campaign.methods.getSummary().call();
		// console.log(summary);
		return {
			minimumContribution: summary[0],
			balance: summary[1],
			requestCount: summary[2],
			approversCount: summary[3],
			manager: summary[4]
		};

	}

	renderCards(){
		const {
			minimumContribution,
			balance,
			requestCount,
			approversCount,
			manager
		} = this.props;
		const items = [{
			header: manager,
			meta: 'Address of manager',
			description: 'The manager created this campaign and can create request to withdrawn money.',
			style: {overflowWrap: 'break-word'}
		}]

		return <Card.Group items={items} />;
	}



	render(){
		return (
			<Layout>
			<h3>CampaignShow page</h3>
			{this.renderCards()}
			</Layout>
		);
	}
}

export default CampaignShow;