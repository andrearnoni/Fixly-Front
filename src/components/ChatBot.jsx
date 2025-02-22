import { useEffect, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import Context from "../context/Context";

const ChatBot = () => {
  const { isLoading } = useContext(Context);
  const scriptRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const clearChatStorage = () => {
      localStorage.removeItem("blipSdkUAccount");
      sessionStorage.removeItem("blipSdkUAccount");
    };
    window.addEventListener("beforeunload", clearChatStorage);
    return () => {
      window.removeEventListener("beforeunload", clearChatStorage);
    };
  }, []);

  useEffect(() => {
    if (!scriptRef.current) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/blip-chat-widget@1.11.*";
      script.async = true;
      script.onload = () => {
        try {
          new BlipChat()
            .withAppKey(import.meta.env.VITE_BLIP_APP_KEY)
            .withButton({ color: "#07AFFF" })
            .withCustomCommonUrl(import.meta.env.VITE_BLIP_CUSTOM_URL)
            .build();
        } catch (error) {
          console.error("Erro ao criar a instância do BlipChat:", error);
        }
      };
      document.head.appendChild(script);
      scriptRef.current = script;
    }
  }, []);

  useEffect(() => {
    const widgetContainer = document.getElementById("blip-chat-container");
    if (widgetContainer) {
      widgetContainer.style.display =
        isLoading || location.pathname !== "/" ? "none" : "block";
    }
  }, [isLoading, location.pathname]);

  return null;
};

export default ChatBot;
