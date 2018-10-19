import React, { Component, PropTypes } from 'react';
import PropsTypes from 'prop-types'
class AddInventoryForm extends Component {

    static propsTypes = {
        addFish:PropsTypes.func
    }


    nameRef   = React.createRef();
    priceRef  = React.createRef();
    statusRef = React.createRef();
    descRef   = React.createRef();
    imageRef  = React.createRef();

    createFish = (event) =>{
    	event.preventDefault()
        const fish={
            name: this.nameRef.value.value,    
            price: parseFloat(this.priceRef.value.value),  
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,    
            image: this.imageRef.value.value,  
        }
        console.log(fish)
        this.props.addFish(fish)
        event.currentTarget.reset()
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
