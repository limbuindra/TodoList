 import React from 'react'
 
import Todo from './Todo';

 const TodoList = ({todos ,setTodos, filterTodos }) => {
     return (
         <div>
             <div className='todo-container'>
                 <ul className='todo-list'>
                     {filterTodos.map(todo => (
                         <Todo 
                         todos={todos} 
                         setTodos={setTodos}
                         text={todo.text}
                         todo={todo}
                          key={todo.id}
                           id={todo.id}/>
                     ))}

                 </ul>
             </div>
         </div>
     )
 }
 
 export default TodoList;
 