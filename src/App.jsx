import { Navbar } from "@/components/intel/Navbar";
import { Hero } from "@/components/intel/Hero";
import "./App.css";

export default function App() {
  return (
    <div className="app-container h-screen w-screen overflow-hidden bg-black">
      <Navbar />
      <main className="h-full w-full overflow-hidden">
        <Hero />
      </main>
    </div>
  );
}
