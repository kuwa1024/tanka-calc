import { createSlice } from '@reduxjs/toolkit';
import type { category, product } from './types';

export interface tankaState {
  category: category[];
  product: product[];
  selectCategory: string;
  selectSort: string;
}

const initialState: tankaState = {
  category: [],
  product: [],
  selectCategory: 'all',
  selectSort: 'unitPriceAsc',
};

const tankaSlice = createSlice({
  name: 'tanka',
  initialState,
  reducers: {
    addCategory(state, action: { payload: category }) {
      state.category = [...state.category, action.payload];
    },
    removeCategory(state, action: { payload: string }) {
      state.category = state.category.filter((c) => c.value !== action.payload);
    },
    setSelectCategory(state, action: { payload: string }) {
      state.selectCategory = action.payload;
    },
    addProduct(state, action: { payload: product }) {
      state.product = [...state.product, action.payload];
    },
    removeProduct(state, action: { payload: string }) {
      state.product = state.product.filter((p) => p.id !== action.payload);
    },
    setSelectSort(state, action: { payload: string }) {
      state.selectSort = action.payload;
    },
  },
});

export const {
  addCategory,
  removeCategory,
  addProduct,
  removeProduct,
  setSelectCategory,
  setSelectSort,
} = tankaSlice.actions;
export default tankaSlice.reducer;
