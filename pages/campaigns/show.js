import React, {Component} from 'react';
import {Card, Grid, Button} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
	static async getInitialProps(props){
		// console.log(props.query.address);
		const campaign = Campaign(props.query.address);
		const summary = await campaign.methods.getSummary().call();
		// console.log(summary);
		return {
			address: props.query.address,
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

		const items = [
			{
				header: manager,
				meta: 'Address of manager',
				description: 'The manager created this campaign and can create request to withdrawn money.',
				style: {overflowWrap: 'break-word'}
			},
			{
				header: minimumContribution,
				meta: 'Minimum Contribution (wei)',
				description: 'You must contribute at least this mush wei to become a approver.',
				style: {overflowWrap: 'break-word'}
			},
			{
				header: requestCount,
				meta: 'Number of Requests',
				description: 'A request tires to withdraw money from the contract. Request must be approved by the approvers.',
				style: {overflowWrap: 'break-word'}
			},
			{
				header: approversCount,
				meta: 'Number of Approvers',
				description: 'Number of people who have already donated to this campaign.',
				style: {overflowWrap: 'break-word'}
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'Campaign Balance (ether)',
				description: 'The balance is how much money has left to spend.',
				style: {overflowWrap: 'break-word'}
			}
			
		];




		return <Card.Group items={items} />;
	}



	render(){
		return (
			<Layout>
				<h3>CampaignShow page</h3>

				<Grid>
					<Grid.Row>

						<Grid.Column width={10}>
							{this.renderCards()}
						</Grid.Column>
						<Grid.Column width={6}>
							<ContributeForm address={this.props.address} >
							</ContributeForm>
						</Grid.Column>

					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Link route={`/campaigns/${this.props.address}/requests`} >
								<a>
									<Button primary>View Requests</Button>
								</a>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>

			</Layout>
		);
	}
}

export default CampaignShow;