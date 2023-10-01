// import { useSelector } from "react-redux";
// import { RootState } from "redux/store";
import styled from "styled-components";
import Statistic from "antd/es/statistic/Statistic";
import { useApolloClient } from "@apollo/client";
import { ProductQuery } from "service";

export type TProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
};

export const ProductCalculation: React.FC<{}> = () => {
  // const products = useSelector(
  //   (state: RootState) => state.product?.productList
  // );

  const cachedProducts = useApolloClient().readQuery({
    query: ProductQuery,
  });

  const productsArray: TProduct[] = cachedProducts?.products || [];

  const totalValueOfProducts = productsArray?.reduce(
    (acc: number, curr: TProduct) =>
      curr.stock ? acc + curr.price * curr.stock : acc + curr.price,
    0
  );

  return (
    <Wrapper>
      <Statistic title="Total products" value={productsArray?.length} />
      <Statistic
        title="Total value/price of products"
        value={totalValueOfProducts?.toFixed(2)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
