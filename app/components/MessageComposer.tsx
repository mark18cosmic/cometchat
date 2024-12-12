"use client"

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
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#6852D6] focus:ring-1 focus:ring-[#6852D6]"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                        <svg width="184" height="24" viewBox="0 0 184 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 12.75V16C11.25 16.2125 11.3219 16.3906 11.4658 16.5343C11.6096 16.6781 11.7878 16.75 12.0003 16.75C12.2129 16.75 12.391 16.6781 12.5345 16.5343C12.6782 16.3906 12.75 16.2125 12.75 16V12.75H16C16.2125 12.75 16.3906 12.6781 16.5343 12.5343C16.6781 12.3904 16.75 12.2122 16.75 11.9998C16.75 11.7871 16.6781 11.609 16.5343 11.4655C16.3906 11.3218 16.2125 11.25 16 11.25H12.75V8C12.75 7.7875 12.6781 7.60942 12.5343 7.46575C12.3904 7.32192 12.2122 7.25 11.9998 7.25C11.7871 7.25 11.609 7.32192 11.4655 7.46575C11.3218 7.60942 11.25 7.7875 11.25 8V11.25H8C7.7875 11.25 7.60942 11.3219 7.46575 11.4658C7.32192 11.6096 7.25 11.7878 7.25 12.0003C7.25 12.2129 7.32192 12.391 7.46575 12.5345C7.60942 12.6782 7.7875 12.75 8 12.75H11.25ZM12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9983 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5Z" fill="currentColor"/>
                            <path d="M51.9995 13.5332C51.2716 13.5332 50.6591 13.2719 50.162 12.7492C49.6648 12.2266 49.4162 11.5935 49.4162 10.85V4.73325C49.4162 4.02042 49.6672 3.41441 50.1692 2.91525C50.6714 2.41625 51.2811 2.16675 51.9985 2.16675C52.7158 2.16675 53.3259 2.41625 53.8287 2.91525C54.3314 3.41441 54.5827 4.02042 54.5827 4.73325V10.85C54.5827 11.5935 54.3341 12.2266 53.837 12.7492C53.3398 13.2719 52.7273 13.5332 51.9995 13.5332Z" fill="currentColor"/>
                        </svg>
                    </button>
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