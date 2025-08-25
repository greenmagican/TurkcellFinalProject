'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocale, useTranslations } from 'next-intl';
import { generateChatGptResponse } from '@/app/services/openaiService';

interface ChatbotModalProps {
  onClose: () => void;
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatbotModal: React.FC<ChatbotModalProps> = ({ onClose }) => {
  const { theme } = useTheme();
  const locale = useLocale();
  const t = useTranslations('Chatbot');
  const [messages, setMessages] = useState<Message[]>([
    { text: t('welcome'), sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample crypto information responses
  const cryptoResponses: Record<string, string> = {
    bitcoin: t('responses.bitcoin'),
    ethereum: t('responses.ethereum'),
    blockchain: t('responses.blockchain'),
    wallet: t('responses.wallet'),
    mining: t('responses.mining'),
    nft: t('responses.nft'),
    defi: t('responses.defi'),
    altcoin: t('responses.altcoin'),
    exchange: t('responses.exchange'),
    token: t('responses.token'),
  };

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, sender: 'user' as const };
    setMessages((prev) => [...prev, userMessage]);
    
    // Show typing indicator
    setMessages((prev) => [...prev, { text: t('typing'), sender: 'bot' }]);
    
    try {
      // Get response from ChatGPT
      const response = await generateChatGptResponse(input);
      
      let finalResponse = response;
      
      // Handle special response codes
      if (response === "QUOTA_EXCEEDED") {
        finalResponse = t('quotaExceeded');
        // Fall back to local response
        finalResponse += " " + generateLocalResponse(input.toLowerCase());
      } else if (response === "API_KEY_MISSING") {
        finalResponse = t('apiKeyMissing');
        // Fall back to local response
        finalResponse += " " + generateLocalResponse(input.toLowerCase());
      }
      
      // Replace typing indicator with actual response
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { text: finalResponse, sender: 'bot' };
        return newMessages;
      });
    } catch (error) {
      // If there's an error, fall back to local responses
      const fallbackResponse = generateLocalResponse(input.toLowerCase());
      
      // Replace typing indicator with fallback response
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { text: fallbackResponse, sender: 'bot' };
        return newMessages;
      });
    }

    setInput('');
  };

  // Fallback function for when API calls fail or API key is not available
  const generateLocalResponse = (query: string): string => {
    // Check if the query contains any crypto keywords we have responses for
    for (const [keyword, response] of Object.entries(cryptoResponses)) {
      if (query.includes(keyword)) {
        return response;
      }
    }

    // For non-crypto topics, use a more general response
    if (query.includes('general') || 
        query.includes('topic') || 
        query.includes('anything') || 
        query.includes('everything') ||
        query.includes('graphic') ||
        query.includes('science') ||
        query.includes('history') ||
        query.includes('technology')) {
      return t('generalTopics');
    }

    // Default responses if no keyword matches
    const defaultResponses = [
      t('defaultResponses.one'),
      t('defaultResponses.two'),
      t('defaultResponses.three'),
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ zIndex: 1050, backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div 
        className={`card ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light'}`} 
        style={{ width: '90%', maxWidth: '500px', maxHeight: '80vh', borderRadius: '12px' }}
      >
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">{t('title')}</h5>
          <button 
            type="button" 
            className="btn-close" 
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
        <div className="card-body overflow-auto" style={{ maxHeight: 'calc(80vh - 130px)' }}>
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`d-flex ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'} mb-3`}
            >
              <div 
                className={`p-3 rounded-3 ${message.sender === 'user' 
                  ? theme === 'dark' ? 'bg-primary text-white' : 'bg-primary text-white' 
                  : theme === 'dark' ? 'bg-secondary text-white' : 'bg-light border'}`}
                style={{ maxWidth: '75%' }}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="card-footer">
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              type="text"
              className={`form-control me-2 ${theme === 'dark' ? 'bg-dark text-light' : ''}`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('inputPlaceholder')}
              aria-label="Ask me anything"
            />
            <button type="submit" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;