import React from 'react';
import { motion } from 'motion/react';

interface TopAppBarProps {
  onMenuClick?: () => void;
  userAvatar?: string;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({ onMenuClick, userAvatar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 w-full h-12 bg-surface-container-high rounded-full shadow-sm border border-outline-variant/10">
        <div className="flex items-center gap-3 flex-1">
          <button 
            onClick={onMenuClick}
            className="p-2 text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 duration-150"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex-1 text-on-surface-variant font-medium text-sm sm:text-base">
            在云端硬盘中搜索
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/20 bg-primary-fixed flex items-center justify-center">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src={userAvatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuCOytKgfYQ-pcGwv0yFH6mmCIj1sDGPF6q54Jwjkaz40eqSRN105xoQvsNC1mnXqp9BKu3yzDWxpqKikLbDCtMyLUC9O3xAeDY4X09V6N6_Z4eNgawjaTgBRk4V0mMX4X4lFTk92WSLwBrWpiPk5SB1rMswEqpnvUAWcWT-oqEj7C1EkA77ADEhBlumG0pT67DMCzpevr5hcsgPEC8XNR4ZPJ_diSMrAFvyoq9CxIu-6ER2DeHZvWC1v76-yvYUFT_AQC0HvlvOfxE"} 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

interface BottomNavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: '首页', icon: 'home' },
    { id: 'starred', label: '星标', icon: 'star' },
    { id: 'shared', label: '共享', icon: 'group' },
    { id: 'files', label: '文件', icon: 'folder' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-8 pt-3 bg-white/95 backdrop-blur-lg border-t border-outline-variant/10">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center py-1 transition-all duration-300 ease-in-out group ${
              isActive ? 'text-primary' : 'text-on-surface-variant'
            }`}
          >
            <div className={`flex flex-col items-center justify-center px-6 py-1 rounded-full transition-colors ${
              isActive ? 'bg-primary-fixed/30' : 'group-hover:bg-surface-container-high'
            }`}>
              <span 
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: `'FILL' ${isActive ? 1 : 0}` }}
              >
                {tab.icon}
              </span>
              <span className="text-[11px] font-bold tracking-tight mt-1">{tab.label}</span>
            </div>
          </button>
        );
      })}
    </nav>
  );
};
