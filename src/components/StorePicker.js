import React from 'react';
import { getFunName } from '../helpers';
export default class StorePicker extends React.Component{
	myInput = React.createRef();

	goToStore = (event) => {
		console.log(this.myInput.value.value)
		event.preventDefault();
		this.props.history.push(`/store/${this.myInput.value.value}`)
	}

	render(){
		return(
			<React.Fragment>
			{/*<React.*/}	
				<form className="store-selector" onSubmit={this.goToStore}>
		    	<input type="text"
		    				 name="store"
		    				 ref={this.myInput}	
		    				 placeholder="Please Enter Store Name"
		    				 defaultValue={getFunName()}/>
		    	<button>Visit Store</button>
		    </form>	
	    </React.Fragment>
		)
	}
}