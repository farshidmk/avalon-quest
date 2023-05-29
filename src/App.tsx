import { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import SelectPlayers from "./pages/SelectPlayers";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (window.matchMedia(`(prefers-color-scheme:dark)`).matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((p) => (p === "dark" ? "light" : "dark"));
  }

  return (
    <div className="bg-slate-100 dark:bg-gray-900 transition-all duration-500">
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <h1 className="text-3xl font-bold underline text-center ">
        choose players
        {/* TODO: create portal header to show each step in header */}
      </h1>
      <SelectPlayers />
    </div>
  );
}

export default App;
