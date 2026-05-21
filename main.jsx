import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import { FiSettings, FiMapPin, FiMail, FiSmartphone, FiBell, FiPlus, FiCalendar, FiInbox } from 'react-icons/fi';
import { mockVenues } from '../data/mockData';

const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [services, setServices] = useState({
    additionalTrf: true,
    eor: true,
    priority: false,
    physicalTrf: true
  });

  const toggleService = (key) => {
    setServices(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tabs = [
    { id: 'services', label: 'Services &\nRequirements', icon: FiSettings },
    { id: 'venues', label: 'Venue Management', icon: FiMapPin },
    { id: 'notifications', label: 'Notification\nTemplates', icon: FiMail },
  ];

  return (
    <div className="p-8 h-[calc(100vh-80px)] flex space-x-8">
      
      {/* Left Tabs */}
      <div className="w-64 shrink-0">
        <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-3 space-y-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center p-4 rounded-xl transition-colors text-left font-medium text-sm
                ${activeTab === tab.id ? 'bg-navy/5 text-navy border-l-4 border-crimson' : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'}
              `}
            >
              <SafeIcon icon={tab.icon} className={`text-xl mr-3 ${activeTab === tab.id ? 'text-crimson' : 'text-slate-400'}`} />
              <span className="whitespace-pre-line">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="flex-1 overflow-y-auto pr-2">
        {activeTab === 'services' && (
          <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-2">Services & Requirements</h2>
            <p className="text-sm text-slate-500 mb-6">Enable or disable additional services available to candidates in the app.</p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-12 gap-4 px-4 pb-2 border-b border-slate-100 text-sm font-medium text-slate-500">
                <div className="col-span-4">Service</div>
                <div className="col-span-6">Description</div>
                <div className="col-span-2 text-right">Enabled</div>
              </div>

              {[
                { key: 'additionalTrf', name: 'Additional TRF', desc: 'Request an additional Test Report Form (TRF).' },
                { key: 'eor', name: 'EOR (Enquiry on Results)', desc: 'Request a re-mark of your test.' },
                { key: 'priority', name: 'Priority Results', desc: 'Get your results faster (where available).' },
                { key: 'physicalTrf', name: 'Physical TRF Delivery', desc: 'Receive your TRF by post.' },
              ].map(item => (
                <div key={item.key} className="grid grid-cols-12 gap-4 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="col-span-4 flex items-center font-medium text-slate-800">
                    <div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center mr-3 text-crimson">
                      <SafeIcon icon={FiSettings} />
                    </div>
                    {item.name}
                  </div>
                  <div className="col-span-6 text-sm text-slate-500">{item.desc}</div>
                  <div className="col-span-2 flex justify-end">
                    <button 
                      onClick={() => toggleService(item.key)}
                      className={`w-12 h-6 rounded-full transition-colors relative ${services[item.key] ? 'bg-crimson' : 'bg-slate-300'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${services[item.key] ? 'translate-x-7' : 'translate-x-1'}`}></div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'venues' && (
          <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-1">Venue Management</h2>
                <p className="text-sm text-slate-500">Manage test venues and rooms.</p>
              </div>
              <button className="bg-navy text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center">
                <SafeIcon icon={FiPlus} className="mr-2" /> Add Venue
              </button>
            </div>
            
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Venue Name</th>
                  <th className="px-4 py-3 font-medium">Location</th>
                  <th className="px-4 py-3 font-medium text-center">Rooms</th>
                  <th className="px-4 py-3 font-medium text-center">Capacity</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockVenues.map(v => (
                  <tr key={v.name} className="hover:bg-slate-50">
                    <td className="px-4 py-4 font-medium text-slate-800">{v.name}</td>
                    <td className="px-4 py-4 text-slate-600">{v.location}</td>
                    <td className="px-4 py-4 text-center text-slate-600">{v.rooms}</td>
                    <td className="px-4 py-4 text-center text-slate-600">{v.capacity}</td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${v.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                        {v.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-2">Notification Templates</h2>
            <p className="text-sm text-slate-500 mb-6">Edit email and SMS templates sent to candidates.</p>
            
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                 <label className="text-sm font-medium text-slate-700 w-24">Template</label>
                 <select className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm focus:ring-navy focus:border-navy">
                   <option>Score Release Email</option>
                   <option>Test Reminder SMS</option>
                   <option>Registration Confirmation</option>
                 </select>
              </div>
              <div className="flex items-center space-x-4">
                 <label className="text-sm font-medium text-slate-700 w-24">Subject</label>
                 <input type="text" className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm focus:ring-navy focus:border-navy" defaultValue="Your IELTS Test Results are Ready" />
              </div>
              <div>
                 <label className="text-sm font-medium text-slate-700 block mb-2">Email Body</label>
                 <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 border-b border-slate-200 p-2 flex space-x-2">
                       <button className="p-1.5 hover:bg-slate-200 rounded text-slate-600 font-bold">B</button>
                       <button className="p-1.5 hover:bg-slate-200 rounded text-slate-600 italic">I</button>
                       <button className="p-1.5 hover:bg-slate-200 rounded text-slate-600 underline">U</button>
                    </div>
                    <textarea 
                      className="w-full p-4 text-sm focus:outline-none min-h-[200px]"
                      defaultValue={`Dear {{candidate_name}},\n\nYour IELTS test results for the test on {{test_date}} are now available.\n\nYou can view your results by logging in to your IELTS account.`}
                    ></textarea>
                 </div>
              </div>
              <button className="bg-navy text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-navy-light">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Mobile Preview */}
      <div className="w-[350px] shrink-0">
        <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
          <SafeIcon icon={FiSmartphone} className="mr-2 text-lg text-slate-400" /> Mobile App Preview
        </h3>
        
        {/* iPhone Mockup */}
        <div className="border-[12px] border-slate-900 rounded-[3rem] w-full aspect-[9/19] bg-slate-50 shadow-2xl overflow-hidden relative">
           {/* Notch */}
           <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-xl w-1/2 mx-auto z-20"></div>
           
           {/* App Content */}
           <div className="h-full w-full overflow-y-auto pb-20 no-scrollbar">
             {/* App Header */}
             <div className="px-6 pt-12 pb-4 flex justify-between items-center bg-white sticky top-0 z-10 shadow-sm">
                <h1 className="text-2xl font-bold text-crimson">IELTS</h1>
                <SafeIcon icon={FiBell} className="text-slate-600 text-xl" />
             </div>

             <div className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Hi, Aarav Sharma</h2>
                  <p className="text-sm text-slate-500">Good morning! Here's your update.</p>
                </div>

                {/* Upcoming Test Card */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-navy"></div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Your Next Test</h4>
                  <div className="flex items-start mb-3">
                    <div className="bg-red-50 text-crimson p-2 rounded-lg mr-3 mt-1">
                      <SafeIcon icon={FiCalendar} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">22 June 2024 (Saturday)</p>
                      <p className="text-xs text-slate-500">09:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-50 text-navy p-2 rounded-lg mr-3 mt-1">
                      <SafeIcon icon={FiMapPin} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">Birmingham IELTS Test Center</p>
                      <p className="text-xs text-slate-500">Room 301</p>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-3">Your Services</h4>
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-50">
                    {services.additionalTrf && (
                      <div className="p-3.5 flex justify-between items-center">
                        <div className="flex items-center text-sm font-medium text-slate-700">
                          <SafeIcon icon={FiMail} className="mr-3 text-slate-400" /> Additional TRF
                        </div>
                        <span className="text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded font-bold">Enabled</span>
                      </div>
                    )}
                    {services.eor && (
                      <div className="p-3.5 flex justify-between items-center">
                        <div className="flex items-center text-sm font-medium text-slate-700">
                          <SafeIcon icon={FiSettings} className="mr-3 text-slate-400" /> EOR (Enquiry)
                        </div>
                        <span className="text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded font-bold">Enabled</span>
                      </div>
                    )}
                    {services.physicalTrf && (
                      <div className="p-3.5 flex justify-between items-center">
                        <div className="flex items-center text-sm font-medium text-slate-700">
                          <SafeIcon icon={FiInbox} className="mr-3 text-slate-400" /> Physical Delivery
                        </div>
                        <span className="text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded font-bold">Enabled</span>
                      </div>
                    )}
                    {!services.additionalTrf && !services.eor && !services.physicalTrf && (
                      <div className="p-4 text-center text-xs text-slate-400">No active services.</div>
                    )}
                  </div>
                </div>

                {/* Results Preview */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-slate-800">Recent Results</h4>
                    <span className="text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded font-bold tracking-wider">RELEASED</span>
                  </div>
                  <div className="flex justify-between items-end mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-700">7.5</div>
                      <div className="text-[10px] text-slate-500">Listening</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-700">8.0</div>
                      <div className="text-[10px] text-slate-500">Reading</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-700">7.0</div>
                      <div className="text-[10px] text-slate-500">Writing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-700">7.5</div>
                      <div className="text-[10px] text-slate-500">Speaking</div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Overall Band</span>
                    <span className="text-2xl font-black text-crimson">7.5</span>
                  </div>
                </div>

             </div>
           </div>

           {/* App Bottom Nav */}
           <div className="absolute bottom-0 inset-x-0 bg-white border-t border-slate-100 px-6 py-4 flex justify-between pb-8">
             <div className="flex flex-col items-center text-crimson">
               <SafeIcon icon={FiMapPin} className="text-xl mb-1" />
               <span className="text-[10px] font-bold">Home</span>
             </div>
             <div className="flex flex-col items-center text-slate-400">
               <SafeIcon icon={FiMail} className="text-xl mb-1" />
               <span className="text-[10px] font-medium">Results</span>
             </div>
             <div className="flex flex-col items-center text-slate-400">
               <SafeIcon icon={FiCalendar} className="text-xl mb-1" />
               <span className="text-[10px] font-medium">Book</span>
             </div>
             <div className="flex flex-col items-center text-slate-400">
               <SafeIcon icon={FiSettings} className="text-xl mb-1" />
               <span className="text-[10px] font-medium">More</span>
             </div>
           </div>
        </div>
        <p className="text-xs text-center text-slate-400 mt-4">Preview updates automatically as you change settings.</p>
      </div>

    </div>
  );
};

export default SystemSettings;