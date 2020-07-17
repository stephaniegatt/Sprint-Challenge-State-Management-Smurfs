import React, { useContext } from 'react';
import { SmurfContext } from "../context/SmurfContext";
import Smurf from "./Smurf";

const Smurfs = () => {
	const {smurfs} = useContext(SmurfContext);
	return (
		<div>
			{smurfs.map(smurf => (
				<Smurf
					key={smurf.id}
					smurf={smurf}
				/>
			))}
		</div>
	);
};

export default Smurfs;
