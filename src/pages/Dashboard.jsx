import { useState } from "react";
import SideBar from "../components/SideBar";
import Graphs from "../components/Graphs";

function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex h-screen overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <SideBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="flex-1">
        <Graphs isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default Dashboard;
