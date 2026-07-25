import Banner from "./Components/Banner";
import Featured from "./Components/Featured";
import QurbaniTips from "./Components/QurbaniTips";
import TopBreeds from "./Components/TopBreeds";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#0a1f1a] text-zinc-900 dark:text-white transition-colors duration-300 overflow-hidden">
      <Banner />
      <Featured />
      <TopBreeds />
      <QurbaniTips />
    </main>
  );
}