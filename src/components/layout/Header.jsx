import { IoPersonOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="flex justify-between items-center py-[16px] border-b border-[#1E293B]">
      <h1 className="text-base font-semibold">TradingJournal</h1>
      <IoPersonOutline className="p-[4px] size-8 border border-[#1E293B] rounded-full hover:border-[#3B82F6]" />
    </header>
  );
}
export default Header;
