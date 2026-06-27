import Image from "next/image";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Featured from "./Components/Featured";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans overflow-hidden">
      <Banner />
      <Featured />
    </main>
  );
}