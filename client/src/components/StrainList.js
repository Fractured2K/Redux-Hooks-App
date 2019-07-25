import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Actions
import { getStrains } from '../actions/index';

// Components
import Strain from './Strain';

const StrainList = props => {
    console.log(props)
	useEffect(() => {
		props.getStrains();
	}, []);

	return (
		<div>
			{props.strains.map((strain) => {
                return <Strain key={strain.ocpc} strain={strain} />
            })}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		strains: state.strains
	};
};

const mapActionsToProps = () => ({ getStrains });

export default connect(
	mapStateToProps,
	mapActionsToProps()
)(StrainList);
