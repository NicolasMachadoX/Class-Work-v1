import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import './App.css'
const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (productName) => {
    setProducts([...products, { id: Date.now(), name: productName }]);
  };

  const updateProduct = (id, newName) => {
    setProducts(products.map(product => product.id === id ? { ...product, name: newName } : product));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className='containerCards'>
      <h1>Family Basket</h1>
      <AddProductForm onAdd={addProduct} />
      <ProductList
        products={products}
        onUpdate={updateProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
};

export default App;
