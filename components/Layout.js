import React from 'react';

export default (props) => {
	return (
		<div>
			<h1>Here will be a header</h1>
			{props.children}
			<h1>Here will be a footer</h1>
		</div>
	);	
}