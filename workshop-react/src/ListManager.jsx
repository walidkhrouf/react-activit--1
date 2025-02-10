import React, { useState } from 'react';

const ListManager = ({ initialItems, placeholder }) => {
    const [items, setItems] = useState(initialItems);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = (e) => {
     
        if (newItem.trim() !== '') {
            setItems([...items, newItem]); 
            setNewItem(''); 
        }
    };

    return (
        <div>
          
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder={placeholder}
                />
                <button type="submit" onClick={handleAddItem}>Ajouter</button>
        
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item} <button>supprimer</button></li>
                ))}
            </ul>
        </div>
    );
};

export default ListManager;