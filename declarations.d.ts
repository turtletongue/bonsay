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

export interface Upload {
  id?: Id;
  path: string;
}

export interface Product {
  id: Id;
  name: string;
  description: string;
  age: number;
  height: number;
  price: number;

  upload?: Upload;

  photos?: Upload[];

  similarProducts?: Product[];

  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Category {
  id: Id;
  name: string;
  description: string;

  upload?: Upload;

  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface User {
  id: Id;
  email: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface SortType {
  id?: Id;
  name: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}
