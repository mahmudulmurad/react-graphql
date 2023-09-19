import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TCreateProductForm,
  createProductFormDefaultValue,
  createProductFormValidation,
} from "./createProduct.decorator";
import { Form } from "antd";
import { UiFormTextField } from "component/form";
import { UiButton } from "component/common";

function CreateProductFrom() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TCreateProductForm>({
    resolver: zodResolver(createProductFormValidation),
    defaultValues: createProductFormDefaultValue,
  });

  const onSubmit = (data: any) => {
    console.log(data);
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
        label="Id"
        name="id"
        rules={[{ required: true, message: "Please enter product Id" }]}
      >
        <UiFormTextField
          control={control}
          errors={errors}
          name="id"
          title="Id"
          placeholder="Enter product id"
          type="number"
        />
      </Form.Item>

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

export default CreateProductFrom;
