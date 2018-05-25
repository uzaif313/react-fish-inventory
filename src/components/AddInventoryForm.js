import React, { Component, PropTypes } from 'react';

class AddInventoryForm extends Component {
    nameRef   = React.createRef();
    priceRef  = React.createRef();
    statusRef = React.createRef();
    descRef   = React.createRef();
    imageRef  = React.createRef();

    createFish = (event) =>{
    	event.preventDefault()
        const fish={
            nameRef:this.nameRef.value.value,    
            priceRef:parseFloat(this.priceRef.value.value),  
            statusRef:this.statusRef.value.value,
            descRef:this.descRef.value.value,    
            imageRef:this.imageRef.value.value,  
        }
        console.log(fish)
        this.props.addFish(fish)
    }

    render() {
        return (
     			<React.Fragment>
     				<form className="fish-edit" onSubmit={this.createFish}>
     					<input type="text" ref={this.nameRef} name="name" placeholder="Name"/>
                        <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
                        <select name="status" ref={this.statusRef}>
                            <option value="available">Fresh!</option>
                            <option value="unavailable">Sold Out!</option>
                        </select>
                        <textarea name="desc" placeholder="Desc" ref={this.descRef}/>
                        <input name="image" type='text' placeholder="Image" ref={this.imageRef}/>
                        <button type="submit">+Add Fish</button> 
     				</form>
     			</React.Fragment>       
        );
    }
}

export default AddInventoryForm;
