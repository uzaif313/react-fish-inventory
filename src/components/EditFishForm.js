import React, { Component } from 'react';
import PropTypes from 'prop-types'
export default class EditFishForm extends Component {
  
  static propTypes = {
    fish:PropTypes.shape({
      name:  PropTypes.string,
      status:PropTypes.string,
      image: PropTypes.string,
      desc:  PropTypes.string,
      price:PropTypes.number
    }),
    index:PropTypes.string.isRequired,
    deleteFish:PropTypes.func.isRequired
  }

  handleChange = event =>{
    const updateState = { ...this.props.fish, [event.currentTarget.name]:event.currentTarget.value }
    this.props.updateFish(this.props.index, updateState)
  }
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" value={this.props.fish.name} onChange={this.handleChange}/>
        <input type = "text"
        name = "price"
        value = {this.props.fish.price}
        onChange = {this.handleChange}
        />
        <select name = "status"
        value = {this.props.fish.status}
        onChange = {this.handleChange}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name = "desc"
        value = {this.props.fish.desc}
        onChange = {this.handleChange}
        />
        <input type = "text"
        name = "image"
        value = {this.props.fish.image}
        onChange = {this.handleChange}
        />
        <button onClick={(fish)=> this.props.deleteFish(this.props.index)}>Remove {this.props.fish.name}</button>
      </div>
    );
  }
}