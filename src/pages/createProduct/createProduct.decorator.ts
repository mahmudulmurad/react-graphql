import { z } from "zod";

export type TCreateProductForm = {
  id: string;
  name: string;
  price: string;
  stock: string;
};

export const createProductFormDefaultValue: TCreateProductForm = {
  id: "",
  name: "",
  price: "",
  stock: "",
};

export const createProductFormValidation = z.object({
  id: z.string(),
  name: z.string().min(4, "product name is required").max(20),
  price: z.string().min(1, "product price is required"),
  stock: z.string().refine(
    (value) => {
      const parsedNumber = parseFloat(value);
      return !isNaN(parsedNumber) && parsedNumber >= 10;
    },
    {
      message: "product availblity must be 10 or more",
    }
  ),
});
