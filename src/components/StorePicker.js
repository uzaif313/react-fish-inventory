import React from 'react';
export default class StorePicker extends React.Component{
	render(){
		return(
			<React.Fragment>
			{/*<React.*/}	
				<form className="store-selector">
		    	<input type="text" name="store" placeholder="Please Enter Store Name"/>
		    	<button>Visit Store</button>
		    </form>	
	    </React.Fragment>
		)
	}
}