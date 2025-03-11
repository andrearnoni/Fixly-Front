import { useContext, useState } from "react";
import Context from "../context/Context";
import UserSideBar from "../components/UserSideBar";
import TrendingServices from "../components/TrendingServices";
import SearchAService from "../components/SearchAService";
import UserChat from "../components/UserChat";

function HomeUser() {
  const { isLoading, isChatOpen, toggleChat } = useContext(Context);
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
      <UserSideBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        <main className="flex-grow px-4">
          <TrendingServices />
          <SearchAService />
        </main>
      </div>
      <button
        onClick={toggleChat}
        className="fixed bottom-4 left-4 md:left-24 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition z-50"
      >
        {isChatOpen ? "Fechar Chat" : "Abrir Chat"}
      </button>
      {isChatOpen && <UserChat />}
    </div>
  );
}

export default HomeUser;
