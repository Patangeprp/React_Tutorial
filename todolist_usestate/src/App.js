import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Todo from './Todo';

function App() {

  const[list,setList]=useState([]);
  const[task,setTask]=useState("");

  const handleChange=(event)=>{
    setTask(event.target.value);
  }
  const addTask=()=>{
    setList((oldList)=>{
      return [...oldList,task];
    });
    setTask("");
  };
  const deleteItem=(id)=>{
    setList((oldList)=>{
      return oldList.filter((arrelement,index)=>{
        return index!==id;
      })
    })
  }
  

  return (
    <div className="App">
      <h1 className='todo'>To Do List</h1>
      <input type='text' onChange={handleChange} className='input' value={task} placeholder='add an item'></input>
      <button className='btn' onClick={addTask} >Add</button>
      <br/>
      <ol>
        {list.map((itemValue,index)=>{
          return <Todo text={itemValue} key={index} id={index} onselect={deleteItem} />;
        })}
      </ol>

    </div>
  );
}

export default App;
