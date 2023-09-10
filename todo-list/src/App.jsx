import React, {useState} from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      checked: false,
      task: "Read About Atomic structure",
    },

    {
      id: 2,
      checked: false,
      task: "practice on your coding skills",
    },

    {
      id: 3,
      checked: false,
      task: "watch a movie",
    },
  ]);

  const [newTasks, setNewTasks] = useState("")

  const addTask = (task) => {
    const id =  tasks.length ? tasks[tasks.length-1].id + 1 : 1 
    const myNewTask = {id,checked: false , task};
    const TodoList = [...tasks,myNewTask];
    setTasks(TodoList);
     };
   

  const handleChange = (id) => {
    const changeChecked = tasks.map(task =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(changeChecked);
    localStorage.setTasks("taskTodo", JSON.stringify(changeChecked))
  }

  const handleDelete = (idToDelete) => {
    const deleteTask = tasks.filter(task => task !== idToDelete );
    setTasks(deleteTask)
  }

 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTasks) return;
    addTask(newTasks);
    setNewTasks("");
  }
  return (
    <div className="main">
      
      
      <Header/>
      <AddTodo
      setNewTasks= {setNewTasks}
      handleSubmit= {handleSubmit} 
      addTask={tasks}/>
      <TodoList   
      tasks={tasks}
      handleChange={handleChange}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
