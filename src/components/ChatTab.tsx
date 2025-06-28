
import { useState } from 'react';
import { Search, MessageCircle, Clock } from 'lucide-react';

const ChatTab = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock chat data
  const mockChats = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastMessage: 'Is the vintage jacket still available?',
      time: '2m ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      unread: true,
      item: 'Vintage Denim Jacket'
    },
    {
      id: 2,
      name: 'Mike Chen',
      lastMessage: 'Thank you for the sweater! It fits perfectly.',
      time: '1h ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      unread: false,
      item: 'Cozy Sweater'
    },
    {
      id: 3,
      name: 'Emma Davis',
      lastMessage: 'When can I pick up the dress?',
      time: '3h ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      unread: true,
      item: 'Summer Dress'
    },
    {
      id: 4,
      name: 'Alex Rivera',
      lastMessage: 'Great! See you tomorrow at 3 PM.',
      time: '1d ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      unread: false,
      item: 'Designer Jeans'
    }
  ];

  const filteredChats = mockChats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col p-4">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Messages</h2>
        
        {/* Search Bar */}
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.unread && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`text-sm font-medium truncate ${chat.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                      {chat.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-500">{chat.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-green-600 mb-1 font-medium">
                    About: {chat.item}
                  </p>
                  
                  <p className={`text-sm truncate ${chat.unread ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <MessageCircle size={48} className="text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">No conversations found</h3>
            <p className="text-sm text-gray-400">
              {searchTerm ? 'Try adjusting your search terms' : 'Start chatting about items you\'re interested in!'}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Info */}
      <div className="mt-4 p-3 bg-blue-50 rounded-xl">
        <p className="text-xs text-blue-700 text-center">
          💬 Chat directly with item owners to ask questions and arrange pickups
        </p>
      </div>
    </div>
  );
};

export default ChatTab;
