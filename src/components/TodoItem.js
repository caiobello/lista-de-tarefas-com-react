import React from 'react';

const TodoItem = ({ item, isSelected, onItemClick }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onItemClick}
        />
        {item}
      </label>
    </li>
  );
};

export default TodoItem;
