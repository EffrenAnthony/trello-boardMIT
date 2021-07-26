function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
      state: 'to-do'
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
      state: 'to-do'
    },
    {
      text: 'build todo app',
      isCompleted: false,
      state: 'to-do'
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false, state: 'to-do'}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }
  const changeState = (state, index) => {
    let temp = [...todos];
    temp[index].state = state
    setTodos(temp)
  }

  return(
    <div className="app">
      <h1>Trello Board MIT MERN</h1>
      <div className="todo-list" >
        <h2>To Do</h2>
        {todos.map((todo, i) => (
          todo.state === 'to-do' &&
            <Todo key={i} index={i} todo={todo} remove={removeTodo} updateState={changeState}/>
          ))}
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="todo-list" >
        <h2>In progress</h2>
        {todos.map((todo, i) => (
          todo.state === 'in-progress' &&
          <Todo key={i} index={i} todo={todo} remove={removeTodo} updateState={changeState}/>
        ))}
      </div>
      <div className="todo-list" >
        <h2>Done</h2>
        {todos.map((todo, i) => (
          todo.state === 'done' &&
          <Todo key={i} index={i} todo={todo} remove={removeTodo} updateState={changeState}/>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
