function TaskFilterTabs() {
  return (
    <>
        <div className="mt-4">
            <ul className="flex items-center gap-3">
                <li className="border border-[#fff] rounded-full w-fit px-3 bg-[#fff] text-[#000] text-sm py-1 cursor-pointer">All</li>
                <li className="border border-[#262626] rounded-full w-fit px-3 text-[#666] text-sm py-1 cursor-pointer">Active</li>
                <li className="border border-[#262626] rounded-full w-fit px-3 text-[#666] text-sm py-1 cursor-pointer">Completed</li>
            </ul>
        </div>
    </>
  )
}

export default TaskFilterTabs