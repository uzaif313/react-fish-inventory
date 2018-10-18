import React from 'react';
import StorePicker from './StorePicker'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes'
import base from '../base'

export default class App extends React.Component{

	state = {
		fishes:{},
		orders:{}
	}

	componentDidMount(){
		const { params } = this.props.match;
		const localstorageRef = localStorage.getItem(params.storeid)
		if(localstorageRef){
			this.setState({orders:JSON.parse(localstorageRef)})
		}
		// ref for firebase database
		this.ref = base.syncState(`${params.storeid}/fishes`,{
			state:"fishes",
			context:this
		})
	}

	componentDidUpdate(){
		localStorage.setItem(this.props.match.params.storeid,JSON.stringify(this.state.orders))
	}

	componentWillUnmount(){
		//clean up sync firebase db ref 
		base.removeBinding(this.ref)
	}



	addFish = (fish) =>{
		const fishes = { ...this.state.fishes }
		fishes[`fishes-${Date.now()}`] = fish

		this.setState({fishes})
		
	}

	loadSampleFishes = () =>{
		this.setState({fishes:sampleFishes})
	}

	addToOrder = (key) => {
		const orders = {...this.state.orders}
		orders[key] = orders[key] + 1 || 1
		this.setState({orders})
	}

	render(){
		return(
			<React.Fragment>
				<div className="catch-of-the-day">
					<div className="menu">
						<Header tagline='Fresh Seafood Market'/>
		  			<ul>
		  				{Object.keys(this.state.fishes).map(key=> 
		  						<Fish key={key} 
		  									detail={this.state.fishes[key]}
		  									addToOrder={this.addToOrder}
		  									index={key}	
		  									/>
		  					)}
		  			</ul>
	  			</div>
					<Order fishes={this.state.fishes} order= {this.state.orders}/>
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