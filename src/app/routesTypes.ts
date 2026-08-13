import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { RouteObject } from 'react-router-dom';

export interface RouteHandle {
  isInMenu?: boolean;
  title?: string;
  icon?: LucideIcon;

  breadcrumb?: boolean;

  crumb?: (params: {
    id?: string;
  }) => ReactNode;
}

export type AppRoute = RouteObject & {
  id?: string;
  handle?: RouteHandle;
  children?: AppRoute[];
};