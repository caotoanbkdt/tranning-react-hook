import React, { useState } from 'react';
import TodoListItem from './components/todoList/todoListItem';
import AddItem from './components/todoList/AddItem';

function App() {
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem('list')) || ['Go School', 'Go To Office', 'Go To playfootball'];
  });

  function onSubmit(value) {
    const newList = [...todoList];
    newList.push(value);
    localStorage.setItem('list', JSON.stringify(newList));
    setTodoList(newList);
  }
  function onToDeleteItem(index) {
    let newList = [...todoList];
    newList.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(newList));
    setTodoList(newList);
  }
  return (
    <div className="App">
      <AddItem onSubmit={onSubmit} />
      <ul>
        {todoList.map((item, index) => <TodoListItem key={index} item={item} onToDeleteItem={() => onToDeleteItem(index)} />)}
      </ul>
    </div>
  );
}

export default App;
