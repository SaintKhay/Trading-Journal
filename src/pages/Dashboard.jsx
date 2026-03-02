import Header from "../components/layout/Header";
import DisciplineScore from "../components/layout/DisciplineScore";
import EquityCurve from "../components/layout/EquityCurve";
import RecentTrades from "../components/layout/RecentTrades";
export function Dashboard() {
  return (
    <div>
      <Header />
      <DisciplineScore />
      <EquityCurve />
      <RecentTrades />
    </div>
  );
}
