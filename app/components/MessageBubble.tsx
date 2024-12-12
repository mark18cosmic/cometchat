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

    // ... existing interface and component setup ...

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('https://mp9e61566c49826354c1.free.beeceptor.com/chats');
                const text = await response.text(); // Get raw response text first
                console.log('Raw response:', text); // Log the raw response

                try {
                    const data = JSON.parse(text);
                    setMessages(data.data);
                } catch (parseError) {
                    console.error('JSON parsing error:', parseError);
                    console.error('Received content:', text);
                }
            } catch (error) {
                console.error('Network error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    // ... rest of the component ...

    if (loading) {
        return <div className="flex justify-center p-4">Loading messages...</div>;
    }

    return (
        <div className="flex flex-col gap-4 p-4 h-screen w-full">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === "George Alan" ? "flex-row-reverse" : "flex-row"
                        }`}
                >
                    <img
                        src={message.image}
                        alt={message.sender}
                        className="w-10 h-10 rounded-full"
                    />
                    <div className={`max-w-[70%] ${message.sender === "George Alan"
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