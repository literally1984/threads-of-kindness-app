
import { useState } from 'react';
import { Heart, MessageCircle, User, Plus, HelpCircle, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import FeedTab from '../components/FeedTab';
import ChatTab from '../components/ChatTab';
import ProfileTab from '../components/ProfileTab';
import SellTab from '../components/SellTab';
import SupportTab from '../components/SupportTab';

const Index = () => {
  const [activeTab, setActiveTab] = useState('feed');

  const tabs = [
    { id: 'feed', icon: Heart, label: 'Feed', component: FeedTab },
    { id: 'chat', icon: MessageCircle, label: 'Chat', component: ChatTab },
    { id: 'sell', icon: Plus, label: 'Sell', component: SellTab },
    { id: 'profile', icon: User, label: 'Profile', component: ProfileTab },
    { id: 'support', icon: HelpCircle, label: 'Support', component: SupportTab },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || FeedTab;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 rounded-b-2xl">
        <h1 className="text-2xl font-bold text-green-800 text-center">ThriftShare</h1>
        <p className="text-sm text-green-600 text-center mt-1">Share clothes, spread love</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <ActiveComponent />
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-green-100 px-2 py-3 rounded-t-2xl shadow-lg">
        <div className="flex justify-around items-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-green-100 text-green-700 scale-105' 
                    : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Icon size={20} className={isActive ? 'stroke-2' : 'stroke-1.5'} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Index;
