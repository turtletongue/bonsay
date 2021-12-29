export type Id = string | number;

export interface NavLink {
  name: string;
  href: string;
  extra?: ReactNode;
}

export interface Navigation {
  leftNavigation: NavLink[];
  rightNavigation: NavLink[];
}

export interface PaginationData {
  $limit: number;
  $skip: number;
}

export interface Category {
  id: Id;
  name: string;
  description: string;

  upload?: {
    path: string;
  };

  createdAt: Date | string;
  updatedAt: Date | string;
}
