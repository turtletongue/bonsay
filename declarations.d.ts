export type Id = string | number;

export interface NavLink {
  name: string;
  href: string;
  extra?: ReactNode;
  isSignOut?: boolean;
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
  internalPath: string;
}

export interface Product {
  id: Id;
  name: string;
  description: string;
  age?: number;
  birthdate?: Date | string;
  height: number;
  price: string | number;
  categoryId?: Id;

  path?: string;
  internalPath?: string;
  upload?: Upload;

  photos?: Upload[];

  similarProducts?: Product[];

  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface Category {
  id: Id;
  name: string;
  description: string;

  path?: string;
  internalPath?: string;
  upload?: Upload;

  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface User {
  id: Id;
  email: string;

  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface Purchase {
  id: Id;
  productId: Id;
  orderId: Id;
  product: Product;
}

export interface Order {
  id: Id;
  status: 'processing' | 'delivery' | 'completed' | 'cancelled';
  phone: string;
  addressId: Id;
  clientId: Id;
  purchases: Purchase[];
  createdAt: string | Date;
}

export interface SortType {
  id?: Id;
  name: string;
  order?: {
    [key: string]: 'ASC' | 'DESC';
  };
}

export interface CartItem {
  product: Product;
}
