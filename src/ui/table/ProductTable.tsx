import { Table } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { dataFormatter } from "../../service";

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
];

export const ProductTable = () => {
  const products = useSelector((state: RootState) => state.product);
  return (
    <Table
      dataSource={dataFormatter(products?.productList)}
      columns={columns}
    />
  );
};
