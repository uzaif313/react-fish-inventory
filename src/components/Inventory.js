import React from 'react';
import AddInventoryForm from './AddInventoryForm';
export default class Inventory extends React.Component{
	render(){
		return(
			<div className='Inventory'>
				Inventory
				<AddInventoryForm addFish={this.props.addFish}/>
			</div>
		)
	}
}