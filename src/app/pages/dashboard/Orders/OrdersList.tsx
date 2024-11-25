import React, { useState } from 'react';
import { add, multiply, divide, formattedNumber } from '@utils';
import { OrderMatches } from './OrderMatches';
import { Matches, Orders } from '../api/order';
import { OrderActives } from './OrderActives';

export const OrdersList = ({
  matchesDate,
  sellOrders,
  buyOrders,
}: {
  matchesDate: Matches[];
  sellOrders: Orders[];
  buyOrders: Orders[];
}) => {
  const [tab, setTab] = useState('buy');
  const [percentage, setPercentage] = useState('0');
  const [output, setOutput] = useState({ volume: '', price: '', total: '' });

  const calculateTotals = (orders: Orders[]) => {
    let totalRemain = '0';
    let totalValue = '0';
    orders.forEach((order: any) => {
      totalRemain = add(totalRemain, order.remain);
      totalValue = add(totalValue, order.value);
    });
    return { totalRemain, totalValue };
  };

  const handleInputChange = (value: string) => {
    setPercentage(value);
    if (buyOrders.length > 0) {
      const { totalRemain } = calculateTotals(buyOrders);
      const volume = multiply(totalRemain, divide(value, '100'));
      const total = multiply(volume, buyOrders[0].price as any);
      setOutput({ volume, price: buyOrders[0].price, total });
    }
  };

  const renderTabContent = () => {
    const orders = tab === 'buy' ? buyOrders : sellOrders;
    const totals = calculateTotals(orders);

    return (
      <OrderActives orders={orders} totals={totals}/>
    );
  };

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        {['buy', 'sell', 'matches'].map((item) => (
          <button
            key={item}
            className={`px-4 py-2 mx-1 text-sm font-medium rounded-md ${
              tab === item
                ? 'bg-blue-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setTab(item)}
          >
            {item === 'buy' ? 'Buy Orders' : item === 'sell' ? 'Sell Orders' : 'Matches'}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tab === 'matches' ? <OrderMatches matches={matchesDate} /> : renderTabContent()}
      </div>
      <div className="input mt-4">
        <input
          type="number"
          value={percentage}
          onChange={(e) => handleInputChange(e.target.value)}
          className="border px-4 py-2"
          placeholder="Enter percentage"
          max={100}
          min={0}
        />
        <div className="mt-2">
          <p>Volume: {formattedNumber(output?.volume)}</p>
          <p>Price: {formattedNumber(output.price)}</p>
          <p>Total: {formattedNumber(output.total)}</p>
        </div>
      </div>
    </div>
  );
};
