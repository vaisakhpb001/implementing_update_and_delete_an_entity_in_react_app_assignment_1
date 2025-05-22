import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'; // optional, for styling

function UpdateItem() {
  const [item, setItem] = useState(null);
  const [updatedValue, setUpdatedValue] = useState('');
  const [message, setMessage] = useState('');

  // Replace this with actual API URI from App.jsx
  const API_URI = 'http://localhost:3000/items/1'; // adjust ID as needed

  // Fetch existing item on mount
  useEffect(() => {
    axios
      .get(API_URI)
      .then((response) => {
        setItem(response.data);
        setUpdatedValue(response.data.name); // or whichever field you want
      })
      .catch((error) => {
        console.error('Error fetching item:', error);
        setMessage('Failed to fetch item.');
      });
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setUpdatedValue(e.target.value);
  };

  // Handle update submission
  const handleUpdate = () => {
    axios
      .put(API_URI, {
        ...item,
        name: updatedValue,
      })
      .then((response) => {
        setMessage('Item updated successfully!');
        setItem(response.data);
      })
      .catch((error) => {
        console.error('Error updating item:', error);
        setMessage('Failed to update item.');
      });
  };

  return (
    <div className="update-container">
      <h2>Update Item</h2>
      {item ? (
        <>
          <p>Current Value: {item.name}</p>
          <input type="text" value={updatedValue} onChange={handleChange} />
          <button onClick={handleUpdate}>Update</button>
          {message && <p>{message}</p>}
        </>
      ) : (
        <p>Loading item...</p>
      )}
    </div>
  );
}

export default UpdateItem;
