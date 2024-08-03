import React from 'react';
import '../css/Products.css';
import product1 from '../Images/Cupcakes.jpg';
import product2 from '../Images/Custard.jpg';
import product3 from '../Images/Donuts.jpg';

function Products() {
  return (
    <div className='products'>
      <div className='product no1'>
        <img src={product1} alt='Cupcakes' />
        <h2>Cupcakes</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="order-item">Order Item</button>
      </div>

      <div className='product no2'>
        <img src={product2} alt='Custards' />
        <h2>Custards</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="order-item">Order Item</button>
      </div>

      <div className='product no3'>
        <img src={product3} alt='Donuts' />
        <h2>Donuts</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="order-item">Order Item</button>
      </div>
      
    </div>
  );
}

export default Products;

