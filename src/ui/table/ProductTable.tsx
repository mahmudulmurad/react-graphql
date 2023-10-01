// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import { Table } from "antd";
import { ProductQuery, dataFormatter } from "../../service";
import { useApolloClient } from "@apollo/client";
import { TProduct } from "ui/other";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

export const ProductTable = () => {
  // const products = useSelector((state: RootState) => state.product);

  const cachedProducts = useApolloClient().readQuery({
    query: ProductQuery,
  });

  const productsArray: TProduct[] = cachedProducts?.products || [];

  return <Table dataSource={dataFormatter(productsArray)} columns={columns} />;
};
