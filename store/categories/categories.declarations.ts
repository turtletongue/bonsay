import { Category } from '@app/declarations';

export interface CategoriesState {
  data?: Category[];
  loading: 'idle' | 'pending';
  error?: string;
}
