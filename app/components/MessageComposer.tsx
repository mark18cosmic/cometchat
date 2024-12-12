"use client"

import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react'

const MessageComposer = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // You can add any initialization logic here
        // For example, focusing the input when component mounts
        const inputElement = document.querySelector('input[type="text"]');
        if (inputElement instanceof HTMLInputElement) {
            inputElement.focus();
        }
    }, []);

    const handleSendMessage = () => {
        if (message.trim()) {
            // Here you would typically send the message
            console.log('Sending message:', message);
            setMessage(''); // Clear input after sending
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    }

    return (
        <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-4 py-3">
            <div className="max-w-[64rem] flex items-center gap-2">
                <button className="p-2 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                    </svg>
                </button>

                <div className="flex-1">
                    <Input
                        type="text"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full py-6 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#6852D6] focus:ring-1 focus:ring-[#6852D6]"
                    />
                </div>
            

                <button 
                    className="p-3 bg-[#E8E8E8] rounded-full hover:bg-[#6852D6] text-gray-500 hover:text-gray-200"
                    onClick={handleSendMessage}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MessageComposer