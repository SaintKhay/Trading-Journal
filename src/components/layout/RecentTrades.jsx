function RecentTrades() {
  const dataArray = [
    {
      pair: "BTC/USD",
      amount: "+$200",
      date: "Feb 20",
    },
    {
      pair: "EUR/USD",
      amount: "+$50",
      date: "Feb 22",
    },
    {
      pair: "GBP/USD",
      amount: "+$100",
      date: "Feb 27",
    },
    {
      pair: "EUR/USD",
      amount: "+$125",
      date: "Mar 3",
    },
  ];
  return (
    <div className="bg-[#1E293B] rounded-lg p-[16px] mt-[16px] w-[100%] h-auto ">
      <h2 className="text-left">Recent Trades</h2>
      <ul className="flex flex-col items-start gap-[8px] justify-start">
        {dataArray.map((trade, index) => (
          <li
            key={index}
            className="flex  items-center justify-between bg-[#0F172A] rounded-lg p-[12px] w-[100%] mt-[8px]"
          >
            <span className="flex flex-col items-start ">
              <p>{trade.pair}</p>
              <p className="text-[#22C55E] text-[12px] mb-[4px]">
                {trade.amount}
              </p>
            </span>
            <p className="text-[#94A3B8] text-[12px]">{trade.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTrades;
