import React from 'react';


const Smurf = props => {
 	return (
		<div>
			<h1>{props.smurf.name}</h1>
			<p>{props.smurf.age}</p>
			<p>{props.smurf.height}</p>
		</div>
	);
};

export default Smurf;