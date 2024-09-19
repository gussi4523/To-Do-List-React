import React, { Component, createElement, useState } from 'react';
import "./ToDo.css"

export default function ToDoList(){

  let [newtask,setNewTask] = useState("?");
  let [tasks,setTasks] = useState(["Eat","Shower","Walk"]);

  function hadleChangeText(e){
    setNewTask(e.target.value);
  }

  function addTask(){

    if(newtask.trim() !== ""){
      setTasks(t =>[...t,newtask]);
       setNewTask("");
    }

    
  }

  function deleteTask(index){
    let updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);
  }
  
  return(
    <div>
      <div className='add-button-card'>
        <input className='input-add' 
        value={newtask} 
          onChange={hadleChangeText}
        />

        <button 
        className='add-button'
         onClick={addTask}>
         Add
        </button>
      </div>

    <ol className='task-card'>
      {tasks.map((newtask,index) => 
          <li key={index} >
           <span className='task'>{newtask}</span> 
           <button
           className='delete-button' 
           onClick={()=>deleteTask(index)}>Delete</button>
          </li>
      )}
    </ol>
    </div>
  );
}
