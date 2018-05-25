import React from 'react';
import StorePicker from './StorePicker'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

export default class App extends React.Component{

	state = {
		fishes:{},
		orders:{}
	}

	addFish = (fish) =>{
		const fishes = { ...this.state.fishes }
		fishes[`fishes-${Date.now()}`] = fish

		this.setState({fishes})
		
	}

	render(){
		return(
			<React.Fragment>
				<div className="catch-of-the-day">
					<div className="menu">
						<Header tagline='Fresh Seafood Market'/>
	  			</div>
					<Order/>
					<Inventory addFish={this.addFish}/>
  			</div>
			</React.Fragment>
		)
	}
}