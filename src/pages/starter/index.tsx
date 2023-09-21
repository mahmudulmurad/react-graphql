import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import { ProductCalculation, ProductTable } from "ui";
import AppLayout from "layout";
import { Toast } from "component/Toast";
import { ProductQuery } from "service";
import { setProducts } from "redux/product.slice";

const Starter = () => {
  const { data, error, refetch } = useQuery(ProductQuery);
  const dispatch = useDispatch();

  const getAllProducts = useCallback(() => {
    if (data) {
      dispatch(setProducts({ productList: data?.products }));
      toast.success("All product found");
    } else if (error) {
      toast.error("Something went wrong");
    }
  }, [data, error, dispatch]);

  useEffect(() => {
    refetch();
    getAllProducts();
  }, [refetch, getAllProducts]);

  return (
    <AppLayout>
      <ProductCalculation />
      <Toast />
      <ProductTable />
    </AppLayout>
  );
};

export default Starter;
