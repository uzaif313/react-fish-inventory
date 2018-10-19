import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../helpers';
class Fish extends Component {

		static propTypes = {
			detail: PropTypes.shape({
				image: PropTypes.string,
				name: PropTypes.string,
				price: PropTypes.number,
				status: PropTypes.string,
				desc: PropTypes.string
			}),
			addToOrder: PropTypes.func
		}

		handleOrder = () =>{
			this.props.addToOrder(this.props.index)
		}

    render() {
    	const {image, name, price, status, desc} = this.props.detail;
    	const isAvailable = status == 'available';
        return (
						<li className="menu-fish">
								<img src={image} alt={name}/>
								<h3 className='fish-name'>
									{name}
									<span className="price">
										{formatPrice(price)}
									</span>
								</h3>
									<p>
										{desc}
									</p>
									<button disabled={!isAvailable} onClick={this.handleOrder}>
										{
											isAvailable ? "Add To Order" : "Sold Out!"
										}
									</button>
						</li>
        );
    }
}

export default Fish;
