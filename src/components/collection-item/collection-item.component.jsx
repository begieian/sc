import React from 'react';
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{ name }</span>
        <span className='price'>&#8369;{ price }</span>
      </div>
      <CustomButton className='custom-button' onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: function(item) {
      dispatch(addItem(item));
    }
  }
}

export default connect(null, mapDispatchToProps)(CollectionItem);