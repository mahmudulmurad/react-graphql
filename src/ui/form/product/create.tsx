import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TCreateProductForm,
  createProductFormDefaultValue,
  createProductFormValidation,
} from "./decorator";
import { Form } from "antd";
import { UiFormTextField } from "component/form";
import { UiButton } from "component/common";
import { useMutation } from "@apollo/client";
import { CreateProductMutation } from "service";
import { useDispatch } from "react-redux";
import { pushSingleProduct } from "redux/product.slice";

export function CreateProductFrom() {
  const [addProduct] = useMutation(CreateProductMutation);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TCreateProductForm>({
    resolver: zodResolver(createProductFormValidation),
    defaultValues: createProductFormDefaultValue,
  });

  const onSubmit = async (data: TCreateProductForm) => {
    const formDdata = data;
    try {
      const { data } = await addProduct({
        variables: {
          name: formDdata.name,
          description: formDdata.description,
          price: parseFloat(formDdata.price),
          stock: parseInt(formDdata.stock),
        },
      });
      const res = data?.insert_products_one;
      dispatch(
        pushSingleProduct({
          id: res.id,
          price: res.price,
          stock: res.stock,
          name: res.name,
          description: res.description,
        })
      );
      reset();
    } catch (err) {
      console.error("Error creating product:", err);
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={handleSubmit(onSubmit)}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<TCreateProductForm>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter product Name" }]}
      >
        <UiFormTextField
          control={control}
          errors={errors}
          name="name"
          title="Name"
          placeholder="Enter product name"
        />
      </Form.Item>

      <Form.Item<TCreateProductForm> label="Description" name="description">
        <UiFormTextField
          control={control}
          errors={errors}
          name="description"
          title="Description"
          placeholder="Enter product description"
        />
      </Form.Item>

      <Form.Item<TCreateProductForm>
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please enter product Price" }]}
      >
        <UiFormTextField
          control={control}
          errors={errors}
          name="price"
          title="Price"
          placeholder="Enter product price"
          type="number"
        />
      </Form.Item>
      <Form.Item<TCreateProductForm>
        label="Stock"
        name="stock"
        rules={[{ required: true, message: "Please enter product Stock" }]}
      >
        <UiFormTextField
          control={control}
          errors={errors}
          name="stock"
          title="Stock"
          placeholder="Enter product stock"
          type="number"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <UiButton title="Submit" htmlType="submit" loading={isSubmitting} />
      </Form.Item>
    </Form>
  );
}
