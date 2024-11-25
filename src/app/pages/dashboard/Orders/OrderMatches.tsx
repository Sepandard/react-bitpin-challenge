import React from 'react';
import { formattedNumber } from '@utils';
import { Matches } from '../api/order';

export const OrderMatches = ({ matches }: any) => (
  <ul>
    {matches.length ? (
      matches.map((match: Matches, index: number) =>
        index <= 10 ? (
          <li key={index} className="grid grid-cols-2 border-b p-2">
            <span>{formattedNumber(match.match_amount)}</span>
            <span>{formattedNumber(match.price)}</span>
          </li>
        ) : (
          <></>
        ),
      )
    ) : (
      <span className="mt-5"><b>No data found! </b></span>
    )}
  </ul>
);
