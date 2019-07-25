import React from 'react';

const Strain = (props) => {
	return (
		<>
            <h1>{props.strain.name}</h1>
			<img src={props.strain.image} alt={`Strain: ${props.strain.name}`} />
		</>
	);
};

export default Strain;
