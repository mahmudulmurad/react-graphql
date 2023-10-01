import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IProduct {
  id: number;
  name: string;
  description: string;
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
    pushSingleProduct: (state, action: PayloadAction<IProduct>) => {
      const { id, name, price, stock, description } = action.payload;
      const updatedProductList = [
        ...state.productList,
        {
          id,
          name,
          price,
          stock,
          description,
        },
      ];
      return {
        ...state,
        productList: updatedProductList,
      };
    },
  },
});

export const { setProducts, pushSingleProduct } = productSlice.actions;

export default productSlice.reducer;
