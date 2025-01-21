// Tabs.js
import React from 'react';

export default function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex gap-4 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`font-semibold text-gray-500 ${
            activeTab === tab.value ? `${tab.activeClass}  underline` : ''
          }`}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
