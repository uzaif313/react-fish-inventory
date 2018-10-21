import React from 'react';
import AddInventoryForm from './AddInventoryForm';
import PropTypes from 'prop-types'
import  firebase  from 'firebase'
import EditFishForm from './EditFishForm';
import Login from './Login'
import base, { firebaseApp } from '../base'
export default class Inventory extends React.Component{

	static proptTypes = {
		fishes: PropTypes.object,
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		loadSampleFishes: PropTypes.func
	}

	state = {
		uid:null,
		owner:null
	}

	componentDidMount = () =>{
		firebase.auth().onAuthStateChanged(user=>{
			if(user){
				this.authHandler({user})
			}
		})
	}

	authHandler = async (authData) => {
		//1 Look in to current Store in firebase
		const store = await base.fetch(this.props.storeId, {context:this})
		//2. claim if there is no owner
		if(!store.owner){
			// save it as our store
			await base.post(`${this.props.storeId}/owner`,{data:authData.user.uid})
		}
		//3 set state to apply effect of logged in User
		this.setState({
			uid: authData.user.uid,
			owner: store.owner || authData.user.uid
		})

		
	}
	authenticate = (provider) => {
		const authProvider = new firebase.auth[`${provider}AuthProvider`]();
		firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)
	}

	logout = async () =>{
		await firebase.auth().signOut();
		this.setState({uid:null, owner:null})
	}

	render(){
		const logout = <button onClick={this.logout}>Logout</button>
		//1. check if uid is not set
		if(!this.state.uid){
			return (<Login authenticate={this.authenticate}/>)
		}
		// 2. check user is ownere of store
		if((this.state.uid!==this.state.owner)){
			return(<div>
							<p>You are not owner of store </p> 
							{logout} 
						</div>)
		}

		//3. render inventory if uid and owner is equal
		return(
			<div className='Inventory'>
				<h2>Inventory</h2>
				{logout}
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