import { SquarePen, Trash2, CheckCircle } from "lucide-react";
import { initialTasks } from "../data/initialTasks";
import { useState } from "react";

type TaskListProps = {
  tasks: typeof initialTasks;
  onDeleteTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
  onUpdateTask: (taskId: number, newTitle: string, newDescription: string) => void;
};

function TaskList({tasks, onDeleteTask, onToggleTask, onUpdateTask}: TaskListProps) {
  const [editingTask, setEditingTask] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="mt-3 h-[calc(100vh-316px)] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#444_transparent]">
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between border-t border-gray-700 py-3 px-3"
          >
            <div className="left w-full flex items-center gap-4">

              <div className="grid">
                <h2>{task.title}</h2>
                <p className="text-[#aaa]">{task.category}</p>
              </div>
            </div>

            <div className="right flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-md bg-red-500/15 text-red-400 text-sm font-medium">
                {task.priority}
              </span>

              <button
                aria-label="Edit task"
                onClick={() => {
                  setEditingTask(task);
                  setTitle(task.title);
                  setDescription(task.description);
                }}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <SquarePen size={20} />
              </button>

              <button
              onClick={() => onToggleTask(task.id)}
                className="p-2 rounded-md text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
              >
                <CheckCircle size={18} />
              </button>

              <button
                aria-label="Delete task"
                onClick={() => onDeleteTask(task.id)}
                className="p-2 rounded-md text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editingTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-96 rounded-lg bg-[#222] p-6">
            <h2 className="mb-4 text-xl font-semibold">Edit Task</h2>

            <p className="text-gray-400">Task Name</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={editingTask.title}
              className="mb-4 w-full rounded border border-gray-600 bg-[#333] p-2"
            />

            <p className="text-gray-400">Description</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              defaultValue={editingTask.description}
              className="mb-4 w-full rounded border border-gray-600 bg-[#333] p-2"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingTask(null)}
                className="rounded bg-gray-600 px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  onUpdateTask(editingTask.id, title, description);
                  setEditingTask(null);
                }}
                className="rounded bg-blue-600 px-4 py-2 cursor-pointer hover:bg-blue-700 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskList;
