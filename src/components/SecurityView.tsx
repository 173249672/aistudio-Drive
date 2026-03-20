import React, { useState } from 'react';
import { motion } from 'motion/react';

export const SecurityView: React.FC<{ onUnlock: () => void; onClose: () => void }> = ({ onUnlock, onClose }) => {
  const [pin, setPin] = useState<string>('');
  
  const handleKeyClick = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin === '1234') {
        setTimeout(onUnlock, 300);
      }
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-between">
      <header className="w-full flex items-center px-6 pt-6 pb-2">
        <button 
          onClick={onClose}
          className="p-2 -ml-2 rounded-full hover:bg-surface-container-high transition-colors active:scale-95 duration-150"
        >
          <span className="material-symbols-outlined text-on-surface">close</span>
        </button>
        <h1 className="ml-4 font-headline text-xl font-bold tracking-tight text-on-surface">安全文件夹</h1>
      </header>

      <main className="flex-grow w-full max-w-md flex flex-col items-center justify-center px-8 text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150"></div>
          <div className="relative w-24 h-24 bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-lg shadow-on-surface/5 border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              lock
            </span>
          </div>
        </div>

        <h2 className="text-on-surface font-headline text-2xl font-extrabold mb-3">请输入 PIN 码</h2>
        <p className="text-on-surface-variant font-body text-base leading-relaxed mb-10 max-w-[240px]">
          请输入 PIN 码以访问安全文件夹
        </p>

        <div className="flex space-x-6 mb-12">
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                i < pin.length ? 'bg-primary scale-125' : 'bg-surface-container-highest'
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-y-4 gap-x-8 w-full max-w-[280px]">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
            <button 
              key={num}
              onClick={() => handleKeyClick(num)}
              className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-2xl font-bold text-on-surface hover:bg-surface-container-high active:scale-90 transition-all duration-150"
            >
              {num}
            </button>
          ))}
          <button className="w-16 h-16 flex items-center justify-center text-sm font-bold text-primary hover:text-primary-container active:scale-95 transition-all">
            忘记 PIN
          </button>
          <button 
            onClick={() => handleKeyClick('0')}
            className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-2xl font-bold text-on-surface hover:bg-surface-container-high active:scale-90 transition-all duration-150"
          >
            0
          </button>
          <button 
            onClick={handleBackspace}
            className="w-16 h-16 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high active:scale-90 transition-all duration-150"
          >
            <span className="material-symbols-outlined text-2xl">backspace</span>
          </button>
        </div>
      </main>

      <footer className="w-full pb-10 flex flex-col items-center space-y-4">
        <button 
          onClick={() => pin.length === 4 && onUnlock()}
          className="px-8 py-3 bg-primary text-white rounded-full font-bold text-sm shadow-md shadow-primary/20 hover:shadow-lg active:scale-95 transition-all"
        >
          确认
        </button>
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold opacity-50">
          End-to-End Encrypted
        </p>
      </footer>
    </div>
  );
};
