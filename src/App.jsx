import React, { useState, useEffect } from 'react';
import { Header } from './Components/Header';
import { Tasks } from './Components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to local storage whenever they are updated
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function toggleTaskCompletedID(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={toggleTaskCompletedID}
        onDelete={deleteTaskById}
      />
    </>
  );
}

export default App;
