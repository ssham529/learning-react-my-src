import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  console.log('App.js createBulkTodos');
  const array = [];
  for (let i=1; i<=2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    });
  }
  return array;
}


const App = () => {
  
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4);

  const onToggle = useCallback(
    id => {
      setTodos( todos =>
        todos.map(
          todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
      );
    }, 
    []
  );

  const onInsert = useCallback(
    text => {
      console.log('App.js onInsert');
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      //setTodos(todos.concat(todo));  
      setTodos(todos => todos.concat(todo));

      nextId.current += 1;
    }, 
    [],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />      
    </TodoTemplate>
  );
};

export default App; 