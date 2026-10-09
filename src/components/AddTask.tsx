function AddTask() {
  return (
    <>
      <div className="flex items-center gap-3 mt-4 w-full">
        <div className="flex items-center gap-3">
          {/* ADD TASK INPUT */}
          <input
            type="text"
            placeholder="Add a new task"
            className="h-9 px-3 rounded-md bg-transparent border border-[#2c2c2c] outline-none text-sm text-white placeholder:text-[#666]"
          />
        </div>
        <div className="flex items-center gap-3">
          {/* Priority */}
          <button className="h-8 w-[82px] px-3 flex items-center text-center gap-2 border border-[#303030] rounded-md text-[#aaa] text-xs cursor-pointer hover:bg-[#222]">
            <span>⚑</span>
            <span>Priority</span>
          </button>
          {/* Due Date */}
          <button className="h-8 w-[93px] px-3 flex items-center text-center gap-2 border border-[#303030] rounded-md text-[#aaa] text-xs cursor-pointer hover:bg-[#222]">
            <span>◷</span>
            <span>Due date</span>
          </button>
          {/* Add */}
          <button className="h-8 w-[82px] px-4 rounded-md text-center bg-[#1677ff] hover:bg-[#0868e8] text-white text-xs cursor-pointer font-medium">
            Add task
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTask;
