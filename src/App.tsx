import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import TaskFilterTabs from "./components/TaskFilterTabs";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/initialTasks";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDeleteTask = (taskId: number) => {
    setTasks((taskVal) => taskVal.filter((task) => task.id !== taskId));
  };

  const handleUpdateTask = (
    taskId: number,
    newTitle: string,
    newDescription: string,
  ) => {
    setTasks((taskVal) =>
      taskVal.map((task) =>
        task.id === taskId
          ? {
              ...task,
              title: newTitle,
              description: newDescription,
            }
          : task,
      ),
    );
  };

  const handleAddTask = (title: string, description: string) => {
    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      category: "Personal",
      priority: "Medium",
    };

    setTasks([newTask, ...tasks]);
  };

  return (
    <div className="min-h-screen bg-[#111111] flex text-white">
      <Sidebar></Sidebar>
      <main className="flex-1 p-4">
        <Header></Header>
        <Stats></Stats>
        <AddTask onAddTask={handleAddTask}></AddTask>
        <TaskFilterTabs></TaskFilterTabs>
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onUpdateTask={handleUpdateTask}
        ></TaskList>
      </main>
    </div>
  );
}

export default App;
