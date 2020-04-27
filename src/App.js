import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
//import TodoListItem from './components/todoList/todoListItem';
// import AddItem from './components/todoList/AddItem';

function App() {
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem('list')) || ['Go School', 'Go To Office', 'Go To playfootball'];
  });
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPostLink() {
      const requestUrl = "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1"
      const response = await fetch(requestUrl);
      const responseJson = await response.json();
      const { data } = responseJson;
      setPostList(data);
    }
    fetchPostLink();
  }, [])
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
      <PostList posts={postList} />
      {/* <AddItem onSubmit={onSubmit} />
      <ul>
        {todoList.map((item, index) => <TodoListItem key={index} item={item} onToDeleteItem={() => onToDeleteItem(index)} />)}
      </ul> */}
    </div>
  );
}

export default App;
