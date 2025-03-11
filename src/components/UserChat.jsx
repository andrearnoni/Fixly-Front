import { useState } from "react";
import { Send, X } from "lucide-react";

function UserChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed bottom-4 left-4 w-80 bg-white shadow-lg rounded-2xl p-4 flex flex-col border border-gray-300 z-[99999]">
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
            <h2 className="text-lg font-semibold">Chat</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <div className="h-64 overflow-y-auto overflow-x-hidden break-words space-y-2 p-2 border-b border-gray-300">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[75%] text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center p-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Digite uma mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserChat;
