import React, { useState, useEffect } from 'react';
import './my-function-component.css';

interface MyFunctionComponentProps {
  value: string;
}

export const MyFunctionComponent: React.FC<MyFunctionComponentProps> = ({ value }) => {
  const [messages, setMessages] = useState<{ id: number; text: string }[]>([]);

  const handleDeleteMessageItem = (id: number) => {
    setMessages(prevMessages =>
      prevMessages.filter(message => message.id !== id)
    );
  }

  useEffect(() => {
    if (value.trim()) {
      const newMessage = {
        id: Date.now(),
        text: value
      };

      setMessages(prevMessages => [...prevMessages, newMessage]);
    }
  }, [value]);

  return (
    <div className="message-history">
      <h3>Message History:</h3>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message, index) => (
            <li key={message.id} className="message-item">
              {index+1}. {message.text}
              <button  onClick={() => handleDeleteMessageItem(message.id)} className='message-item-button'>🗑️</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no messages</p>
      )}
    </div>
  );
};