import React from 'react';
import { useParams } from 'react-router-dom';
import { OrdersList } from './OrdersList';
import { Breadcrumbs, Spinner } from '@shared';
import { ProjectName } from '../style';
import { ACTIVE_ENDPOINT, MATCH_ENDPOINT } from '../api/order-endpoint';
import useClient from '@http';
import { Matches, OrdersResponse } from '../api/order';

export const OrdersListLayout = () => {
  const { id } = useParams();

  const [{ data: matchesData, isLoading: isLoadingMatches }] = useClient.get<Matches>(
    MATCH_ENDPOINT.byId(id as string),
  );
  const [{ data: sellOrdersData, isLoading: isLoadingSellOrders }] = useClient.get<OrdersResponse>(
    ACTIVE_ENDPOINT.byId(id as string),
    { params: { type: 'sell' } },
  );
  const [{ data: buyOrdersData, isLoading: isLoadingBuyOrders }] = useClient.get<OrdersResponse>(
    ACTIVE_ENDPOINT.byId(id as string),
    { params: { type: 'buy' } },
  );

  return (
    <>
      <div>
        <Breadcrumbs items={['Dashboard', `${id}`, 'Orders']} />
        <ProjectName className="mt-3">Markets</ProjectName>
      </div>
      {!isLoadingMatches && !isLoadingSellOrders && !isLoadingBuyOrders ? (
        matchesData && buyOrdersData && sellOrdersData ? (
          <OrdersList
            buyOrders={buyOrdersData?.orders}
            sellOrders={sellOrdersData?.orders}
            matchesDate={matchesData}
          />
        ) : (
          <span className="mt-5">
            <b>No data found! </b>
          </span>
        )
      ) : (
        <div className="flex gap-2 mt-5">
          <span>Loading...</span>
          <Spinner />
        </div>
      )}
    </>
  );
};
