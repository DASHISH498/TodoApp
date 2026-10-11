import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import TaskFilterTabs from "./components/TaskFilterTabs";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/initialTasks";

function App() {
  const [tasks, setTasks] = useState(
    initialTasks.map((task) => ({
      ...task,
      completed: false,
    })),
  );

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

  const handleToggleTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const [filteredTasks, setFilteredTasks] = useState(tasks);
const [searchText, setSearchText] = useState("");

  const filteredTasksBySearch = filteredTasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#111111] flex text-white">
      <Sidebar></Sidebar>
      <main className="flex-1 p-4">
        <Header searchText={searchText} onSearchChange={setSearchText}></Header>
        <Stats tasks={tasks}></Stats>
        <AddTask onAddTask={handleAddTask}></AddTask>
        <TaskFilterTabs
          tasks={tasks}
          onFilterChange={setFilteredTasks}
        ></TaskFilterTabs>
        <TaskList
          tasks={filteredTasksBySearch}
          onDeleteTask={handleDeleteTask}
          onUpdateTask={handleUpdateTask}
          onToggleTask={handleToggleTask}
        ></TaskList>
      </main>
    </div>
  );
}

export default App;
