import { X } from "lucide-react";

type HeaderProps = {
  searchText: string;
  onSearchChange: (value: string) => void;
};

function Header({searchText, onSearchChange}: HeaderProps) {

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-semibold">All Tasks</h1>
          <p className="text-sm text-[#777] mt-1">{formattedDate}</p>
        </div>

        {/* SEARCH BAR */}
        <div className="w-[240px]">
          <div className="relative h-9 flex items-center gap-2 px-3 rounded-md border border-[#2c2c2c] bg-[#181818]">
            <input
              type="text"
              placeholder="Search tasks"
              value={searchText}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-white placeholder:text-[#666]"
            />
            {searchText && (
              <button
                onClick={() => onSearchChange("")}
                className="text-[#666] hover:text-white cursor-pointer transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
