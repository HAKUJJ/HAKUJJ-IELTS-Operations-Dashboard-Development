import React from 'react';
import SafeIcon from '../common/SafeIcon';
import { FiCalendar, FiUsers, FiSend, FiAlertCircle, FiSettings, FiChevronLeft, FiChevronRight, FiChevronDown } from 'react-icons/fi';

const Sidebar = ({ activePage, setActivePage, isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { id: 'sessions', label: 'Test Sessions\n(Locations)', icon: FiCalendar },
    { id: 'attendance', label: 'Attendance &\nVerification', icon: FiUsers },
    { id: 'dispatch', label: 'Score Dispatch', icon: FiSend },
    { id: 'malpractice', label: 'Malpractice', icon: FiAlertCircle },
    { id: 'settings', label: 'System Settings', icon: FiSettings },
  ];

  return (
    <div className={`bg-navy text-white transition-all duration-300 flex flex-col ${isCollapsed ? 'w-20' : 'w-64'} h-screen sticky top-0`}>
      <div className="p-6 flex items-center justify-between border-b border-navy-light/30">
        {!isCollapsed && <h1 className="text-3xl font-bold text-crimson tracking-wider">IELTS<sup className="text-sm">™</sup></h1>}
        {isCollapsed && <h1 className="text-xl font-bold text-crimson mx-auto">IELTS</h1>}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="text-slate-300 hover:text-white p-1 rounded hover:bg-navy-light"
        >
          {isCollapsed ? <SafeIcon icon={FiChevronRight} /> : <SafeIcon icon={FiChevronLeft} />}
        </button>
      </div>

      <nav className="flex-1 py-6 space-y-2 px-3">
        {menuItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center p-3 rounded-xl transition-colors text-left
                ${isActive ? 'bg-navy-light border-l-4 border-crimson text-white' : 'text-slate-300 hover:bg-navy-light hover:text-white border-l-4 border-transparent'}
              `}
            >
              <SafeIcon icon={item.icon} className={`text-xl ${isActive ? 'text-white' : 'text-slate-400'} ${isCollapsed ? 'mx-auto' : 'mr-4'}`} />
              {!isCollapsed && (
                <span className="text-sm font-medium whitespace-pre-line">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-navy-light/30">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} p-2 rounded-xl hover:bg-navy-light cursor-pointer`}>
           <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
             AO
           </div>
           {!isCollapsed && (
             <div className="ml-3 flex-1 overflow-hidden">
               <p className="text-sm font-semibold truncate">Admin Officer</p>
               <p className="text-xs text-slate-400 truncate">Test Center Admin</p>
             </div>
           )}
           {!isCollapsed && <SafeIcon icon={FiChevronDown} className="text-slate-400" />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;