import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IProduct {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface IProductSliceState {
  productList: IProduct[];
}

const initialState: IProductSliceState = {
  productList: [],
};

export const selectProducts = (state: RootState) => state.product;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProductSliceState>) => {
      const { productList } = action.payload;
      state.productList = productList;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
