import React from 'react';
import AddInventoryForm from './AddInventoryForm';
import PropTypes from 'prop-types'
import EditFishForm from './EditFishForm';

export default class Inventory extends React.Component{

	static proptTypes = {
		fishes: PropTypes.object,
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		loadSampleFishes: PropTypes.func
	}

	render(){
		return(
			<div className='Inventory'>
				<h2>Inventory</h2>
				{Object.keys(this.props.fishes).map(key => (<EditFishForm
																													fish={this.props.fishes[key]}
																													key={key}
																													index={key}
																													updateFish = {this.props.updateFish}
																													deleteFish = {this.props.deleteFish}
																													/>)
																					)}
				<AddInventoryForm addFish={this.props.addFish}/>
				<button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
			</div>
		)
	}
}