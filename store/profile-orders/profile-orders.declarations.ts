import { Order } from '@app/declarations';

export interface ProfileOrdersState {
  total: number;
  orders: Order[];
  loading: 'idle' | 'pending';
  page: number;
  error?: string;
  success: boolean;
}

export interface FindOrdersRequest {
  page: number;
  accessToken: string;
}
