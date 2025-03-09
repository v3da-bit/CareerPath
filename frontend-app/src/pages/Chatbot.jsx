import React, { useState } from "react";
import leftArrowIcon from '../../public/icons/left-arrow-svgrepo-com.svg';
import { useNavigate } from "react-router-dom";
const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState({});
  const [isChatActive, setIsChatActive] = useState(false);
  let navigate = useNavigate();

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const newChat = () => {
    setIsChatActive(false);
    setChatHistory({});
    setUserInput("")
  }
  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    setIsChatActive(true);

    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAgax3muJNs8a54vgW8lFz-gq9GlV0lE9A";
    const requestBody = {
      contents: [
        {
          parts: [{ text: userInput }],
        },
      ],
    };

    let uniqueId = crypto.randomUUID();
    try {
      let defaultResponseObject = {
        question: userInput,
        answer: `<div class="loading-text">Please wait, We are generating your response<span class="dots"></span></div>
<style>
  .loading-text {
    font-size: 18px;
    font-weight: normal;
    color: #333;
  }

  .dots::after {
    content: "...";
    animation: dots-animation 1.5s infinite;
  }

  @keyframes dots-animation {
    0% { content: "."; }
    33% { content: ".."; }
    66% { content: "..."; }
  }
</style>
  `
      }
      setChatHistory((prev) => ({ ...prev, [uniqueId]: defaultResponseObject }));
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      console.log("Full API Response:", data);

      const formattedResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text
        .replace(/\*/g, "<b>") // Bold for *
        .replace(/\n/g, "<br>") || "Sorry, I couldn't process that request.";

      let newResponseObject = {
        question: userInput,
        answer: formattedResponse
      }

      setChatHistory((prev) => ({ ...prev, [uniqueId]: newResponseObject }));
      // setChatHistory((prev) => [...prev, { question: userInput, answer: formattedResponse }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      let newResponseObject = {
        question: userInput,
        answer: "Something went wrong. Please try again later."
      }

      setChatHistory((prev) => ({ ...prev, [uniqueId]: newResponseObject }));
      // setChatHistory((prev) => [...prev, { question: userInput, answer: "Something went wrong. Please try again later." }]);
    }

    setUserInput("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50" style={{ background: "linear-gradient(90deg, rgba(0,21,52,1) 0%, #012246 50%, rgba(0,29,61,1) 100%)" }}>
      <div className="absolute top-4 left-4 flex items-center">
        <a href="/home">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex flex-row items-center gap-2 py-2 px-4 rounded">
            <img src={leftArrowIcon} alt="" className=" h-4 w-4" /><span> Back</span>
          </button>
        </a>
        <h1 className="logo">Career Path</h1>
      </div>

      <div className="absolute top-4 right-4">
        <button onClick={() => navigate('/profile')} className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <i className="fas fa-user text-blue-900"></i>
        </button>
      </div>

      {!isChatActive && (
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-semibold text-white">Welcome, Future Achiever!</h1>
          <p className="mt-2 text-gray-300 text-lg">How can I guide you on your career journey today?</p>
          <p className="mt-1 text-gray-300">Whether it's finding the right path, learning new skills, or career advice, I'm here to help you succeed!</p>
        </div>
      )}

      {isChatActive && (
        <div className="mt-6 mb-20 w-full max-w-3xl p-4 bg-white shadow-md rounded-lg overflow-auto">
          <h2 className="text-xl font-semibold text-blue-900">Chatbot Conversation</h2>
          {Object.values(chatHistory).map((chat, index) => (
            <div key={index} className="mt-4 p-3 border-b border-gray-300">
              <p className="text-gray-800 font-bold">You: {chat.question}</p>
              <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: chat.answer }}></p>
            </div>
          ))}
        </div>
      )}

      <div className="fixed bottom-8 w-full px-4 max-w-4xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask about career options, skills, or trends..."
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-800 text-black"
            value={userInput}
            onChange={handleInputChange}
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-32 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white rounded-full hover:bg-blue-800 transition bg-blue-900"
          >
            Send
          </button>
          
        </div>
        <button
          onClick={newChat}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white rounded-full hover:bg-blue-800 transition bg-blue-900"
        >
          New Chat
        </button>
        
      </div>
    </div>
  );
};

export default Chatbot;