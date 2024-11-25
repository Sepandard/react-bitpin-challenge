import React, { useState } from 'react';
import { Code } from '../api/markets';

type MarketTabsProp = {onChangePage: (page: number)=> void,onChangeTab: (tab: Code)=>void } 

export const MarketTabs = ({onChangePage, onChangeTab}: MarketTabsProp) => {
  const [activeTab, setActiveTab] = useState('IRT');

  const handleChangePage = (page: number) => {
    return onChangePage(page);
  };

  const handleChangeTab = (tab: Code) => {
    setActiveTab(tab);
    return onChangeTab(tab);
  };

  return (
    <div className=" my-4">
      <button
        className={`px-4 py-2 mx-2 border rounded ${
          activeTab === 'IRT' ? 'bg-blue-800 text-white' : 'bg-gray-200'
        }`}
        onClick={() => {
            handleChangeTab('IRT');
            handleChangePage(1);
        }}
      >
        Toman Markets
      </button>
      <button
        className={`px-4 py-2 mx-2 border rounded ${
          activeTab === 'USDT' ? 'bg-blue-800 text-white' : 'bg-gray-200'
        }`}
        onClick={() => {
            handleChangeTab('USDT');
            handleChangePage(1);
        }}
      >
        Tether Markets
      </button>
    </div>
  );
};
