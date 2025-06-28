
import { useState } from 'react';
import { Heart, MessageCircle, User, Plus, HelpCircle, Settings } from 'lucide-react';
import FeedTab from '../components/FeedTab';
import ChatTab from '../components/ChatTab';
import ProfileTab from '../components/ProfileTab';
import SellTab from '../components/SellTab';
import SupportTab from '../components/SupportTab';
import SettingsTab from '../components/SettingsTab';

const Index = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [fontSize, setFontSize] = useState('sm');

  const tabs = [
    { id: 'feed', icon: Heart, label: 'Feed', component: FeedTab },
    { id: 'chat', icon: MessageCircle, label: 'Chat', component: ChatTab },
    { id: 'sell', icon: Plus, label: 'Sell', component: SellTab },
    { id: 'profile', icon: User, label: 'Profile', component: ProfileTab },
    { id: 'support', icon: HelpCircle, label: 'Support', component: SupportTab },
    { id: 'settings', icon: Settings, label: 'Settings', component: SettingsTab },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || FeedTab;

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 rounded-b-2xl">
        <h1 className="text-2xl font-bold text-green-800 text-center">ThriftShare</h1>
        <p className="text-sm text-green-600 text-center mt-1">Share clothes, spread love</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {activeTab === 'settings' ? (
          <SettingsTab fontSize={fontSize} onFontSizeChange={setFontSize} />
        ) : (
          <ActiveComponent fontSize={fontSize} />
        )}
      </main>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 px-2 py-3 rounded-t-2xl shadow-lg max-w-md mx-auto">
        <div className="flex justify-around items-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-green-100 text-green-700 scale-105' 
                    : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Icon size={18} className={isActive ? 'stroke-2' : 'stroke-1.5'} />
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
