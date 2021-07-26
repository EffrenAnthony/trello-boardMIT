function Todo({todo,index,remove, updateState}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  function changeStateUp(){
    if (todo.state ==='to-do') {
      updateState('in-progress', index)
    } else if (todo.state === 'in-progress'){
      updateState('done', index)
    }
  }
  function changeStateDown(){
    if (todo.state ==='in-progress') {
      updateState('to-do', index)
    } else if (todo.state === 'done'){
      updateState('in-progress', index)
    }
  }
  return (
    <div className="todo">
      {todo.text} 
      <div className='actions'>
        <button  onClick={handle}>Delete</button>
        {
          todo.state !== 'to-do' &&
          <button onClick={changeStateDown}>{'<='}</button>

        }
        <button onClick={changeStateUp}>{'=>'}</button>
      </div>
    </div>
  )
}
