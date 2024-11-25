import { formattedNumber } from '@utils';
import React from 'react';
import { Orders } from '../api/order';

export const OrderActives = ({ orders, totals }: { orders: Orders[]; totals: any }) => {
  return (
    <div>
      <ul>
        {orders.length > 0 ? (
          orders.map((order, index: number) =>
            index <= 10 ? (
              <li key={index} className="grid grid-cols-3 border-b p-2">
                <span>{formattedNumber(order.remain)}</span>
                <span>{formattedNumber(order.price)}</span>
                <span>{formattedNumber(order.value)}</span>
              </li>
            ) : (
              <></>
            ),
          )
        ) : (
          <span className="mt-5">
            <b>No data found! </b>
          </span>
        )}
      </ul>
      <div className="p-4">
        <p>Total Remain: {formattedNumber(totals.totalRemain)}</p>
        <p>Total Value: {formattedNumber(totals.totalValue)}</p>
      </div>
    </div>
  );
};
