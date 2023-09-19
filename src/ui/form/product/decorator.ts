import { z } from "zod";

export type TCreateProductForm = {
  name: string;
  description: string;
  price: string;
  stock: string;
};

export const createProductFormDefaultValue: TCreateProductForm = {
  name: "",
  description: "",
  price: "",
  stock: "",
};

export const createProductFormValidation = z.object({
  name: z.string().min(4, "product name is required").max(20),
  description: z.string().nullable(),
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
