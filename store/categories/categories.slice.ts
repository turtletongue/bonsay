import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState from './categories.initial-state';

import { Category } from '../../declarations';
import { RootState } from '..';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const categories: Category[] = [
      {
        id: 1,
        name: 'Фикусы',
        upload: { path: '/images/ficuses.jpg' },
        description:
          'Фикус – это разновидность растений, произрастающих в тропиках по всему миру. Он невероятно разнообразен, некоторые виды используются в качестве домашних растений. Фикус может быть кустарником, лозой или просто небольшим декоративным растением. Многие подвиды производят воздушные корни, другие дают вкусные плоды, к примеру, инжир. Священный инжир имеет особое значение для последователей некоторых азиатских религий, включая буддизм.',
        createdAt: '2020-12-20',
        updatedAt: '2020-12-20'
      },
      {
        id: 2,
        name: 'Сосны',
        upload: { path: '/images/pines.jpg' },
        description:
          'Сосна - это вечнозеленое хвойное дерево, кустарник или стланик, относится к классу хвойные, порядку сосновые, семейству сосновые, роду сосны. Продолжительность жизни сосны колеблется от 100 до 600 лет. Сегодня встречаются единичные деревья, возраст которых приближается к 5 векам. Сосна – это светолюбивое растение. Время цветения наступает в конце весны, но процесс происходит без появления цветков. В итоге образуются сосновые шишки, которые отличаются многообразием форм, размеров и цветов.',
        createdAt: '2020-12-20',
        updatedAt: '2020-12-20'
      }
    ]; // server fetching

    return categories;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending as any]: (state) => {
      state.loading = 'pending';
      state.error = undefined;
    },
    [fetchCategories.fulfilled as any]: (
      state,
      action: PayloadAction<Category[]>
    ) => {
      state.loading = 'idle';
      state.data = action.payload;
    },
    [fetchCategories.rejected as any]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = 'idle';
      state.error = action.payload;
    }
  }
});

export const selectCategories = (state: RootState) => state.categories.data;
export const selectIsLoading = (state: RootState) =>
  state.categories.loading !== 'idle';

export default categoriesSlice.reducer;
