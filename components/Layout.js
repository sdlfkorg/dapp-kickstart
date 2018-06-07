import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';

export default (props) => {
	return (
		<Container>
			<Header/>
			{props.children}
			<h1>Here will be a footer</h1>
		</Container>
	);	
}