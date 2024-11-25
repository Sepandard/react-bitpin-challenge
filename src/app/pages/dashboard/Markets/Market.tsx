import React, { useState } from 'react';
import { Code, Market } from '../api/markets';
import { MarketCard } from './MarketCard';
import { MarketTabs } from './MarketTabs';

export const Markets = ({ data }: { data: Market[] }) => {
  const [activeTab, setActiveTab] = useState('IRT');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredMarkets = data.filter((market) => market?.currency2?.code === activeTab);

  const paginatedMarkets = filteredMarkets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleActiveTab = (tab: Code) => {
    setActiveTab(tab);
  };

  return (
    <>
      <MarketTabs
        onChangePage={(page) => handlePageChange(page)}
        onChangeTab={(tab) => handleActiveTab(tab)}
      />
      <div className="flex flex-col justify-between h-full">
        <div className="cursor-pointer flex flex-wrap justify-center gap-4">
          {paginatedMarkets.map((market) => (
            <MarketCard data={market} key={market.id} />
          ))}
        </div>
        <div className="d-flex flex-wrap mt-5 flex justify-center gap-2">
          {Array.from({ length: Math.ceil(filteredMarkets.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded ${
                currentPage === index + 1 ? 'bg-blue-800 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
