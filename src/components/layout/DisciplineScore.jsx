function DisciplineScore() {
  const dataARR = [
    {
      text: "Total Trades",
      value: 156,
    },
    {
      text: "Win Rate",
      value: "56%",
    },
    {
      text: "Current Streak",
      value: "5W",
    },
    {
      text: "Best Pair",
      value: "EUR/USD",
    },
  ];
  return (
    <>
      <div className="p-[24px] bg-[#1E293B] border border-[#1E293B] rounded-lg text-left my-[16px] w-[100%]">
        <h1 className="text-[14px] text-[#94A3B8] ">Discipline Score</h1>
        <h1 className="text-[3rem] font-bold">78%</h1>
        <p className="text-[12px] text-[#22C55E]">+5% from last week</p>
      </div>

      <div className="grid grid-cols-2 gap-[12px] mt-[16px]">
        {dataARR.map((item, index) => (
          <div
            key={index}
            className="bg-[#1E293B] p-[16px] rounded-lg text-left"
          >
            <p className="text-[12px] text-[#94A3B8]">{item.text}</p>
            <p className="text-[24px] font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DisciplineScore;
