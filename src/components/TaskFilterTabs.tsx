import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;
  completed: boolean;
};

type TaskFilterTabsProps = {
  tasks: Task[];
  onFilterChange: (filteredTasks: Task[]) => void;
};

function TaskFilterTabs({
  tasks,
  onFilterChange,
}: TaskFilterTabsProps) {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);

    const filteredTasks = tasks.filter((task) => {
      if (tab === "Pending") return !task.completed;
      if (tab === "Completed") return task.completed;
      return true;
    });

    onFilterChange(filteredTasks);
  };

  useEffect(() => {
  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "Pending") return !task.completed;
    if (activeTab === "Completed") return task.completed;
    return true;
  });

  onFilterChange(filteredTasks);
}, [tasks, activeTab]);

  const tabs = ["All", "Pending", "Completed"];

  return (
    <div className="mt-4">
      <ul className="flex items-center gap-3">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`border rounded-full w-fit px-3 text-sm py-1 cursor-pointer ${
              activeTab === tab
                ? "border-[#fff] bg-[#fff] text-[#000]"
                : "border-[#262626] text-[#666]"
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskFilterTabs;