import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! 👋 I am Ali Ahmed. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const botResponses: Record<string, string> = {
    hello: "Hi there! I'm glad to meet you. How can I assist you?",
    project: 'I have experience with React, Laravel, and modern web technologies. What kind of project do you have in mind?',
    contact: 'You can reach me at aliahmedhome09876@gmail.com or call 03302824498.',
    skills: 'My main skills include: React, JavaScript, PHP, Laravel, MySQL, Tailwind CSS, and video editing.',
    hire: "I'd love to discuss working together! Please send me an email or fill out the contact form.",
    price: 'Project pricing varies based on scope and complexity. Let\'s discuss your requirements!',
    video: 'Yes, I also do professional video editing. What kind of project are you working on?',
    default: "That's interesting! Tell me more about what you'd like to know.",
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        sender: 'user',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])

      // Simulate bot response
      setTimeout(() => {
        const lowerInput = inputValue.toLowerCase()
        let botResponse = botResponses.default

        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
          botResponse = botResponses.hello
        } else if (lowerInput.includes('project')) {
          botResponse = botResponses.project
        } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
          botResponse = botResponses.contact
        } else if (lowerInput.includes('skill')) {
          botResponse = botResponses.skills
        } else if (lowerInput.includes('hire') || lowerInput.includes('work')) {
          botResponse = botResponses.hire
        } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
          botResponse = botResponses.price
        } else if (lowerInput.includes('video')) {
          botResponse = botResponses.video
        }

        const botMsg: Message = {
          id: Date.now().toString(),
          text: botResponse,
          sender: 'bot',
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMsg])
      }, 500)

      setInputValue('')
    }
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple text-white shadow-2xl flex items-center justify-center neon-glow-pink hover:shadow-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open chat"
          >
            <FiMessageCircle className="w-8 h-8" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-8 right-8 z-50 w-96 h-[600px] glass-effect rounded-2xl flex flex-col shadow-2xl overflow-hidden border border-opacity-20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-pink to-neon-purple p-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold">Chat with Ali</h3>
                <p className="text-xs text-white opacity-80">Always happy to help!</p>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
              >
                <FiX className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-bg bg-opacity-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-neon-pink to-neon-purple text-white rounded-br-none'
                        : 'glass-effect text-gray-300 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700 border-opacity-20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-dark-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-neon-pink text-white placeholder-gray-500 text-sm transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-gradient-to-r from-neon-pink to-neon-purple text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <FiSend className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
