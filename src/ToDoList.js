import './ToDoList.css';
import Filter from './Filter';
import Display from './Display';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopOpen from './PopOpen';
import { useDispatch } from 'react-redux';
import { addTasks } from './reducers/tasksSlice';

function ToDoList(){
    let navigation = useNavigate();
    const dispatch = useDispatch();
    const [detailed,setDetailed] = useState(false);
 
    const[itemPresent,setItemPresent] = useState(false)
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(addTasks({task:e.target[0].value}));
        setItemPresent(true);

    }
    function handleClick(){
        navigation("/Login",true)
    }
    function handleDetailedClick(){
        setDetailed(true)

    }
    return(
        <div className='outer'>
            <button onClick={handleClick}>Logout and back to Login page</button>
            <div className='inner'>
                
        <div className ="todo-form">
            <h1 id="heading">TODO</h1>
            <form id="form-inp" onSubmit ={handleSubmit} className ="inputTask">
                <input id="inp" type="text" placeholder='Add task todo...'></input>
                <button className="btn btn-primary">Create Task</button>
            
            </form>
            <button className="btn btn-primary detailed-btn" onClick={handleDetailedClick}>Create Detailed Task</button>
             {detailed && <PopOpen itemPresent={itemPresent} setItemPresent={setItemPresent}  detailed={detailed} setDetailed={setDetailed}/>}          

        </div>
        <Filter/>
        
        {itemPresent && <Display />}
        </div>
        </div>
    )

}
export default ToDoList;