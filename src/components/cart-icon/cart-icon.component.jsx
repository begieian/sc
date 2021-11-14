import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={ toggleCartHidden }>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{ itemCount }</span>
  </div>
)

function mapDispatchToProps(dispatch) {
  return {
    toggleCartHidden: function() {
      dispatch(toggleCartHidden())
    }
  }
}

function mapStateToProps(state) {
  return {
    itemCount: selectCartItemsCount(state)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);