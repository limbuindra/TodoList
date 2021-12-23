import React ,{ useState ,useEffect }from 'react';

import Form from './Components/Form'
import TodoList from './Components/TodoList';



const App = () => {

    const [inputText, setInputText] = useState("");
    const [todos , setTodos] =useState([]);
    const [ status ,setStatus ] = useState("all");
    const [filterTodos, setFilterTodos] = useState([]);
   //run once when the app start
useEffect(() =>{
    getLocalTodos();
} ,[]);

    useEffect(() => {
        filterHandler();
    saveLocalTodos();
    }, [todos, status]);   

     const filterHandler = () =>{
         switch(status){
             case 'completed':
                 setFilterTodos(todos.filter(todo => todo.completed === true));
                 break;
             case 'uncompleted':
                 setFilterTodos(todos.filter(todo => todo.completed === false));
                 break;
             default:
                 setFilterTodos(todos);
             break;
         }
     };
const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
const getLocalTodos = () =>{
    if (localStorage.getItem("todos") ===  null) {
        localStorage.setItem("todos", JSON.stringify([]));
    }else{
       let todoLocal= JSON.parse(localStorage.getItem("todos"))
    setTodos(todoLocal);
    }
};
    return (
        <div>           
    <header>
      <h1>Todo List</h1>
    </header>
<Form 
    todos={todos}
    setTodos={setTodos}
     inputText={inputText}
       setInputText={setInputText}
          setStatus={setStatus}
         filterTodos={filterTodos}
    />
     <TodoList 
          todos={todos}
           setTodos={setTodos}
            filterTodos={filterTodos}
  />
        </div>
    )
}

export default App;