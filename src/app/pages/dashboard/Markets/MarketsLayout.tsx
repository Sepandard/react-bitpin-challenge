import React from 'react';
import { Breadcrumbs, Spinner } from '@shared';
import { Markets } from './Market';
import { ProjectName } from '../style';

import { MARKET_ENDPOINT } from '../api/market-endpoint';
import useClient from '@http';
import { Market } from '../api/markets';

export const MarketsLayout = () => {
  const [{ data, isLoading }] = useClient.get<{ results: Market[] }>(MARKET_ENDPOINT.base);
  return (
    <>
      <div>
        <Breadcrumbs items={['Dashboard', 'Markets']} />
        <ProjectName className="mt-3">Markets</ProjectName>
      </div>

      {!isLoading ? (
        data?.results?.length > 0 ? (
          <Markets data={data.results}></Markets>
        ) : (
          <span className="mt-5">No data found!</span>
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
