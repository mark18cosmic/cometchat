"use client"
import { useEffect, useState } from 'react';

interface Message {
  id: number;
  sender: string;
  message: string;
  time: string;
  status: string | null;
  image: string;
}

const ChatMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('https://mp9e61566c49826354c1.free.beeceptor.com/chats');
        const data = await response.json();
        setMessages(data.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <div className="flex justify-center p-4">Loading messages...</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-4 h-screen w-full">
      {messages.map((message) => (
        <div 
          key={message.id}
          className={`flex gap-3 ${
            message.sender === "George Alan" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <img 
            src={message.image} 
            alt={message.sender}
            className="w-10 h-10 rounded-full"
          />
          <div className={`max-w-[70%] ${
            message.sender === "George Alan" 
              ? "bg-blue-500 text-white" 
              : "bg-gray-100"
          } rounded-lg p-3`}>
            <p className="text-sm">{message.message}</p>
            <span className="text-xs text-gray-500">{message.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;