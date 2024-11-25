import { Sidebar } from '@shared/*';
import { Outlet } from 'react-router-dom';
import './AppRoot.css'
const userPermissions = ['dashboard:view', 'settings:view'];
const sidebarConfig = [
  { path: 'dashboard/markets', label: 'Market', icon: 'shipping', access: 'dashboard:view' },
];

export const AppRoot = () => {
  return (
    <div className="flex ">
      <Sidebar config={sidebarConfig} userPermissions={userPermissions} />
      <div className="flex flex flex-col  flex-1 p-6 container">
        <Outlet />
      </div>
    </div>
  );
};
