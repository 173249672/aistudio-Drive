import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TopAppBar, BottomNavBar } from './components/Navigation';
import { FileItem, SuggestedCard } from './components/FileComponents';
import { LoginView } from './components/LoginView';
import { SecurityView } from './components/SecurityView';
import { ALL_FILES, SHARED_FILES, SUGGESTED_FILES } from './types';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showSecurity, setShowSecurity] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isLoggedIn) {
    return <LoginView onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4"
          >
            <section className="mb-8">
              <h2 className="font-headline font-bold text-on-surface mb-4 px-2">建议</h2>
              <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4 -mx-4 px-4">
                {SUGGESTED_FILES.map(file => (
                  <SuggestedCard key={file.id} file={file} />
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-4 px-2">
                <h2 className="font-headline font-bold text-on-surface">文件</h2>
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-surface-container rounded-full p-1">
                  sort_by_alpha
                </span>
              </div>
              <div className="space-y-2">
                {ALL_FILES.map(file => (
                  <FileItem key={file.id} file={file} />
                ))}
              </div>
            </section>
          </motion.div>
        );
      case 'shared':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4"
          >
            <div className="mb-8 flex items-end justify-between px-2">
              <div>
                <h1 className="font-headline text-3xl font-black tracking-tight text-on-surface">共享</h1>
                <p className="text-on-surface-variant text-sm font-medium mt-1">其他人与您共享的文件</p>
              </div>
              <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-[22px]">sort</span>
              </button>
            </div>
            
            <div className="flex gap-2.5 mb-6 overflow-x-auto pb-1 no-scrollbar px-2">
              <button className="px-5 py-1.5 rounded-full bg-primary text-white font-medium text-sm whitespace-nowrap">所有时间</button>
              <button className="px-5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-container-highest transition-colors whitespace-nowrap">人</button>
              <button className="px-5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-container-highest transition-colors whitespace-nowrap">类型</button>
            </div>

            <div className="space-y-3">
              {SHARED_FILES.map(file => (
                <FileItem key={file.id} file={file} />
              ))}
            </div>
          </motion.div>
        );
      case 'starred':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-on-surface-variant">
            <span className="material-symbols-outlined text-6xl mb-4 opacity-20">star</span>
            <p className="font-medium">暂无星标文件</p>
          </div>
        );
      case 'files':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4"
          >
            <div className="flex items-center justify-between mb-6 px-2">
              <h1 className="font-headline text-2xl font-bold text-on-surface">我的文件</h1>
              <button 
                onClick={() => setShowSecurity(true)}
                className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full text-sm font-bold text-primary hover:bg-surface-container-highest transition-colors"
              >
                <span className="material-symbols-outlined text-sm">lock</span>
                安全文件夹
              </button>
            </div>
            <div className="space-y-2">
              {ALL_FILES.map(file => (
                <FileItem key={file.id} file={file} />
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <TopAppBar />
      
      <main className="pt-24 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      <div className="fixed right-6 bottom-24 z-40">
        <button className="w-14 h-14 rounded-2xl bg-surface-container-lowest shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 border border-outline-variant/10">
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="#4285F4" strokeLinecap="round" strokeWidth="3"></path>
            <path d="M5 12H19" stroke="#34A853" strokeLinecap="round" strokeWidth="3"></path>
            <path d="M12 12H19" opacity="0.5" stroke="#EA4335" strokeLinecap="round" strokeWidth="3"></path>
            <path d="M12 12V5" opacity="0.5" stroke="#FBBC05" strokeLinecap="round" strokeWidth="3"></path>
          </svg>
        </button>
      </div>

      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />

      <AnimatePresence>
        {showSecurity && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100]"
          >
            <SecurityView 
              onUnlock={() => {
                setShowSecurity(false);
                setIsUnlocked(true);
                alert('安全文件夹已解锁');
              }} 
              onClose={() => setShowSecurity(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
