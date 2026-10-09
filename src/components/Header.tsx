function Header() {
  return (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-semibold">All Tasks</h1>
          <p className="text-sm text-[#777] mt-1">Tuesday, 6 October</p>
        </div>

        {/* SEARCH BAR */}
        <div className="w-[240px]">
          <div className="h-9 flex items-center gap-2 px-3 rounded-md border border-[#2c2c2c] bg-[#181818]">
            <input
              type="text"
              placeholder="Search tasks"
              className="w-full bg-transparent outline-none text-sm text-white placeholder:text-[#666]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
