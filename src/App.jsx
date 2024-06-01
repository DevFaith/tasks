import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

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
      <Header onAddTask={addTask}/>
      <Tasks 
        tasks={tasks}
        onComplete={toggleTaskCompletedID}
        onDelete={deleteTaskById}
      />
    </>
  );
}

export default App;
