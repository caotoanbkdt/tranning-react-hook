import React, { useState } from 'react';
import TodoListItem from './components/todoList/todoListItem';

function App() {
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem('list')) || ['Go School', 'Go To Office', 'Go To playfootball'];
  });

  function onToDeleteItem(index) {
    let newList = [...todoList];
    newList.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(newList));
    setTodoList(newList);
  }
  return (
    <div className="App">
      <ul>
        {todoList.map((item, index) => <TodoListItem key={index} item={item} onToDeleteItem={() => onToDeleteItem(index)} />)}
      </ul>
    </div>
  );
}

export default App;
