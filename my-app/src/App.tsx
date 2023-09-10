import React from 'react';
// import { useSelector } from 'react-redux';
import  ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10, category: 'Category A' },
    { id: 2, name: 'Product 2', price: 20, category: 'Category B' },
    { id: 3, name: 'Product 3', price: 30, category: 'Category A' },
  ];

  return (
    <div>
      <ProductList products={products} />
      <Cart />
    </div>
  );
};

export default App;
