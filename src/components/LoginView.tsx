import React, { useState } from 'react';
import { motion } from 'motion/react';

export const LoginView: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [tab, setTab] = useState<'account' | 'sms'>('account');

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <div className="flex items-center p-4 justify-between">
        <button className="text-on-surface flex size-12 items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="text-on-surface text-lg font-bold flex-1 text-center pr-12">登录网盘</h2>
      </div>

      <div className="px-6 py-8 flex flex-col items-center max-w-md mx-auto w-full">
        <div className="mb-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-sm mb-4 border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              cloud
            </span>
          </div>
          <h1 className="text-on-surface text-2xl font-bold tracking-tight">欢迎回来</h1>
          <p className="text-on-surface-variant text-sm mt-1">管理您的所有数字资产</p>
        </div>

        <div className="w-full">
          <div className="flex border-b border-outline-variant mb-6">
            <button 
              onClick={() => setTab('account')}
              className={`flex-1 flex flex-col items-center justify-center border-b-[3px] pb-3 transition-all ${
                tab === 'account' ? 'border-primary text-on-surface font-bold' : 'border-transparent text-on-surface-variant'
              }`}
            >
              <span className="text-sm">账号登录</span>
            </button>
            <button 
              onClick={() => setTab('sms')}
              className={`flex-1 flex flex-col items-center justify-center border-b-[3px] pb-3 transition-all ${
                tab === 'sms' ? 'border-primary text-on-surface font-bold' : 'border-transparent text-on-surface-variant'
              }`}
            >
              <span className="text-sm">短信登录</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-on-surface text-sm font-medium mb-1.5 ml-1">
                {tab === 'account' ? '手机号/邮箱' : '手机号'}
              </label>
              <input 
                className="w-full bg-surface-container-high border-none rounded-xl h-14 px-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all" 
                placeholder={tab === 'account' ? "请输入手机号或邮箱" : "请输入手机号"} 
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-on-surface text-sm font-medium mb-1.5 ml-1">
                {tab === 'account' ? '密码' : '验证码'}
              </label>
              <div className="relative flex items-center gap-2">
                <input 
                  className="flex-1 bg-surface-container-high border-none rounded-xl h-14 px-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all" 
                  placeholder={tab === 'account' ? "请输入登录密码" : "六位验证码"} 
                  type={tab === 'account' ? "password" : "text"}
                />
                {tab === 'account' ? (
                  <button className="absolute right-4 text-outline">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                ) : (
                  <button className="h-14 px-4 bg-surface-container-highest text-primary font-bold rounded-xl text-sm whitespace-nowrap active:scale-95 transition-transform">
                    获取验证码
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <button 
              onClick={onLogin}
              className="w-full h-14 bg-primary text-on-primary font-bold rounded-full shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              登录
            </button>
            <div className="flex items-center justify-between px-2 text-sm">
              <a className="text-primary font-medium" href="#">忘记密码？</a>
              <div className="flex items-center">
                <span className="text-on-surface-variant mr-1">没有账号？</span>
                <a className="text-primary font-bold" href="#">立即注册</a>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-8 flex items-center">
            <div className="flex-1 h-[1px] bg-outline-variant"></div>
            <span className="px-4 text-outline text-xs uppercase tracking-widest font-bold">其他登录方式</span>
            <div className="flex-1 h-[1px] bg-outline-variant"></div>
          </div>

          <button className="flex items-center justify-center gap-3 w-full h-14 bg-surface-container-lowest border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-colors shadow-sm active:scale-[0.98]">
            <svg className="w-6 h-6 text-[#07C160]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.5 2C6.7 2 2 6.1 2 11.1c0 2.8 1.5 5.3 4 7l-.7 2.5c-.1.3 0 .6.2.8.1.1.3.2.5.2.1 0 .2 0 .3-.1l3.1-1.6c1 .2 2 .4 3.1.4 5.8 0 10.5-4.1 10.5-9.1S18.3 2 12.5 2zm3.3 8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm-6.6 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm6.3 3.4c-1.3 1.1-3.3 1.1-4.6 0-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 1 1 2.2 1 3.2 0 .2-.2.5-.2.7 0 .2.2.5.2.7 0z"></path>
            </svg>
            <span className="text-on-surface font-medium">微信快捷登录</span>
          </button>
        </div>
      </div>

      <div className="mt-auto p-6 text-center">
        <p className="text-[10px] text-outline leading-relaxed max-w-[280px] mx-auto">
          登录即代表您已阅读并同意《服务协议》及《隐私政策》
          <br/>
          所有数据传输均通过 TLS/SSL 加密。
        </p>
      </div>
    </div>
  );
};
