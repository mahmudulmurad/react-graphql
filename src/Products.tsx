import { gql, useApolloClient, useQuery } from "@apollo/client";
import Statistic from "antd/es/statistic/Statistic";
import { ProductTable } from "./ui/table";
import { useEffect } from "react";
import { setProducts } from "./redux/product.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";

const ProductQuery = gql`
  query Products {
    products {
      id
      name
      price
      stock
    }
  }
`;

export function Products(): JSX.Element {
  const client = useApolloClient();
  const { data } = useQuery(ProductQuery);
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.product?.productList
  );
  const totlaproduct = products?.length;

  useEffect(() => {
    dispatch(setProducts({ productList: data?.products }));
  }, [data]);

  const totalValueOfProducts = products?.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Statistic title="Total products" value={totlaproduct} />
        <Statistic
          title="Total value/price of products"
          value={totalValueOfProducts?.toFixed(2)}
        />
      </div>

      <ProductTable />
    </div>
  );
}
