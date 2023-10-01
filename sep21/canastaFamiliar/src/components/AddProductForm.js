import React, { useState } from 'react';

const AddProductForm = ({ onAdd }) => {
  const [productName, setProductName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.trim() !== '') {
      onAdd(productName);
      setProductName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
      />
      <button type="submit">Add product</button>
    </form>
  );
};

export default AddProductForm;
