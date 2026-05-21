import React from 'react';
import SafeIcon from '../common/SafeIcon';
import { FiBell, FiUser } from 'react-icons/fi';

const Header = ({ title, subtitle }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200 px-8 py-5 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        <p className="text-slate-500 text-sm mt-1">{subtitle}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
          <SafeIcon icon={FiBell} className="text-xl" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-crimson rounded-full border-2 border-white"></span>
        </button>
        <button className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
          <SafeIcon icon={FiUser} className="text-xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;