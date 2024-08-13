import React from 'react';
import axios from 'axios';

const DeleteItem = ({ id }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/items/${id}`)
      .then(() => alert('Item deleted successfully'))
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger">Delete Item</button>
  );
};

export default DeleteItem;
