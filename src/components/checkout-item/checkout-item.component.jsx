import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.styles.scss';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt="item" />
    </div>
    <span className='name'>{ name }</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => removeItem(cartItem)}>&#10096;</div>
      <span className='value'>
        { quantity }
      </span>
      <div className='arrow' onClick={() => addItem(cartItem)}>&#10097;</div>
    </span>
    <span className='price'>&#8369; { price }</span>
    <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
  </div>
)}

function mapDispatchToProps(dispatch) {
  return {
    clearItem: function(item) {
      return dispatch(clearItemFromCart(item))
    },
    addItem: function(item) {
      return dispatch(addItem(item))
    },
    removeItem: function(item) {
      return dispatch(removeItem(item))
    }
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);