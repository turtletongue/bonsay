import { Category } from '../../declarations';

export interface CategoriesState {
  data?: Category[];
  loading: 'idle' | 'pending';
  error?: string;
}
