import { gql, useApolloClient, useQuery } from "@apollo/client";
import Statistic from "antd/es/statistic/Statistic";

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
  console.log(client);
  const totlaproduct = data?.products?.length;
  return (
    <div>
      <Statistic title="Total products" value={totlaproduct} />
    </div>
  );
}
