import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleRemoveSelectedItems = () => {
    setItems((prevItems) => prevItems.filter((_, index) => !selectedItems.includes(index)));
    setSelectedItems([]);
  };

  const handleItemClick = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, index]);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Digite uma nova tarefa..."
        />
        <button onClick={handleAddItem}>Adicionar</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            isSelected={selectedItems.includes(index)}
            onItemClick={() => handleItemClick(index)}
          />
        ))}
      </ul>
      {selectedItems.length > 0 && (
        <button onClick={handleRemoveSelectedItems}>Remover Itens Selecionados</button>
      )}
    </div>
  );
};

export default TodoList;
