import { useState } from "react";

type AddTaskProps = {
  onAddTask: (title: string, description: string) => void;
};

function AddTask({ onAddTask }: AddTaskProps) {

  const [addTask, setAddTask] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <>
      <div className="flex items-center gap-3 mt-4">
        <div className="flex items-center gap-3 w-full justify-end">
          {/* Add */}
          <button className="h-8 w-[82px] px-4 rounded-md text-center bg-[#1677ff] hover:bg-[#0868e8] text-white text-xs cursor-pointer font-medium" onClick={() => setAddTask(true)}>
            Add task
          </button>
        </div>
        {addTask && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60">
            <div className="bg-[#111] p-4 rounded-md w-[400px]">
              <h2 className="text-xl font-semibold mb-4">Add Task</h2>
              <input
                type="text"
                value={taskValue}
                onChange={(e) => setTaskValue(e.target.value)}
                placeholder="Task name"
                className="mb-4 w-full rounded border border-gray-600 bg-[#333] p-2"
              />
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Description"
                className="mb-4 w-full rounded border border-gray-600 bg-[#333] p-2"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setAddTask(false)}
                  className="rounded bg-gray-600 px-4 py-2 cursor-pointer hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button className="rounded bg-blue-600 px-4 py-2 cursor-pointer hover:bg-blue-700 transition-colors" onClick={() => {
                  onAddTask(taskValue, taskDescription);
                  setAddTask(false);
                  setTaskValue("");
                  setTaskDescription("");
                }}>
                  Add Task
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AddTask;
