type Task = {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;
  completed: boolean;
};

function Stats({ tasks }: { tasks: Task[] }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* TOTAL */}
        <div className="bg-[#181818] border border-[#292929] rounded-lg p-4">
          <div className="text-sm text-[#777]">Total tasks</div>
          <p className="text-2xl font-semibold mt-2">{totalTasks}</p>
        </div>

        {/* COMPLETED */}
        <div className="bg-[#181818] border border-[#292929] rounded-lg p-4">
          <div className="text-sm text-[#777]">Completed</div>
          <p className="text-2xl font-semibold mt-2">{completedTasks}</p>
        </div>

        {/* PENDING */}
        <div className="bg-[#181818] border border-[#292929] rounded-lg p-4">
          <div className="text-sm text-[#777]">Pending</div>
          <p className="text-2xl font-semibold mt-2">{pendingTasks}</p>
        </div>
      </div>
    </>
  );
}

export default Stats;
