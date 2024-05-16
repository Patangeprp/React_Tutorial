import React from 'react'

const Todo=(props)=>{
    return (
    <div className='list'> 
    <i class="fa-solid fa-circle-xmark" onClick={()=>{
        props.onselect(props.id);
    }} ></i>
    <li>{props.text}</li>
    </div>
    )
};

export default Todo;