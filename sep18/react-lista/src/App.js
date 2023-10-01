
import { useState } from 'react';
import './App.css';



const App = ()=>{
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const add = () => {
    if(newTask.trim() !== ''){
      setTask([...tasks, newTask]);
      setNewTask('');
    }
  }

  const delet = (i) => {
    const data = [...tasks];
    data.splice(i, 1);
    setTask(data);
  }

  const edit = (i) => {
    const data = [...tasks];
    const edited = prompt('Write for Update');
    data.splice(i, 1, edited);
    setTask(data);
  }
  return (
    <div className='container'>
      <input className='inputI' type='text' placeholder='Add a new task' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
      <button  className="buttonL" type='submit' onClick={add}>Add</button>
      <div>
        <ul>
          {tasks.map((task, i)=>(
            <li  className="textL" key={i}>
              {task}
              <button className="buttonLX" onClick={()=>delet(i)}>Delete</button>
              <button className="buttonLX" onClick={()=>edit(i)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>   
    </div>
  );
}






export default App;
