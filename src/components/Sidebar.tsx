type SidebarProps = {
  activeView: string;
  onViewChange: (view: string) => void;
}

const Sidebar = ({activeView, onViewChange}: SidebarProps) => {

  const navClass = (view: string) =>
    `w-full h-[34px] flex items-center gap-2.5 px-2 rounded-md text-[13px] text-left cursor-pointer ${
      activeView === view
        ? "bg-[#005bc7] text-white"
        : "text-[#d0d0d0] hover:bg-[#222]"
    }`;
  return (
    <aside className="relative w-[250px] min-h-screen bg-[#171717] border-r border-[#292929] px-3.5 py-5 flex flex-col">
      {/* LOGO */}
      <div className="flex items-center gap-2 px-2 mb-7">
        <span className="text-blue-500 text-lg">▣</span>

        <span className="text-white text-[15px] font-semibold">
          Task Flow
        </span>
      </div>

      {/* VIEW */}
      <div className="mb-5">
        <p className="text-[#858585] text-[11px] px-2 mb-2">
          Views
        </p>

        <button onClick={() => onViewChange("All Tasks")} className={navClass("All Tasks")}>
          <span>▣</span>
          <span>All tasks</span>
        </button>

        <button onClick={() => onViewChange("Today")} className={navClass("All Today")}>
          <span>▣</span>
          <span>Today</span>
        </button>

        <button onClick={() => onViewChange("Important")} className={navClass("All Important")}>
          <span>☆</span>
          <span>Important</span>
        </button>
      </div>

      {/* PROJECTS */}
      <div>
        <p className="text-[#858585] text-[11px] px-2 mb-2">
          Projects
        </p>

        <button className="w-full h-[34px] flex items-center gap-2.5 px-2 rounded-md text-[#d0d0d0] hover:bg-[#222] text-[13px] text-left">
          <span className="w-2 h-2 rounded-full bg-[#7771ff]"></span>
          <span>Learing React</span>
        </button>

        <button className="w-full h-[34px] flex items-center gap-2.5 px-2 rounded-md text-[#d0d0d0] hover:bg-[#222] text-[13px] text-left">
          <span className="w-2 h-2 rounded-full bg-[#1D9E75]"></span>
          <span>Collage Work</span>
        </button>

        <button className="w-full h-[34px] flex items-center gap-2.5 px-2 rounded-md text-[#d0d0d0] hover:bg-[#222] text-[13px] text-left">
          <span className="w-2 h-2 rounded-full bg-[#D85A30]"></span>
          <span>Personal</span>
        </button>

        <button className="w-full h-[34px] flex items-center gap-2.5 px-2 rounded-md text-[#888] hover:bg-[#222] text-[13px] text-left mt-1">
          <span>+</span>
          <span>New project</span>
        </button>

        {/* Dark mode */}
        <button className="absolute bottom-[5px] mt-auto flex items-center gap-2.5 px-2 py-2 text-[#ddd] text-[13px] hover:text-white">
          <span>◔</span>
          <span>Dark mode</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;