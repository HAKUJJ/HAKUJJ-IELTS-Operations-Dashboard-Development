import React from 'react';
import SafeIcon from '../common/SafeIcon';
import { FiAlertCircle, FiSearch, FiFileText } from 'react-icons/fi';
import { mockMalpractice } from '../data/mockData';

const Malpractice = () => {
  return (
    <div className="p-8 h-[calc(100vh-80px)] flex space-x-6">
      
      <div className="w-1/2 bg-white rounded-2xl shadow-soft border border-slate-100 flex flex-col h-full">
        <div className="p-5 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-semibold text-slate-800">Incident Log</h3>
          <div className="relative w-64">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-3 text-slate-400" />
            <input type="text" className="bg-slate-50 border border-slate-200 text-sm rounded-lg w-full pl-9 p-2" placeholder="Search incidents..." />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 sticky top-0">
              <tr>
                <th className="px-5 py-3 font-medium">Case ID</th>
                <th className="px-5 py-3 font-medium">Candidate</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockMalpractice.map(m => (
                <tr key={m.id} className="hover:bg-slate-50 cursor-pointer">
                  <td className="px-5 py-4 font-medium text-slate-800">{m.id}</td>
                  <td className="px-5 py-4 text-slate-600">{m.candidate}<br/><span className="text-xs text-slate-400">{m.session}</span></td>
                  <td className="px-5 py-4 text-slate-600">{m.type}</td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${m.status === 'Open' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                      {m.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow-soft border border-slate-100 p-6 flex flex-col justify-center items-center text-center">
         <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
           <SafeIcon icon={FiFileText} className="text-4xl text-slate-300" />
         </div>
         <h3 className="text-lg font-semibold text-slate-800 mb-2">Select an incident to view details</h3>
         <p className="text-sm text-slate-500 max-w-sm">Review evidence, add notes, and manage the investigation process for malpractice cases.</p>
      </div>

    </div>
  );
};

export default Malpractice;