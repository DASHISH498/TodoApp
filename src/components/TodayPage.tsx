import { CalendarDays } from "lucide-react";
import AddTask from "./AddTask";
import Stats from "./Stats";
import TaskList from "./TaskList";
import { initialTasks } from "../data/initialTasks";

type Task = (typeof initialTasks)[number] & {
  completed: boolean;
};

type TodayPageProps = {
  tasks: Task[];
  onAddTask: (title: string, description: string) => void;
  onDeleteTask: (taskId: number) => void;
  onUpdateTask: (
    taskId: number,
    newTitle: string,
    newDescription: string,
  ) => void;
  onToggleTask: (taskId: number) => void;
};

function TodayPage({
  tasks,
  onAddTask,
  onDeleteTask,
  onUpdateTask,
  onToggleTask,
}: TodayPageProps) {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const completedCount = tasks.filter((task) => task.completed).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="flex-1 space-y-6 p-4 text-white">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-[#888]">
            <CalendarDays size={16} />
            <span>{date}</span>
          </div>

          <h1 className="mt-2 text-3xl font-semibold">Today</h1>

          <p className="mt-1 text-sm text-[#888]">
            Stay focused and get things done.
          </p>
        </div>
      </div>

      <Stats tasks={tasks} />

      <div className="rounded-xl border border-[#292929] bg-[#171717] p-5">
        <div className="mb-4">
          <h2 className="font-semibold">Today's progress</h2>
          <p className="mt-1 text-xs text-[#888]">
            {completedCount} of {tasks.length} tasks completed
          </p>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#303030]">
          <div
            className="h-full rounded-full bg-[#1677ff] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-right text-sm text-blue-400">
          {progress}%
        </p>
      </div>

      <AddTask onAddTask={onAddTask} />

      <div className="rounded-xl border border-[#292929] bg-[#171717] p-5">
        <h2 className="font-semibold">Today's schedule</h2>
        <p className="mt-1 text-xs text-[#888]">
          Manage your tasks for the day
        </p>

        <div className="mt-5">
          <TaskList
            tasks={tasks}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
            onToggleTask={onToggleTask}
          />
        </div>
      </div>
    </div>
  );
}

export default TodayPage;