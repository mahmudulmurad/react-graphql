import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "redux/store";
import Statistic from "antd/es/statistic/Statistic";

export const ProductCalculation: React.FC<{}> = () => {
  const products = useSelector(
    (state: RootState) => state.product?.productList
  );

  const totalValueOfProducts = products?.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  return (
    <Wrapper>
      <Statistic title="Total products" value={products?.length} />
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
