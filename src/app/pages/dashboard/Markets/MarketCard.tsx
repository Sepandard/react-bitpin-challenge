import React from 'react';
import { Market } from '../api/markets';
import { Link } from 'react-router-dom';
import { formattedNumber } from '@utils';

export const MarketCard = ({ data }: { data: Market }) => {
 

  return (
    <Link to={`/dashboard/orders/${data.id}`}  key={data.id} className="border rounded cursor-pointer p-6 w-48 text-left">
      <img
        src={data.currency1.image}
        alt={data.currency1.title}
        className="w-full h-auto mb-2 p-5"
      />
      <h3 className="font-semibold">{data.title}</h3>
      <p>Price: {formattedNumber(data.price)}</p>
      <p>Change: {data.price_info.change}%</p>
    </Link>
  );
};
