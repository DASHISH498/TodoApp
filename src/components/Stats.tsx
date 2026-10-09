function Stats() {
  return (
    <>
        <div className="grid grid-cols-3 gap-4 mt-6">
            {/* TOTAL */}
            <div className="bg-[#181818] border border-[#292929] rounded-lg p-4">
                <div className="text-sm text-[#777]">
                    Total tasks
                </div>
                <p className="text-2xl font-semibold mt-2">
                    12
                </p>
            </div>

            {/* COMPLETED */}
            <div className="bg-[#181818] border border-[#292929] rounded-lg p-4">
                <div className="text-sm text-[#777]">
                    Completed
                </div>
                <p className="text-2xl font-semibold mt-2">
                    5
                </p>
            </div>

            {/* PENDING */}
            <div className="bg-[#181818] border border-[#292929] rounded-lg p-4">
                <div className="text-sm text-[#777]">
                    Pending
                </div>
                <p className="text-2xl font-semibold mt-2">
                    7
                </p>
            </div>
        </div>
    </>
  )
}

export default Stats