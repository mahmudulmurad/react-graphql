import { TCreateProductForm } from "./decorator";
import { Form, Input, InputNumber } from "antd";
import { useMutation } from "@apollo/client";
import { CreateProductMutation } from "service";
import { useDispatch } from "react-redux";
import { pushSingleProduct } from "redux/product.slice";
import styled from "styled-components";
import { UiButton } from "component/Button";
import { toast } from "react-toastify";
import { Toast } from "component/Toast";

export const CreateProductFrom: React.FC<{}> = () => {
  const [addProduct] = useMutation(CreateProductMutation);
  const dispatch = useDispatch();

  const onSubmit = async (data: TCreateProductForm) => {
    const formData = data;
    try {
      const { data } = await addProduct({
        variables: {
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock),
        },
      });
      const res = data?.insert_products_one;
      if (res) {
        toast.success("product created");
      }
      dispatch(
        pushSingleProduct({
          id: res.id,
          price: res.price,
          stock: res.stock,
          name: res.name,
          description: res.description,
        })
      );
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const onFinishFailed = () => {
    toast.error("Form submission failed");
  };

  return (
    <Container>
      <FormWrapper>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please enter the product name" },
              { min: 4, message: "Name must be at least 4 characters" },
            ]}
          >
            <StyledInput placeholder="Enter product name" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Enter product description" />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please enter the product price" },
              {
                type: "number",
                min: 0,
                message: "Price must be a positive number",
              },
            ]}
          >
            <StyledInputNumber placeholder="Enter product price" />
          </Form.Item>

          <Form.Item
            label="Stock"
            name="stock"
            rules={[
              {
                required: true,
                message: "Please enter the product stock quantity",
              },
              { type: "number", min: 10, message: "Stock must be at least 10" },
            ]}
          >
            <StyledInputNumber placeholder="Enter product stock" />
          </Form.Item>

          <ButtonWrapper>
            <UiButton title="Submit" htmlType="submit" type="primary" />
          </ButtonWrapper>
        </Form>
      </FormWrapper>
      <Toast />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

const commonStyle = `
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 16px;
`;

const StyledInput = styled(Input)`
  ${commonStyle}
`;

const StyledInputNumber = styled(InputNumber)`
  ${commonStyle}
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;
