import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Input, Message } from 'semantic-ui-react'
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';


class CampaignNew extends Component {
	state = {
		minumumContribution: '',
		errorMessage: '',
		loading: false
	}

	onSubmit = async (event) => {
		event.preventDefault();

		this.setState({loading: true, errorMessage: ''});
		try{
			const accounts = await web3.eth.getAccounts();
			await factory.methods
				.createCampaign(this.state.minumumContribution)
				.send({
					from: accounts[0]
				})

			Router.pushRoute('/');

		} catch(error) {
			this.setState({errorMessage: error.message});
		}
		
		this.setState({loading: false});

	}

	render(){
		return (
			<Layout>
				<h3>Create a New Campaign</h3>

				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
					<Form.Field>
						<label>Minumum Contribution</label>
						<Input 
							label="wei" 
							labelPosition="right"
							value={this.state.minumumContribution}
							onChange={event => 
								{this.setState({minumumContribution: event.target.value})}}
							 />
					</Form.Field>
					<Message error header="Oops!" content={this.state.errorMessage} />
					<Button loading={this.state.loading} primary>Create!</Button>
				</Form>
			</Layout>
		);
	}
}

export default CampaignNew;