import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';



const Form = ({ inputText , setInputText , todos, setTodos ,setStatus }) =>{
const inputTextHandler =(e) =>{
    console.log(e.target.value);
setInputText(e.target.value);
}

const submitHandler =(e)=>{
  e.preventDefault();
setTodos([
  ...todos, 
  {text: inputText , completed: false, id: Math.random() *1000 }
]);
setInputText("");
};

const statusHandler = (e) =>{
  setStatus(e.target.value)
};
return(
<>
<form >
<Tooltip title="Input">

      <input onChange={inputTextHandler}  value={inputText} type="text" className="todo-input" />
      </Tooltip>
    
<Tooltip title="Add">
       <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus"></i>
      </button> 
    </Tooltip>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
</>
    )
};
export default Form;