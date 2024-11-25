import React from 'react';
import { Icon } from '../Icon/Icon';
import { Link } from 'react-router-dom';

export interface SidebarItem {
  path: string;
  label: string;
  icon?: string;
  access: string;
}
export interface SidebarProps {
  config: SidebarItem[];
  userPermissions: string[];
}

export const Sidebar = ({ config, userPermissions }: SidebarProps) => {
  return (
    <div className="h-screen w-64 bg-blue-800 text-white">
      <div className="flex flex-col justify-between h-full">
        <ul className="mt-6 space-y-2">
          {config.map((item, index) => {
            if (!userPermissions.includes(item.access)) return null;

            return (
              <li key={index} className="px-6 py-3 hover:bg-gray-100 hover:bg-opacity-25 rounded">
                <Link to={item.path} replace className="flex items-center space-x-4">
                  {item.icon && <Icon type={item.icon} />}
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
