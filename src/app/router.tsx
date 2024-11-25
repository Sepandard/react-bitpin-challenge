import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoot } from '@pages/layout';
import { useMemo } from 'react';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: '',
      element: <AppRoot />,
      children: [
        {
          path: 'dashboard/markets',
          lazy: async () => {
            const { MarketsLayout } = await import('./pages/dashboard/Markets/MarketsLayout');
            return { Component: MarketsLayout };
          },
        },

        {
          path: 'dashboard/orders/:id',
          lazy: async () => {
            const { OrdersListLayout } = await import('./pages/dashboard/Orders/OrdersListLayout');
            return { Component: OrdersListLayout };
          },
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};
