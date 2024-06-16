import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/items', { name })
      .then(response => {
        console.log(response.data);
        setName('');
      })
      .catch(error => {
        console.error('There was an error adding the item!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
