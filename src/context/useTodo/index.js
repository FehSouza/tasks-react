import { createContext, useContext, useState } from 'react';

const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    const text = task.trim();
    if (text.length) setTasks([...tasks, { task, id: Math.random(), completed: false }]);
    return;
  };

  const toggleTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => {
      if (task.id !== id) return true;
      return false;
    });
    setTasks(newTasks);
  };
  return <TodoContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);
