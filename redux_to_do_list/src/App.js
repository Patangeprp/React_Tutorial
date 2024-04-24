import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import store from './components/Todo';
import React ,{useState} from 'react';
import { connect } from 'react-redux'


function App({todos,addTodo,removeTodo,toggleTodo}) {

  const[text,setText]=useState("");


  const handleAdd=(e)=>{
    if(text.trim!==""){
      addTodo({
        id:new Date().getTime(),
        text,
        completed:false,
      })
      setText("");
    }
  };
  const handleRemove=(id)=>{
    removeTodo(id);
  }
  const handleToggle=(id)=>{
    toggleTodo(id);
  }
  
  



  return (
    <div className="App">
      <div className="App">
      <h1 className='todo'>To Do List</h1>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)} className='input' placeholder='add an item'></input>
      <button className='btn' onClick={handleAdd} >Add</button>
      <br/>
      <ul>
          {todos.map((todo)=>(
            <li
            className='todo.completed ? yes :no'
            key={todo.id}
            >
              {todo.text}
              <button onClick={()=>handleToggle(todo.id)}>Mark as done</button>
              <button onClick={()=>handleRemove(todo.id)}>Remove</button>
              </li>

          ))}
        
      </ul>

    </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => 
      dispatch({ 
          type: "ADD_TODO", 
          payload: todo 
      }),
  removeTodo: (id) => 
      dispatch({ 
          type: "REMOVE_TODO", 
          payload: id 
      }),
  toggleTodo: (id) => 
      dispatch({ 
          type: "TOGGLE_TODO", 
          payload: id 
      }),
});

export default connect
  (mapStateToProps, mapDispatchToProps)(App);
