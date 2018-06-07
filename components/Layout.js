import React from 'react';
import Header from './Header';

export default (props) => {
	return (
		<div>
			<Header/>
			{props.children}
			<h1>Here will be a footer</h1>
		</div>
	);	
}