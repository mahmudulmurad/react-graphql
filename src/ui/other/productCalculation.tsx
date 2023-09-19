import { useQuery } from "@apollo/client";
import Statistic from "antd/es/statistic/Statistic";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "redux/product.slice";
import { RootState } from "redux/store";
import { ProductQuery } from "service";
import styled from "styled-components";
import { ProductTable } from "ui/table";

export function ProductCalculation(): JSX.Element {
  const { data } = useQuery(ProductQuery);
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.product?.productList
  );
  const totlaproduct = products?.length;

  useEffect(() => {
    dispatch(setProducts({ productList: data?.products }));
  }, [data, dispatch]);

  const totalValueOfProducts = products?.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  return (
    <>
      <Wrapper>
        <Statistic title="Total products" value={totlaproduct} />
        <Statistic
          title="Total value/price of products"
          value={totalValueOfProducts?.toFixed(2)}
        />
      </Wrapper>

      <ProductTable />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
