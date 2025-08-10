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
  selectCategory: 'none',
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
      state.category = state.category.filter((cat) => cat.value !== action.payload);
    },
    setSelectCategory(state, action: { payload: string }) {
      state.selectCategory = action.payload;
    },
    addProduct(state, action: { payload: product }) {
      state.product = [...state.product, action.payload];
    },
    setSelectSort(state, action: { payload: string }) {
      state.selectSort = action.payload;
    },
  },
});

export const { addCategory, removeCategory, addProduct, setSelectCategory, setSelectSort } =
  tankaSlice.actions;
export default tankaSlice.reducer;
