import React from 'react';
import './App.css';
import Todolist from "./components/Todolist/Todolist";

const task1 = [
    {id: 1, title: 'HTML', checked: true },
    {id: 2, title: 'CSS', checked: true },
    {id: 3, title: 'HTML', checked: false }
]
const task2 = [
    {id: 1, title: 'milk', checked: true },
    {id: 2, title: 'bread', checked: false },
    {id: 3, title: 'fish', checked: true }
]

function App() {
    return (
        <div className="App">
         <Todolist title={'What to learn'} tasks={task1}/>
         <Todolist title={'What to buy'} tasks={task2}/>
        </div>
    );
}

export default App;
