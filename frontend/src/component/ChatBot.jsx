import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Get API key from environment variable
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Validate API key
if (!API_KEY) {
  console.error("API key is missing. Please check your .env file.");
}

// Company and Agent Configuration
const COMPANY_CONFIG = {
  name: "TalentMerge AI",
  logo: "💼",
  welcomeMessage: "👋 Hi! I'm your TalentMerge AI assistant. How can I help you today?",
  primaryColor: "#0084ff",
  secondaryColor: "#f0f2f5",
  agentContext: {
    role: "AI Recruitment Assistant",
    companyInfo: {
      name: "TalentMerge",
      industry: "Recruitment and HR Technology",
      services: [
        "Talent Acquisition",
        "HR Consulting",
        "Recruitment Process Outsourcing",
        "HR Technology Solutions"
      ],
      keyPersonnel: {
        ceo: "Raj Timsina",
        hrDirector: "Sunita Khadka",
        techLead: "Nikesh Adhikari"
      }
    },
    capabilities: [
      "Answer questions about recruitment processes",
      "Provide information about job openings",
      "Explain company policies and procedures",
      "Assist with HR-related queries",
      "Guide candidates through the application process"
    ],
    limitations: [
      "Cannot make hiring decisions",
      "Cannot access personal employee data",
      "Cannot process payments or sensitive information"
    ],
    tone: "Professional, friendly, and helpful",
    responseStyle: "Clear, concise, and informative"
  }
};

// Initial context message
const INITIAL_CONTEXT = `You are an AI assistant for TalentMerge, a platform that provides talents to hiring companies, also is used by skilled resources to find jobs, and finally used by rookies to learn and grow new talents.

The platform was developed by:
- Backend Developer: Nikesh Adhikari
- Frontend Developer: Rojan Chandra Poudel
- Finance Manager: Sunita Khadka
- AI/ML Developer: Raj Timsina

Your role is to assist users with recruitment-related queries and provide information about the company's services.`;

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: COMPANY_CONFIG.welcomeMessage }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (!API_KEY) {
      setError("API key is missing. Please check your .env file.");
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm sorry, but there's a configuration issue. Please contact support." 
      }]);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setError(null);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Build the prompt
      let prompt = INITIAL_CONTEXT;

      if (chatHistory.length > 0) {
        prompt += "\n\nPrevious conversation:\n" + 
          chatHistory.map(msg =>
            `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
          ).join("\n");
      }

      prompt += `\n\nUser: ${userMessage}\nAssistant:`;

      const result = await model.generateContent({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      });

      const response = await result.response;
      const aiMessage = response.text();

      setMessages(prev => [...prev, { role: 'assistant', content: aiMessage }]);
      setChatHistory(prev => [...prev, 
        { role: 'user', content: userMessage },
        { role: 'assistant', content: aiMessage }
      ]);
    } catch (error) {
      console.error('Error:', error);
      let errorMessage = "I apologize, but I encountered an error. Please try again or contact our support team for assistance.";
      
      if (error.message.includes("API key")) {
        errorMessage = "There's an issue with the API configuration. Please check your API key.";
      } else if (error.message.includes("model")) {
        errorMessage = "There's an issue with the AI model. Please try again later.";
      }
      
      setError(error.message);
      setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([{ role: 'assistant', content: COMPANY_CONFIG.welcomeMessage }]);
    setChatHistory([]);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          className="bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-200"
          onClick={toggleChat}
        >
          {COMPANY_CONFIG.logo} Chat with {COMPANY_CONFIG.name}
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col z-50">
      <div className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-violet-700 to-purple-600 text-white">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{COMPANY_CONFIG.logo}</span>
          <h1 className="text-xl font-semibold">{COMPANY_CONFIG.name}</h1>
        </div>
        <div className="flex gap-2">
          <button 
            className="px-3 py-1 text-sm text-white hover:bg-violet-800 rounded transition-colors"
            onClick={handleClearChat}
          >
            Clear
          </button>
          <button 
            className="px-3 py-1 text-sm text-white hover:bg-violet-800 rounded transition-colors"
            onClick={toggleChat}
          >
            −
          </button>
        </div>
      </div>
      {error && (
        <div className="bg-red-100 text-red-600 p-2 text-sm">
          {error}
        </div>
      )}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-lg p-3 ${
              message.role === 'user' 
                ? 'bg-violet-700 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-1 justify-start">
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form className="p-4 border-t" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-violet-700 text-white rounded-lg hover:bg-violet-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
