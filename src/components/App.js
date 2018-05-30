import React from 'react';
import StorePicker from './StorePicker'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes'
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

	loadSampleFishes = () =>{
		this.setState({fishes:sampleFishes})
	}

	render(){
		return(
			<React.Fragment>
				<div className="catch-of-the-day">
					<div className="menu">
						<Header tagline='Fresh Seafood Market'/>
		  			<ul>
		  				{Object.keys(this.state.fishes).map(key=> <Fish key={key} detail={this.state.fishes[key]}/>)}
		  			</ul>
	  			</div>
					<Order/>
					<Inventory 
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
					 />
					}
  			</div>
			</React.Fragment>
		)
	}
}